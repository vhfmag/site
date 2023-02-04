declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"apresentacoes": {
"o-valor-pratico-do-html.md": {
  id: "o-valor-pratico-do-html.md",
  slug: "o-valor-pratico-do-html",
  body: string,
  collection: "apresentacoes",
  data: InferEntrySchema<"apresentacoes">
},
"pensando-em-css.md": {
  id: "pensando-em-css.md",
  slug: "pensando-em-css",
  body: string,
  collection: "apresentacoes",
  data: InferEntrySchema<"apresentacoes">
},
},
"bookmarks": {
"2019-07-22-what-the-boston-school-bus.md": {
  id: "2019-07-22-what-the-boston-school-bus.md",
  slug: "2019-07-22-what-the-boston-school-bus",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-07-24-diversidade-na-cultura-surda.md": {
  id: "2019-07-24-diversidade-na-cultura-surda.md",
  slug: "2019-07-24-diversidade-na-cultura-surda",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-07-24-hope-in-the-anthropocene.md": {
  id: "2019-07-24-hope-in-the-anthropocene.md",
  slug: "2019-07-24-hope-in-the-anthropocene",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-07-24-words-are-weapons.md": {
  id: "2019-07-24-words-are-weapons.md",
  slug: "2019-07-24-words-are-weapons",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-07-29-fb-dont-break-force-api.md": {
  id: "2019-07-29-fb-dont-break-force-api.md",
  slug: "2019-07-29-fb-dont-break-force-api",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-07-30-o-canudo-nao-e-seu-inimigo.md": {
  id: "2019-07-30-o-canudo-nao-e-seu-inimigo.md",
  slug: "2019-07-30-o-canudo-nao-e-seu-inimigo",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-05-algebraic-effects-for-the-rest-of.md": {
  id: "2019-08-05-algebraic-effects-for-the-rest-of.md",
  slug: "2019-08-05-algebraic-effects-for-the-rest-of",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-05-psychology-meet-politics-opendemocracy.md": {
  id: "2019-08-05-psychology-meet-politics-opendemocracy.md",
  slug: "2019-08-05-psychology-meet-politics-opendemocracy",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-05-revealed-this-is-palantirs-top-secret.md": {
  id: "2019-08-05-revealed-this-is-palantirs-top-secret.md",
  slug: "2019-08-05-revealed-this-is-palantirs-top-secret",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-12-libreflix.md": {
  id: "2019-08-12-libreflix.md",
  slug: "2019-08-12-libreflix",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-12-the-philosophy-of-fascism.md": {
  id: "2019-08-12-the-philosophy-of-fascism.md",
  slug: "2019-08-12-the-philosophy-of-fascism",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-a-belief-in-meritocracy-is.md": {
  id: "2019-08-13-a-belief-in-meritocracy-is.md",
  slug: "2019-08-13-a-belief-in-meritocracy-is",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-beyond-broken-windows-what-really.md": {
  id: "2019-08-13-beyond-broken-windows-what-really.md",
  slug: "2019-08-13-beyond-broken-windows-what-really",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-dont-qwop-your-way-through.md": {
  id: "2019-08-13-dont-qwop-your-way-through.md",
  slug: "2019-08-13-dont-qwop-your-way-through",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-frank-chimero-the-good.md": {
  id: "2019-08-13-frank-chimero-the-good.md",
  slug: "2019-08-13-frank-chimero-the-good",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-mae-e-quem-clica-estamos.md": {
  id: "2019-08-13-mae-e-quem-clica-estamos.md",
  slug: "2019-08-13-mae-e-quem-clica-estamos",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-netwars-collision-course.md": {
  id: "2019-08-13-netwars-collision-course.md",
  slug: "2019-08-13-netwars-collision-course",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-no-alternative-real-life.md": {
  id: "2019-08-13-no-alternative-real-life.md",
  slug: "2019-08-13-no-alternative-real-life",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-openness-and-longevity.md": {
  id: "2019-08-13-openness-and-longevity.md",
  slug: "2019-08-13-openness-and-longevity",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-opinion-or-five-lies-our.md": {
  id: "2019-08-13-opinion-or-five-lies-our.md",
  slug: "2019-08-13-opinion-or-five-lies-our",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-optimizing-for-outrage-a.md": {
  id: "2019-08-13-optimizing-for-outrage-a.md",
  slug: "2019-08-13-optimizing-for-outrage-a",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-privacy-is-just-the-beginning.md": {
  id: "2019-08-13-privacy-is-just-the-beginning.md",
  slug: "2019-08-13-privacy-is-just-the-beginning",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-punching-natsees-invidious.md": {
  id: "2019-08-13-punching-natsees-invidious.md",
  slug: "2019-08-13-punching-natsees-invidious",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-racismo-e-fascismo-por.md": {
  id: "2019-08-13-racismo-e-fascismo-por.md",
  slug: "2019-08-13-racismo-e-fascismo-por",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-rewild-the-world-george.md": {
  id: "2019-08-13-rewild-the-world-george.md",
  slug: "2019-08-13-rewild-the-world-george",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-social-media-algorithms-are-limiting.md": {
  id: "2019-08-13-social-media-algorithms-are-limiting.md",
  slug: "2019-08-13-social-media-algorithms-are-limiting",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-supposedly-fair-algorithms-can-perpetuate.md": {
  id: "2019-08-13-supposedly-fair-algorithms-can-perpetuate.md",
  slug: "2019-08-13-supposedly-fair-algorithms-can-perpetuate",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-the-cigarette-of-this-century.md": {
  id: "2019-08-13-the-cigarette-of-this-century.md",
  slug: "2019-08-13-the-cigarette-of-this-century",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-the-left-or-contrapoints-.md": {
  id: "2019-08-13-the-left-or-contrapoints-.md",
  slug: "2019-08-13-the-left-or-contrapoints-",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-the-price-of-monetizing-schemes.md": {
  id: "2019-08-13-the-price-of-monetizing-schemes.md",
  slug: "2019-08-13-the-price-of-monetizing-schemes",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-the-religion-of-workism-is.md": {
  id: "2019-08-13-the-religion-of-workism-is.md",
  slug: "2019-08-13-the-religion-of-workism-is",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-this-is-water-alumni.md": {
  id: "2019-08-13-this-is-water-alumni.md",
  slug: "2019-08-13-this-is-water-alumni",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-u-mad.md": {
  id: "2019-08-13-u-mad.md",
  slug: "2019-08-13-u-mad",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-voce-esta-vendo-isso-porque.md": {
  id: "2019-08-13-voce-esta-vendo-isso-porque.md",
  slug: "2019-08-13-voce-esta-vendo-isso-porque",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-we-are-tenants-on-our.md": {
  id: "2019-08-13-we-are-tenants-on-our.md",
  slug: "2019-08-13-we-are-tenants-on-our",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-what-the-california-wildfires-can.md": {
  id: "2019-08-13-what-the-california-wildfires-can.md",
  slug: "2019-08-13-what-the-california-wildfires-can",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-you-dont-hate-mondays-you.md": {
  id: "2019-08-13-you-dont-hate-mondays-you.md",
  slug: "2019-08-13-you-dont-hate-mondays-you",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-13-zero-waste-shouldnt-be-a.md": {
  id: "2019-08-13-zero-waste-shouldnt-be-a.md",
  slug: "2019-08-13-zero-waste-shouldnt-be-a",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-14-the-screenless-office.md": {
  id: "2019-08-14-the-screenless-office.md",
  slug: "2019-08-14-the-screenless-office",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-15-americas-concentration-camps-code.md": {
  id: "2019-08-15-americas-concentration-camps-code.md",
  slug: "2019-08-15-americas-concentration-camps-code",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-16-nadia-eghbal-or-the-tyranny.md": {
  id: "2019-08-16-nadia-eghbal-or-the-tyranny.md",
  slug: "2019-08-16-nadia-eghbal-or-the-tyranny",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-19-crimethinc-there-is-a.md": {
  id: "2019-08-19-crimethinc-there-is-a.md",
  slug: "2019-08-19-crimethinc-there-is-a",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-19-crimethinc-theres-no-such.md": {
  id: "2019-08-19-crimethinc-theres-no-such.md",
  slug: "2019-08-19-crimethinc-theres-no-such",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-21-the-thin-blue-line-is.md": {
  id: "2019-08-21-the-thin-blue-line-is.md",
  slug: "2019-08-21-the-thin-blue-line-is",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-21-we-the-undersigned-would-like.md": {
  id: "2019-08-21-we-the-undersigned-would-like.md",
  slug: "2019-08-21-we-the-undersigned-would-like",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-21-what-they-mean-when-they.md": {
  id: "2019-08-21-what-they-mean-when-they.md",
  slug: "2019-08-21-what-they-mean-when-they",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-23-cadeira-de-barbeiro-etica-artificial.md": {
  id: "2019-08-23-cadeira-de-barbeiro-etica-artificial.md",
  slug: "2019-08-23-cadeira-de-barbeiro-etica-artificial",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-24-meu-pai-entrou-no-trafico.md": {
  id: "2019-08-24-meu-pai-entrou-no-trafico.md",
  slug: "2019-08-24-meu-pai-entrou-no-trafico",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-24-the-internet-as-television-.md": {
  id: "2019-08-24-the-internet-as-television-.md",
  slug: "2019-08-24-the-internet-as-television-",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-25-medicina-nao-e-saude-.md": {
  id: "2019-08-25-medicina-nao-e-saude-.md",
  slug: "2019-08-25-medicina-nao-e-saude-",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-25-men-or-contrapoints-invidious.md": {
  id: "2019-08-25-men-or-contrapoints-invidious.md",
  slug: "2019-08-25-men-or-contrapoints-invidious",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-26-decrypting-the-alt-right-how-to.md": {
  id: "2019-08-26-decrypting-the-alt-right-how-to.md",
  slug: "2019-08-26-decrypting-the-alt-right-how-to",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-08-30-consume-less-create-more.md": {
  id: "2019-08-30-consume-less-create-more.md",
  slug: "2019-08-30-consume-less-create-more",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-09-04-why-the-alt-right-is-wrong.md": {
  id: "2019-09-04-why-the-alt-right-is-wrong.md",
  slug: "2019-09-04-why-the-alt-right-is-wrong",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-09-22-may-you-live-in-interesting.md": {
  id: "2019-09-22-may-you-live-in-interesting.md",
  slug: "2019-09-22-may-you-live-in-interesting",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-09-22-qual-o-valor-da-natureza.md": {
  id: "2019-09-22-qual-o-valor-da-natureza.md",
  slug: "2019-09-22-qual-o-valor-da-natureza",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-09-27-a-beginners-guide-to-technocracy.md": {
  id: "2019-09-27-a-beginners-guide-to-technocracy.md",
  slug: "2019-09-27-a-beginners-guide-to-technocracy",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-10-02-anti-cap-feat-sabrina-fernandes-tese.md": {
  id: "2019-10-02-anti-cap-feat-sabrina-fernandes-tese.md",
  slug: "2019-10-02-anti-cap-feat-sabrina-fernandes-tese",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-10-02-furando-a-bolha-feat-rita.md": {
  id: "2019-10-02-furando-a-bolha-feat-rita.md",
  slug: "2019-10-02-furando-a-bolha-feat-rita",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-10-02-mudanca-climatica-e-real-e.md": {
  id: "2019-10-02-mudanca-climatica-e-real-e.md",
  slug: "2019-10-02-mudanca-climatica-e-real-e",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-10-02-why-is-css-so-weird.md": {
  id: "2019-10-02-why-is-css-so-weird.md",
  slug: "2019-10-02-why-is-css-so-weird",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-10-30-trendism-and-cognitive-stagnation.md": {
  id: "2019-10-30-trendism-and-cognitive-stagnation.md",
  slug: "2019-10-30-trendism-and-cognitive-stagnation",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-10-30-using-the-platform.md": {
  id: "2019-10-30-using-the-platform.md",
  slug: "2019-10-30-using-the-platform",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-04-cthulhu-rises.md": {
  id: "2019-11-04-cthulhu-rises.md",
  slug: "2019-11-04-cthulhu-rises",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-04-repensar-a-prisao-tempero.md": {
  id: "2019-11-04-repensar-a-prisao-tempero.md",
  slug: "2019-11-04-repensar-a-prisao-tempero",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-05-por-que-a-privacidade-e.md": {
  id: "2019-11-05-por-que-a-privacidade-e.md",
  slug: "2019-11-05-por-que-a-privacidade-e",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-05-techno-fix-futures-will-only-accelerate.md": {
  id: "2019-11-05-techno-fix-futures-will-only-accelerate.md",
  slug: "2019-11-05-techno-fix-futures-will-only-accelerate",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-05-the-worship-of-billionaires-like.md": {
  id: "2019-11-05-the-worship-of-billionaires-like.md",
  slug: "2019-11-05-the-worship-of-billionaires-like",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-06-free-speech-xkcd-5.md": {
  id: "2019-11-06-free-speech-xkcd-5.md",
  slug: "2019-11-06-free-speech-xkcd-5",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-08-only-connect.md": {
  id: "2019-11-08-only-connect.md",
  slug: "2019-11-08-only-connect",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-19-studying-beyond-education-for-a.md": {
  id: "2019-11-19-studying-beyond-education-for-a.md",
  slug: "2019-11-19-studying-beyond-education-for-a",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-11-21-the-rhetoric-of-the-hyperlink.md": {
  id: "2019-11-21-the-rhetoric-of-the-hyperlink.md",
  slug: "2019-11-21-the-rhetoric-of-the-hyperlink",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2019-12-15-modesty-is-not-a-cranky.md": {
  id: "2019-12-15-modesty-is-not-a-cranky.md",
  slug: "2019-12-15-modesty-is-not-a-cranky",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-01-03-how-to-simplify-your-life.md": {
  id: "2020-01-03-how-to-simplify-your-life.md",
  slug: "2020-01-03-how-to-simplify-your-life",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-01-03-weakness-job-interview.md": {
  id: "2020-01-03-weakness-job-interview.md",
  slug: "2020-01-03-weakness-job-interview",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-01-07-how-i-do-hopefully-fair.md": {
  id: "2020-01-07-how-i-do-hopefully-fair.md",
  slug: "2020-01-07-how-i-do-hopefully-fair",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-01-07-the-new-reality-this-is.md": {
  id: "2020-01-07-the-new-reality-this-is.md",
  slug: "2020-01-07-the-new-reality-this-is",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-01-28-kicks-condor-href-hunt.md": {
  id: "2020-01-28-kicks-condor-href-hunt.md",
  slug: "2020-01-28-kicks-condor-href-hunt",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-01-descolonizar-o-olhar-gato.md": {
  id: "2020-02-01-descolonizar-o-olhar-gato.md",
  slug: "2020-02-01-descolonizar-o-olhar-gato",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-01-manual-do-minotauro-07-11-2018.md": {
  id: "2020-02-01-manual-do-minotauro-07-11-2018.md",
  slug: "2020-02-01-manual-do-minotauro-07-11-2018",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-01-melodys-echo-chamber-quand.md": {
  id: "2020-02-01-melodys-echo-chamber-quand.md",
  slug: "2020-02-01-melodys-echo-chamber-quand",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-01-saturday-morning-breakfast-cereal-.md": {
  id: "2020-02-01-saturday-morning-breakfast-cereal-.md",
  slug: "2020-02-01-saturday-morning-breakfast-cereal-",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-02-google-maps-hacks-simon.md": {
  id: "2020-02-02-google-maps-hacks-simon.md",
  slug: "2020-02-02-google-maps-hacks-simon",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-03-bluses-de-boedo-orquesta.md": {
  id: "2020-02-03-bluses-de-boedo-orquesta.md",
  slug: "2020-02-03-bluses-de-boedo-orquesta",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-05-facing-it-by-sam-gainsborough.md": {
  id: "2020-02-05-facing-it-by-sam-gainsborough.md",
  slug: "2020-02-05-facing-it-by-sam-gainsborough",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-10-contra-a-tecnologia-contrafatual.md": {
  id: "2020-02-10-contra-a-tecnologia-contrafatual.md",
  slug: "2020-02-10-contra-a-tecnologia-contrafatual",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-02-11-manual-do-minotauro-02-12-2018.md": {
  id: "2020-02-11-manual-do-minotauro-02-12-2018.md",
  slug: "2020-02-11-manual-do-minotauro-02-12-2018",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-03-01-empresas-que-apoiam-bolsonaro.md": {
  id: "2020-03-01-empresas-que-apoiam-bolsonaro.md",
  slug: "2020-03-01-empresas-que-apoiam-bolsonaro",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-04-02-austin-kleon-things-to.md": {
  id: "2020-04-02-austin-kleon-things-to.md",
  slug: "2020-04-02-austin-kleon-things-to",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-04-05-quadhomecom-homepage.md": {
  id: "2020-04-05-quadhomecom-homepage.md",
  slug: "2020-04-05-quadhomecom-homepage",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-05-03-when-we-lose-the-ability.md": {
  id: "2020-05-03-when-we-lose-the-ability.md",
  slug: "2020-05-03-when-we-lose-the-ability",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-05-13-justificar-nao-e-produzir-mas.md": {
  id: "2020-05-13-justificar-nao-e-produzir-mas.md",
  slug: "2020-05-13-justificar-nao-e-produzir-mas",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2020-05-18-greg-news-or-leveza-.md": {
  id: "2020-05-18-greg-news-or-leveza-.md",
  slug: "2020-05-18-greg-news-or-leveza-",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"2021-01-03-pra-onde-eu-vou-agora.md": {
  id: "2021-01-03-pra-onde-eu-vou-agora.md",
  slug: "2021-01-03-pra-onde-eu-vou-agora",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"a-natural-history-of-beauty.md": {
  id: "a-natural-history-of-beauty.md",
  slug: "a-natural-history-of-beauty",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"a-systems-literacy-manifesto.md": {
  id: "a-systems-literacy-manifesto.md",
  slug: "a-systems-literacy-manifesto",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"a-web-without-the-internet.md": {
  id: "a-web-without-the-internet.md",
  slug: "a-web-without-the-internet",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"an-ant-colony-has-memories-that-its-individual-members-dont-have.md": {
  id: "an-ant-colony-has-memories-that-its-individual-members-dont-have.md",
  slug: "an-ant-colony-has-memories-that-its-individual-members-dont-have",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"an-interactive-guide-to-css-transitions-by-josh-w-comeau.md": {
  id: "an-interactive-guide-to-css-transitions-by-josh-w-comeau.md",
  slug: "an-interactive-guide-to-css-transitions-by-josh-w-comeau",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"attention-is-not-a-resource-but-a-way-of-being-alive-to-the-world.md": {
  id: "attention-is-not-a-resource-but-a-way-of-being-alive-to-the-world.md",
  slug: "attention-is-not-a-resource-but-a-way-of-being-alive-to-the-world",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"bob-black-sobre-trabalho.md": {
  id: "bob-black-sobre-trabalho.md",
  slug: "bob-black-sobre-trabalho",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"brace-yourself-for-the-most-dangerous-idea-yet-most-people-are-pretty-decent.md": {
  id: "brace-yourself-for-the-most-dangerous-idea-yet-most-people-are-pretty-decent.md",
  slug: "brace-yourself-for-the-most-dangerous-idea-yet-most-people-are-pretty-decent",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"chaos-makes-the-multiverse-unnecessary-rp.md": {
  id: "chaos-makes-the-multiverse-unnecessary-rp.md",
  slug: "chaos-makes-the-multiverse-unnecessary-rp",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"creating-a-culture-of-accessibility.md": {
  id: "creating-a-culture-of-accessibility.md",
  slug: "creating-a-culture-of-accessibility",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"cybernetics.md": {
  id: "cybernetics.md",
  slug: "cybernetics",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"design-machines.md": {
  id: "design-machines.md",
  slug: "design-machines",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"did-laughter-make-the-mind.md": {
  id: "did-laughter-make-the-mind.md",
  slug: "did-laughter-make-the-mind",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"distraction-is-the-new-censorship.md": {
  id: "distraction-is-the-new-censorship.md",
  slug: "distraction-is-the-new-censorship",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"eleição-de-bolsonaro-marca-fim-da-nova-república-diz-historiadora.md": {
  id: "eleição-de-bolsonaro-marca-fim-da-nova-república-diz-historiadora.md",
  slug: "eleição-de-bolsonaro-marca-fim-da-nova-república-diz-historiadora",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"ethics-cant-be-a-side-hustle.md": {
  id: "ethics-cant-be-a-side-hustle.md",
  slug: "ethics-cant-be-a-side-hustle",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"eu-não-me-calo-por-maurício-ricardo.md": {
  id: "eu-não-me-calo-por-maurício-ricardo.md",
  slug: "eu-não-me-calo-por-maurício-ricardo",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"exhaust_ports.md": {
  id: "exhaust_ports.md",
  slug: "exhaust_ports",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"facebook-data-privacy-advertising.md": {
  id: "facebook-data-privacy-advertising.md",
  slug: "facebook-data-privacy-advertising",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"five-things-that-scare-my-about-ai.md": {
  id: "five-things-that-scare-my-about-ai.md",
  slug: "five-things-that-scare-my-about-ai",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"forget-privacy-you-re-terrible-at-targeting-anyway.md": {
  id: "forget-privacy-you-re-terrible-at-targeting-anyway.md",
  slug: "forget-privacy-you-re-terrible-at-targeting-anyway",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"frozen-capitalism-haunted-by-vaporwave-by-zero-books.md": {
  id: "frozen-capitalism-haunted-by-vaporwave-by-zero-books.md",
  slug: "frozen-capitalism-haunted-by-vaporwave-by-zero-books",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"gardens-need-walls.md": {
  id: "gardens-need-walls.md",
  slug: "gardens-need-walls",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"home-office.md": {
  id: "home-office.md",
  slug: "home-office",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"how-surveillance-inhibits-freedom-of-expression.md": {
  id: "how-surveillance-inhibits-freedom-of-expression.md",
  slug: "how-surveillance-inhibits-freedom-of-expression",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"inclusive-design-is-design.md": {
  id: "inclusive-design-is-design.md",
  slug: "inclusive-design-is-design",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"location-data-privacy-apps.md": {
  id: "location-data-privacy-apps.md",
  slug: "location-data-privacy-apps",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"mapped-how-every-part-of-the-world-has-warmed.md": {
  id: "mapped-how-every-part-of-the-world-has-warmed.md",
  slug: "mapped-how-every-part-of-the-world-has-warmed",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"material-intelligence.md": {
  id: "material-intelligence.md",
  slug: "material-intelligence",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"neoliberalism-has-conned-us-into-fighting-climate-change-as-individuals.md": {
  id: "neoliberalism-has-conned-us-into-fighting-climate-change-as-individuals.md",
  slug: "neoliberalism-has-conned-us-into-fighting-climate-change-as-individuals",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"ohno-diy-ecology.md": {
  id: "ohno-diy-ecology.md",
  slug: "ohno-diy-ecology",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"ohno-pride.md": {
  id: "ohno-pride.md",
  slug: "ohno-pride",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"optimize-for-learning.md": {
  id: "optimize-for-learning.md",
  slug: "optimize-for-learning",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"people-are-different.md": {
  id: "people-are-different.md",
  slug: "people-are-different",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"personhood-a-game-for-two-or-more-players.md": {
  id: "personhood-a-game-for-two-or-more-players.md",
  slug: "personhood-a-game-for-two-or-more-players",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"post-authenticity-and-the-real-truths-of-meme-culture.md": {
  id: "post-authenticity-and-the-real-truths-of-meme-culture.md",
  slug: "post-authenticity-and-the-real-truths-of-meme-culture",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"post-work.md": {
  id: "post-work.md",
  slug: "post-work",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"potyguara-bardo-curupira-audio.md": {
  id: "potyguara-bardo-curupira-audio.md",
  slug: "potyguara-bardo-curupira-audio",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"propaganda-and-the-weakening-of-trust-in-government.md": {
  id: "propaganda-and-the-weakening-of-trust-in-government.md",
  slug: "propaganda-and-the-weakening-of-trust-in-government",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"reality-has-a-surprising-amount-of-detail.md": {
  id: "reality-has-a-surprising-amount-of-detail.md",
  slug: "reality-has-a-surprising-amount-of-detail",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"rescue-the-web.md": {
  id: "rescue-the-web.md",
  slug: "rescue-the-web",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"software-disenchantment-em-português.md": {
  id: "software-disenchantment-em-português.md",
  slug: "software-disenchantment-em-português",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"software-is-politics.md": {
  id: "software-is-politics.md",
  slug: "software-is-politics",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"solarpunk.md": {
  id: "solarpunk.md",
  slug: "solarpunk",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"subverted-design.md": {
  id: "subverted-design.md",
  slug: "subverted-design",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"survival-of-the-mediocre-mediocre.md": {
  id: "survival-of-the-mediocre-mediocre.md",
  slug: "survival-of-the-mediocre-mediocre",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"technical-debt-of-the-west.md": {
  id: "technical-debt-of-the-west.md",
  slug: "technical-debt-of-the-west",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"territory-and-the-maps.md": {
  id: "territory-and-the-maps.md",
  slug: "territory-and-the-maps",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"that-depression-thing.md": {
  id: "that-depression-thing.md",
  slug: "that-depression-thing",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-automation-charade.md": {
  id: "the-automation-charade.md",
  slug: "the-automation-charade",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-billionaires-typewriter.md": {
  id: "the-billionaires-typewriter.md",
  slug: "the-billionaires-typewriter",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-cybe.md": {
  id: "the-cybe.md",
  slug: "the-cybe",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-good-the-true-and-the-undefined.md": {
  id: "the-good-the-true-and-the-undefined.md",
  slug: "the-good-the-true-and-the-undefined",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-ineffectiveness-of-lonely-icons.md": {
  id: "the-ineffectiveness-of-lonely-icons.md",
  slug: "the-ineffectiveness-of-lonely-icons",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-internet-needs-more-friction.md": {
  id: "the-internet-needs-more-friction.md",
  slug: "the-internet-needs-more-friction",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-magical-mathematical-fictions-of-borges.md": {
  id: "the-magical-mathematical-fictions-of-borges.md",
  slug: "the-magical-mathematical-fictions-of-borges",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-more-the-merrier.md": {
  id: "the-more-the-merrier.md",
  slug: "the-more-the-merrier",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"the-state-of-web-browsers.md": {
  id: "the-state-of-web-browsers.md",
  slug: "the-state-of-web-browsers",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"there-is-no-middle-ground-for-deep-disagreements-about-facts.md": {
  id: "there-is-no-middle-ground-for-deep-disagreements-about-facts.md",
  slug: "there-is-no-middle-ground-for-deep-disagreements-about-facts",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"third-party-dream-cookies.md": {
  id: "third-party-dream-cookies.md",
  slug: "third-party-dream-cookies",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"true-detective-how-bullshit-becomes-a-fact.md": {
  id: "true-detective-how-bullshit-becomes-a-fact.md",
  slug: "true-detective-how-bullshit-becomes-a-fact",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"what-is-decentralization.md": {
  id: "what-is-decentralization.md",
  slug: "what-is-decentralization",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"what-really-happens-after-the-apocalypse.md": {
  id: "what-really-happens-after-the-apocalypse.md",
  slug: "what-really-happens-after-the-apocalypse",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"what-screens-want.md": {
  id: "what-screens-want.md",
  slug: "what-screens-want",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"what-the-marriott-breach-says-about-security.md": {
  id: "what-the-marriott-breach-says-about-security.md",
  slug: "what-the-marriott-breach-says-about-security",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"when-the-state-is-unjust-citizens-may-use-justifiable-violence.md": {
  id: "when-the-state-is-unjust-citizens-may-use-justifiable-violence.md",
  slug: "when-the-state-is-unjust-citizens-may-use-justifiable-violence",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"which-is-more-fundamental-processes-or-things.md": {
  id: "which-is-more-fundamental-processes-or-things.md",
  slug: "which-is-more-fundamental-processes-or-things",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"while-we-blink-we-loose-the-web.md": {
  id: "while-we-blink-we-loose-the-web.md",
  slug: "while-we-blink-we-loose-the-web",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"who-is-responsible-for-climate-change-who-needs-to-fix-it-kurzgesagt.md": {
  id: "who-is-responsible-for-climate-change-who-needs-to-fix-it-kurzgesagt.md",
  slug: "who-is-responsible-for-climate-change-who-needs-to-fix-it-kurzgesagt",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"why-should-you-read-one-hundred-years-of-solitude.md": {
  id: "why-should-you-read-one-hundred-years-of-solitude.md",
  slug: "why-should-you-read-one-hundred-years-of-solitude",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
"world-wide-work.md": {
  id: "world-wide-work.md",
  slug: "world-wide-work",
  body: string,
  collection: "bookmarks",
  data: InferEntrySchema<"bookmarks">
},
},
"likes": {
"2019-08-12-mrcqp.md": {
  id: "2019-08-12-mrcqp.md",
  slug: "2019-08-12-mrcqp",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-12-mx76b.md": {
  id: "2019-08-12-mx76b.md",
  slug: "2019-08-12-mx76b",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-12-mxxlv.md": {
  id: "2019-08-12-mxxlv.md",
  slug: "2019-08-12-mxxlv",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-12-myd3j.md": {
  id: "2019-08-12-myd3j.md",
  slug: "2019-08-12-myd3j",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-12-mz3se.md": {
  id: "2019-08-12-mz3se.md",
  slug: "2019-08-12-mz3se",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-12-n0tj4.md": {
  id: "2019-08-12-n0tj4.md",
  slug: "2019-08-12-n0tj4",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-7x802.md": {
  id: "2019-08-13-7x802.md",
  slug: "2019-08-13-7x802",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-816dy.md": {
  id: "2019-08-13-816dy.md",
  slug: "2019-08-13-816dy",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-858a8.md": {
  id: "2019-08-13-858a8.md",
  slug: "2019-08-13-858a8",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-85z0s.md": {
  id: "2019-08-13-85z0s.md",
  slug: "2019-08-13-85z0s",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-869fm.md": {
  id: "2019-08-13-869fm.md",
  slug: "2019-08-13-869fm",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-86mn3.md": {
  id: "2019-08-13-86mn3.md",
  slug: "2019-08-13-86mn3",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-875q3.md": {
  id: "2019-08-13-875q3.md",
  slug: "2019-08-13-875q3",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-88ty2.md": {
  id: "2019-08-13-88ty2.md",
  slug: "2019-08-13-88ty2",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-8bbev.md": {
  id: "2019-08-13-8bbev.md",
  slug: "2019-08-13-8bbev",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-8i6ax.md": {
  id: "2019-08-13-8i6ax.md",
  slug: "2019-08-13-8i6ax",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-8yuqz.md": {
  id: "2019-08-13-8yuqz.md",
  slug: "2019-08-13-8yuqz",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-8zl9r.md": {
  id: "2019-08-13-8zl9r.md",
  slug: "2019-08-13-8zl9r",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-90byw.md": {
  id: "2019-08-13-90byw.md",
  slug: "2019-08-13-90byw",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-90smj.md": {
  id: "2019-08-13-90smj.md",
  slug: "2019-08-13-90smj",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-91exf.md": {
  id: "2019-08-13-91exf.md",
  slug: "2019-08-13-91exf",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-91vdw.md": {
  id: "2019-08-13-91vdw.md",
  slug: "2019-08-13-91vdw",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-92eka.md": {
  id: "2019-08-13-92eka.md",
  slug: "2019-08-13-92eka",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-93eei.md": {
  id: "2019-08-13-93eei.md",
  slug: "2019-08-13-93eei",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-9ccbj.md": {
  id: "2019-08-13-9ccbj.md",
  slug: "2019-08-13-9ccbj",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-9u758.md": {
  id: "2019-08-13-9u758.md",
  slug: "2019-08-13-9u758",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-9wbbu.md": {
  id: "2019-08-13-9wbbu.md",
  slug: "2019-08-13-9wbbu",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-9xzjv.md": {
  id: "2019-08-13-9xzjv.md",
  slug: "2019-08-13-9xzjv",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-a27sp.md": {
  id: "2019-08-13-a27sp.md",
  slug: "2019-08-13-a27sp",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-a3s8i.md": {
  id: "2019-08-13-a3s8i.md",
  slug: "2019-08-13-a3s8i",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-a40tl.md": {
  id: "2019-08-13-a40tl.md",
  slug: "2019-08-13-a40tl",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-a4964.md": {
  id: "2019-08-13-a4964.md",
  slug: "2019-08-13-a4964",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-a4ge4.md": {
  id: "2019-08-13-a4ge4.md",
  slug: "2019-08-13-a4ge4",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-a5khd.md": {
  id: "2019-08-13-a5khd.md",
  slug: "2019-08-13-a5khd",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-a62lq.md": {
  id: "2019-08-13-a62lq.md",
  slug: "2019-08-13-a62lq",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-agha1.md": {
  id: "2019-08-13-agha1.md",
  slug: "2019-08-13-agha1",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-aguaw.md": {
  id: "2019-08-13-aguaw.md",
  slug: "2019-08-13-aguaw",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-ai404.md": {
  id: "2019-08-13-ai404.md",
  slug: "2019-08-13-ai404",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-ouwg8.md": {
  id: "2019-08-13-ouwg8.md",
  slug: "2019-08-13-ouwg8",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-yca9y.md": {
  id: "2019-08-13-yca9y.md",
  slug: "2019-08-13-yca9y",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-13-ycc18.md": {
  id: "2019-08-13-ycc18.md",
  slug: "2019-08-13-ycc18",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-15-9z20k.md": {
  id: "2019-08-15-9z20k.md",
  slug: "2019-08-15-9z20k",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-16-70mdz.md": {
  id: "2019-08-16-70mdz.md",
  slug: "2019-08-16-70mdz",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-16-72s46.md": {
  id: "2019-08-16-72s46.md",
  slug: "2019-08-16-72s46",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-16-g4qxa.md": {
  id: "2019-08-16-g4qxa.md",
  slug: "2019-08-16-g4qxa",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-17-i8teg.md": {
  id: "2019-08-17-i8teg.md",
  slug: "2019-08-17-i8teg",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-19-1txjd.md": {
  id: "2019-08-19-1txjd.md",
  slug: "2019-08-19-1txjd",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-19-8n7v2.md": {
  id: "2019-08-19-8n7v2.md",
  slug: "2019-08-19-8n7v2",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-23-4wt0t.md": {
  id: "2019-08-23-4wt0t.md",
  slug: "2019-08-23-4wt0t",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-24-48s4v.md": {
  id: "2019-08-24-48s4v.md",
  slug: "2019-08-24-48s4v",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-25-mgoj6.md": {
  id: "2019-08-25-mgoj6.md",
  slug: "2019-08-25-mgoj6",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-25-z11iv.md": {
  id: "2019-08-25-z11iv.md",
  slug: "2019-08-25-z11iv",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-27-mmb5a.md": {
  id: "2019-08-27-mmb5a.md",
  slug: "2019-08-27-mmb5a",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-08-31-4eeve.md": {
  id: "2019-08-31-4eeve.md",
  slug: "2019-08-31-4eeve",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-09-02-5zoez.md": {
  id: "2019-09-02-5zoez.md",
  slug: "2019-09-02-5zoez",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-09-03-16t6t.md": {
  id: "2019-09-03-16t6t.md",
  slug: "2019-09-03-16t6t",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-10-03-qimss.md": {
  id: "2019-10-03-qimss.md",
  slug: "2019-10-03-qimss",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-10-27-hknk2.md": {
  id: "2019-10-27-hknk2.md",
  slug: "2019-10-27-hknk2",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-10-30-4gcde.md": {
  id: "2019-10-30-4gcde.md",
  slug: "2019-10-30-4gcde",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-10-30-4l9px.md": {
  id: "2019-10-30-4l9px.md",
  slug: "2019-10-30-4l9px",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-10-30-4lrjj.md": {
  id: "2019-10-30-4lrjj.md",
  slug: "2019-10-30-4lrjj",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-10-31-y77fw.md": {
  id: "2019-10-31-y77fw.md",
  slug: "2019-10-31-y77fw",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-11-07-s9760.md": {
  id: "2019-11-07-s9760.md",
  slug: "2019-11-07-s9760",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-11-07-y2e03.md": {
  id: "2019-11-07-y2e03.md",
  slug: "2019-11-07-y2e03",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-11-17-ifj1x.md": {
  id: "2019-11-17-ifj1x.md",
  slug: "2019-11-17-ifj1x",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-11-17-iiavq.md": {
  id: "2019-11-17-iiavq.md",
  slug: "2019-11-17-iiavq",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-11-22-wzdp4.md": {
  id: "2019-11-22-wzdp4.md",
  slug: "2019-11-22-wzdp4",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-12-10-m7yri.md": {
  id: "2019-12-10-m7yri.md",
  slug: "2019-12-10-m7yri",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2019-12-29-1dmmi.md": {
  id: "2019-12-29-1dmmi.md",
  slug: "2019-12-29-1dmmi",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-01-03-2x9iv.md": {
  id: "2020-01-03-2x9iv.md",
  slug: "2020-01-03-2x9iv",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-01-03-4btjp.md": {
  id: "2020-01-03-4btjp.md",
  slug: "2020-01-03-4btjp",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-01-10-lyz1v.md": {
  id: "2020-01-10-lyz1v.md",
  slug: "2020-01-10-lyz1v",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-01-22-oa7hr.md": {
  id: "2020-01-22-oa7hr.md",
  slug: "2020-01-22-oa7hr",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-09-j2lyo.md": {
  id: "2020-02-09-j2lyo.md",
  slug: "2020-02-09-j2lyo",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-10-fpgk9.md": {
  id: "2020-02-10-fpgk9.md",
  slug: "2020-02-10-fpgk9",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-15-lyron.md": {
  id: "2020-02-15-lyron.md",
  slug: "2020-02-15-lyron",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-17-1679j.md": {
  id: "2020-02-17-1679j.md",
  slug: "2020-02-17-1679j",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-17-hd9nu.md": {
  id: "2020-02-17-hd9nu.md",
  slug: "2020-02-17-hd9nu",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-21-mzm3q.md": {
  id: "2020-02-21-mzm3q.md",
  slug: "2020-02-21-mzm3q",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-27-duew1.md": {
  id: "2020-02-27-duew1.md",
  slug: "2020-02-27-duew1",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-27-yp502.md": {
  id: "2020-02-27-yp502.md",
  slug: "2020-02-27-yp502",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-27-ypukb.md": {
  id: "2020-02-27-ypukb.md",
  slug: "2020-02-27-ypukb",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-27-ypxqi.md": {
  id: "2020-02-27-ypxqi.md",
  slug: "2020-02-27-ypxqi",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-27-yq8s9.md": {
  id: "2020-02-27-yq8s9.md",
  slug: "2020-02-27-yq8s9",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-02-29-tjvpz.md": {
  id: "2020-02-29-tjvpz.md",
  slug: "2020-02-29-tjvpz",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-03-01-xuxox.md": {
  id: "2020-03-01-xuxox.md",
  slug: "2020-03-01-xuxox",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-03-01-xye71.md": {
  id: "2020-03-01-xye71.md",
  slug: "2020-03-01-xye71",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-03-01-y0j3f.md": {
  id: "2020-03-01-y0j3f.md",
  slug: "2020-03-01-y0j3f",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-03-17-rl5zm.md": {
  id: "2020-03-17-rl5zm.md",
  slug: "2020-03-17-rl5zm",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-03-18-l2txr.md": {
  id: "2020-03-18-l2txr.md",
  slug: "2020-03-18-l2txr",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-03-18-liz71.md": {
  id: "2020-03-18-liz71.md",
  slug: "2020-03-18-liz71",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-04-18-o4bhs.md": {
  id: "2020-04-18-o4bhs.md",
  slug: "2020-04-18-o4bhs",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
"2020-06-01-bj462.md": {
  id: "2020-06-01-bj462.md",
  slug: "2020-06-01-bj462",
  body: string,
  collection: "likes",
  data: InferEntrySchema<"likes">
},
},
"notes": {
"2019-07-22-ppa6w.md": {
  id: "2019-07-22-ppa6w.md",
  slug: "2019-07-22-ppa6w",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-07-22-qwcd7.md": {
  id: "2019-07-22-qwcd7.md",
  slug: "2019-07-22-qwcd7",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-07-22-segunda-nota.md": {
  id: "2019-07-22-segunda-nota.md",
  slug: "2019-07-22-segunda-nota",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-07-23-disposable-income.md": {
  id: "2019-07-23-disposable-income.md",
  slug: "2019-07-23-disposable-income",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-07-23-wfua5.md": {
  id: "2019-07-23-wfua5.md",
  slug: "2019-07-23-wfua5",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-07-24-asjai12.md": {
  id: "2019-07-24-asjai12.md",
  slug: "2019-07-24-asjai12",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-08-14-syndicate-it.md": {
  id: "2019-08-14-syndicate-it.md",
  slug: "2019-08-14-syndicate-it",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-10-01-nwc03.md": {
  id: "2019-10-01-nwc03.md",
  slug: "2019-10-01-nwc03",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-10-26-tdo9f.md": {
  id: "2019-10-26-tdo9f.md",
  slug: "2019-10-26-tdo9f",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-10-26-u4em9.md": {
  id: "2019-10-26-u4em9.md",
  slug: "2019-10-26-u4em9",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-10-26-uohde.md": {
  id: "2019-10-26-uohde.md",
  slug: "2019-10-26-uohde",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-10-27-hsypu.md": {
  id: "2019-10-27-hsypu.md",
  slug: "2019-10-27-hsypu",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-10-29-laerte-patriotismo.md": {
  id: "2019-10-29-laerte-patriotismo.md",
  slug: "2019-10-29-laerte-patriotismo",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-11-06-agente-secreto-contra-ativismo.md": {
  id: "2019-11-06-agente-secreto-contra-ativismo.md",
  slug: "2019-11-06-agente-secreto-contra-ativismo",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-11-17-borges-reality-probable.md": {
  id: "2019-11-17-borges-reality-probable.md",
  slug: "2019-11-17-borges-reality-probable",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-11-21-k06x4.md": {
  id: "2019-11-21-k06x4.md",
  slug: "2019-11-21-k06x4",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2019-11-21-k3rym.md": {
  id: "2019-11-21-k3rym.md",
  slug: "2019-11-21-k3rym",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"2020-01-28-thanks-kicks-condor.md": {
  id: "2020-01-28-thanks-kicks-condor.md",
  slug: "2020-01-28-thanks-kicks-condor",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
},
"posts": {
"2020-02-15-information-architecture-for-the-web-and-beyond.md": {
  id: "2020-02-15-information-architecture-for-the-web-and-beyond.md",
  slug: "2020-02-15-information-architecture-for-the-web-and-beyond",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2020-05-14-hotsite-covid19-jusbrasil.md": {
  id: "2020-05-14-hotsite-covid19-jusbrasil.md",
  slug: "2020-05-14-hotsite-covid19-jusbrasil",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"brief-history-open-source.md": {
  id: "brief-history-open-source.md",
  slug: "brief-history-open-source",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"calculo/index.mdx": {
  id: "calculo/index.mdx",
  slug: "calculo",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"crescer-sendo-viado.md": {
  id: "crescer-sendo-viado.md",
  slug: "crescer-sendo-viado",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"cubos-web-stack.md": {
  id: "cubos-web-stack.md",
  slug: "cubos-web-stack",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"leituras-da-semana-30-de-2018.md": {
  id: "leituras-da-semana-30-de-2018.md",
  slug: "leituras-da-semana-30-de-2018",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"leituras-da-semana-31-de-2018.md": {
  id: "leituras-da-semana-31-de-2018.md",
  slug: "leituras-da-semana-31-de-2018",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"leituras-da-semana-32-de-2018.md": {
  id: "leituras-da-semana-32-de-2018.md",
  slug: "leituras-da-semana-32-de-2018",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"minorities/index.md": {
  id: "minorities/index.md",
  slug: "minorities",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"mobx-tutorial.md": {
  id: "mobx-tutorial.md",
  slug: "mobx-tutorial",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"net-neutrality.md": {
  id: "net-neutrality.md",
  slug: "net-neutrality",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-que-foi-2019-e-o-que-pode-ser-2020.md": {
  id: "o-que-foi-2019-e-o-que-pode-ser-2020.md",
  slug: "o-que-foi-2019-e-o-que-pode-ser-2020",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-valor-pratico-do-html/index.mdx": {
  id: "o-valor-pratico-do-html/index.mdx",
  slug: "o-valor-pratico-do-html",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"porque-privacidade.md": {
  id: "porque-privacidade.md",
  slug: "porque-privacidade",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"porque-webassembly.md": {
  id: "porque-webassembly.md",
  slug: "porque-webassembly",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"semana-29-2019.md": {
  id: "semana-29-2019.md",
  slug: "semana-29-2019",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
