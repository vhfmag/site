import * as mafs from "mafs";
import { useEffect, useState } from "react";
import z from "zod";

import "mafs/core.css";
import "mafs/font.css";
import s from "./graph.module.css";

const { Mafs, Coordinates, Plot, labelPi } = mafs;

const initialFn = (x: number) => Math.sin(x);

export const Graph = () => {
	const [fn, setFn] = useState(initialFn.toString());
	const [yFn, setYFn] = useState(() => initialFn);

	useEffect(() => {
		try {
			const newFn = z.function(z.tuple([z.number()]), z.number().or(z.nan())).parse(eval(fn));
			newFn(0);
			setYFn(() => newFn);
		} catch {}
	}, [fn]);

	return (
		<div>
			<form onSubmit={ev => ev.preventDefault()} className={s.label}>
				<label className={s.label}>
					Função
					<input value={fn} onChange={ev => setFn(ev.currentTarget.value)} />
				</label>
				<output>
					<Mafs viewBox={{ x: [-10, 10], y: [-2, 2] }} preserveAspectRatio={false}>
						<Coordinates.Cartesian
							subdivisions={4}
							xAxis={{ lines: Math.PI, labels: labelPi }}
						/>
						<Plot.OfX y={yFn} />
					</Mafs>
				</output>
			</form>
		</div>
	);
};
