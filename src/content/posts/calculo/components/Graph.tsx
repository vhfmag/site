import * as mafs from "mafs";
import { useCallback, useEffect, useMemo, useState } from "react";
import z from "zod";
import MathInput from "react-math-keyboard";
import { parseTex } from "tex-math-parser";
import { evaluate } from "mathjs";

import "mafs/core.css";
import "mafs/font.css";
import s from "./graph.module.css";
import { useRaf } from "../../../../utils/useRaf";

const { Mafs, Coordinates, Plot, labelPi } = mafs;

const initialFn = (x: number) => Math.sin(x);

export const Graph = () => {
	const [fn, setFn] = useState(() => initialFn);
	const [yFn, setYFn] = useState(() => initialFn);

	useEffect(() => {
		try {
			const newFn = z.function(z.tuple([z.number()]), z.number().or(z.nan())).parse(fn);
			newFn(0);
			setYFn(() => newFn);
		} catch (error) {
			console.error(error);
			console.log({ fn });
		}
	}, [fn]);

	const PERIOD_MS = 2_000;
	const [amplitude, setAmplitude] = useState(1);
	const start = useMemo(() => Date.now(), []);
	useRaf(() => {
		const elapsed = Date.now() - start;
		const amplitude = Math.sin((elapsed / PERIOD_MS) * 2 * Math.PI);
		setAmplitude(amplitude);
	});

	const phase = mafs.useMovablePoint([0, 2], {
		constrain: "vertical",
	});

	const maxAmplitude = phase.y;

	return (
		<div>
			<form onSubmit={ev => ev.preventDefault()} className={s.label}>
				<label className={s.label}>
					Função
					<MathInput
						initialLatex="\sin\left(x\right)"
						setValue={latexStr => {
							try {
								const mathJSTree = parseTex(latexStr);
								const fn = (x: number) =>
									evaluate([`x=${x}`, mathJSTree.toString()])[1];
								setFn(() => fn);
								Object.assign(window, { mathJSTree, fn });
							} catch (error) {
								console.error(error);
							}
						}}
					/>
				</label>
				<output>
					<Mafs viewBox={{ x: [-10, 10], y: [-2, 2] }} preserveAspectRatio={false}>
						<Coordinates.Cartesian
							subdivisions={4}
							xAxis={{ lines: Math.PI, labels: labelPi }}
						/>
						<Plot.OfX y={yFn} />
						<Plot.OfX
							color="red"
							y={useCallback(
								(x: number) => maxAmplitude * amplitude * Math.sin(x),
								[maxAmplitude, amplitude],
							)}
						/>
						<Plot.OfX
							color="blue"
							y={useCallback(
								(x: number) => maxAmplitude * amplitude * Math.cos(x),
								[maxAmplitude, amplitude],
							)}
						/>
					</Mafs>
				</output>
			</form>
		</div>
	);
};
