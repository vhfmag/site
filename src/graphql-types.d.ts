/* tslint:disable */

/* A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/* The &#x60;JSON&#x60; scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any;
/* An object with an id, parent, and children */
export interface Node {
	id: string /* The id of the node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
}

export interface RootQueryType {
	allSitePage?: SitePageConnection | null /* Connection to all SitePage nodes */;
	allSitePlugin?: SitePluginConnection | null /* Connection to all SitePlugin nodes */;
	allDirectory?: DirectoryConnection | null /* Connection to all Directory nodes */;
	allFile?: FileConnection | null /* Connection to all File nodes */;
	allMarkdownRemark?: MarkdownRemarkConnection | null /* Connection to all MarkdownRemark nodes */;
	allTodoJson?: TodoJsonConnection | null /* Connection to all TodoJson nodes */;
	allPersonalJson?: PersonalJsonConnection | null /* Connection to all PersonalJson nodes */;
	allCompetencesJson?: CompetencesJsonConnection | null /* Connection to all CompetencesJson nodes */;
	allSkillsJson?: SkillsJsonConnection | null /* Connection to all SkillsJson nodes */;
	allInterestsJson?: InterestsJsonConnection | null /* Connection to all InterestsJson nodes */;
	allExperiencesJson?: ExperiencesJsonConnection | null /* Connection to all ExperiencesJson nodes */;
	sitePage?: SitePage | null;
	sitePlugin?: SitePlugin | null;
	site?: Site | null;
	directory?: Directory | null;
	file?: File | null;
	markdownRemark?: MarkdownRemark | null;
	todoJson?: TodoJson | null;
	personalJson?: PersonalJson | null;
	competencesJson?: CompetencesJson | null;
	skillsJson?: SkillsJson | null;
	interestsJson?: InterestsJson | null;
	experiencesJson?: ExperiencesJson | null;
}
/* A connection to a list of items. */
export interface SitePageConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: SitePageEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: sitePageGroupConnectionConnection[] | null;
}
/* Information about pagination in a connection. */
export interface PageInfo {
	hasNextPage: boolean /* When paginating, are there more items? */;
}
/* An edge in a connection. */
export interface SitePageEdge {
	node?: SitePage | null /* The item at the end of the edge */;
	next?: SitePage | null /* The next edge in the connection */;
	previous?: SitePage | null /* The previous edge in the connection */;
}
/* Node of type SitePage */
export interface SitePage extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	layout?: string | null;
	jsonName?: string | null;
	internalComponentName?: string | null;
	path?: string | null;
	component?: string | null;
	componentChunkName?: string | null;
	context?: context | null;
	pluginCreator?: SitePlugin | null;
	pluginCreatorId?: string | null;
	componentPath?: string | null;
	internal?: internal_13 | null;
}

export interface context {
	group?: group[] | null;
	pathPrefix?: string | null;
	first?: boolean | null;
	last?: boolean | null;
	index?: number | null;
	pageCount?: number | null;
	additionalContext?: additionalContext | null;
	slug?: string | null;
	markdownPath?: string | null;
}

export interface group {
	node?: node | null;
}

export interface node {
	excerpt?: string | null;
	fileAbsolutePath?: string | null;
	frontmatter?: frontmatter_2 | null;
}

export interface frontmatter_2 {
	date?: Date | null;
	author?: string | null;
	link?: string | null;
	title?: string | null;
	description?: string | null;
}

export interface additionalContext {
	singlePath?: string | null;
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	resolve?: string | null;
	name?: string | null;
	version?: string | null;
	pluginOptions?: pluginOptions_3 | null;
	nodeAPIs?: string[] | null;
	browserAPIs?: string[] | null;
	ssrAPIs?: string[] | null;
	pluginFilepath?: string | null;
	packageJson?: packageJson_2 | null;
	internal?: internal_14 | null;
}

export interface pluginOptions_3 {
	plugins?: plugins_2[] | null;
	name?: string | null;
	path?: string | null;
	maxWidth?: number | null;
	wrapperStyle?: string | null;
	backgroundColor?: string | null;
	linkImagesToOriginal?: boolean | null;
	showCaptions?: boolean | null;
	pathPrefix?: string | null;
	inlineCodeMarker?: string | null;
	short_name?: string | null;
	start_url?: string | null;
	background_color?: string | null;
	theme_color?: string | null;
	display?: string | null;
	pathToConfigModule?: string | null;
}

export interface plugins_2 {
	resolve?: string | null;
	id?: string | null;
	name?: string | null;
	version?: string | null;
	pluginOptions?: pluginOptions_4 | null;
	pluginFilepath?: string | null;
}

export interface pluginOptions_4 {
	maxWidth?: number | null;
	wrapperStyle?: string | null;
	backgroundColor?: string | null;
	linkImagesToOriginal?: boolean | null;
	showCaptions?: boolean | null;
	pathPrefix?: string | null;
	inlineCodeMarker?: string | null;
}

export interface packageJson_2 {
	name?: string | null;
	description?: string | null;
	version?: string | null;
	main?: string | null;
	author?: string | null;
	license?: string | null;
	dependencies?: dependencies_2[] | null;
	devDependencies?: devDependencies_2[] | null;
	peerDependencies?: peerDependencies_2[] | null;
	keywords?: string[] | null;
}

export interface dependencies_2 {
	name?: string | null;
	version?: string | null;
}

export interface devDependencies_2 {
	name?: string | null;
	version?: string | null;
}

export interface peerDependencies_2 {
	name?: string | null;
	version?: string | null;
}

export interface internal_14 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface internal_13 {
	type?: string | null;
	contentDigest?: string | null;
	description?: string | null;
	owner?: string | null;
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: sitePageGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
	node?: SitePage | null /* The item at the end of the edge */;
	next?: SitePage | null /* The next edge in the connection */;
	previous?: SitePage | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface SitePluginConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: SitePluginEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: sitePluginGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface SitePluginEdge {
	node?: SitePlugin | null /* The item at the end of the edge */;
	next?: SitePlugin | null /* The next edge in the connection */;
	previous?: SitePlugin | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: sitePluginGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
	node?: SitePlugin | null /* The item at the end of the edge */;
	next?: SitePlugin | null /* The next edge in the connection */;
	previous?: SitePlugin | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface DirectoryConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: DirectoryEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: directoryGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface DirectoryEdge {
	node?: Directory | null /* The item at the end of the edge */;
	next?: Directory | null /* The next edge in the connection */;
	previous?: Directory | null /* The previous edge in the connection */;
}
/* Node of type Directory */
export interface Directory extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	internal?: internal_15 | null;
	sourceInstanceName?: string | null;
	absolutePath?: string | null;
	relativePath?: string | null;
	extension?: string | null;
	size?: number | null;
	prettySize?: string | null;
	modifiedTime?: Date | null;
	accessTime?: Date | null;
	changeTime?: Date | null;
	birthTime?: Date | null;
	root?: string | null;
	dir?: string | null;
	base?: string | null;
	ext?: string | null;
	name?: string | null;
	relativeDirectory?: string | null;
	dev?: number | null;
	mode?: number | null;
	nlink?: number | null;
	uid?: number | null;
	gid?: number | null;
	rdev?: number | null;
	blksize?: number | null;
	ino?: number | null;
	blocks?: number | null;
	atimeMs?: number | null;
	mtimeMs?: number | null;
	ctimeMs?: number | null;
	birthtimeMs?: number | null;
	atime?: Date | null;
	mtime?: Date | null;
	ctime?: Date | null;
	birthtime?: Date | null;
}

export interface internal_15 {
	contentDigest?: string | null;
	type?: string | null;
	description?: string | null;
	owner?: string | null;
}
/* A connection to a list of items. */
export interface directoryGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: directoryGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface directoryGroupConnectionEdge {
	node?: Directory | null /* The item at the end of the edge */;
	next?: Directory | null /* The next edge in the connection */;
	previous?: Directory | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface FileConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: FileEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: fileGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface FileEdge {
	node?: File | null /* The item at the end of the edge */;
	next?: File | null /* The next edge in the connection */;
	previous?: File | null /* The previous edge in the connection */;
}
/* Node of type File */
export interface File extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	childMarkdownRemark?: MarkdownRemark | null /* The child of this node of type markdownRemark */;
	childrenTodoJson?:
		| TodoJson[]
		| null /* The children of this node of type todoJson */;
	childPersonalJson?: PersonalJson | null /* The child of this node of type personalJson */;
	childrenCompetencesJson?:
		| CompetencesJson[]
		| null /* The children of this node of type competencesJson */;
	childSkillsJson?: SkillsJson | null /* The child of this node of type skillsJson */;
	childInterestsJson?: InterestsJson | null /* The child of this node of type interestsJson */;
	childExperiencesJson?: ExperiencesJson | null /* The child of this node of type experiencesJson */;
	internal?: internal_16 | null;
	sourceInstanceName?: string | null;
	absolutePath?: string | null;
	relativePath?: string | null;
	extension?: string | null;
	size?: number | null;
	prettySize?: string | null;
	modifiedTime?: Date | null;
	accessTime?: Date | null;
	changeTime?: Date | null;
	birthTime?: Date | null;
	root?: string | null;
	dir?: string | null;
	base?: string | null;
	ext?: string | null;
	name?: string | null;
	relativeDirectory?: string | null;
	dev?: number | null;
	mode?: number | null;
	nlink?: number | null;
	uid?: number | null;
	gid?: number | null;
	rdev?: number | null;
	blksize?: number | null;
	ino?: number | null;
	blocks?: number | null;
	atimeMs?: number | null;
	mtimeMs?: number | null;
	ctimeMs?: number | null;
	birthtimeMs?: number | null;
	atime?: Date | null;
	mtime?: Date | null;
	ctime?: Date | null;
	birthtime?: Date | null;
	publicURL?:
		| string
		| null /* Copy file to static directory and return public url to it */;
}
/* Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	internal?: internal_17 | null;
	frontmatter?: frontmatter_3 | null;
	excerpt?: string | null;
	fileAbsolutePath?: string | null;
	html?: string | null;
	htmlAst?: JSON | null;
	headings?: MarkdownHeading[] | null;
	timeToRead?: number | null;
	tableOfContents?: string | null;
	wordCount?: wordCount | null;
}

export interface internal_17 {
	content?: string | null;
	type?: string | null;
	contentDigest?: string | null;
	owner?: string | null;
}

export interface frontmatter_3 {
	title?: string | null;
	author?: string | null;
	link?: string | null;
	_PARENT?: string | null;
	parent?: string | null;
	startDate?: Date | null;
	description?: string | null;
	date?: Date | null;
	type?: string | null;
	draft?: boolean | null;
}

export interface MarkdownHeading {
	value?: string | null;
	depth?: number | null;
}

export interface wordCount {
	paragraphs?: number | null;
	sentences?: number | null;
	words?: number | null;
}
/* Node of type TodoJson */
export interface TodoJson extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	title?: string | null;
	tags?: string[] | null;
	internal?: internal_18 | null;
}

export interface internal_18 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/* Node of type PersonalJson */
export interface PersonalJson extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	email?: string | null;
	social?: social_2[] | null;
	internal?: internal_19 | null;
}

export interface social_2 {
	serviceName?: string | null;
	icon?: string | null;
	url?: string | null;
}

export interface internal_19 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/* Node of type CompetencesJson */
export interface CompetencesJson extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	name?: string | null;
	description?: string | null;
	internal?: internal_20 | null;
}

export interface internal_20 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/* Node of type SkillsJson */
export interface SkillsJson extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	languages?: languages_2[] | null;
	technical?: technical_2[] | null;
	soft?: soft_2[] | null;
	internal?: internal_21 | null;
}

export interface languages_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface technical_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface soft_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface internal_21 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/* Node of type InterestsJson */
export interface InterestsJson extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	subjects?: subjects_2[] | null;
	internal?: internal_22 | null;
}

export interface subjects_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface internal_22 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/* Node of type ExperiencesJson */
export interface ExperiencesJson extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	work?: work_2[] | null;
	internal?: internal_23 | null;
}

export interface work_2 {
	company?: string | null;
	link?: string | null;
	image?: string | null;
	period?: string | null;
	role?: string | null;
	tasks?: string[] | null;
}

export interface internal_23 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface internal_16 {
	contentDigest?: string | null;
	mediaType?: string | null;
	type?: string | null;
	description?: string | null;
	owner?: string | null;
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: fileGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
	node?: File | null /* The item at the end of the edge */;
	next?: File | null /* The next edge in the connection */;
	previous?: File | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface MarkdownRemarkConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: MarkdownRemarkEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: markdownRemarkGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface MarkdownRemarkEdge {
	node?: MarkdownRemark | null /* The item at the end of the edge */;
	next?: MarkdownRemark | null /* The next edge in the connection */;
	previous?: MarkdownRemark | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: markdownRemarkGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
	node?: MarkdownRemark | null /* The item at the end of the edge */;
	next?: MarkdownRemark | null /* The next edge in the connection */;
	previous?: MarkdownRemark | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface TodoJsonConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: TodoJsonEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: todoJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface TodoJsonEdge {
	node?: TodoJson | null /* The item at the end of the edge */;
	next?: TodoJson | null /* The next edge in the connection */;
	previous?: TodoJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface todoJsonGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: todoJsonGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface todoJsonGroupConnectionEdge {
	node?: TodoJson | null /* The item at the end of the edge */;
	next?: TodoJson | null /* The next edge in the connection */;
	previous?: TodoJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface PersonalJsonConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: PersonalJsonEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: personalJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface PersonalJsonEdge {
	node?: PersonalJson | null /* The item at the end of the edge */;
	next?: PersonalJson | null /* The next edge in the connection */;
	previous?: PersonalJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface personalJsonGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: personalJsonGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface personalJsonGroupConnectionEdge {
	node?: PersonalJson | null /* The item at the end of the edge */;
	next?: PersonalJson | null /* The next edge in the connection */;
	previous?: PersonalJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface CompetencesJsonConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: CompetencesJsonEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: competencesJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface CompetencesJsonEdge {
	node?: CompetencesJson | null /* The item at the end of the edge */;
	next?: CompetencesJson | null /* The next edge in the connection */;
	previous?: CompetencesJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface competencesJsonGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: competencesJsonGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface competencesJsonGroupConnectionEdge {
	node?: CompetencesJson | null /* The item at the end of the edge */;
	next?: CompetencesJson | null /* The next edge in the connection */;
	previous?: CompetencesJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface SkillsJsonConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: SkillsJsonEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: skillsJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface SkillsJsonEdge {
	node?: SkillsJson | null /* The item at the end of the edge */;
	next?: SkillsJson | null /* The next edge in the connection */;
	previous?: SkillsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface skillsJsonGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: skillsJsonGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface skillsJsonGroupConnectionEdge {
	node?: SkillsJson | null /* The item at the end of the edge */;
	next?: SkillsJson | null /* The next edge in the connection */;
	previous?: SkillsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface InterestsJsonConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: InterestsJsonEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: interestsJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface InterestsJsonEdge {
	node?: InterestsJson | null /* The item at the end of the edge */;
	next?: InterestsJson | null /* The next edge in the connection */;
	previous?: InterestsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface interestsJsonGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: interestsJsonGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface interestsJsonGroupConnectionEdge {
	node?: InterestsJson | null /* The item at the end of the edge */;
	next?: InterestsJson | null /* The next edge in the connection */;
	previous?: InterestsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface ExperiencesJsonConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: ExperiencesJsonEdge[] | null /* A list of edges. */;
	totalCount?: number | null;
	distinct?: string[] | null;
	group?: experiencesJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface ExperiencesJsonEdge {
	node?: ExperiencesJson | null /* The item at the end of the edge */;
	next?: ExperiencesJson | null /* The next edge in the connection */;
	previous?: ExperiencesJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface experiencesJsonGroupConnectionConnection {
	pageInfo: PageInfo /* Information to aid in pagination. */;
	edges?: experiencesJsonGroupConnectionEdge[] | null /* A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/* An edge in a connection. */
export interface experiencesJsonGroupConnectionEdge {
	node?: ExperiencesJson | null /* The item at the end of the edge */;
	next?: ExperiencesJson | null /* The next edge in the connection */;
	previous?: ExperiencesJson | null /* The previous edge in the connection */;
}
/* Node of type Site */
export interface Site extends Node {
	id: string /* The id of this node. */;
	parent?: Node | null /* The parent of this node. */;
	children?: Node[] | null /* The children of this node. */;
	siteMetadata?: siteMetadata_2 | null;
	port?: Date | null;
	host?: string | null;
	pathPrefix?: string | null;
	polyfill?: boolean | null;
	buildTime?: Date | null;
	internal?: internal_24 | null;
}

export interface siteMetadata_2 {
	title?: string | null;
	siteUrl?: string | null;
	description?: string | null;
}

export interface internal_24 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface sitePageConnectionSort {
	fields: SitePageConnectionSortByFieldsEnum[];
	order?: sitePageConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterSitePage {
	layout?: sitePageConnectionLayoutQueryString | null;
	jsonName?: sitePageConnectionJsonNameQueryString | null;
	internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null;
	path?: sitePageConnectionPathQueryString_2 | null;
	component?: sitePageConnectionComponentQueryString | null;
	componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null;
	context?: sitePageConnectionContextInputObject | null;
	pluginCreator?: sitePageConnectionPluginCreatorInputObject | null;
	pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString_2 | null;
	componentPath?: sitePageConnectionComponentPathQueryString | null;
	id?: sitePageConnectionIdQueryString_2 | null;
	internal?: sitePageConnectionInternalInputObject_2 | null;
}

export interface sitePageConnectionLayoutQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionComponentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextInputObject {
	group?: sitePageConnectionContextGroupQueryList | null;
	pathPrefix?: sitePageConnectionContextPathPrefixQueryString | null;
	first?: sitePageConnectionContextFirstQueryBoolean | null;
	last?: sitePageConnectionContextLastQueryBoolean | null;
	index?: sitePageConnectionContextIndexQueryInteger | null;
	pageCount?: sitePageConnectionContextPageCountQueryInteger | null;
	additionalContext?: sitePageConnectionContextAdditionalContextInputObject | null;
	slug?: sitePageConnectionContextSlugQueryString | null;
	markdownPath?: sitePageConnectionContextMarkdownPathQueryString | null;
}

export interface sitePageConnectionContextGroupQueryList {
	in?: sitePageConnectionContextGroupInputObject[] | null;
}

export interface sitePageConnectionContextGroupInputObject {
	node?: sitePageConnectionContextGroupNodeInputObject | null;
}

export interface sitePageConnectionContextGroupNodeInputObject {
	excerpt?: sitePageConnectionContextGroupNodeExcerptQueryString | null;
	fileAbsolutePath?: sitePageConnectionContextGroupNodeFileAbsolutePathQueryString | null;
	frontmatter?: sitePageConnectionContextGroupNodeFrontmatterInputObject | null;
}

export interface sitePageConnectionContextGroupNodeExcerptQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextGroupNodeFileAbsolutePathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterInputObject {
	date?: sitePageConnectionContextGroupNodeFrontmatterDateQueryString | null;
	author?: sitePageConnectionContextGroupNodeFrontmatterAuthorQueryString | null;
	link?: sitePageConnectionContextGroupNodeFrontmatterLinkQueryString | null;
	title?: sitePageConnectionContextGroupNodeFrontmatterTitleQueryString | null;
	description?: sitePageConnectionContextGroupNodeFrontmatterDescriptionQueryString | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterDateQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterLinkQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextFirstQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePageConnectionContextLastQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePageConnectionContextIndexQueryInteger {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePageConnectionContextPageCountQueryInteger {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePageConnectionContextAdditionalContextInputObject {
	singlePath?: sitePageConnectionContextAdditionalContextSinglePathQueryString | null;
}

export interface sitePageConnectionContextAdditionalContextSinglePathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextSlugQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionContextMarkdownPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInputObject {
	resolve?: sitePageConnectionPluginCreatorResolveQueryString | null;
	id?: sitePageConnectionPluginCreatorIdQueryString | null;
	name?: sitePageConnectionPluginCreatorNameQueryString | null;
	version?: sitePageConnectionPluginCreatorVersionQueryString | null;
	pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsInputObject | null;
	nodeAPIs?: sitePageConnectionPluginCreatorNodeApIsQueryList | null;
	browserAPIs?: sitePageConnectionPluginCreatorBrowserApIsQueryList | null;
	ssrAPIs?: sitePageConnectionPluginCreatorSsrApIsQueryList | null;
	pluginFilepath?: sitePageConnectionPluginCreatorPluginFilepathQueryString | null;
	packageJson?: sitePageConnectionPluginCreatorPackageJsonInputObject | null;
	parent?: sitePageConnectionPluginCreatorParentQueryString | null;
	internal?: sitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface sitePageConnectionPluginCreatorResolveQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
	plugins?: sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null;
	name?: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
	path?: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
	maxWidth?: sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString | null;
	inlineCodeMarker?: sitePageConnectionPluginCreatorPluginOptionsInlineCodeMarkerQueryString | null;
	short_name?: sitePageConnectionPluginCreatorPluginOptionsShortNameQueryString | null;
	start_url?: sitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString | null;
	background_color?: sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 | null;
	theme_color?: sitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString | null;
	display?: sitePageConnectionPluginCreatorPluginOptionsDisplayQueryString | null;
	pathToConfigModule?: sitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
	in?:
		| sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject[]
		| null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
	resolve?: sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString | null;
	id?: sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null;
	name?: sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString | null;
	version?: sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString | null;
	pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
	pluginFilepath?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
	maxWidth?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
	inlineCodeMarker?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorBrowserApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorSsrApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonInputObject {
	name?: sitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
	description?: sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
	version?: sitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
	main?: sitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
	author?: sitePageConnectionPluginCreatorPackageJsonAuthorQueryString | null;
	license?: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
	dependencies?: sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
	devDependencies?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
	peerDependencies?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
	keywords?: sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
	in?:
		| sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject[]
		| null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
	name?: sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
	version?: sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
	in?:
		| sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject[]
		| null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
	name?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
	version?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
	in?:
		| sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject[]
		| null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
	name?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
	version?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorParentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalInputObject {
	contentDigest?: sitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
	type?: sitePageConnectionPluginCreatorInternalTypeQueryString | null;
	owner?: sitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface sitePageConnectionPluginCreatorInternalContentDigestQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionComponentPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionInternalInputObject_2 {
	type?: sitePageConnectionInternalTypeQueryString_2 | null;
	contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null;
	description?: sitePageConnectionInternalDescriptionQueryString | null;
	owner?: sitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePageConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionInternalDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionSort {
	fields: SitePluginConnectionSortByFieldsEnum[];
	order?: sitePluginConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterSitePlugin {
	resolve?: sitePluginConnectionResolveQueryString_2 | null;
	id?: sitePluginConnectionIdQueryString_2 | null;
	name?: sitePluginConnectionNameQueryString_2 | null;
	version?: sitePluginConnectionVersionQueryString_2 | null;
	pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null;
	nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null;
	browserAPIs?: sitePluginConnectionBrowserApIsQueryList_2 | null;
	ssrAPIs?: sitePluginConnectionSsrApIsQueryList_2 | null;
	pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null;
	packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null;
	internal?: sitePluginConnectionInternalInputObject_2 | null;
}

export interface sitePluginConnectionResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
	plugins?: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
	name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
	path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
	maxWidth?: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 | null;
	linkImagesToOriginal?: sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: sitePluginConnectionPluginOptionsPathPrefixQueryString_2 | null;
	inlineCodeMarker?: sitePluginConnectionPluginOptionsInlineCodeMarkerQueryString_2 | null;
	short_name?: sitePluginConnectionPluginOptionsShortNameQueryString_2 | null;
	start_url?: sitePluginConnectionPluginOptionsStartUrlQueryString_2 | null;
	background_color?: sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 | null;
	theme_color?: sitePluginConnectionPluginOptionsThemeColorQueryString_2 | null;
	display?: sitePluginConnectionPluginOptionsDisplayQueryString_2 | null;
	pathToConfigModule?: sitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
	in?: sitePluginConnectionPluginOptionsPluginsInputObject_2[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
	resolve?: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null;
	id?: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null;
	name?: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null;
	version?: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null;
	pluginOptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;
	pluginFilepath?: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
	maxWidth?: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
	linkImagesToOriginal?: sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
	inlineCodeMarker?: sitePluginConnectionPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsShortNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsStartUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsThemeColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsDisplayQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePluginConnectionBrowserApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePluginConnectionSsrApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
	name?: sitePluginConnectionPackageJsonNameQueryString_2 | null;
	description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
	version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null;
	main?: sitePluginConnectionPackageJsonMainQueryString_2 | null;
	author?: sitePluginConnectionPackageJsonAuthorQueryString_2 | null;
	license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null;
	dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
	devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
	peerDependencies?: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;
	keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
	in?: sitePluginConnectionPackageJsonDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
	name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
	version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
	in?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
	name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
	version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
	in?: sitePluginConnectionPackageJsonPeerDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
	name?: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;
	version?: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePluginConnectionInternalInputObject_2 {
	contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null;
	type?: sitePluginConnectionInternalTypeQueryString_2 | null;
	owner?: sitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionSort {
	fields: DirectoryConnectionSortByFieldsEnum[];
	order?: directoryConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterDirectory {
	id?: directoryConnectionIdQueryString_2 | null;
	internal?: directoryConnectionInternalInputObject_2 | null;
	sourceInstanceName?: directoryConnectionSourceInstanceNameQueryString_2 | null;
	absolutePath?: directoryConnectionAbsolutePathQueryString_2 | null;
	relativePath?: directoryConnectionRelativePathQueryString_2 | null;
	extension?: directoryConnectionExtensionQueryString_2 | null;
	size?: directoryConnectionSizeQueryInteger_2 | null;
	prettySize?: directoryConnectionPrettySizeQueryString_2 | null;
	modifiedTime?: directoryConnectionModifiedTimeQueryString_2 | null;
	accessTime?: directoryConnectionAccessTimeQueryString_2 | null;
	changeTime?: directoryConnectionChangeTimeQueryString_2 | null;
	birthTime?: directoryConnectionBirthTimeQueryString_2 | null;
	root?: directoryConnectionRootQueryString_2 | null;
	dir?: directoryConnectionDirQueryString_2 | null;
	base?: directoryConnectionBaseQueryString_2 | null;
	ext?: directoryConnectionExtQueryString_2 | null;
	name?: directoryConnectionNameQueryString_2 | null;
	relativeDirectory?: directoryConnectionRelativeDirectoryQueryString_2 | null;
	dev?: directoryConnectionDevQueryInteger_2 | null;
	mode?: directoryConnectionModeQueryInteger_2 | null;
	nlink?: directoryConnectionNlinkQueryInteger_2 | null;
	uid?: directoryConnectionUidQueryInteger_2 | null;
	gid?: directoryConnectionGidQueryInteger_2 | null;
	rdev?: directoryConnectionRdevQueryInteger_2 | null;
	blksize?: directoryConnectionBlksizeQueryInteger_2 | null;
	ino?: directoryConnectionInoQueryInteger_2 | null;
	blocks?: directoryConnectionBlocksQueryInteger_2 | null;
	atimeMs?: directoryConnectionAtimeMsQueryFloat_2 | null;
	mtimeMs?: directoryConnectionMtimeMsQueryFloat_2 | null;
	ctimeMs?: directoryConnectionCtimeMsQueryFloat_2 | null;
	birthtimeMs?: directoryConnectionBirthtimeMsQueryFloat_2 | null;
	atime?: directoryConnectionAtimeQueryString_2 | null;
	mtime?: directoryConnectionMtimeQueryString_2 | null;
	ctime?: directoryConnectionCtimeQueryString_2 | null;
	birthtime?: directoryConnectionBirthtimeQueryString_2 | null;
}

export interface directoryConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionInternalInputObject_2 {
	contentDigest?: directoryConnectionInternalContentDigestQueryString_2 | null;
	type?: directoryConnectionInternalTypeQueryString_2 | null;
	description?: directoryConnectionInternalDescriptionQueryString_2 | null;
	owner?: directoryConnectionInternalOwnerQueryString_2 | null;
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryConnectionAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryConnectionBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionSort {
	fields: FileConnectionSortByFieldsEnum[];
	order?: fileConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterFile {
	id?: fileConnectionIdQueryString_2 | null;
	internal?: fileConnectionInternalInputObject_2 | null;
	sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null;
	absolutePath?: fileConnectionAbsolutePathQueryString_2 | null;
	relativePath?: fileConnectionRelativePathQueryString_2 | null;
	extension?: fileConnectionExtensionQueryString_2 | null;
	size?: fileConnectionSizeQueryInteger_2 | null;
	prettySize?: fileConnectionPrettySizeQueryString_2 | null;
	modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null;
	accessTime?: fileConnectionAccessTimeQueryString_2 | null;
	changeTime?: fileConnectionChangeTimeQueryString_2 | null;
	birthTime?: fileConnectionBirthTimeQueryString_2 | null;
	root?: fileConnectionRootQueryString_2 | null;
	dir?: fileConnectionDirQueryString_2 | null;
	base?: fileConnectionBaseQueryString_2 | null;
	ext?: fileConnectionExtQueryString_2 | null;
	name?: fileConnectionNameQueryString_2 | null;
	relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2 | null;
	dev?: fileConnectionDevQueryInteger_2 | null;
	mode?: fileConnectionModeQueryInteger_2 | null;
	nlink?: fileConnectionNlinkQueryInteger_2 | null;
	uid?: fileConnectionUidQueryInteger_2 | null;
	gid?: fileConnectionGidQueryInteger_2 | null;
	rdev?: fileConnectionRdevQueryInteger_2 | null;
	blksize?: fileConnectionBlksizeQueryInteger_2 | null;
	ino?: fileConnectionInoQueryInteger_2 | null;
	blocks?: fileConnectionBlocksQueryInteger_2 | null;
	atimeMs?: fileConnectionAtimeMsQueryFloat_2 | null;
	mtimeMs?: fileConnectionMtimeMsQueryFloat_2 | null;
	ctimeMs?: fileConnectionCtimeMsQueryFloat_2 | null;
	birthtimeMs?: fileConnectionBirthtimeMsQueryFloat_2 | null;
	atime?: fileConnectionAtimeQueryString_2 | null;
	mtime?: fileConnectionMtimeQueryString_2 | null;
	ctime?: fileConnectionCtimeQueryString_2 | null;
	birthtime?: fileConnectionBirthtimeQueryString_2 | null;
	publicURL?: publicUrlQueryString_4 | null;
}

export interface fileConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionInternalInputObject_2 {
	contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null;
	mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null;
	type?: fileConnectionInternalTypeQueryString_2 | null;
	description?: fileConnectionInternalDescriptionQueryString_2 | null;
	owner?: fileConnectionInternalOwnerQueryString_2 | null;
}

export interface fileConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileConnectionAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileConnectionBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface publicUrlQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionSort {
	fields: MarkdownRemarkConnectionSortByFieldsEnum[];
	order?: markdownRemarkConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterMarkdownRemark {
	id?: markdownRemarkConnectionIdQueryString_2 | null;
	internal?: markdownRemarkConnectionInternalInputObject_2 | null;
	frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null;
	excerpt?: excerptQueryString_4 | null;
	fileAbsolutePath?: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null;
	html?: htmlQueryString_4 | null;
	headings?: headingsQueryList_4 | null;
	timeToRead?: timeToReadQueryInt_4 | null;
	tableOfContents?: tableOfContentsQueryString_4 | null;
	wordCount?: wordCountTypeName_4 | null;
}

export interface markdownRemarkConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionInternalInputObject_2 {
	content?: markdownRemarkConnectionInternalContentQueryString_2 | null;
	type?: markdownRemarkConnectionInternalTypeQueryString_2 | null;
	contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null;
	owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null;
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
	title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
	author?: markdownRemarkConnectionFrontmatterAuthorQueryString_2 | null;
	link?: markdownRemarkConnectionFrontmatterLinkQueryString_2 | null;
	_PARENT?: markdownRemarkConnectionFrontmatterParentQueryString_3 | null;
	parent?: markdownRemarkConnectionFrontmatterParentQueryString_4 | null;
	startDate?: markdownRemarkConnectionFrontmatterStartDateQueryString_2 | null;
	description?: markdownRemarkConnectionFrontmatterDescriptionQueryString_2 | null;
	date?: markdownRemarkConnectionFrontmatterDateQueryString_2 | null;
	type?: markdownRemarkConnectionFrontmatterTypeQueryString_2 | null;
	draft?: markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null;
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterStartDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface excerptQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface htmlQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface headingsQueryList_4 {
	value?: headingsListElemValueQueryString_4 | null;
	depth?: headingsListElemDepthQueryInt_4 | null;
	in?: markdownHeadingInputObject_4[] | null;
}

export interface headingsListElemValueQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface headingsListElemDepthQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
}

export interface markdownHeadingInputObject_4 {
	value?: string | null;
	depth?: number | null;
}

export interface timeToReadQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
}

export interface tableOfContentsQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface wordCountTypeName_4 {
	paragraphs?: wordCountParagraphsQueryInt_4 | null;
	sentences?: wordCountSentencesQueryInt_4 | null;
	words?: wordCountWordsQueryInt_4 | null;
}

export interface wordCountParagraphsQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
}

export interface wordCountSentencesQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
}

export interface wordCountWordsQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
}

export interface todoJsonConnectionSort {
	fields: TodoJsonConnectionSortByFieldsEnum[];
	order?: todoJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterTodoJson {
	title?: todoJsonConnectionTitleQueryString_2 | null;
	tags?: todoJsonConnectionTagsQueryList_2 | null;
	id?: todoJsonConnectionIdQueryString_2 | null;
	internal?: todoJsonConnectionInternalInputObject_2 | null;
}

export interface todoJsonConnectionTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface todoJsonConnectionTagsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface todoJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface todoJsonConnectionInternalInputObject_2 {
	contentDigest?: todoJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: todoJsonConnectionInternalTypeQueryString_2 | null;
	owner?: todoJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface todoJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface todoJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface todoJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonConnectionSort {
	fields: PersonalJsonConnectionSortByFieldsEnum[];
	order?: personalJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterPersonalJson {
	email?: personalJsonConnectionEmailQueryString_2 | null;
	social?: personalJsonConnectionSocialQueryList_2 | null;
	id?: personalJsonConnectionIdQueryString_2 | null;
	internal?: personalJsonConnectionInternalInputObject_2 | null;
}

export interface personalJsonConnectionEmailQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonConnectionSocialQueryList_2 {
	in?: personalJsonConnectionSocialInputObject_2[] | null;
}

export interface personalJsonConnectionSocialInputObject_2 {
	serviceName?: personalJsonConnectionSocialServiceNameQueryString_2 | null;
	icon?: personalJsonConnectionSocialIconQueryString_2 | null;
	url?: personalJsonConnectionSocialUrlQueryString_2 | null;
}

export interface personalJsonConnectionSocialServiceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonConnectionSocialIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonConnectionSocialUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonConnectionInternalInputObject_2 {
	contentDigest?: personalJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: personalJsonConnectionInternalTypeQueryString_2 | null;
	owner?: personalJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface personalJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonConnectionSort {
	fields: CompetencesJsonConnectionSortByFieldsEnum[];
	order?: competencesJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterCompetencesJson {
	name?: competencesJsonConnectionNameQueryString_2 | null;
	description?: competencesJsonConnectionDescriptionQueryString_2 | null;
	id?: competencesJsonConnectionIdQueryString_2 | null;
	internal?: competencesJsonConnectionInternalInputObject_2 | null;
}

export interface competencesJsonConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonConnectionDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonConnectionInternalInputObject_2 {
	contentDigest?: competencesJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: competencesJsonConnectionInternalTypeQueryString_2 | null;
	owner?: competencesJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface competencesJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonConnectionSort {
	fields: SkillsJsonConnectionSortByFieldsEnum[];
	order?: skillsJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterSkillsJson {
	languages?: skillsJsonConnectionLanguagesQueryList_2 | null;
	technical?: skillsJsonConnectionTechnicalQueryList_2 | null;
	soft?: skillsJsonConnectionSoftQueryList_2 | null;
	id?: skillsJsonConnectionIdQueryString_2 | null;
	internal?: skillsJsonConnectionInternalInputObject_2 | null;
}

export interface skillsJsonConnectionLanguagesQueryList_2 {
	in?: skillsJsonConnectionLanguagesInputObject_2[] | null;
}

export interface skillsJsonConnectionLanguagesInputObject_2 {
	name?: skillsJsonConnectionLanguagesNameQueryString_2 | null;
	intensity?: skillsJsonConnectionLanguagesIntensityQueryInteger_2 | null;
}

export interface skillsJsonConnectionLanguagesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonConnectionLanguagesIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface skillsJsonConnectionTechnicalQueryList_2 {
	in?: skillsJsonConnectionTechnicalInputObject_2[] | null;
}

export interface skillsJsonConnectionTechnicalInputObject_2 {
	name?: skillsJsonConnectionTechnicalNameQueryString_2 | null;
	intensity?: skillsJsonConnectionTechnicalIntensityQueryInteger_2 | null;
}

export interface skillsJsonConnectionTechnicalNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonConnectionTechnicalIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface skillsJsonConnectionSoftQueryList_2 {
	in?: skillsJsonConnectionSoftInputObject_2[] | null;
}

export interface skillsJsonConnectionSoftInputObject_2 {
	name?: skillsJsonConnectionSoftNameQueryString_2 | null;
	intensity?: skillsJsonConnectionSoftIntensityQueryInteger_2 | null;
}

export interface skillsJsonConnectionSoftNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonConnectionSoftIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface skillsJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonConnectionInternalInputObject_2 {
	contentDigest?: skillsJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: skillsJsonConnectionInternalTypeQueryString_2 | null;
	owner?: skillsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface skillsJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonConnectionSort {
	fields: InterestsJsonConnectionSortByFieldsEnum[];
	order?: interestsJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterInterestsJson {
	subjects?: interestsJsonConnectionSubjectsQueryList_2 | null;
	id?: interestsJsonConnectionIdQueryString_2 | null;
	internal?: interestsJsonConnectionInternalInputObject_2 | null;
}

export interface interestsJsonConnectionSubjectsQueryList_2 {
	in?: interestsJsonConnectionSubjectsInputObject_2[] | null;
}

export interface interestsJsonConnectionSubjectsInputObject_2 {
	name?: interestsJsonConnectionSubjectsNameQueryString_2 | null;
	intensity?: interestsJsonConnectionSubjectsIntensityQueryInteger_2 | null;
}

export interface interestsJsonConnectionSubjectsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonConnectionSubjectsIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface interestsJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonConnectionInternalInputObject_2 {
	contentDigest?: interestsJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: interestsJsonConnectionInternalTypeQueryString_2 | null;
	owner?: interestsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface interestsJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionSort {
	fields: ExperiencesJsonConnectionSortByFieldsEnum[];
	order?: experiencesJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterExperiencesJson {
	work?: experiencesJsonConnectionWorkQueryList_2 | null;
	id?: experiencesJsonConnectionIdQueryString_2 | null;
	internal?: experiencesJsonConnectionInternalInputObject_2 | null;
}

export interface experiencesJsonConnectionWorkQueryList_2 {
	in?: experiencesJsonConnectionWorkInputObject_2[] | null;
}

export interface experiencesJsonConnectionWorkInputObject_2 {
	company?: experiencesJsonConnectionWorkCompanyQueryString_2 | null;
	link?: experiencesJsonConnectionWorkLinkQueryString_2 | null;
	image?: experiencesJsonConnectionWorkImageQueryString_2 | null;
	period?: experiencesJsonConnectionWorkPeriodQueryString_2 | null;
	role?: experiencesJsonConnectionWorkRoleQueryString_2 | null;
	tasks?: experiencesJsonConnectionWorkTasksQueryList_2 | null;
}

export interface experiencesJsonConnectionWorkCompanyQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionWorkLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionWorkImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionWorkPeriodQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionWorkRoleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionWorkTasksQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface experiencesJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionInternalInputObject_2 {
	contentDigest?: experiencesJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: experiencesJsonConnectionInternalTypeQueryString_2 | null;
	owner?: experiencesJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface experiencesJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageLayoutQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageInternalComponentNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageComponentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageComponentChunkNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextInputObject {
	group?: sitePageContextGroupQueryList | null;
	pathPrefix?: sitePageContextPathPrefixQueryString | null;
	first?: sitePageContextFirstQueryBoolean | null;
	last?: sitePageContextLastQueryBoolean | null;
	index?: sitePageContextIndexQueryInteger | null;
	pageCount?: sitePageContextPageCountQueryInteger | null;
	additionalContext?: sitePageContextAdditionalContextInputObject | null;
	slug?: sitePageContextSlugQueryString | null;
	markdownPath?: sitePageContextMarkdownPathQueryString | null;
}

export interface sitePageContextGroupQueryList {
	in?: sitePageContextGroupInputObject[] | null;
}

export interface sitePageContextGroupInputObject {
	node?: sitePageContextGroupNodeInputObject | null;
}

export interface sitePageContextGroupNodeInputObject {
	excerpt?: sitePageContextGroupNodeExcerptQueryString | null;
	fileAbsolutePath?: sitePageContextGroupNodeFileAbsolutePathQueryString | null;
	frontmatter?: sitePageContextGroupNodeFrontmatterInputObject | null;
}

export interface sitePageContextGroupNodeExcerptQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextGroupNodeFileAbsolutePathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextGroupNodeFrontmatterInputObject {
	date?: sitePageContextGroupNodeFrontmatterDateQueryString | null;
	author?: sitePageContextGroupNodeFrontmatterAuthorQueryString | null;
	link?: sitePageContextGroupNodeFrontmatterLinkQueryString | null;
	title?: sitePageContextGroupNodeFrontmatterTitleQueryString | null;
	description?: sitePageContextGroupNodeFrontmatterDescriptionQueryString | null;
}

export interface sitePageContextGroupNodeFrontmatterDateQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextGroupNodeFrontmatterAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextGroupNodeFrontmatterLinkQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextGroupNodeFrontmatterTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextGroupNodeFrontmatterDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextFirstQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePageContextLastQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePageContextIndexQueryInteger {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePageContextPageCountQueryInteger {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePageContextAdditionalContextInputObject {
	singlePath?: sitePageContextAdditionalContextSinglePathQueryString | null;
}

export interface sitePageContextAdditionalContextSinglePathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextSlugQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageContextMarkdownPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorInputObject {
	resolve?: sitePagePluginCreatorResolveQueryString | null;
	id?: sitePagePluginCreatorIdQueryString | null;
	name?: sitePagePluginCreatorNameQueryString | null;
	version?: sitePagePluginCreatorVersionQueryString | null;
	pluginOptions?: sitePagePluginCreatorPluginOptionsInputObject | null;
	nodeAPIs?: sitePagePluginCreatorNodeApIsQueryList | null;
	browserAPIs?: sitePagePluginCreatorBrowserApIsQueryList | null;
	ssrAPIs?: sitePagePluginCreatorSsrApIsQueryList | null;
	pluginFilepath?: sitePagePluginCreatorPluginFilepathQueryString | null;
	packageJson?: sitePagePluginCreatorPackageJsonInputObject | null;
	parent?: sitePagePluginCreatorParentQueryString | null;
	internal?: sitePagePluginCreatorInternalInputObject | null;
}

export interface sitePagePluginCreatorResolveQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
	plugins?: sitePagePluginCreatorPluginOptionsPluginsQueryList | null;
	name?: sitePagePluginCreatorPluginOptionsNameQueryString | null;
	path?: sitePagePluginCreatorPluginOptionsPathQueryString | null;
	maxWidth?: sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: sitePagePluginCreatorPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: sitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: sitePagePluginCreatorPluginOptionsPathPrefixQueryString | null;
	inlineCodeMarker?: sitePagePluginCreatorPluginOptionsInlineCodeMarkerQueryString | null;
	short_name?: sitePagePluginCreatorPluginOptionsShortNameQueryString | null;
	start_url?: sitePagePluginCreatorPluginOptionsStartUrlQueryString | null;
	background_color?: sitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 | null;
	theme_color?: sitePagePluginCreatorPluginOptionsThemeColorQueryString | null;
	display?: sitePagePluginCreatorPluginOptionsDisplayQueryString | null;
	pathToConfigModule?: sitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsQueryList {
	in?: sitePagePluginCreatorPluginOptionsPluginsInputObject[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsInputObject {
	resolve?: sitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null;
	id?: sitePagePluginCreatorPluginOptionsPluginsIdQueryString | null;
	name?: sitePagePluginCreatorPluginOptionsPluginsNameQueryString | null;
	version?: sitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null;
	pluginOptions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
	pluginFilepath?: sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
	maxWidth?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
	inlineCodeMarker?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePagePluginCreatorPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsShortNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsStartUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsThemeColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsDisplayQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorNodeApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePagePluginCreatorBrowserApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePagePluginCreatorSsrApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonInputObject {
	name?: sitePagePluginCreatorPackageJsonNameQueryString | null;
	description?: sitePagePluginCreatorPackageJsonDescriptionQueryString | null;
	version?: sitePagePluginCreatorPackageJsonVersionQueryString | null;
	main?: sitePagePluginCreatorPackageJsonMainQueryString | null;
	author?: sitePagePluginCreatorPackageJsonAuthorQueryString | null;
	license?: sitePagePluginCreatorPackageJsonLicenseQueryString | null;
	dependencies?: sitePagePluginCreatorPackageJsonDependenciesQueryList | null;
	devDependencies?: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
	peerDependencies?: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
	keywords?: sitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePagePluginCreatorPackageJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
	in?: sitePagePluginCreatorPackageJsonDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {
	name?: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
	version?: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
	in?: sitePagePluginCreatorPackageJsonDevDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {
	name?: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
	version?: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
	in?: sitePagePluginCreatorPackageJsonPeerDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
	name?: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
	version?: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePagePluginCreatorParentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorInternalInputObject {
	contentDigest?: sitePagePluginCreatorInternalContentDigestQueryString | null;
	type?: sitePagePluginCreatorInternalTypeQueryString | null;
	owner?: sitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface sitePagePluginCreatorInternalContentDigestQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorInternalTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageComponentPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageInternalInputObject_2 {
	type?: sitePageInternalTypeQueryString_2 | null;
	contentDigest?: sitePageInternalContentDigestQueryString_2 | null;
	description?: sitePageInternalDescriptionQueryString | null;
	owner?: sitePageInternalOwnerQueryString_2 | null;
}

export interface sitePageInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageInternalDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePageInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
	plugins?: sitePluginPluginOptionsPluginsQueryList_2 | null;
	name?: sitePluginPluginOptionsNameQueryString_2 | null;
	path?: sitePluginPluginOptionsPathQueryString_2 | null;
	maxWidth?: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: sitePluginPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: sitePluginPluginOptionsBackgroundColorQueryString_3 | null;
	linkImagesToOriginal?: sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: sitePluginPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: sitePluginPluginOptionsPathPrefixQueryString_2 | null;
	inlineCodeMarker?: sitePluginPluginOptionsInlineCodeMarkerQueryString_2 | null;
	short_name?: sitePluginPluginOptionsShortNameQueryString_2 | null;
	start_url?: sitePluginPluginOptionsStartUrlQueryString_2 | null;
	background_color?: sitePluginPluginOptionsBackgroundColorQueryString_4 | null;
	theme_color?: sitePluginPluginOptionsThemeColorQueryString_2 | null;
	display?: sitePluginPluginOptionsDisplayQueryString_2 | null;
	pathToConfigModule?: sitePluginPluginOptionsPathToConfigModuleQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
	in?: sitePluginPluginOptionsPluginsInputObject_2[] | null;
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
	resolve?: sitePluginPluginOptionsPluginsResolveQueryString_2 | null;
	id?: sitePluginPluginOptionsPluginsIdQueryString_2 | null;
	name?: sitePluginPluginOptionsPluginsNameQueryString_2 | null;
	version?: sitePluginPluginOptionsPluginsVersionQueryString_2 | null;
	pluginOptions?: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;
	pluginFilepath?: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
	maxWidth?: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
	linkImagesToOriginal?: sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
	inlineCodeMarker?: sitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface sitePluginPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePluginPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface sitePluginPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsShortNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsStartUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsThemeColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsDisplayQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPluginOptionsPathToConfigModuleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginNodeApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePluginBrowserApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePluginSsrApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonInputObject_2 {
	name?: sitePluginPackageJsonNameQueryString_2 | null;
	description?: sitePluginPackageJsonDescriptionQueryString_2 | null;
	version?: sitePluginPackageJsonVersionQueryString_2 | null;
	main?: sitePluginPackageJsonMainQueryString_2 | null;
	author?: sitePluginPackageJsonAuthorQueryString_2 | null;
	license?: sitePluginPackageJsonLicenseQueryString_2 | null;
	dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null;
	devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null;
	peerDependencies?: sitePluginPackageJsonPeerDependenciesQueryList_2 | null;
	keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginPackageJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonAuthorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
	in?: sitePluginPackageJsonDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
	name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null;
	version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
	in?: sitePluginPackageJsonDevDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
	name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
	version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
	in?: sitePluginPackageJsonPeerDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
	name?: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;
	version?: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface sitePluginInternalInputObject_2 {
	contentDigest?: sitePluginInternalContentDigestQueryString_2 | null;
	type?: sitePluginInternalTypeQueryString_2 | null;
	owner?: sitePluginInternalOwnerQueryString_2 | null;
}

export interface sitePluginInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface siteSiteMetadataInputObject_2 {
	title?: siteSiteMetadataTitleQueryString_2 | null;
	siteUrl?: siteSiteMetadataSiteUrlQueryString_2 | null;
	description?: siteSiteMetadataDescriptionQueryString_2 | null;
}

export interface siteSiteMetadataTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface siteSiteMetadataSiteUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface siteSiteMetadataDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePortQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface siteHostQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface sitePolyfillQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface siteBuildTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface siteIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface siteInternalInputObject_2 {
	contentDigest?: siteInternalContentDigestQueryString_2 | null;
	type?: siteInternalTypeQueryString_2 | null;
	owner?: siteInternalOwnerQueryString_2 | null;
}

export interface siteInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface siteInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface siteInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryInternalInputObject_2 {
	contentDigest?: directoryInternalContentDigestQueryString_2 | null;
	type?: directoryInternalTypeQueryString_2 | null;
	description?: directoryInternalDescriptionQueryString_2 | null;
	owner?: directoryInternalOwnerQueryString_2 | null;
}

export interface directoryInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directorySourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directorySizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface directoryAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface directoryBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileInternalInputObject_2 {
	contentDigest?: fileInternalContentDigestQueryString_2 | null;
	mediaType?: fileInternalMediaTypeQueryString_2 | null;
	type?: fileInternalTypeQueryString_2 | null;
	description?: fileInternalDescriptionQueryString_2 | null;
	owner?: fileInternalOwnerQueryString_2 | null;
}

export interface fileInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileInternalMediaTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface filePrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface fileAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface fileBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface publicUrlQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkInternalInputObject_2 {
	content?: markdownRemarkInternalContentQueryString_2 | null;
	type?: markdownRemarkInternalTypeQueryString_2 | null;
	contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null;
	owner?: markdownRemarkInternalOwnerQueryString_2 | null;
}

export interface markdownRemarkInternalContentQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterInputObject_2 {
	title?: markdownRemarkFrontmatterTitleQueryString_2 | null;
	author?: markdownRemarkFrontmatterAuthorQueryString_2 | null;
	link?: markdownRemarkFrontmatterLinkQueryString_2 | null;
	_PARENT?: markdownRemarkFrontmatterParentQueryString_3 | null;
	parent?: markdownRemarkFrontmatterParentQueryString_4 | null;
	startDate?: markdownRemarkFrontmatterStartDateQueryString_2 | null;
	description?: markdownRemarkFrontmatterDescriptionQueryString_2 | null;
	date?: markdownRemarkFrontmatterDateQueryString_2 | null;
	type?: markdownRemarkFrontmatterTypeQueryString_2 | null;
	draft?: markdownRemarkFrontmatterDraftQueryBoolean_2 | null;
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterAuthorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterParentQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterParentQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterStartDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
}

export interface excerptQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface htmlQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface headingsQueryList_3 {
	value?: headingsListElemValueQueryString_3 | null;
	depth?: headingsListElemDepthQueryInt_3 | null;
	in?: markdownHeadingInputObject_3[] | null;
}

export interface headingsListElemValueQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface headingsListElemDepthQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
}

export interface markdownHeadingInputObject_3 {
	value?: string | null;
	depth?: number | null;
}

export interface timeToReadQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
}

export interface tableOfContentsQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface wordCountTypeName_3 {
	paragraphs?: wordCountParagraphsQueryInt_3 | null;
	sentences?: wordCountSentencesQueryInt_3 | null;
	words?: wordCountWordsQueryInt_3 | null;
}

export interface wordCountParagraphsQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
}

export interface wordCountSentencesQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
}

export interface wordCountWordsQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
}

export interface todoJsonTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface todoJsonTagsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface todoJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface todoJsonInternalInputObject_2 {
	contentDigest?: todoJsonInternalContentDigestQueryString_2 | null;
	type?: todoJsonInternalTypeQueryString_2 | null;
	owner?: todoJsonInternalOwnerQueryString_2 | null;
}

export interface todoJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface todoJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface todoJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonEmailQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonSocialQueryList_2 {
	in?: personalJsonSocialInputObject_2[] | null;
}

export interface personalJsonSocialInputObject_2 {
	serviceName?: personalJsonSocialServiceNameQueryString_2 | null;
	icon?: personalJsonSocialIconQueryString_2 | null;
	url?: personalJsonSocialUrlQueryString_2 | null;
}

export interface personalJsonSocialServiceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonSocialIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonSocialUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonInternalInputObject_2 {
	contentDigest?: personalJsonInternalContentDigestQueryString_2 | null;
	type?: personalJsonInternalTypeQueryString_2 | null;
	owner?: personalJsonInternalOwnerQueryString_2 | null;
}

export interface personalJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface personalJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonInternalInputObject_2 {
	contentDigest?: competencesJsonInternalContentDigestQueryString_2 | null;
	type?: competencesJsonInternalTypeQueryString_2 | null;
	owner?: competencesJsonInternalOwnerQueryString_2 | null;
}

export interface competencesJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface competencesJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonLanguagesQueryList_2 {
	in?: skillsJsonLanguagesInputObject_2[] | null;
}

export interface skillsJsonLanguagesInputObject_2 {
	name?: skillsJsonLanguagesNameQueryString_2 | null;
	intensity?: skillsJsonLanguagesIntensityQueryInteger_2 | null;
}

export interface skillsJsonLanguagesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonLanguagesIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface skillsJsonTechnicalQueryList_2 {
	in?: skillsJsonTechnicalInputObject_2[] | null;
}

export interface skillsJsonTechnicalInputObject_2 {
	name?: skillsJsonTechnicalNameQueryString_2 | null;
	intensity?: skillsJsonTechnicalIntensityQueryInteger_2 | null;
}

export interface skillsJsonTechnicalNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonTechnicalIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface skillsJsonSoftQueryList_2 {
	in?: skillsJsonSoftInputObject_2[] | null;
}

export interface skillsJsonSoftInputObject_2 {
	name?: skillsJsonSoftNameQueryString_2 | null;
	intensity?: skillsJsonSoftIntensityQueryInteger_2 | null;
}

export interface skillsJsonSoftNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonSoftIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface skillsJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonInternalInputObject_2 {
	contentDigest?: skillsJsonInternalContentDigestQueryString_2 | null;
	type?: skillsJsonInternalTypeQueryString_2 | null;
	owner?: skillsJsonInternalOwnerQueryString_2 | null;
}

export interface skillsJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface skillsJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonSubjectsQueryList_2 {
	in?: interestsJsonSubjectsInputObject_2[] | null;
}

export interface interestsJsonSubjectsInputObject_2 {
	name?: interestsJsonSubjectsNameQueryString_2 | null;
	intensity?: interestsJsonSubjectsIntensityQueryInteger_2 | null;
}

export interface interestsJsonSubjectsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonSubjectsIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
}

export interface interestsJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonInternalInputObject_2 {
	contentDigest?: interestsJsonInternalContentDigestQueryString_2 | null;
	type?: interestsJsonInternalTypeQueryString_2 | null;
	owner?: interestsJsonInternalOwnerQueryString_2 | null;
}

export interface interestsJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface interestsJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonWorkQueryList_2 {
	in?: experiencesJsonWorkInputObject_2[] | null;
}

export interface experiencesJsonWorkInputObject_2 {
	company?: experiencesJsonWorkCompanyQueryString_2 | null;
	link?: experiencesJsonWorkLinkQueryString_2 | null;
	image?: experiencesJsonWorkImageQueryString_2 | null;
	period?: experiencesJsonWorkPeriodQueryString_2 | null;
	role?: experiencesJsonWorkRoleQueryString_2 | null;
	tasks?: experiencesJsonWorkTasksQueryList_2 | null;
}

export interface experiencesJsonWorkCompanyQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonWorkLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonWorkImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonWorkPeriodQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonWorkRoleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonWorkTasksQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: string[] | null;
}

export interface experiencesJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonInternalInputObject_2 {
	contentDigest?: experiencesJsonInternalContentDigestQueryString_2 | null;
	type?: experiencesJsonInternalTypeQueryString_2 | null;
	owner?: experiencesJsonInternalOwnerQueryString_2 | null;
}

export interface experiencesJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}

export interface experiencesJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
}
export interface AllSitePageRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: sitePageConnectionSort | null;
	filter?: filterSitePage | null;
}
export interface AllSitePluginRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: sitePluginConnectionSort | null;
	filter?: filterSitePlugin | null;
}
export interface AllDirectoryRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: directoryConnectionSort | null;
	filter?: filterDirectory | null;
}
export interface AllFileRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: fileConnectionSort | null;
	filter?: filterFile | null;
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: markdownRemarkConnectionSort | null;
	filter?: filterMarkdownRemark | null;
}
export interface AllTodoJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: todoJsonConnectionSort | null;
	filter?: filterTodoJson | null;
}
export interface AllPersonalJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: personalJsonConnectionSort | null;
	filter?: filterPersonalJson | null;
}
export interface AllCompetencesJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: competencesJsonConnectionSort | null;
	filter?: filterCompetencesJson | null;
}
export interface AllSkillsJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: skillsJsonConnectionSort | null;
	filter?: filterSkillsJson | null;
}
export interface AllInterestsJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: interestsJsonConnectionSort | null;
	filter?: filterInterestsJson | null;
}
export interface AllExperiencesJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: experiencesJsonConnectionSort | null;
	filter?: filterExperiencesJson | null;
}
export interface SitePageRootQueryTypeArgs {
	layout?: sitePageLayoutQueryString | null;
	jsonName?: sitePageJsonNameQueryString | null;
	internalComponentName?: sitePageInternalComponentNameQueryString | null;
	path?: sitePagePathQueryString_2 | null;
	component?: sitePageComponentQueryString | null;
	componentChunkName?: sitePageComponentChunkNameQueryString | null;
	context?: sitePageContextInputObject | null;
	pluginCreator?: sitePagePluginCreatorInputObject | null;
	pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null;
	componentPath?: sitePageComponentPathQueryString | null;
	id?: sitePageIdQueryString_2 | null;
	internal?: sitePageInternalInputObject_2 | null;
}
export interface SitePluginRootQueryTypeArgs {
	resolve?: sitePluginResolveQueryString_2 | null;
	id?: sitePluginIdQueryString_2 | null;
	name?: sitePluginNameQueryString_2 | null;
	version?: sitePluginVersionQueryString_2 | null;
	pluginOptions?: sitePluginPluginOptionsInputObject_2 | null;
	nodeAPIs?: sitePluginNodeApIsQueryList_2 | null;
	browserAPIs?: sitePluginBrowserApIsQueryList_2 | null;
	ssrAPIs?: sitePluginSsrApIsQueryList_2 | null;
	pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null;
	packageJson?: sitePluginPackageJsonInputObject_2 | null;
	internal?: sitePluginInternalInputObject_2 | null;
}
export interface SiteRootQueryTypeArgs {
	siteMetadata?: siteSiteMetadataInputObject_2 | null;
	port?: sitePortQueryString_2 | null;
	host?: siteHostQueryString_2 | null;
	pathPrefix?: sitePathPrefixQueryString_2 | null;
	polyfill?: sitePolyfillQueryBoolean_2 | null;
	buildTime?: siteBuildTimeQueryString_2 | null;
	id?: siteIdQueryString_2 | null;
	internal?: siteInternalInputObject_2 | null;
}
export interface DirectoryRootQueryTypeArgs {
	id?: directoryIdQueryString_2 | null;
	internal?: directoryInternalInputObject_2 | null;
	sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null;
	absolutePath?: directoryAbsolutePathQueryString_2 | null;
	relativePath?: directoryRelativePathQueryString_2 | null;
	extension?: directoryExtensionQueryString_2 | null;
	size?: directorySizeQueryInteger_2 | null;
	prettySize?: directoryPrettySizeQueryString_2 | null;
	modifiedTime?: directoryModifiedTimeQueryString_2 | null;
	accessTime?: directoryAccessTimeQueryString_2 | null;
	changeTime?: directoryChangeTimeQueryString_2 | null;
	birthTime?: directoryBirthTimeQueryString_2 | null;
	root?: directoryRootQueryString_2 | null;
	dir?: directoryDirQueryString_2 | null;
	base?: directoryBaseQueryString_2 | null;
	ext?: directoryExtQueryString_2 | null;
	name?: directoryNameQueryString_2 | null;
	relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null;
	dev?: directoryDevQueryInteger_2 | null;
	mode?: directoryModeQueryInteger_2 | null;
	nlink?: directoryNlinkQueryInteger_2 | null;
	uid?: directoryUidQueryInteger_2 | null;
	gid?: directoryGidQueryInteger_2 | null;
	rdev?: directoryRdevQueryInteger_2 | null;
	blksize?: directoryBlksizeQueryInteger_2 | null;
	ino?: directoryInoQueryInteger_2 | null;
	blocks?: directoryBlocksQueryInteger_2 | null;
	atimeMs?: directoryAtimeMsQueryFloat_2 | null;
	mtimeMs?: directoryMtimeMsQueryFloat_2 | null;
	ctimeMs?: directoryCtimeMsQueryFloat_2 | null;
	birthtimeMs?: directoryBirthtimeMsQueryFloat_2 | null;
	atime?: directoryAtimeQueryString_2 | null;
	mtime?: directoryMtimeQueryString_2 | null;
	ctime?: directoryCtimeQueryString_2 | null;
	birthtime?: directoryBirthtimeQueryString_2 | null;
}
export interface FileRootQueryTypeArgs {
	id?: fileIdQueryString_2 | null;
	internal?: fileInternalInputObject_2 | null;
	sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null;
	absolutePath?: fileAbsolutePathQueryString_2 | null;
	relativePath?: fileRelativePathQueryString_2 | null;
	extension?: fileExtensionQueryString_2 | null;
	size?: fileSizeQueryInteger_2 | null;
	prettySize?: filePrettySizeQueryString_2 | null;
	modifiedTime?: fileModifiedTimeQueryString_2 | null;
	accessTime?: fileAccessTimeQueryString_2 | null;
	changeTime?: fileChangeTimeQueryString_2 | null;
	birthTime?: fileBirthTimeQueryString_2 | null;
	root?: fileRootQueryString_2 | null;
	dir?: fileDirQueryString_2 | null;
	base?: fileBaseQueryString_2 | null;
	ext?: fileExtQueryString_2 | null;
	name?: fileNameQueryString_2 | null;
	relativeDirectory?: fileRelativeDirectoryQueryString_2 | null;
	dev?: fileDevQueryInteger_2 | null;
	mode?: fileModeQueryInteger_2 | null;
	nlink?: fileNlinkQueryInteger_2 | null;
	uid?: fileUidQueryInteger_2 | null;
	gid?: fileGidQueryInteger_2 | null;
	rdev?: fileRdevQueryInteger_2 | null;
	blksize?: fileBlksizeQueryInteger_2 | null;
	ino?: fileInoQueryInteger_2 | null;
	blocks?: fileBlocksQueryInteger_2 | null;
	atimeMs?: fileAtimeMsQueryFloat_2 | null;
	mtimeMs?: fileMtimeMsQueryFloat_2 | null;
	ctimeMs?: fileCtimeMsQueryFloat_2 | null;
	birthtimeMs?: fileBirthtimeMsQueryFloat_2 | null;
	atime?: fileAtimeQueryString_2 | null;
	mtime?: fileMtimeQueryString_2 | null;
	ctime?: fileCtimeQueryString_2 | null;
	birthtime?: fileBirthtimeQueryString_2 | null;
	publicURL?: publicUrlQueryString_3 | null;
}
export interface MarkdownRemarkRootQueryTypeArgs {
	id?: markdownRemarkIdQueryString_2 | null;
	internal?: markdownRemarkInternalInputObject_2 | null;
	frontmatter?: markdownRemarkFrontmatterInputObject_2 | null;
	excerpt?: excerptQueryString_3 | null;
	fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null;
	html?: htmlQueryString_3 | null;
	headings?: headingsQueryList_3 | null;
	timeToRead?: timeToReadQueryInt_3 | null;
	tableOfContents?: tableOfContentsQueryString_3 | null;
	wordCount?: wordCountTypeName_3 | null;
}
export interface TodoJsonRootQueryTypeArgs {
	title?: todoJsonTitleQueryString_2 | null;
	tags?: todoJsonTagsQueryList_2 | null;
	id?: todoJsonIdQueryString_2 | null;
	internal?: todoJsonInternalInputObject_2 | null;
}
export interface PersonalJsonRootQueryTypeArgs {
	email?: personalJsonEmailQueryString_2 | null;
	social?: personalJsonSocialQueryList_2 | null;
	id?: personalJsonIdQueryString_2 | null;
	internal?: personalJsonInternalInputObject_2 | null;
}
export interface CompetencesJsonRootQueryTypeArgs {
	name?: competencesJsonNameQueryString_2 | null;
	description?: competencesJsonDescriptionQueryString_2 | null;
	id?: competencesJsonIdQueryString_2 | null;
	internal?: competencesJsonInternalInputObject_2 | null;
}
export interface SkillsJsonRootQueryTypeArgs {
	languages?: skillsJsonLanguagesQueryList_2 | null;
	technical?: skillsJsonTechnicalQueryList_2 | null;
	soft?: skillsJsonSoftQueryList_2 | null;
	id?: skillsJsonIdQueryString_2 | null;
	internal?: skillsJsonInternalInputObject_2 | null;
}
export interface InterestsJsonRootQueryTypeArgs {
	subjects?: interestsJsonSubjectsQueryList_2 | null;
	id?: interestsJsonIdQueryString_2 | null;
	internal?: interestsJsonInternalInputObject_2 | null;
}
export interface ExperiencesJsonRootQueryTypeArgs {
	work?: experiencesJsonWorkQueryList_2 | null;
	id?: experiencesJsonIdQueryString_2 | null;
	internal?: experiencesJsonInternalInputObject_2 | null;
}
export interface DistinctSitePageConnectionArgs {
	field?: sitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: sitePageGroupEnum | null;
}
export interface DateFrontmatter_2Args {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctSitePluginConnectionArgs {
	field?: sitePluginDistinctEnum | null;
}
export interface GroupSitePluginConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: sitePluginGroupEnum | null;
}
export interface DistinctDirectoryConnectionArgs {
	field?: directoryDistinctEnum | null;
}
export interface GroupDirectoryConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: directoryGroupEnum | null;
}
export interface ModifiedTimeDirectoryArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeDirectoryArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeDirectoryArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeDirectoryArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeDirectoryArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeDirectoryArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeDirectoryArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeDirectoryArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctFileConnectionArgs {
	field?: fileDistinctEnum | null;
}
export interface GroupFileConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: fileGroupEnum | null;
}
export interface ModifiedTimeFileArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeFileArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeFileArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeFileArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeFileArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeFileArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeFileArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeFileArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ExcerptMarkdownRemarkArgs {
	pruneLength?: number | null;
}
export interface HeadingsMarkdownRemarkArgs {
	depth?: HeadingLevels | null;
}
export interface StartDateFrontmatter_3Args {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DateFrontmatter_3Args {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctMarkdownRemarkConnectionArgs {
	field?: markdownRemarkDistinctEnum | null;
}
export interface GroupMarkdownRemarkConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: markdownRemarkGroupEnum | null;
}
export interface DistinctTodoJsonConnectionArgs {
	field?: todoJsonDistinctEnum | null;
}
export interface GroupTodoJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: todoJsonGroupEnum | null;
}
export interface DistinctPersonalJsonConnectionArgs {
	field?: personalJsonDistinctEnum | null;
}
export interface GroupPersonalJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: personalJsonGroupEnum | null;
}
export interface DistinctCompetencesJsonConnectionArgs {
	field?: competencesJsonDistinctEnum | null;
}
export interface GroupCompetencesJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: competencesJsonGroupEnum | null;
}
export interface DistinctSkillsJsonConnectionArgs {
	field?: skillsJsonDistinctEnum | null;
}
export interface GroupSkillsJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: skillsJsonGroupEnum | null;
}
export interface DistinctInterestsJsonConnectionArgs {
	field?: interestsJsonDistinctEnum | null;
}
export interface GroupInterestsJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: interestsJsonGroupEnum | null;
}
export interface DistinctExperiencesJsonConnectionArgs {
	field?: experiencesJsonDistinctEnum | null;
}
export interface GroupExperiencesJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: experiencesJsonGroupEnum | null;
}
export interface PortSiteArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BuildTimeSiteArgs {
	formatString?:
		| string
		| null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /* Returns a string generated with Moment.js&#x27; fromNow function */;
	difference?:
		| string
		| null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /* Configures the locale Moment.js will use to format the date. */;
}

export enum SitePageConnectionSortByFieldsEnum {
	layout = "layout",
	jsonName = "jsonName",
	internalComponentName = "internalComponentName",
	path = "path",
	component = "component",
	componentChunkName = "componentChunkName",
	context___group = "context___group",
	context___pathPrefix = "context___pathPrefix",
	context___first = "context___first",
	context___last = "context___last",
	context___index = "context___index",
	context___pageCount = "context___pageCount",
	context___additionalContext___singlePath = "context___additionalContext___singlePath",
	context___slug = "context___slug",
	context___markdownPath = "context___markdownPath",
	pluginCreator___NODE = "pluginCreator___NODE",
	pluginCreatorId = "pluginCreatorId",
	componentPath = "componentPath",
	id = "id",
	parent = "parent",
	internal___type = "internal___type",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
}

export enum sitePageConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum sitePageDistinctEnum {
	layout = "layout",
	jsonName = "jsonName",
	internalComponentName = "internalComponentName",
	path = "path",
	component = "component",
	componentChunkName = "componentChunkName",
	context___group = "context___group",
	context___pathPrefix = "context___pathPrefix",
	context___first = "context___first",
	context___last = "context___last",
	context___index = "context___index",
	context___pageCount = "context___pageCount",
	context___additionalContext___singlePath = "context___additionalContext___singlePath",
	context___slug = "context___slug",
	context___markdownPath = "context___markdownPath",
	pluginCreator___NODE = "pluginCreator___NODE",
	pluginCreatorId = "pluginCreatorId",
	componentPath = "componentPath",
	id = "id",
	parent = "parent",
	internal___type = "internal___type",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
}

export enum sitePageGroupEnum {
	layout = "layout",
	jsonName = "jsonName",
	internalComponentName = "internalComponentName",
	path = "path",
	component = "component",
	componentChunkName = "componentChunkName",
	context___group = "context___group",
	context___pathPrefix = "context___pathPrefix",
	context___first = "context___first",
	context___last = "context___last",
	context___index = "context___index",
	context___pageCount = "context___pageCount",
	context___additionalContext___singlePath = "context___additionalContext___singlePath",
	context___slug = "context___slug",
	context___markdownPath = "context___markdownPath",
	pluginCreator___NODE = "pluginCreator___NODE",
	pluginCreatorId = "pluginCreatorId",
	componentPath = "componentPath",
	id = "id",
	parent = "parent",
	internal___type = "internal___type",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
}

export enum SitePluginConnectionSortByFieldsEnum {
	resolve = "resolve",
	id = "id",
	name = "name",
	version = "version",
	pluginOptions___plugins = "pluginOptions___plugins",
	pluginOptions___name = "pluginOptions___name",
	pluginOptions___path = "pluginOptions___path",
	pluginOptions___maxWidth = "pluginOptions___maxWidth",
	pluginOptions___wrapperStyle = "pluginOptions___wrapperStyle",
	pluginOptions___backgroundColor = "pluginOptions___backgroundColor",
	pluginOptions___linkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
	pluginOptions___showCaptions = "pluginOptions___showCaptions",
	pluginOptions___pathPrefix = "pluginOptions___pathPrefix",
	pluginOptions___inlineCodeMarker = "pluginOptions___inlineCodeMarker",
	pluginOptions___short_name = "pluginOptions___short_name",
	pluginOptions___start_url = "pluginOptions___start_url",
	pluginOptions___background_color = "pluginOptions___background_color",
	pluginOptions___theme_color = "pluginOptions___theme_color",
	pluginOptions___display = "pluginOptions___display",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	nodeAPIs = "nodeAPIs",
	browserAPIs = "browserAPIs",
	ssrAPIs = "ssrAPIs",
	pluginFilepath = "pluginFilepath",
	packageJson___name = "packageJson___name",
	packageJson___description = "packageJson___description",
	packageJson___version = "packageJson___version",
	packageJson___main = "packageJson___main",
	packageJson___author = "packageJson___author",
	packageJson___license = "packageJson___license",
	packageJson___dependencies = "packageJson___dependencies",
	packageJson___devDependencies = "packageJson___devDependencies",
	packageJson___peerDependencies = "packageJson___peerDependencies",
	packageJson___keywords = "packageJson___keywords",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum sitePluginConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum sitePluginDistinctEnum {
	resolve = "resolve",
	id = "id",
	name = "name",
	version = "version",
	pluginOptions___plugins = "pluginOptions___plugins",
	pluginOptions___name = "pluginOptions___name",
	pluginOptions___path = "pluginOptions___path",
	pluginOptions___maxWidth = "pluginOptions___maxWidth",
	pluginOptions___wrapperStyle = "pluginOptions___wrapperStyle",
	pluginOptions___backgroundColor = "pluginOptions___backgroundColor",
	pluginOptions___linkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
	pluginOptions___showCaptions = "pluginOptions___showCaptions",
	pluginOptions___pathPrefix = "pluginOptions___pathPrefix",
	pluginOptions___inlineCodeMarker = "pluginOptions___inlineCodeMarker",
	pluginOptions___short_name = "pluginOptions___short_name",
	pluginOptions___start_url = "pluginOptions___start_url",
	pluginOptions___background_color = "pluginOptions___background_color",
	pluginOptions___theme_color = "pluginOptions___theme_color",
	pluginOptions___display = "pluginOptions___display",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	nodeAPIs = "nodeAPIs",
	browserAPIs = "browserAPIs",
	ssrAPIs = "ssrAPIs",
	pluginFilepath = "pluginFilepath",
	packageJson___name = "packageJson___name",
	packageJson___description = "packageJson___description",
	packageJson___version = "packageJson___version",
	packageJson___main = "packageJson___main",
	packageJson___author = "packageJson___author",
	packageJson___license = "packageJson___license",
	packageJson___dependencies = "packageJson___dependencies",
	packageJson___devDependencies = "packageJson___devDependencies",
	packageJson___peerDependencies = "packageJson___peerDependencies",
	packageJson___keywords = "packageJson___keywords",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum sitePluginGroupEnum {
	resolve = "resolve",
	id = "id",
	name = "name",
	version = "version",
	pluginOptions___plugins = "pluginOptions___plugins",
	pluginOptions___name = "pluginOptions___name",
	pluginOptions___path = "pluginOptions___path",
	pluginOptions___maxWidth = "pluginOptions___maxWidth",
	pluginOptions___wrapperStyle = "pluginOptions___wrapperStyle",
	pluginOptions___backgroundColor = "pluginOptions___backgroundColor",
	pluginOptions___linkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
	pluginOptions___showCaptions = "pluginOptions___showCaptions",
	pluginOptions___pathPrefix = "pluginOptions___pathPrefix",
	pluginOptions___inlineCodeMarker = "pluginOptions___inlineCodeMarker",
	pluginOptions___short_name = "pluginOptions___short_name",
	pluginOptions___start_url = "pluginOptions___start_url",
	pluginOptions___background_color = "pluginOptions___background_color",
	pluginOptions___theme_color = "pluginOptions___theme_color",
	pluginOptions___display = "pluginOptions___display",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	nodeAPIs = "nodeAPIs",
	browserAPIs = "browserAPIs",
	ssrAPIs = "ssrAPIs",
	pluginFilepath = "pluginFilepath",
	packageJson___name = "packageJson___name",
	packageJson___description = "packageJson___description",
	packageJson___version = "packageJson___version",
	packageJson___main = "packageJson___main",
	packageJson___author = "packageJson___author",
	packageJson___license = "packageJson___license",
	packageJson___dependencies = "packageJson___dependencies",
	packageJson___devDependencies = "packageJson___devDependencies",
	packageJson___peerDependencies = "packageJson___peerDependencies",
	packageJson___keywords = "packageJson___keywords",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum DirectoryConnectionSortByFieldsEnum {
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
	sourceInstanceName = "sourceInstanceName",
	absolutePath = "absolutePath",
	relativePath = "relativePath",
	extension = "extension",
	size = "size",
	prettySize = "prettySize",
	modifiedTime = "modifiedTime",
	accessTime = "accessTime",
	changeTime = "changeTime",
	birthTime = "birthTime",
	root = "root",
	dir = "dir",
	base = "base",
	ext = "ext",
	name = "name",
	relativeDirectory = "relativeDirectory",
	dev = "dev",
	mode = "mode",
	nlink = "nlink",
	uid = "uid",
	gid = "gid",
	rdev = "rdev",
	blksize = "blksize",
	ino = "ino",
	blocks = "blocks",
	atimeMs = "atimeMs",
	mtimeMs = "mtimeMs",
	ctimeMs = "ctimeMs",
	birthtimeMs = "birthtimeMs",
	atime = "atime",
	mtime = "mtime",
	ctime = "ctime",
	birthtime = "birthtime",
}

export enum directoryConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum directoryDistinctEnum {
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
	sourceInstanceName = "sourceInstanceName",
	absolutePath = "absolutePath",
	relativePath = "relativePath",
	extension = "extension",
	size = "size",
	prettySize = "prettySize",
	modifiedTime = "modifiedTime",
	accessTime = "accessTime",
	changeTime = "changeTime",
	birthTime = "birthTime",
	root = "root",
	dir = "dir",
	base = "base",
	ext = "ext",
	name = "name",
	relativeDirectory = "relativeDirectory",
	dev = "dev",
	mode = "mode",
	nlink = "nlink",
	uid = "uid",
	gid = "gid",
	rdev = "rdev",
	blksize = "blksize",
	ino = "ino",
	blocks = "blocks",
	atimeMs = "atimeMs",
	mtimeMs = "mtimeMs",
	ctimeMs = "ctimeMs",
	birthtimeMs = "birthtimeMs",
	atime = "atime",
	mtime = "mtime",
	ctime = "ctime",
	birthtime = "birthtime",
}

export enum directoryGroupEnum {
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
	sourceInstanceName = "sourceInstanceName",
	absolutePath = "absolutePath",
	relativePath = "relativePath",
	extension = "extension",
	size = "size",
	prettySize = "prettySize",
	modifiedTime = "modifiedTime",
	accessTime = "accessTime",
	changeTime = "changeTime",
	birthTime = "birthTime",
	root = "root",
	dir = "dir",
	base = "base",
	ext = "ext",
	name = "name",
	relativeDirectory = "relativeDirectory",
	dev = "dev",
	mode = "mode",
	nlink = "nlink",
	uid = "uid",
	gid = "gid",
	rdev = "rdev",
	blksize = "blksize",
	ino = "ino",
	blocks = "blocks",
	atimeMs = "atimeMs",
	mtimeMs = "mtimeMs",
	ctimeMs = "ctimeMs",
	birthtimeMs = "birthtimeMs",
	atime = "atime",
	mtime = "mtime",
	ctime = "ctime",
	birthtime = "birthtime",
}

export enum FileConnectionSortByFieldsEnum {
	id = "id",
	children = "children",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___mediaType = "internal___mediaType",
	internal___type = "internal___type",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
	sourceInstanceName = "sourceInstanceName",
	absolutePath = "absolutePath",
	relativePath = "relativePath",
	extension = "extension",
	size = "size",
	prettySize = "prettySize",
	modifiedTime = "modifiedTime",
	accessTime = "accessTime",
	changeTime = "changeTime",
	birthTime = "birthTime",
	root = "root",
	dir = "dir",
	base = "base",
	ext = "ext",
	name = "name",
	relativeDirectory = "relativeDirectory",
	dev = "dev",
	mode = "mode",
	nlink = "nlink",
	uid = "uid",
	gid = "gid",
	rdev = "rdev",
	blksize = "blksize",
	ino = "ino",
	blocks = "blocks",
	atimeMs = "atimeMs",
	mtimeMs = "mtimeMs",
	ctimeMs = "ctimeMs",
	birthtimeMs = "birthtimeMs",
	atime = "atime",
	mtime = "mtime",
	ctime = "ctime",
	birthtime = "birthtime",
	publicURL = "publicURL",
}

export enum fileConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum HeadingLevels {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	h4 = "h4",
	h5 = "h5",
	h6 = "h6",
}

export enum fileDistinctEnum {
	id = "id",
	children = "children",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___mediaType = "internal___mediaType",
	internal___type = "internal___type",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
	sourceInstanceName = "sourceInstanceName",
	absolutePath = "absolutePath",
	relativePath = "relativePath",
	extension = "extension",
	size = "size",
	prettySize = "prettySize",
	modifiedTime = "modifiedTime",
	accessTime = "accessTime",
	changeTime = "changeTime",
	birthTime = "birthTime",
	root = "root",
	dir = "dir",
	base = "base",
	ext = "ext",
	name = "name",
	relativeDirectory = "relativeDirectory",
	dev = "dev",
	mode = "mode",
	nlink = "nlink",
	uid = "uid",
	gid = "gid",
	rdev = "rdev",
	blksize = "blksize",
	ino = "ino",
	blocks = "blocks",
	atimeMs = "atimeMs",
	mtimeMs = "mtimeMs",
	ctimeMs = "ctimeMs",
	birthtimeMs = "birthtimeMs",
	atime = "atime",
	mtime = "mtime",
	ctime = "ctime",
	birthtime = "birthtime",
}

export enum fileGroupEnum {
	id = "id",
	children = "children",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___mediaType = "internal___mediaType",
	internal___type = "internal___type",
	internal___description = "internal___description",
	internal___owner = "internal___owner",
	sourceInstanceName = "sourceInstanceName",
	absolutePath = "absolutePath",
	relativePath = "relativePath",
	extension = "extension",
	size = "size",
	prettySize = "prettySize",
	modifiedTime = "modifiedTime",
	accessTime = "accessTime",
	changeTime = "changeTime",
	birthTime = "birthTime",
	root = "root",
	dir = "dir",
	base = "base",
	ext = "ext",
	name = "name",
	relativeDirectory = "relativeDirectory",
	dev = "dev",
	mode = "mode",
	nlink = "nlink",
	uid = "uid",
	gid = "gid",
	rdev = "rdev",
	blksize = "blksize",
	ino = "ino",
	blocks = "blocks",
	atimeMs = "atimeMs",
	mtimeMs = "mtimeMs",
	ctimeMs = "ctimeMs",
	birthtimeMs = "birthtimeMs",
	atime = "atime",
	mtime = "mtime",
	ctime = "ctime",
	birthtime = "birthtime",
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
	id = "id",
	parent = "parent",
	internal___content = "internal___content",
	internal___type = "internal___type",
	internal___contentDigest = "internal___contentDigest",
	internal___owner = "internal___owner",
	frontmatter___title = "frontmatter___title",
	frontmatter___author = "frontmatter___author",
	frontmatter___link = "frontmatter___link",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___parent = "frontmatter___parent",
	frontmatter___startDate = "frontmatter___startDate",
	frontmatter___description = "frontmatter___description",
	frontmatter___date = "frontmatter___date",
	frontmatter___type = "frontmatter___type",
	frontmatter___draft = "frontmatter___draft",
	excerpt = "excerpt",
	fileAbsolutePath = "fileAbsolutePath",
	html = "html",
	headings = "headings",
	timeToRead = "timeToRead",
	tableOfContents = "tableOfContents",
	wordCount___paragraphs = "wordCount___paragraphs",
	wordCount___sentences = "wordCount___sentences",
	wordCount___words = "wordCount___words",
}

export enum markdownRemarkConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum markdownRemarkDistinctEnum {
	id = "id",
	parent = "parent",
	internal___content = "internal___content",
	internal___type = "internal___type",
	internal___contentDigest = "internal___contentDigest",
	internal___owner = "internal___owner",
	frontmatter___title = "frontmatter___title",
	frontmatter___author = "frontmatter___author",
	frontmatter___link = "frontmatter___link",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___parent = "frontmatter___parent",
	frontmatter___startDate = "frontmatter___startDate",
	frontmatter___description = "frontmatter___description",
	frontmatter___date = "frontmatter___date",
	frontmatter___type = "frontmatter___type",
	frontmatter___draft = "frontmatter___draft",
	excerpt = "excerpt",
	fileAbsolutePath = "fileAbsolutePath",
}

export enum markdownRemarkGroupEnum {
	id = "id",
	parent = "parent",
	internal___content = "internal___content",
	internal___type = "internal___type",
	internal___contentDigest = "internal___contentDigest",
	internal___owner = "internal___owner",
	frontmatter___title = "frontmatter___title",
	frontmatter___author = "frontmatter___author",
	frontmatter___link = "frontmatter___link",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___parent = "frontmatter___parent",
	frontmatter___startDate = "frontmatter___startDate",
	frontmatter___description = "frontmatter___description",
	frontmatter___date = "frontmatter___date",
	frontmatter___type = "frontmatter___type",
	frontmatter___draft = "frontmatter___draft",
	excerpt = "excerpt",
	fileAbsolutePath = "fileAbsolutePath",
}

export enum TodoJsonConnectionSortByFieldsEnum {
	title = "title",
	tags = "tags",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum todoJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum todoJsonDistinctEnum {
	title = "title",
	tags = "tags",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum todoJsonGroupEnum {
	title = "title",
	tags = "tags",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum PersonalJsonConnectionSortByFieldsEnum {
	email = "email",
	social = "social",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum personalJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum personalJsonDistinctEnum {
	email = "email",
	social = "social",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum personalJsonGroupEnum {
	email = "email",
	social = "social",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum CompetencesJsonConnectionSortByFieldsEnum {
	name = "name",
	description = "description",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum competencesJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum competencesJsonDistinctEnum {
	name = "name",
	description = "description",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum competencesJsonGroupEnum {
	name = "name",
	description = "description",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum SkillsJsonConnectionSortByFieldsEnum {
	languages = "languages",
	technical = "technical",
	soft = "soft",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum skillsJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum skillsJsonDistinctEnum {
	languages = "languages",
	technical = "technical",
	soft = "soft",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum skillsJsonGroupEnum {
	languages = "languages",
	technical = "technical",
	soft = "soft",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum InterestsJsonConnectionSortByFieldsEnum {
	subjects = "subjects",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum interestsJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum interestsJsonDistinctEnum {
	subjects = "subjects",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum interestsJsonGroupEnum {
	subjects = "subjects",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum ExperiencesJsonConnectionSortByFieldsEnum {
	work = "work",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum experiencesJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum experiencesJsonDistinctEnum {
	work = "work",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum experiencesJsonGroupEnum {
	work = "work",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}
