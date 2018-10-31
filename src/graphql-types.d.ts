/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
	parent: Parent,
	args: Args,
	context: Context,
	info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export type SubscriptionResolver<
	Result,
	Parent = any,
	Context = any,
	Args = any
> = {
	subscribe<R = Result, P = Parent>(
		parent: P,
		args: Args,
		context: Context,
		info: GraphQLResolveInfo,
	): AsyncIterator<R | Result>;
	resolve?<R = Result, P = Parent>(
		parent: P,
		args: Args,
		context: Context,
		info: GraphQLResolveInfo,
	): R | Result | Promise<R | Result>;
};

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;
/** An object with an id, parent, and children */
export interface Node {
	id: string /** The id of the node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
}

export interface Query {
	allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */;
	allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */;
	allDirectory?: DirectoryConnection | null /** Connection to all Directory nodes */;
	allFile?: FileConnection | null /** Connection to all File nodes */;
	allMarkdownRemark?: MarkdownRemarkConnection | null /** Connection to all MarkdownRemark nodes */;
	allTodoJson?: TodoJsonConnection | null /** Connection to all TodoJson nodes */;
	allInterestsJson?: InterestsJsonConnection | null /** Connection to all InterestsJson nodes */;
	allOrganizationJson?: OrganizationJsonConnection | null /** Connection to all OrganizationJson nodes */;
	allSkillsJson?: SkillsJsonConnection | null /** Connection to all SkillsJson nodes */;
	allCompetencesJson?: CompetencesJsonConnection | null /** Connection to all CompetencesJson nodes */;
	allPersonalJson?: PersonalJsonConnection | null /** Connection to all PersonalJson nodes */;
	allExperiencesJson?: ExperiencesJsonConnection | null /** Connection to all ExperiencesJson nodes */;
	sitePage?: SitePage | null;
	sitePlugin?: SitePlugin | null;
	site?: Site | null;
	directory?: Directory | null;
	file?: File | null;
	markdownRemark?: MarkdownRemark | null;
	todoJson?: TodoJson | null;
	interestsJson?: InterestsJson | null;
	organizationJson?: OrganizationJson | null;
	skillsJson?: SkillsJson | null;
	competencesJson?: CompetencesJson | null;
	personalJson?: PersonalJson | null;
	experiencesJson?: ExperiencesJson | null;
}
/** A connection to a list of items. */
export interface SitePageConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (SitePageEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (SitePageGroupConnectionConnection | null)[] | null;
}
/** Information about pagination in a connection. */
export interface PageInfo {
	hasNextPage: boolean /** When paginating, are there more items? */;
}
/** An edge in a connection. */
export interface SitePageEdge {
	node?: SitePage | null /** The item at the end of the edge */;
	next?: SitePage | null /** The next edge in the connection */;
	previous?: SitePage | null /** The previous edge in the connection */;
}
/** Node of type SitePage */
export interface SitePage extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	jsonName?: string | null;
	internalComponentName?: string | null;
	path?: string | null;
	component?: string | null;
	componentChunkName?: string | null;
	context?: Context | null;
	pluginCreator?: SitePlugin | null;
	pluginCreatorId?: string | null;
	componentPath?: string | null;
	internal?: Internal_14 | null;
}

export interface Context {
	group?: (Group | null)[] | null;
	pathPrefix?: string | null;
	additionalContext?: AdditionalContext | null;
	markdownPath?: string | null;
}

export interface Group {
	node?: Node | null;
}

export interface Node {
	htmlAst?: HtmlAst | null;
	excerpt?: string | null;
	timeToRead?: number | null;
	count?: Count | null;
	fileAbsolutePath?: string | null;
	parent?: Parent | null;
	frontmatter?: Frontmatter_2 | null;
}

export interface HtmlAst {
	type?: string | null;
	children?: (Children | null)[] | null;
	data?: Data | null;
	tagName?: string | null;
}

export interface Children {
	type?: string | null;
	tagName?: string | null;
	properties?: Properties | null;
	children?: (Children_2 | null)[] | null;
	value?: string | null;
}

export interface Properties {
	id?: string | null;
	size?: string | null;
	className?: (string | null)[] | null;
	dataLanguage?: string | null;
	src?: string | null;
	style?: string | null;
	sandbox?: (string | null)[] | null;
	title?: string | null;
	width?: number | null;
	height?: number | null;
	frameBorder?: string | null;
	allow?: string | null;
	allowFullScreen?: boolean | null;
	attr?: string | null;
}

export interface Children_2 {
	type?: string | null;
	tagName?: string | null;
	properties?: Properties_2 | null;
	children?: (Children_3 | null)[] | null;
	value?: string | null;
}

export interface Properties_2 {
	href?: string | null;
	ariaHidden?: boolean | null;
	className?: (string | null)[] | null;
	role?: string | null;
	ariaLabelledBy?: (string | null)[] | null;
	id?: string | null;
	quote?: string | null;
	author?: string | null;
	from?: string | null;
	position?: string | null;
	title?: string | null;
	src?: string | null;
	alt?: string | null;
}

export interface Children_3 {
	type?: string | null;
	tagName?: string | null;
	properties?: Properties_3 | null;
	children?: (Children_4 | null)[] | null;
	value?: string | null;
}

export interface Properties_3 {
	ariaHidden?: string | null;
	height?: string | null;
	version?: string | null;
	viewBox?: string | null;
	width?: string | null;
	href?: string | null;
	className?: (string | null)[] | null;
	id?: string | null;
}

export interface Children_4 {
	type?: string | null;
	tagName?: string | null;
	properties?: Properties_4 | null;
	children?: (Children_5 | null)[] | null;
	value?: string | null;
}

export interface Properties_4 {
	fillRule?: string | null;
	d?: string | null;
	href?: string | null;
	className?: (string | null)[] | null;
}

export interface Children_5 {
	type?: string | null;
	value?: string | null;
	tagName?: string | null;
	properties?: Properties_5 | null;
	children?: (Children_6 | null)[] | null;
}

export interface Properties_5 {
	href?: string | null;
	className?: (string | null)[] | null;
	id?: string | null;
}

export interface Children_6 {
	type?: string | null;
	value?: string | null;
	tagName?: string | null;
	properties?: Properties_6 | null;
	children?: (Children_7 | null)[] | null;
}

export interface Properties_6 {
	className?: (string | null)[] | null;
	href?: string | null;
}

export interface Children_7 {
	type?: string | null;
	value?: string | null;
}

export interface Data {
	quirksMode?: boolean | null;
}

export interface Count {
	words?: number | null;
}

export interface Parent {
	birthTime?: Date | null;
	relativeDirectory?: string | null;
	name?: string | null;
}

export interface Frontmatter_2 {
	title?: string | null;
	description?: string | null;
	date?: Date | null;
	authors?: (Authors_2 | null)[] | null;
	link?: string | null;
}

export interface Authors_2 {
	name?: string | null;
	url?: string | null;
}

export interface AdditionalContext {
	listTitle?: string | null;
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	resolve?: string | null;
	name?: string | null;
	version?: string | null;
	pluginOptions?: PluginOptions_3 | null;
	nodeAPIs?: (string | null)[] | null;
	browserAPIs?: (string | null)[] | null;
	ssrAPIs?: (string | null)[] | null;
	pluginFilepath?: string | null;
	packageJson?: PackageJson_2 | null;
	internal?: Internal_15 | null;
}

export interface PluginOptions_3 {
	plugins?: (Plugins_2 | null)[] | null;
	production?: boolean | null;
	analyzerMode?: string | null;
	defaultSizes?: string | null;
	openAnalyzer?: boolean | null;
	name?: string | null;
	path?: string | null;
	maxWidth?: number | null;
	wrapperStyle?: string | null;
	backgroundColor?: string | null;
	linkImagesToOriginal?: boolean | null;
	showCaptions?: boolean | null;
	pathPrefix?: string | null;
	withWebp?: boolean | null;
	inlineCodeMarker?: string | null;
	pathToConfigModule?: string | null;
	omitGoogleFont?: boolean | null;
	query?: string | null;
	feeds?: (Feeds_2 | null)[] | null;
	headers?: Headers_2 | null;
	allPageHeaders?: (string | null)[] | null;
	short_name?: string | null;
	start_url?: string | null;
	background_color?: string | null;
	theme_color?: string | null;
	display?: string | null;
	icon?: string | null;
	pathCheck?: boolean | null;
}

export interface Plugins_2 {
	resolve?: string | null;
	id?: string | null;
	name?: string | null;
	version?: string | null;
	pluginOptions?: PluginOptions_4 | null;
	browserAPIs?: (string | null)[] | null;
	ssrAPIs?: (string | null)[] | null;
	pluginFilepath?: string | null;
}

export interface PluginOptions_4 {
	maxWidth?: number | null;
	wrapperStyle?: string | null;
	backgroundColor?: string | null;
	linkImagesToOriginal?: boolean | null;
	showCaptions?: boolean | null;
	pathPrefix?: string | null;
	withWebp?: boolean | null;
	inlineCodeMarker?: string | null;
}

export interface Feeds_2 {
	query?: string | null;
	output?: string | null;
}

export interface Headers_2 {
	_xxjs?: (string | null)[] | null;
	_sw_js?: (string | null)[] | null;
	_xxwebmanifest?: (string | null)[] | null;
	_xxcss?: (string | null)[] | null;
	_xxpng?: (string | null)[] | null;
	_xxjpg?: (string | null)[] | null;
	_xxjpeg?: (string | null)[] | null;
	_xxgif?: (string | null)[] | null;
	_xxsvg?: (string | null)[] | null;
}

export interface PackageJson_2 {
	name?: string | null;
	description?: string | null;
	version?: string | null;
	main?: string | null;
	author?: string | null;
	license?: string | null;
	dependencies?: (Dependencies_2 | null)[] | null;
	devDependencies?: (DevDependencies_2 | null)[] | null;
	peerDependencies?: (PeerDependencies_2 | null)[] | null;
	keywords?: (string | null)[] | null;
}

export interface Dependencies_2 {
	name?: string | null;
	version?: string | null;
}

export interface DevDependencies_2 {
	name?: string | null;
	version?: string | null;
}

export interface PeerDependencies_2 {
	name?: string | null;
	version?: string | null;
}

export interface Internal_15 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface Internal_14 {
	type?: string | null;
	contentDigest?: string | null;
	description?: string | null;
	owner?: string | null;
}
/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (SitePageGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
	node?: SitePage | null /** The item at the end of the edge */;
	next?: SitePage | null /** The next edge in the connection */;
	previous?: SitePage | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SitePluginConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (SitePluginEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (SitePluginGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface SitePluginEdge {
	node?: SitePlugin | null /** The item at the end of the edge */;
	next?: SitePlugin | null /** The next edge in the connection */;
	previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (SitePluginGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
	node?: SitePlugin | null /** The item at the end of the edge */;
	next?: SitePlugin | null /** The next edge in the connection */;
	previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DirectoryConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (DirectoryEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (DirectoryGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DirectoryEdge {
	node?: Directory | null /** The item at the end of the edge */;
	next?: Directory | null /** The next edge in the connection */;
	previous?: Directory | null /** The previous edge in the connection */;
}
/** Node of type Directory */
export interface Directory extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	internal?: Internal_16 | null;
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

export interface Internal_16 {
	contentDigest?: string | null;
	type?: string | null;
	description?: string | null;
	owner?: string | null;
}
/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (DirectoryGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
	node?: Directory | null /** The item at the end of the edge */;
	next?: Directory | null /** The next edge in the connection */;
	previous?: Directory | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface FileConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (FileEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (FileGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface FileEdge {
	node?: File | null /** The item at the end of the edge */;
	next?: File | null /** The next edge in the connection */;
	previous?: File | null /** The previous edge in the connection */;
}
/** Node of type File */
export interface File extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	childrenTodoJson?:
		| (TodoJson | null)[]
		| null /** The children of this node of type todoJson */;
	childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */;
	childExperiencesJson?: ExperiencesJson | null /** The child of this node of type experiencesJson */;
	childInterestsJson?: InterestsJson | null /** The child of this node of type interestsJson */;
	childOrganizationJson?: OrganizationJson | null /** The child of this node of type organizationJson */;
	childSkillsJson?: SkillsJson | null /** The child of this node of type skillsJson */;
	childPersonalJson?: PersonalJson | null /** The child of this node of type personalJson */;
	childrenCompetencesJson?:
		| (CompetencesJson | null)[]
		| null /** The children of this node of type competencesJson */;
	internal?: Internal_17 | null;
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
		| null /** Copy file to static directory and return public url to it */;
}
/** Node of type TodoJson */
export interface TodoJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	title?: string | null;
	tags?: (string | null)[] | null;
	internal?: Internal_18 | null;
}

export interface Internal_18 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	internal?: Internal_19 | null;
	frontmatter?: Frontmatter_3 | null;
	rawMarkdownBody?: string | null;
	fileAbsolutePath?: string | null;
	html?: string | null;
	htmlAst?: Json | null;
	excerpt?: string | null;
	headings?: (MarkdownHeading | null)[] | null;
	timeToRead?: number | null;
	tableOfContents?: string | null;
	wordCount?: WordCount | null;
}

export interface Internal_19 {
	content?: string | null;
	type?: string | null;
	contentDigest?: string | null;
	owner?: string | null;
}

export interface Frontmatter_3 {
	title?: string | null;
	link?: string | null;
	date?: Date | null;
	authors?: (Authors_3 | null)[] | null;
	_PARENT?: string | null;
	description?: string | null;
	draft?: boolean | null;
	toc?: boolean | null;
	type?: string | null;
}

export interface Authors_3 {
	name?: string | null;
	url?: string | null;
}

export interface MarkdownHeading {
	value?: string | null;
	depth?: number | null;
}

export interface WordCount {
	paragraphs?: number | null;
	sentences?: number | null;
	words?: number | null;
}
/** Node of type ExperiencesJson */
export interface ExperiencesJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	work?: (Work_2 | null)[] | null;
	internal?: Internal_20 | null;
	fields?: Fields_3 | null;
}

export interface Work_2 {
	company?: string | null;
	link?: string | null;
	image?: string | null;
	period?: (string | null)[] | null;
	role?: string | null;
	skills?: (string | null)[] | null;
	projects?: (Projects_2 | null)[] | null;
}

export interface Projects_2 {
	name?: string | null;
	url?: string | null;
	description?: string | null;
}

export interface Internal_20 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
	fieldOwners?: FieldOwners_3 | null;
}

export interface FieldOwners_3 {
	image_image?: string | null;
}

export interface Fields_3 {
	image_image?: (string | null)[] | null;
}
/** Node of type InterestsJson */
export interface InterestsJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	subjects?: (Subjects_2 | null)[] | null;
	internal?: Internal_21 | null;
}

export interface Subjects_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface Internal_21 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/** Node of type OrganizationJson */
export interface OrganizationJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	name?: string | null;
	url?: string | null;
	logo?: string | null;
	telephone?: string | null;
	internal?: Internal_22 | null;
	fields?: Fields_4 | null;
}

export interface Internal_22 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
	fieldOwners?: FieldOwners_4 | null;
}

export interface FieldOwners_4 {
	logo_image?: string | null;
}

export interface Fields_4 {
	logo_image?: string | null;
}
/** Node of type SkillsJson */
export interface SkillsJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	languages?: (Languages_2 | null)[] | null;
	technical?: (Technical_2 | null)[] | null;
	soft?: (Soft_2 | null)[] | null;
	internal?: Internal_23 | null;
}

export interface Languages_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface Technical_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface Soft_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface Internal_23 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/** Node of type PersonalJson */
export interface PersonalJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	name?: string | null;
	email?: string | null;
	jobTitle?: string | null;
	social?: (Social_2 | null)[] | null;
	internal?: Internal_24 | null;
}

export interface Social_2 {
	serviceName?: string | null;
	icon?: string | null;
	url?: string | null;
}

export interface Internal_24 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/** Node of type CompetencesJson */
export interface CompetencesJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	name?: string | null;
	description?: string | null;
	internal?: Internal_25 | null;
}

export interface Internal_25 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface Internal_17 {
	contentDigest?: string | null;
	type?: string | null;
	mediaType?: string | null;
	description?: string | null;
	owner?: string | null;
}
/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (FileGroupConnectionEdge | null)[] | null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface FileGroupConnectionEdge {
	node?: File | null /** The item at the end of the edge */;
	next?: File | null /** The next edge in the connection */;
	previous?: File | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (MarkdownRemarkEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (MarkdownRemarkGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface MarkdownRemarkEdge {
	node?: MarkdownRemark | null /** The item at the end of the edge */;
	next?: MarkdownRemark | null /** The next edge in the connection */;
	previous?: MarkdownRemark | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (MarkdownRemarkGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
	node?: MarkdownRemark | null /** The item at the end of the edge */;
	next?: MarkdownRemark | null /** The next edge in the connection */;
	previous?: MarkdownRemark | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface TodoJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (TodoJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (TodoJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface TodoJsonEdge {
	node?: TodoJson | null /** The item at the end of the edge */;
	next?: TodoJson | null /** The next edge in the connection */;
	previous?: TodoJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface TodoJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (TodoJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface TodoJsonGroupConnectionEdge {
	node?: TodoJson | null /** The item at the end of the edge */;
	next?: TodoJson | null /** The next edge in the connection */;
	previous?: TodoJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface InterestsJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (InterestsJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (InterestsJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface InterestsJsonEdge {
	node?: InterestsJson | null /** The item at the end of the edge */;
	next?: InterestsJson | null /** The next edge in the connection */;
	previous?: InterestsJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface InterestsJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (InterestsJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface InterestsJsonGroupConnectionEdge {
	node?: InterestsJson | null /** The item at the end of the edge */;
	next?: InterestsJson | null /** The next edge in the connection */;
	previous?: InterestsJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface OrganizationJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (OrganizationJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (OrganizationJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface OrganizationJsonEdge {
	node?: OrganizationJson | null /** The item at the end of the edge */;
	next?: OrganizationJson | null /** The next edge in the connection */;
	previous?: OrganizationJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface OrganizationJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (OrganizationJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface OrganizationJsonGroupConnectionEdge {
	node?: OrganizationJson | null /** The item at the end of the edge */;
	next?: OrganizationJson | null /** The next edge in the connection */;
	previous?: OrganizationJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SkillsJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (SkillsJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (SkillsJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface SkillsJsonEdge {
	node?: SkillsJson | null /** The item at the end of the edge */;
	next?: SkillsJson | null /** The next edge in the connection */;
	previous?: SkillsJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SkillsJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (SkillsJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface SkillsJsonGroupConnectionEdge {
	node?: SkillsJson | null /** The item at the end of the edge */;
	next?: SkillsJson | null /** The next edge in the connection */;
	previous?: SkillsJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface CompetencesJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (CompetencesJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (CompetencesJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface CompetencesJsonEdge {
	node?: CompetencesJson | null /** The item at the end of the edge */;
	next?: CompetencesJson | null /** The next edge in the connection */;
	previous?: CompetencesJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface CompetencesJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (CompetencesJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface CompetencesJsonGroupConnectionEdge {
	node?: CompetencesJson | null /** The item at the end of the edge */;
	next?: CompetencesJson | null /** The next edge in the connection */;
	previous?: CompetencesJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface PersonalJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (PersonalJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (PersonalJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface PersonalJsonEdge {
	node?: PersonalJson | null /** The item at the end of the edge */;
	next?: PersonalJson | null /** The next edge in the connection */;
	previous?: PersonalJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface PersonalJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (PersonalJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface PersonalJsonGroupConnectionEdge {
	node?: PersonalJson | null /** The item at the end of the edge */;
	next?: PersonalJson | null /** The next edge in the connection */;
	previous?: PersonalJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface ExperiencesJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (ExperiencesJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (ExperiencesJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface ExperiencesJsonEdge {
	node?: ExperiencesJson | null /** The item at the end of the edge */;
	next?: ExperiencesJson | null /** The next edge in the connection */;
	previous?: ExperiencesJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface ExperiencesJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (ExperiencesJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface ExperiencesJsonGroupConnectionEdge {
	node?: ExperiencesJson | null /** The item at the end of the edge */;
	next?: ExperiencesJson | null /** The next edge in the connection */;
	previous?: ExperiencesJson | null /** The previous edge in the connection */;
}
/** Node of type Site */
export interface Site extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	siteMetadata?: SiteMetadata_2 | null;
	port?: Date | null;
	host?: string | null;
	pathPrefix?: string | null;
	polyfill?: boolean | null;
	buildTime?: Date | null;
	internal?: Internal_26 | null;
}

export interface SiteMetadata_2 {
	title?: string | null;
	siteUrl?: string | null;
	sourceUrl?: string | null;
	description?: string | null;
}

export interface Internal_26 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface SitePageConnectionSort {
	fields: (SitePageConnectionSortByFieldsEnum | null)[];
	order?: SitePageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePage {
	jsonName?: SitePageConnectionJsonNameQueryString | null;
	internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null;
	path?: SitePageConnectionPathQueryString_2 | null;
	component?: SitePageConnectionComponentQueryString | null;
	componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null;
	context?: SitePageConnectionContextInputObject | null;
	pluginCreator?: SitePageConnectionPluginCreatorInputObject | null;
	pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null;
	componentPath?: SitePageConnectionComponentPathQueryString | null;
	id?: SitePageConnectionIdQueryString_2 | null;
	internal?: SitePageConnectionInternalInputObject_2 | null;
}

export interface SitePageConnectionJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalComponentNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentChunkNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextInputObject {
	group?: SitePageConnectionContextGroupQueryList | null;
	pathPrefix?: SitePageConnectionContextPathPrefixQueryString | null;
	additionalContext?: SitePageConnectionContextAdditionalContextInputObject | null;
	markdownPath?: SitePageConnectionContextMarkdownPathQueryString | null;
}

export interface SitePageConnectionContextGroupQueryList {
	elemMatch?: SitePageConnectionContextGroupInputObject | null;
}

export interface SitePageConnectionContextGroupInputObject {
	node?: SitePageConnectionContextGroupNodeInputObject | null;
}

export interface SitePageConnectionContextGroupNodeInputObject {
	htmlAst?: SitePageConnectionContextGroupNodeHtmlAstInputObject | null;
	excerpt?: SitePageConnectionContextGroupNodeExcerptQueryString | null;
	timeToRead?: SitePageConnectionContextGroupNodeTimeToReadQueryInteger | null;
	count?: SitePageConnectionContextGroupNodeCountInputObject | null;
	fileAbsolutePath?: SitePageConnectionContextGroupNodeFileAbsolutePathQueryString | null;
	parent?: SitePageConnectionContextGroupNodeParentInputObject | null;
	frontmatter?: SitePageConnectionContextGroupNodeFrontmatterInputObject | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstInputObject {
	type?: SitePageConnectionContextGroupNodeHtmlAstTypeQueryString | null;
	children?: SitePageConnectionContextGroupNodeHtmlAstChildrenQueryList | null;
	data?: SitePageConnectionContextGroupNodeHtmlAstDataInputObject | null;
	tagName?: SitePageConnectionContextGroupNodeHtmlAstTagNameQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenQueryList {
	elemMatch?: SitePageConnectionContextGroupNodeHtmlAstChildrenInputObject | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenInputObject {
	type?: SitePageConnectionContextGroupNodeHtmlAstChildrenTypeQueryString | null;
	tagName?: SitePageConnectionContextGroupNodeHtmlAstChildrenTagNameQueryString | null;
	properties?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesInputObject | null;
	children?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenQueryList | null;
	value?: SitePageConnectionContextGroupNodeHtmlAstChildrenValueQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesInputObject {
	id?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesIdQueryString | null;
	size?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesSizeQueryString | null;
	className?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesClassNameQueryList | null;
	dataLanguage?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesDataLanguageQueryString | null;
	src?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesSrcQueryString | null;
	style?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesStyleQueryString | null;
	sandbox?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesSandboxQueryList | null;
	title?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesTitleQueryString | null;
	width?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesWidthQueryInteger | null;
	height?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesHeightQueryInteger | null;
	frameBorder?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesFrameBorderQueryString | null;
	allow?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesAllowQueryString | null;
	allowFullScreen?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesAllowFullScreenQueryBoolean | null;
	attr?: SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesAttrQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesSizeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesDataLanguageQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesSrcQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesSandboxQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesHeightQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesFrameBorderQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesAllowQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesAllowFullScreenQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenPropertiesAttrQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenQueryList {
	elemMatch?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenInputObject | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenInputObject {
	type?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenTypeQueryString | null;
	tagName?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenTagNameQueryString | null;
	properties?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesInputObject | null;
	children?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenQueryList | null;
	value?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenValueQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesInputObject {
	href?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesHrefQueryString | null;
	ariaHidden?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesAriaHiddenQueryBoolean | null;
	className?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesClassNameQueryList | null;
	role?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesRoleQueryString | null;
	ariaLabelledBy?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesAriaLabelledByQueryList | null;
	id?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesIdQueryString | null;
	quote?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesQuoteQueryString | null;
	author?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesAuthorQueryString | null;
	from?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesFromQueryString | null;
	position?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesPositionQueryString | null;
	title?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesTitleQueryString | null;
	src?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesSrcQueryString | null;
	alt?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesAltQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesAriaHiddenQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesRoleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesAriaLabelledByQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesQuoteQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesFromQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesPositionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesSrcQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenPropertiesAltQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenInputObject | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenInputObject {
	type?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenTypeQueryString | null;
	tagName?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenTagNameQueryString | null;
	properties?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesInputObject | null;
	children?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenQueryList | null;
	value?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenValueQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesInputObject {
	ariaHidden?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesAriaHiddenQueryString | null;
	height?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesHeightQueryString | null;
	version?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesVersionQueryString | null;
	viewBox?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesViewBoxQueryString | null;
	width?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesWidthQueryString | null;
	href?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesHrefQueryString | null;
	className?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesClassNameQueryList | null;
	id?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesIdQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesAriaHiddenQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesHeightQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesViewBoxQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesWidthQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenInputObject | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenInputObject {
	type?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenTypeQueryString | null;
	tagName?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenTagNameQueryString | null;
	properties?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesInputObject | null;
	children?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenQueryList | null;
	value?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenValueQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesInputObject {
	fillRule?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesFillRuleQueryString | null;
	d?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesDQueryString | null;
	href?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesHrefQueryString | null;
	className?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesClassNameQueryList | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesFillRuleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesDQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenInputObject | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenInputObject {
	type?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenTypeQueryString | null;
	value?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenValueQueryString | null;
	tagName?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenTagNameQueryString | null;
	properties?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesInputObject | null;
	children?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenQueryList | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesInputObject {
	href?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesHrefQueryString | null;
	className?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesClassNameQueryList | null;
	id?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesIdQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenInputObject | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenInputObject {
	type?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenTypeQueryString | null;
	value?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenValueQueryString | null;
	tagName?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenTagNameQueryString | null;
	properties?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesInputObject | null;
	children?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenQueryList | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesInputObject {
	className?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesClassNameQueryList | null;
	href?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesHrefQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenInputObject | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenInputObject {
	type?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenTypeQueryString | null;
	value?: SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenValueQueryString | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstDataInputObject {
	quirksMode?: SitePageConnectionContextGroupNodeHtmlAstDataQuirksModeQueryBoolean | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstDataQuirksModeQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeHtmlAstTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeExcerptQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeTimeToReadQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeCountInputObject {
	words?: SitePageConnectionContextGroupNodeCountWordsQueryInteger | null;
}

export interface SitePageConnectionContextGroupNodeCountWordsQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeFileAbsolutePathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeParentInputObject {
	birthTime?: SitePageConnectionContextGroupNodeParentBirthTimeQueryString | null;
	relativeDirectory?: SitePageConnectionContextGroupNodeParentRelativeDirectoryQueryString | null;
	name?: SitePageConnectionContextGroupNodeParentNameQueryString | null;
}

export interface SitePageConnectionContextGroupNodeParentBirthTimeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeParentRelativeDirectoryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeParentNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterInputObject {
	title?: SitePageConnectionContextGroupNodeFrontmatterTitleQueryString | null;
	description?: SitePageConnectionContextGroupNodeFrontmatterDescriptionQueryString | null;
	date?: SitePageConnectionContextGroupNodeFrontmatterDateQueryString | null;
	authors?: SitePageConnectionContextGroupNodeFrontmatterAuthorsQueryList | null;
	link?: SitePageConnectionContextGroupNodeFrontmatterLinkQueryString | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterDateQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterAuthorsQueryList {
	elemMatch?: SitePageConnectionContextGroupNodeFrontmatterAuthorsInputObject | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterAuthorsInputObject {
	name?: SitePageConnectionContextGroupNodeFrontmatterAuthorsNameQueryString | null;
	url?: SitePageConnectionContextGroupNodeFrontmatterAuthorsUrlQueryString | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterAuthorsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterAuthorsUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextGroupNodeFrontmatterLinkQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextAdditionalContextInputObject {
	listTitle?: SitePageConnectionContextAdditionalContextListTitleQueryString | null;
}

export interface SitePageConnectionContextAdditionalContextListTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextMarkdownPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInputObject {
	resolve?: SitePageConnectionPluginCreatorResolveQueryString | null;
	id?: SitePageConnectionPluginCreatorIdQueryString | null;
	name?: SitePageConnectionPluginCreatorNameQueryString | null;
	version?: SitePageConnectionPluginCreatorVersionQueryString | null;
	pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null;
	nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null;
	browserAPIs?: SitePageConnectionPluginCreatorBrowserApIsQueryList | null;
	ssrAPIs?: SitePageConnectionPluginCreatorSsrApIsQueryList | null;
	pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null;
	packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null;
	parent?: SitePageConnectionPluginCreatorParentQueryString | null;
	internal?: SitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
	plugins?: SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null;
	production?: SitePageConnectionPluginCreatorPluginOptionsProductionQueryBoolean | null;
	analyzerMode?: SitePageConnectionPluginCreatorPluginOptionsAnalyzerModeQueryString | null;
	defaultSizes?: SitePageConnectionPluginCreatorPluginOptionsDefaultSizesQueryString | null;
	openAnalyzer?: SitePageConnectionPluginCreatorPluginOptionsOpenAnalyzerQueryBoolean | null;
	name?: SitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
	path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
	maxWidth?: SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: SitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: SitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: SitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString | null;
	withWebp?: SitePageConnectionPluginCreatorPluginOptionsWithWebpQueryBoolean | null;
	inlineCodeMarker?: SitePageConnectionPluginCreatorPluginOptionsInlineCodeMarkerQueryString | null;
	pathToConfigModule?: SitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString | null;
	omitGoogleFont?: SitePageConnectionPluginCreatorPluginOptionsOmitGoogleFontQueryBoolean | null;
	query?: SitePageConnectionPluginCreatorPluginOptionsQueryQueryString | null;
	feeds?: SitePageConnectionPluginCreatorPluginOptionsFeedsQueryList | null;
	headers?: SitePageConnectionPluginCreatorPluginOptionsHeadersInputObject | null;
	allPageHeaders?: SitePageConnectionPluginCreatorPluginOptionsAllPageHeadersQueryList | null;
	short_name?: SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString | null;
	start_url?: SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString | null;
	background_color?: SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 | null;
	theme_color?: SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString | null;
	display?: SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString | null;
	icon?: SitePageConnectionPluginCreatorPluginOptionsIconQueryString | null;
	pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
	elemMatch?: SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
	resolve?: SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString | null;
	id?: SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null;
	name?: SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString | null;
	version?: SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString | null;
	pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
	browserAPIs?: SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList | null;
	ssrAPIs?: SitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList | null;
	pluginFilepath?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
	maxWidth?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
	withWebp?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean | null;
	inlineCodeMarker?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsProductionQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsAnalyzerModeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsDefaultSizesQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsOpenAnalyzerQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsWithWebpQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsOmitGoogleFontQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsQueryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsFeedsQueryList {
	elemMatch?: SitePageConnectionPluginCreatorPluginOptionsFeedsInputObject | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsFeedsInputObject {
	query?: SitePageConnectionPluginCreatorPluginOptionsFeedsQueryQueryString | null;
	output?: SitePageConnectionPluginCreatorPluginOptionsFeedsOutputQueryString | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsFeedsQueryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsFeedsOutputQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersInputObject {
	_xxjs?: SitePageConnectionPluginCreatorPluginOptionsHeadersJsQueryList | null;
	_sw_js?: SitePageConnectionPluginCreatorPluginOptionsHeadersSwJsQueryList | null;
	_xxwebmanifest?: SitePageConnectionPluginCreatorPluginOptionsHeadersWebmanifestQueryList | null;
	_xxcss?: SitePageConnectionPluginCreatorPluginOptionsHeadersCssQueryList | null;
	_xxpng?: SitePageConnectionPluginCreatorPluginOptionsHeadersPngQueryList | null;
	_xxjpg?: SitePageConnectionPluginCreatorPluginOptionsHeadersJpgQueryList | null;
	_xxjpeg?: SitePageConnectionPluginCreatorPluginOptionsHeadersJpegQueryList | null;
	_xxgif?: SitePageConnectionPluginCreatorPluginOptionsHeadersGifQueryList | null;
	_xxsvg?: SitePageConnectionPluginCreatorPluginOptionsHeadersSvgQueryList | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersJsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersSwJsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersWebmanifestQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersCssQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersPngQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersJpgQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersJpegQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersGifQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersSvgQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsAllPageHeadersQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
	name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
	description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
	version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
	main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
	author?: SitePageConnectionPluginCreatorPackageJsonAuthorQueryString | null;
	license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
	dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
	devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
	peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
	keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
	elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
	name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
	version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
	elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
	name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
	version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
	elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
	name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
	version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorParentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
	contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
	type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null;
	owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalInputObject_2 {
	type?: SitePageConnectionInternalTypeQueryString_2 | null;
	contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null;
	description?: SitePageConnectionInternalDescriptionQueryString | null;
	owner?: SitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionSort {
	fields: (SitePluginConnectionSortByFieldsEnum | null)[];
	order?: SitePluginConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
	resolve?: SitePluginConnectionResolveQueryString_2 | null;
	id?: SitePluginConnectionIdQueryString_2 | null;
	name?: SitePluginConnectionNameQueryString_2 | null;
	version?: SitePluginConnectionVersionQueryString_2 | null;
	pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null;
	nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null;
	browserAPIs?: SitePluginConnectionBrowserApIsQueryList_2 | null;
	ssrAPIs?: SitePluginConnectionSsrApIsQueryList_2 | null;
	pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null;
	packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null;
	internal?: SitePluginConnectionInternalInputObject_2 | null;
}

export interface SitePluginConnectionResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
	plugins?: SitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
	production?: SitePluginConnectionPluginOptionsProductionQueryBoolean_2 | null;
	analyzerMode?: SitePluginConnectionPluginOptionsAnalyzerModeQueryString_2 | null;
	defaultSizes?: SitePluginConnectionPluginOptionsDefaultSizesQueryString_2 | null;
	openAnalyzer?: SitePluginConnectionPluginOptionsOpenAnalyzerQueryBoolean_2 | null;
	name?: SitePluginConnectionPluginOptionsNameQueryString_2 | null;
	path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null;
	maxWidth?: SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: SitePluginConnectionPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: SitePluginConnectionPluginOptionsBackgroundColorQueryString_3 | null;
	linkImagesToOriginal?: SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: SitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: SitePluginConnectionPluginOptionsPathPrefixQueryString_2 | null;
	withWebp?: SitePluginConnectionPluginOptionsWithWebpQueryBoolean_2 | null;
	inlineCodeMarker?: SitePluginConnectionPluginOptionsInlineCodeMarkerQueryString_2 | null;
	pathToConfigModule?: SitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 | null;
	omitGoogleFont?: SitePluginConnectionPluginOptionsOmitGoogleFontQueryBoolean_2 | null;
	query?: SitePluginConnectionPluginOptionsQueryQueryString_2 | null;
	feeds?: SitePluginConnectionPluginOptionsFeedsQueryList_2 | null;
	headers?: SitePluginConnectionPluginOptionsHeadersInputObject_2 | null;
	allPageHeaders?: SitePluginConnectionPluginOptionsAllPageHeadersQueryList_2 | null;
	short_name?: SitePluginConnectionPluginOptionsShortNameQueryString_2 | null;
	start_url?: SitePluginConnectionPluginOptionsStartUrlQueryString_2 | null;
	background_color?: SitePluginConnectionPluginOptionsBackgroundColorQueryString_4 | null;
	theme_color?: SitePluginConnectionPluginOptionsThemeColorQueryString_2 | null;
	display?: SitePluginConnectionPluginOptionsDisplayQueryString_2 | null;
	icon?: SitePluginConnectionPluginOptionsIconQueryString_2 | null;
	pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginConnectionPluginOptionsPluginsQueryList_2 {
	elemMatch?: SitePluginConnectionPluginOptionsPluginsInputObject_2 | null;
}

export interface SitePluginConnectionPluginOptionsPluginsInputObject_2 {
	resolve?: SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null;
	id?: SitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null;
	name?: SitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null;
	version?: SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null;
	pluginOptions?: SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;
	browserAPIs?: SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 | null;
	ssrAPIs?: SitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2 | null;
	pluginFilepath?: SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
	maxWidth?: SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: SitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
	linkImagesToOriginal?: SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: SitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: SitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
	withWebp?: SitePluginConnectionPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 | null;
	inlineCodeMarker?: SitePluginConnectionPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsProductionQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsAnalyzerModeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsDefaultSizesQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsOpenAnalyzerQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsWithWebpQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsOmitGoogleFontQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsQueryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsFeedsQueryList_2 {
	elemMatch?: SitePluginConnectionPluginOptionsFeedsInputObject_2 | null;
}

export interface SitePluginConnectionPluginOptionsFeedsInputObject_2 {
	query?: SitePluginConnectionPluginOptionsFeedsQueryQueryString_2 | null;
	output?: SitePluginConnectionPluginOptionsFeedsOutputQueryString_2 | null;
}

export interface SitePluginConnectionPluginOptionsFeedsQueryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsFeedsOutputQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersInputObject_2 {
	_xxjs?: SitePluginConnectionPluginOptionsHeadersJsQueryList_2 | null;
	_sw_js?: SitePluginConnectionPluginOptionsHeadersSwJsQueryList_2 | null;
	_xxwebmanifest?: SitePluginConnectionPluginOptionsHeadersWebmanifestQueryList_2 | null;
	_xxcss?: SitePluginConnectionPluginOptionsHeadersCssQueryList_2 | null;
	_xxpng?: SitePluginConnectionPluginOptionsHeadersPngQueryList_2 | null;
	_xxjpg?: SitePluginConnectionPluginOptionsHeadersJpgQueryList_2 | null;
	_xxjpeg?: SitePluginConnectionPluginOptionsHeadersJpegQueryList_2 | null;
	_xxgif?: SitePluginConnectionPluginOptionsHeadersGifQueryList_2 | null;
	_xxsvg?: SitePluginConnectionPluginOptionsHeadersSvgQueryList_2 | null;
}

export interface SitePluginConnectionPluginOptionsHeadersJsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersSwJsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersWebmanifestQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersCssQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersPngQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersJpgQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersJpegQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersGifQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHeadersSvgQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsAllPageHeadersQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
	name?: SitePluginConnectionPackageJsonNameQueryString_2 | null;
	description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
	version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null;
	main?: SitePluginConnectionPackageJsonMainQueryString_2 | null;
	author?: SitePluginConnectionPackageJsonAuthorQueryString_2 | null;
	license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null;
	dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
	devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
	peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;
	keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
	elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
	name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
	version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
	elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
	name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
	version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
	elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
	name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;
	version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalInputObject_2 {
	contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null;
	type?: SitePluginConnectionInternalTypeQueryString_2 | null;
	owner?: SitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionSort {
	fields: (DirectoryConnectionSortByFieldsEnum | null)[];
	order?: DirectoryConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDirectory {
	id?: DirectoryConnectionIdQueryString_2 | null;
	internal?: DirectoryConnectionInternalInputObject_2 | null;
	sourceInstanceName?: DirectoryConnectionSourceInstanceNameQueryString_2 | null;
	absolutePath?: DirectoryConnectionAbsolutePathQueryString_2 | null;
	relativePath?: DirectoryConnectionRelativePathQueryString_2 | null;
	extension?: DirectoryConnectionExtensionQueryString_2 | null;
	size?: DirectoryConnectionSizeQueryInteger_2 | null;
	prettySize?: DirectoryConnectionPrettySizeQueryString_2 | null;
	modifiedTime?: DirectoryConnectionModifiedTimeQueryString_2 | null;
	accessTime?: DirectoryConnectionAccessTimeQueryString_2 | null;
	changeTime?: DirectoryConnectionChangeTimeQueryString_2 | null;
	birthTime?: DirectoryConnectionBirthTimeQueryString_2 | null;
	root?: DirectoryConnectionRootQueryString_2 | null;
	dir?: DirectoryConnectionDirQueryString_2 | null;
	base?: DirectoryConnectionBaseQueryString_2 | null;
	ext?: DirectoryConnectionExtQueryString_2 | null;
	name?: DirectoryConnectionNameQueryString_2 | null;
	relativeDirectory?: DirectoryConnectionRelativeDirectoryQueryString_2 | null;
	dev?: DirectoryConnectionDevQueryInteger_2 | null;
	mode?: DirectoryConnectionModeQueryInteger_2 | null;
	nlink?: DirectoryConnectionNlinkQueryInteger_2 | null;
	uid?: DirectoryConnectionUidQueryInteger_2 | null;
	gid?: DirectoryConnectionGidQueryInteger_2 | null;
	rdev?: DirectoryConnectionRdevQueryInteger_2 | null;
	blksize?: DirectoryConnectionBlksizeQueryInteger_2 | null;
	ino?: DirectoryConnectionInoQueryInteger_2 | null;
	blocks?: DirectoryConnectionBlocksQueryInteger_2 | null;
	atimeMs?: DirectoryConnectionAtimeMsQueryFloat_2 | null;
	mtimeMs?: DirectoryConnectionMtimeMsQueryFloat_2 | null;
	ctimeMs?: DirectoryConnectionCtimeMsQueryFloat_2 | null;
	birthtimeMs?: DirectoryConnectionBirthtimeMsQueryFloat_2 | null;
	atime?: DirectoryConnectionAtimeQueryString_2 | null;
	mtime?: DirectoryConnectionMtimeQueryString_2 | null;
	ctime?: DirectoryConnectionCtimeQueryString_2 | null;
	birthtime?: DirectoryConnectionBirthtimeQueryString_2 | null;
}

export interface DirectoryConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionInternalInputObject_2 {
	contentDigest?: DirectoryConnectionInternalContentDigestQueryString_2 | null;
	type?: DirectoryConnectionInternalTypeQueryString_2 | null;
	description?: DirectoryConnectionInternalDescriptionQueryString_2 | null;
	owner?: DirectoryConnectionInternalOwnerQueryString_2 | null;
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryConnectionAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionSort {
	fields: (FileConnectionSortByFieldsEnum | null)[];
	order?: FileConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterFile {
	id?: FileConnectionIdQueryString_2 | null;
	internal?: FileConnectionInternalInputObject_2 | null;
	sourceInstanceName?: FileConnectionSourceInstanceNameQueryString_2 | null;
	absolutePath?: FileConnectionAbsolutePathQueryString_2 | null;
	relativePath?: FileConnectionRelativePathQueryString_2 | null;
	extension?: FileConnectionExtensionQueryString_2 | null;
	size?: FileConnectionSizeQueryInteger_2 | null;
	prettySize?: FileConnectionPrettySizeQueryString_2 | null;
	modifiedTime?: FileConnectionModifiedTimeQueryString_2 | null;
	accessTime?: FileConnectionAccessTimeQueryString_2 | null;
	changeTime?: FileConnectionChangeTimeQueryString_2 | null;
	birthTime?: FileConnectionBirthTimeQueryString_2 | null;
	root?: FileConnectionRootQueryString_2 | null;
	dir?: FileConnectionDirQueryString_2 | null;
	base?: FileConnectionBaseQueryString_2 | null;
	ext?: FileConnectionExtQueryString_2 | null;
	name?: FileConnectionNameQueryString_2 | null;
	relativeDirectory?: FileConnectionRelativeDirectoryQueryString_2 | null;
	dev?: FileConnectionDevQueryInteger_2 | null;
	mode?: FileConnectionModeQueryInteger_2 | null;
	nlink?: FileConnectionNlinkQueryInteger_2 | null;
	uid?: FileConnectionUidQueryInteger_2 | null;
	gid?: FileConnectionGidQueryInteger_2 | null;
	rdev?: FileConnectionRdevQueryInteger_2 | null;
	blksize?: FileConnectionBlksizeQueryInteger_2 | null;
	ino?: FileConnectionInoQueryInteger_2 | null;
	blocks?: FileConnectionBlocksQueryInteger_2 | null;
	atimeMs?: FileConnectionAtimeMsQueryFloat_2 | null;
	mtimeMs?: FileConnectionMtimeMsQueryFloat_2 | null;
	ctimeMs?: FileConnectionCtimeMsQueryFloat_2 | null;
	birthtimeMs?: FileConnectionBirthtimeMsQueryFloat_2 | null;
	atime?: FileConnectionAtimeQueryString_2 | null;
	mtime?: FileConnectionMtimeQueryString_2 | null;
	ctime?: FileConnectionCtimeQueryString_2 | null;
	birthtime?: FileConnectionBirthtimeQueryString_2 | null;
	publicURL?: PublicUrlQueryString_4 | null;
}

export interface FileConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionInternalInputObject_2 {
	contentDigest?: FileConnectionInternalContentDigestQueryString_2 | null;
	type?: FileConnectionInternalTypeQueryString_2 | null;
	mediaType?: FileConnectionInternalMediaTypeQueryString_2 | null;
	description?: FileConnectionInternalDescriptionQueryString_2 | null;
	owner?: FileConnectionInternalOwnerQueryString_2 | null;
}

export interface FileConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileConnectionAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileConnectionBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PublicUrlQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionSort {
	fields: (MarkdownRemarkConnectionSortByFieldsEnum | null)[];
	order?: MarkdownRemarkConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
	id?: MarkdownRemarkConnectionIdQueryString_2 | null;
	internal?: MarkdownRemarkConnectionInternalInputObject_2 | null;
	frontmatter?: MarkdownRemarkConnectionFrontmatterInputObject_2 | null;
	excerpt?: ExcerptQueryString_4 | null;
	rawMarkdownBody?: MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 | null;
	fileAbsolutePath?: MarkdownRemarkConnectionFileAbsolutePathQueryString_2 | null;
	html?: HtmlQueryString_4 | null;
	headings?: HeadingsQueryList_4 | null;
	timeToRead?: TimeToReadQueryInt_4 | null;
	tableOfContents?: TableOfContentsQueryString_4 | null;
	wordCount?: WordCountTypeName_4 | null;
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
	content?: MarkdownRemarkConnectionInternalContentQueryString_2 | null;
	type?: MarkdownRemarkConnectionInternalTypeQueryString_2 | null;
	contentDigest?: MarkdownRemarkConnectionInternalContentDigestQueryString_2 | null;
	owner?: MarkdownRemarkConnectionInternalOwnerQueryString_2 | null;
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
	title?: MarkdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
	link?: MarkdownRemarkConnectionFrontmatterLinkQueryString_2 | null;
	date?: MarkdownRemarkConnectionFrontmatterDateQueryString_2 | null;
	authors?: MarkdownRemarkConnectionFrontmatterAuthorsQueryList_2 | null;
	_PARENT?: MarkdownRemarkConnectionFrontmatterParentQueryString_2 | null;
	description?: MarkdownRemarkConnectionFrontmatterDescriptionQueryString_2 | null;
	draft?: MarkdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null;
	toc?: MarkdownRemarkConnectionFrontmatterTocQueryBoolean_2 | null;
	type?: MarkdownRemarkConnectionFrontmatterTypeQueryString_2 | null;
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterAuthorsQueryList_2 {
	elemMatch?: MarkdownRemarkConnectionFrontmatterAuthorsInputObject_2 | null;
}

export interface MarkdownRemarkConnectionFrontmatterAuthorsInputObject_2 {
	name?: MarkdownRemarkConnectionFrontmatterAuthorsNameQueryString_2 | null;
	url?: MarkdownRemarkConnectionFrontmatterAuthorsUrlQueryString_2 | null;
}

export interface MarkdownRemarkConnectionFrontmatterAuthorsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterAuthorsUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterParentQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterTocQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExcerptQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface HtmlQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface HeadingsQueryList_4 {
	elemMatch?: HeadingsListElemTypeName_4 | null;
}

export interface HeadingsListElemTypeName_4 {
	value?: HeadingsListElemValueQueryString_4 | null;
	depth?: HeadingsListElemDepthQueryInt_4 | null;
}

export interface HeadingsListElemValueQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface HeadingsListElemDepthQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface TimeToReadQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface TableOfContentsQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface WordCountTypeName_4 {
	paragraphs?: WordCountParagraphsQueryInt_4 | null;
	sentences?: WordCountSentencesQueryInt_4 | null;
	words?: WordCountWordsQueryInt_4 | null;
}

export interface WordCountParagraphsQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface WordCountSentencesQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface WordCountWordsQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface TodoJsonConnectionSort {
	fields: (TodoJsonConnectionSortByFieldsEnum | null)[];
	order?: TodoJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterTodoJson {
	title?: TodoJsonConnectionTitleQueryString_2 | null;
	tags?: TodoJsonConnectionTagsQueryList_2 | null;
	id?: TodoJsonConnectionIdQueryString_2 | null;
	internal?: TodoJsonConnectionInternalInputObject_2 | null;
}

export interface TodoJsonConnectionTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonConnectionTagsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonConnectionInternalInputObject_2 {
	contentDigest?: TodoJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: TodoJsonConnectionInternalTypeQueryString_2 | null;
	owner?: TodoJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface TodoJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonConnectionSort {
	fields: (InterestsJsonConnectionSortByFieldsEnum | null)[];
	order?: InterestsJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterInterestsJson {
	subjects?: InterestsJsonConnectionSubjectsQueryList_2 | null;
	id?: InterestsJsonConnectionIdQueryString_2 | null;
	internal?: InterestsJsonConnectionInternalInputObject_2 | null;
}

export interface InterestsJsonConnectionSubjectsQueryList_2 {
	elemMatch?: InterestsJsonConnectionSubjectsInputObject_2 | null;
}

export interface InterestsJsonConnectionSubjectsInputObject_2 {
	name?: InterestsJsonConnectionSubjectsNameQueryString_2 | null;
	intensity?: InterestsJsonConnectionSubjectsIntensityQueryInteger_2 | null;
}

export interface InterestsJsonConnectionSubjectsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonConnectionSubjectsIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface InterestsJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonConnectionInternalInputObject_2 {
	contentDigest?: InterestsJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: InterestsJsonConnectionInternalTypeQueryString_2 | null;
	owner?: InterestsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface InterestsJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionSort {
	fields: (OrganizationJsonConnectionSortByFieldsEnum | null)[];
	order?: OrganizationJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterOrganizationJson {
	name?: OrganizationJsonConnectionNameQueryString_2 | null;
	url?: OrganizationJsonConnectionUrlQueryString_2 | null;
	logo?: OrganizationJsonConnectionLogoQueryString_2 | null;
	telephone?: OrganizationJsonConnectionTelephoneQueryString_2 | null;
	id?: OrganizationJsonConnectionIdQueryString_2 | null;
	internal?: OrganizationJsonConnectionInternalInputObject_2 | null;
	fields?: OrganizationJsonConnectionFieldsInputObject_2 | null;
}

export interface OrganizationJsonConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionLogoQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionTelephoneQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionInternalInputObject_2 {
	contentDigest?: OrganizationJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: OrganizationJsonConnectionInternalTypeQueryString_2 | null;
	owner?: OrganizationJsonConnectionInternalOwnerQueryString_2 | null;
	fieldOwners?: OrganizationJsonConnectionInternalFieldOwnersInputObject_2 | null;
}

export interface OrganizationJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionInternalFieldOwnersInputObject_2 {
	logo_image?: OrganizationJsonConnectionInternalFieldOwnersLogoImageQueryString_2 | null;
}

export interface OrganizationJsonConnectionInternalFieldOwnersLogoImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonConnectionFieldsInputObject_2 {
	logo_image?: OrganizationJsonConnectionFieldsLogoImageQueryString_2 | null;
}

export interface OrganizationJsonConnectionFieldsLogoImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonConnectionSort {
	fields: (SkillsJsonConnectionSortByFieldsEnum | null)[];
	order?: SkillsJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSkillsJson {
	languages?: SkillsJsonConnectionLanguagesQueryList_2 | null;
	technical?: SkillsJsonConnectionTechnicalQueryList_2 | null;
	soft?: SkillsJsonConnectionSoftQueryList_2 | null;
	id?: SkillsJsonConnectionIdQueryString_2 | null;
	internal?: SkillsJsonConnectionInternalInputObject_2 | null;
}

export interface SkillsJsonConnectionLanguagesQueryList_2 {
	elemMatch?: SkillsJsonConnectionLanguagesInputObject_2 | null;
}

export interface SkillsJsonConnectionLanguagesInputObject_2 {
	name?: SkillsJsonConnectionLanguagesNameQueryString_2 | null;
	intensity?: SkillsJsonConnectionLanguagesIntensityQueryInteger_2 | null;
}

export interface SkillsJsonConnectionLanguagesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonConnectionLanguagesIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SkillsJsonConnectionTechnicalQueryList_2 {
	elemMatch?: SkillsJsonConnectionTechnicalInputObject_2 | null;
}

export interface SkillsJsonConnectionTechnicalInputObject_2 {
	name?: SkillsJsonConnectionTechnicalNameQueryString_2 | null;
	intensity?: SkillsJsonConnectionTechnicalIntensityQueryInteger_2 | null;
}

export interface SkillsJsonConnectionTechnicalNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonConnectionTechnicalIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SkillsJsonConnectionSoftQueryList_2 {
	elemMatch?: SkillsJsonConnectionSoftInputObject_2 | null;
}

export interface SkillsJsonConnectionSoftInputObject_2 {
	name?: SkillsJsonConnectionSoftNameQueryString_2 | null;
	intensity?: SkillsJsonConnectionSoftIntensityQueryInteger_2 | null;
}

export interface SkillsJsonConnectionSoftNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonConnectionSoftIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SkillsJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonConnectionInternalInputObject_2 {
	contentDigest?: SkillsJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: SkillsJsonConnectionInternalTypeQueryString_2 | null;
	owner?: SkillsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface SkillsJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonConnectionSort {
	fields: (CompetencesJsonConnectionSortByFieldsEnum | null)[];
	order?: CompetencesJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterCompetencesJson {
	name?: CompetencesJsonConnectionNameQueryString_2 | null;
	description?: CompetencesJsonConnectionDescriptionQueryString_2 | null;
	id?: CompetencesJsonConnectionIdQueryString_2 | null;
	internal?: CompetencesJsonConnectionInternalInputObject_2 | null;
}

export interface CompetencesJsonConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonConnectionDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonConnectionInternalInputObject_2 {
	contentDigest?: CompetencesJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: CompetencesJsonConnectionInternalTypeQueryString_2 | null;
	owner?: CompetencesJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface CompetencesJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionSort {
	fields: (PersonalJsonConnectionSortByFieldsEnum | null)[];
	order?: PersonalJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterPersonalJson {
	name?: PersonalJsonConnectionNameQueryString_2 | null;
	email?: PersonalJsonConnectionEmailQueryString_2 | null;
	jobTitle?: PersonalJsonConnectionJobTitleQueryString_2 | null;
	social?: PersonalJsonConnectionSocialQueryList_2 | null;
	id?: PersonalJsonConnectionIdQueryString_2 | null;
	internal?: PersonalJsonConnectionInternalInputObject_2 | null;
}

export interface PersonalJsonConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionEmailQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionJobTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionSocialQueryList_2 {
	elemMatch?: PersonalJsonConnectionSocialInputObject_2 | null;
}

export interface PersonalJsonConnectionSocialInputObject_2 {
	serviceName?: PersonalJsonConnectionSocialServiceNameQueryString_2 | null;
	icon?: PersonalJsonConnectionSocialIconQueryString_2 | null;
	url?: PersonalJsonConnectionSocialUrlQueryString_2 | null;
}

export interface PersonalJsonConnectionSocialServiceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionSocialIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionSocialUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionInternalInputObject_2 {
	contentDigest?: PersonalJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: PersonalJsonConnectionInternalTypeQueryString_2 | null;
	owner?: PersonalJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface PersonalJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionSort {
	fields: (ExperiencesJsonConnectionSortByFieldsEnum | null)[];
	order?: ExperiencesJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterExperiencesJson {
	work?: ExperiencesJsonConnectionWorkQueryList_2 | null;
	id?: ExperiencesJsonConnectionIdQueryString_2 | null;
	internal?: ExperiencesJsonConnectionInternalInputObject_2 | null;
	fields?: ExperiencesJsonConnectionFieldsInputObject_2 | null;
}

export interface ExperiencesJsonConnectionWorkQueryList_2 {
	elemMatch?: ExperiencesJsonConnectionWorkInputObject_2 | null;
}

export interface ExperiencesJsonConnectionWorkInputObject_2 {
	company?: ExperiencesJsonConnectionWorkCompanyQueryString_2 | null;
	link?: ExperiencesJsonConnectionWorkLinkQueryString_2 | null;
	image?: ExperiencesJsonConnectionWorkImageQueryString_2 | null;
	period?: ExperiencesJsonConnectionWorkPeriodQueryList_2 | null;
	role?: ExperiencesJsonConnectionWorkRoleQueryString_2 | null;
	skills?: ExperiencesJsonConnectionWorkSkillsQueryList_2 | null;
	projects?: ExperiencesJsonConnectionWorkProjectsQueryList_2 | null;
}

export interface ExperiencesJsonConnectionWorkCompanyQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionWorkLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionWorkImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionWorkPeriodQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionWorkRoleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionWorkSkillsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionWorkProjectsQueryList_2 {
	elemMatch?: ExperiencesJsonConnectionWorkProjectsInputObject_2 | null;
}

export interface ExperiencesJsonConnectionWorkProjectsInputObject_2 {
	name?: ExperiencesJsonConnectionWorkProjectsNameQueryString_2 | null;
	url?: ExperiencesJsonConnectionWorkProjectsUrlQueryString_2 | null;
	description?: ExperiencesJsonConnectionWorkProjectsDescriptionQueryString_2 | null;
}

export interface ExperiencesJsonConnectionWorkProjectsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionWorkProjectsUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionWorkProjectsDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionInternalInputObject_2 {
	contentDigest?: ExperiencesJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: ExperiencesJsonConnectionInternalTypeQueryString_2 | null;
	owner?: ExperiencesJsonConnectionInternalOwnerQueryString_2 | null;
	fieldOwners?: ExperiencesJsonConnectionInternalFieldOwnersInputObject_2 | null;
}

export interface ExperiencesJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionInternalFieldOwnersInputObject_2 {
	image_image?: ExperiencesJsonConnectionInternalFieldOwnersImageImageQueryString_2 | null;
}

export interface ExperiencesJsonConnectionInternalFieldOwnersImageImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonConnectionFieldsInputObject_2 {
	image_image?: ExperiencesJsonConnectionFieldsImageImageQueryList_2 | null;
}

export interface ExperiencesJsonConnectionFieldsImageImageQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageInternalComponentNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageComponentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageComponentChunkNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextInputObject {
	group?: SitePageContextGroupQueryList | null;
	pathPrefix?: SitePageContextPathPrefixQueryString | null;
	additionalContext?: SitePageContextAdditionalContextInputObject | null;
	markdownPath?: SitePageContextMarkdownPathQueryString | null;
}

export interface SitePageContextGroupQueryList {
	elemMatch?: SitePageContextGroupInputObject | null;
}

export interface SitePageContextGroupInputObject {
	node?: SitePageContextGroupNodeInputObject | null;
}

export interface SitePageContextGroupNodeInputObject {
	htmlAst?: SitePageContextGroupNodeHtmlAstInputObject | null;
	excerpt?: SitePageContextGroupNodeExcerptQueryString | null;
	timeToRead?: SitePageContextGroupNodeTimeToReadQueryInteger | null;
	count?: SitePageContextGroupNodeCountInputObject | null;
	fileAbsolutePath?: SitePageContextGroupNodeFileAbsolutePathQueryString | null;
	parent?: SitePageContextGroupNodeParentInputObject | null;
	frontmatter?: SitePageContextGroupNodeFrontmatterInputObject | null;
}

export interface SitePageContextGroupNodeHtmlAstInputObject {
	type?: SitePageContextGroupNodeHtmlAstTypeQueryString | null;
	children?: SitePageContextGroupNodeHtmlAstChildrenQueryList | null;
	data?: SitePageContextGroupNodeHtmlAstDataInputObject | null;
	tagName?: SitePageContextGroupNodeHtmlAstTagNameQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenQueryList {
	elemMatch?: SitePageContextGroupNodeHtmlAstChildrenInputObject | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenInputObject {
	type?: SitePageContextGroupNodeHtmlAstChildrenTypeQueryString | null;
	tagName?: SitePageContextGroupNodeHtmlAstChildrenTagNameQueryString | null;
	properties?: SitePageContextGroupNodeHtmlAstChildrenPropertiesInputObject | null;
	children?: SitePageContextGroupNodeHtmlAstChildrenChildrenQueryList | null;
	value?: SitePageContextGroupNodeHtmlAstChildrenValueQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesInputObject {
	id?: SitePageContextGroupNodeHtmlAstChildrenPropertiesIdQueryString | null;
	size?: SitePageContextGroupNodeHtmlAstChildrenPropertiesSizeQueryString | null;
	className?: SitePageContextGroupNodeHtmlAstChildrenPropertiesClassNameQueryList | null;
	dataLanguage?: SitePageContextGroupNodeHtmlAstChildrenPropertiesDataLanguageQueryString | null;
	src?: SitePageContextGroupNodeHtmlAstChildrenPropertiesSrcQueryString | null;
	style?: SitePageContextGroupNodeHtmlAstChildrenPropertiesStyleQueryString | null;
	sandbox?: SitePageContextGroupNodeHtmlAstChildrenPropertiesSandboxQueryList | null;
	title?: SitePageContextGroupNodeHtmlAstChildrenPropertiesTitleQueryString | null;
	width?: SitePageContextGroupNodeHtmlAstChildrenPropertiesWidthQueryInteger | null;
	height?: SitePageContextGroupNodeHtmlAstChildrenPropertiesHeightQueryInteger | null;
	frameBorder?: SitePageContextGroupNodeHtmlAstChildrenPropertiesFrameBorderQueryString | null;
	allow?: SitePageContextGroupNodeHtmlAstChildrenPropertiesAllowQueryString | null;
	allowFullScreen?: SitePageContextGroupNodeHtmlAstChildrenPropertiesAllowFullScreenQueryBoolean | null;
	attr?: SitePageContextGroupNodeHtmlAstChildrenPropertiesAttrQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesSizeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesDataLanguageQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesSrcQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesSandboxQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesHeightQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesFrameBorderQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesAllowQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesAllowFullScreenQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenPropertiesAttrQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenQueryList {
	elemMatch?: SitePageContextGroupNodeHtmlAstChildrenChildrenInputObject | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenInputObject {
	type?: SitePageContextGroupNodeHtmlAstChildrenChildrenTypeQueryString | null;
	tagName?: SitePageContextGroupNodeHtmlAstChildrenChildrenTagNameQueryString | null;
	properties?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesInputObject | null;
	children?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenQueryList | null;
	value?: SitePageContextGroupNodeHtmlAstChildrenChildrenValueQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesInputObject {
	href?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesHrefQueryString | null;
	ariaHidden?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesAriaHiddenQueryBoolean | null;
	className?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesClassNameQueryList | null;
	role?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesRoleQueryString | null;
	ariaLabelledBy?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesAriaLabelledByQueryList | null;
	id?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesIdQueryString | null;
	quote?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesQuoteQueryString | null;
	author?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesAuthorQueryString | null;
	from?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesFromQueryString | null;
	position?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesPositionQueryString | null;
	title?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesTitleQueryString | null;
	src?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesSrcQueryString | null;
	alt?: SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesAltQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesAriaHiddenQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesRoleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesAriaLabelledByQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesQuoteQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesFromQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesPositionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesSrcQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenPropertiesAltQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenInputObject | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenInputObject {
	type?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenTypeQueryString | null;
	tagName?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenTagNameQueryString | null;
	properties?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesInputObject | null;
	children?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenQueryList | null;
	value?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenValueQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesInputObject {
	ariaHidden?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesAriaHiddenQueryString | null;
	height?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesHeightQueryString | null;
	version?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesVersionQueryString | null;
	viewBox?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesViewBoxQueryString | null;
	width?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesWidthQueryString | null;
	href?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesHrefQueryString | null;
	className?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesClassNameQueryList | null;
	id?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesIdQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesAriaHiddenQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesHeightQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesViewBoxQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesWidthQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenPropertiesIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenInputObject | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenInputObject {
	type?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenTypeQueryString | null;
	tagName?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenTagNameQueryString | null;
	properties?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesInputObject | null;
	children?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenQueryList | null;
	value?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenValueQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesInputObject {
	fillRule?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesFillRuleQueryString | null;
	d?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesDQueryString | null;
	href?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesHrefQueryString | null;
	className?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesClassNameQueryList | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesFillRuleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesDQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenInputObject | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenInputObject {
	type?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenTypeQueryString | null;
	value?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenValueQueryString | null;
	tagName?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenTagNameQueryString | null;
	properties?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesInputObject | null;
	children?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenQueryList | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesInputObject {
	href?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesHrefQueryString | null;
	className?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesClassNameQueryList | null;
	id?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesIdQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenInputObject | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenInputObject {
	type?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenTypeQueryString | null;
	value?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenValueQueryString | null;
	tagName?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenTagNameQueryString | null;
	properties?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesInputObject | null;
	children?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenQueryList | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesInputObject {
	className?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesClassNameQueryList | null;
	href?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesHrefQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesClassNameQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesHrefQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenQueryList {
	elemMatch?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenInputObject | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenInputObject {
	type?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenTypeQueryString | null;
	value?: SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenValueQueryString | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstChildrenValueQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstDataInputObject {
	quirksMode?: SitePageContextGroupNodeHtmlAstDataQuirksModeQueryBoolean | null;
}

export interface SitePageContextGroupNodeHtmlAstDataQuirksModeQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePageContextGroupNodeHtmlAstTagNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeExcerptQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeTimeToReadQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageContextGroupNodeCountInputObject {
	words?: SitePageContextGroupNodeCountWordsQueryInteger | null;
}

export interface SitePageContextGroupNodeCountWordsQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePageContextGroupNodeFileAbsolutePathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeParentInputObject {
	birthTime?: SitePageContextGroupNodeParentBirthTimeQueryString | null;
	relativeDirectory?: SitePageContextGroupNodeParentRelativeDirectoryQueryString | null;
	name?: SitePageContextGroupNodeParentNameQueryString | null;
}

export interface SitePageContextGroupNodeParentBirthTimeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeParentRelativeDirectoryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeParentNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeFrontmatterInputObject {
	title?: SitePageContextGroupNodeFrontmatterTitleQueryString | null;
	description?: SitePageContextGroupNodeFrontmatterDescriptionQueryString | null;
	date?: SitePageContextGroupNodeFrontmatterDateQueryString | null;
	authors?: SitePageContextGroupNodeFrontmatterAuthorsQueryList | null;
	link?: SitePageContextGroupNodeFrontmatterLinkQueryString | null;
}

export interface SitePageContextGroupNodeFrontmatterTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeFrontmatterDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeFrontmatterDateQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeFrontmatterAuthorsQueryList {
	elemMatch?: SitePageContextGroupNodeFrontmatterAuthorsInputObject | null;
}

export interface SitePageContextGroupNodeFrontmatterAuthorsInputObject {
	name?: SitePageContextGroupNodeFrontmatterAuthorsNameQueryString | null;
	url?: SitePageContextGroupNodeFrontmatterAuthorsUrlQueryString | null;
}

export interface SitePageContextGroupNodeFrontmatterAuthorsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeFrontmatterAuthorsUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextGroupNodeFrontmatterLinkQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextAdditionalContextInputObject {
	listTitle?: SitePageContextAdditionalContextListTitleQueryString | null;
}

export interface SitePageContextAdditionalContextListTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageContextMarkdownPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInputObject {
	resolve?: SitePagePluginCreatorResolveQueryString | null;
	id?: SitePagePluginCreatorIdQueryString | null;
	name?: SitePagePluginCreatorNameQueryString | null;
	version?: SitePagePluginCreatorVersionQueryString | null;
	pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null;
	nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null;
	browserAPIs?: SitePagePluginCreatorBrowserApIsQueryList | null;
	ssrAPIs?: SitePagePluginCreatorSsrApIsQueryList | null;
	pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null;
	packageJson?: SitePagePluginCreatorPackageJsonInputObject | null;
	parent?: SitePagePluginCreatorParentQueryString | null;
	internal?: SitePagePluginCreatorInternalInputObject | null;
}

export interface SitePagePluginCreatorResolveQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
	plugins?: SitePagePluginCreatorPluginOptionsPluginsQueryList | null;
	production?: SitePagePluginCreatorPluginOptionsProductionQueryBoolean | null;
	analyzerMode?: SitePagePluginCreatorPluginOptionsAnalyzerModeQueryString | null;
	defaultSizes?: SitePagePluginCreatorPluginOptionsDefaultSizesQueryString | null;
	openAnalyzer?: SitePagePluginCreatorPluginOptionsOpenAnalyzerQueryBoolean | null;
	name?: SitePagePluginCreatorPluginOptionsNameQueryString | null;
	path?: SitePagePluginCreatorPluginOptionsPathQueryString | null;
	maxWidth?: SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: SitePagePluginCreatorPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: SitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: SitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: SitePagePluginCreatorPluginOptionsPathPrefixQueryString | null;
	withWebp?: SitePagePluginCreatorPluginOptionsWithWebpQueryBoolean | null;
	inlineCodeMarker?: SitePagePluginCreatorPluginOptionsInlineCodeMarkerQueryString | null;
	pathToConfigModule?: SitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString | null;
	omitGoogleFont?: SitePagePluginCreatorPluginOptionsOmitGoogleFontQueryBoolean | null;
	query?: SitePagePluginCreatorPluginOptionsQueryQueryString | null;
	feeds?: SitePagePluginCreatorPluginOptionsFeedsQueryList | null;
	headers?: SitePagePluginCreatorPluginOptionsHeadersInputObject | null;
	allPageHeaders?: SitePagePluginCreatorPluginOptionsAllPageHeadersQueryList | null;
	short_name?: SitePagePluginCreatorPluginOptionsShortNameQueryString | null;
	start_url?: SitePagePluginCreatorPluginOptionsStartUrlQueryString | null;
	background_color?: SitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 | null;
	theme_color?: SitePagePluginCreatorPluginOptionsThemeColorQueryString | null;
	display?: SitePagePluginCreatorPluginOptionsDisplayQueryString | null;
	icon?: SitePagePluginCreatorPluginOptionsIconQueryString | null;
	pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsQueryList {
	elemMatch?: SitePagePluginCreatorPluginOptionsPluginsInputObject | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsInputObject {
	resolve?: SitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null;
	id?: SitePagePluginCreatorPluginOptionsPluginsIdQueryString | null;
	name?: SitePagePluginCreatorPluginOptionsPluginsNameQueryString | null;
	version?: SitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null;
	pluginOptions?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
	browserAPIs?: SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList | null;
	ssrAPIs?: SitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList | null;
	pluginFilepath?: SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
	maxWidth?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
	withWebp?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean | null;
	inlineCodeMarker?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsProductionQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsAnalyzerModeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsDefaultSizesQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsOpenAnalyzerQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsWithWebpQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsOmitGoogleFontQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsQueryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsFeedsQueryList {
	elemMatch?: SitePagePluginCreatorPluginOptionsFeedsInputObject | null;
}

export interface SitePagePluginCreatorPluginOptionsFeedsInputObject {
	query?: SitePagePluginCreatorPluginOptionsFeedsQueryQueryString | null;
	output?: SitePagePluginCreatorPluginOptionsFeedsOutputQueryString | null;
}

export interface SitePagePluginCreatorPluginOptionsFeedsQueryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsFeedsOutputQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersInputObject {
	_xxjs?: SitePagePluginCreatorPluginOptionsHeadersJsQueryList | null;
	_sw_js?: SitePagePluginCreatorPluginOptionsHeadersSwJsQueryList | null;
	_xxwebmanifest?: SitePagePluginCreatorPluginOptionsHeadersWebmanifestQueryList | null;
	_xxcss?: SitePagePluginCreatorPluginOptionsHeadersCssQueryList | null;
	_xxpng?: SitePagePluginCreatorPluginOptionsHeadersPngQueryList | null;
	_xxjpg?: SitePagePluginCreatorPluginOptionsHeadersJpgQueryList | null;
	_xxjpeg?: SitePagePluginCreatorPluginOptionsHeadersJpegQueryList | null;
	_xxgif?: SitePagePluginCreatorPluginOptionsHeadersGifQueryList | null;
	_xxsvg?: SitePagePluginCreatorPluginOptionsHeadersSvgQueryList | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersJsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersSwJsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersWebmanifestQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersCssQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersPngQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersJpgQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersJpegQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersGifQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHeadersSvgQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsAllPageHeadersQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsIconQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
	name?: SitePagePluginCreatorPackageJsonNameQueryString | null;
	description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null;
	version?: SitePagePluginCreatorPackageJsonVersionQueryString | null;
	main?: SitePagePluginCreatorPackageJsonMainQueryString | null;
	author?: SitePagePluginCreatorPackageJsonAuthorQueryString | null;
	license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null;
	dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null;
	devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
	peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
	keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
	elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
	name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
	version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
	elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
	name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
	version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
	elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
	name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
	version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorParentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalInputObject {
	contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null;
	type?: SitePagePluginCreatorInternalTypeQueryString | null;
	owner?: SitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageComponentPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageInternalInputObject_2 {
	type?: SitePageInternalTypeQueryString_2 | null;
	contentDigest?: SitePageInternalContentDigestQueryString_2 | null;
	description?: SitePageInternalDescriptionQueryString | null;
	owner?: SitePageInternalOwnerQueryString_2 | null;
}

export interface SitePageInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageInternalDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePageInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsInputObject_2 {
	plugins?: SitePluginPluginOptionsPluginsQueryList_2 | null;
	production?: SitePluginPluginOptionsProductionQueryBoolean_2 | null;
	analyzerMode?: SitePluginPluginOptionsAnalyzerModeQueryString_2 | null;
	defaultSizes?: SitePluginPluginOptionsDefaultSizesQueryString_2 | null;
	openAnalyzer?: SitePluginPluginOptionsOpenAnalyzerQueryBoolean_2 | null;
	name?: SitePluginPluginOptionsNameQueryString_2 | null;
	path?: SitePluginPluginOptionsPathQueryString_2 | null;
	maxWidth?: SitePluginPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: SitePluginPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: SitePluginPluginOptionsBackgroundColorQueryString_3 | null;
	linkImagesToOriginal?: SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: SitePluginPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: SitePluginPluginOptionsPathPrefixQueryString_2 | null;
	withWebp?: SitePluginPluginOptionsWithWebpQueryBoolean_2 | null;
	inlineCodeMarker?: SitePluginPluginOptionsInlineCodeMarkerQueryString_2 | null;
	pathToConfigModule?: SitePluginPluginOptionsPathToConfigModuleQueryString_2 | null;
	omitGoogleFont?: SitePluginPluginOptionsOmitGoogleFontQueryBoolean_2 | null;
	query?: SitePluginPluginOptionsQueryQueryString_2 | null;
	feeds?: SitePluginPluginOptionsFeedsQueryList_2 | null;
	headers?: SitePluginPluginOptionsHeadersInputObject_2 | null;
	allPageHeaders?: SitePluginPluginOptionsAllPageHeadersQueryList_2 | null;
	short_name?: SitePluginPluginOptionsShortNameQueryString_2 | null;
	start_url?: SitePluginPluginOptionsStartUrlQueryString_2 | null;
	background_color?: SitePluginPluginOptionsBackgroundColorQueryString_4 | null;
	theme_color?: SitePluginPluginOptionsThemeColorQueryString_2 | null;
	display?: SitePluginPluginOptionsDisplayQueryString_2 | null;
	icon?: SitePluginPluginOptionsIconQueryString_2 | null;
	pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginPluginOptionsPluginsQueryList_2 {
	elemMatch?: SitePluginPluginOptionsPluginsInputObject_2 | null;
}

export interface SitePluginPluginOptionsPluginsInputObject_2 {
	resolve?: SitePluginPluginOptionsPluginsResolveQueryString_2 | null;
	id?: SitePluginPluginOptionsPluginsIdQueryString_2 | null;
	name?: SitePluginPluginOptionsPluginsNameQueryString_2 | null;
	version?: SitePluginPluginOptionsPluginsVersionQueryString_2 | null;
	pluginOptions?: SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;
	browserAPIs?: SitePluginPluginOptionsPluginsBrowserApIsQueryList_2 | null;
	ssrAPIs?: SitePluginPluginOptionsPluginsSsrApIsQueryList_2 | null;
	pluginFilepath?: SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface SitePluginPluginOptionsPluginsResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
	maxWidth?: SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: SitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
	linkImagesToOriginal?: SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: SitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: SitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
	withWebp?: SitePluginPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 | null;
	inlineCodeMarker?: SitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsSsrApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsProductionQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsAnalyzerModeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsDefaultSizesQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsOpenAnalyzerQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SitePluginPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsWithWebpQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPathToConfigModuleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsOmitGoogleFontQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginPluginOptionsQueryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsFeedsQueryList_2 {
	elemMatch?: SitePluginPluginOptionsFeedsInputObject_2 | null;
}

export interface SitePluginPluginOptionsFeedsInputObject_2 {
	query?: SitePluginPluginOptionsFeedsQueryQueryString_2 | null;
	output?: SitePluginPluginOptionsFeedsOutputQueryString_2 | null;
}

export interface SitePluginPluginOptionsFeedsQueryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsFeedsOutputQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersInputObject_2 {
	_xxjs?: SitePluginPluginOptionsHeadersJsQueryList_2 | null;
	_sw_js?: SitePluginPluginOptionsHeadersSwJsQueryList_2 | null;
	_xxwebmanifest?: SitePluginPluginOptionsHeadersWebmanifestQueryList_2 | null;
	_xxcss?: SitePluginPluginOptionsHeadersCssQueryList_2 | null;
	_xxpng?: SitePluginPluginOptionsHeadersPngQueryList_2 | null;
	_xxjpg?: SitePluginPluginOptionsHeadersJpgQueryList_2 | null;
	_xxjpeg?: SitePluginPluginOptionsHeadersJpegQueryList_2 | null;
	_xxgif?: SitePluginPluginOptionsHeadersGifQueryList_2 | null;
	_xxsvg?: SitePluginPluginOptionsHeadersSvgQueryList_2 | null;
}

export interface SitePluginPluginOptionsHeadersJsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersSwJsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersWebmanifestQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersCssQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersPngQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersJpgQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersJpegQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersGifQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHeadersSvgQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsAllPageHeadersQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SitePluginNodeApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginBrowserApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginSsrApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonInputObject_2 {
	name?: SitePluginPackageJsonNameQueryString_2 | null;
	description?: SitePluginPackageJsonDescriptionQueryString_2 | null;
	version?: SitePluginPackageJsonVersionQueryString_2 | null;
	main?: SitePluginPackageJsonMainQueryString_2 | null;
	author?: SitePluginPackageJsonAuthorQueryString_2 | null;
	license?: SitePluginPackageJsonLicenseQueryString_2 | null;
	dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null;
	devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null;
	peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null;
	keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginPackageJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonMainQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
	elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
	name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null;
	version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
	elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
	name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
	version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
	elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
	name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;
	version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginInternalInputObject_2 {
	contentDigest?: SitePluginInternalContentDigestQueryString_2 | null;
	type?: SitePluginInternalTypeQueryString_2 | null;
	owner?: SitePluginInternalOwnerQueryString_2 | null;
}

export interface SitePluginInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePluginInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteSiteMetadataInputObject_2 {
	title?: SiteSiteMetadataTitleQueryString_2 | null;
	siteUrl?: SiteSiteMetadataSiteUrlQueryString_2 | null;
	sourceUrl?: SiteSiteMetadataSourceUrlQueryString_2 | null;
	description?: SiteSiteMetadataDescriptionQueryString_2 | null;
}

export interface SiteSiteMetadataTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteSiteMetadataSiteUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteSiteMetadataSourceUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteSiteMetadataDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePortQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteHostQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SitePolyfillQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface SiteBuildTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteInternalInputObject_2 {
	contentDigest?: SiteInternalContentDigestQueryString_2 | null;
	type?: SiteInternalTypeQueryString_2 | null;
	owner?: SiteInternalOwnerQueryString_2 | null;
}

export interface SiteInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SiteInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryInternalInputObject_2 {
	contentDigest?: DirectoryInternalContentDigestQueryString_2 | null;
	type?: DirectoryInternalTypeQueryString_2 | null;
	description?: DirectoryInternalDescriptionQueryString_2 | null;
	owner?: DirectoryInternalOwnerQueryString_2 | null;
}

export interface DirectoryInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectorySourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectorySizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface DirectoryAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface DirectoryBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileInternalInputObject_2 {
	contentDigest?: FileInternalContentDigestQueryString_2 | null;
	type?: FileInternalTypeQueryString_2 | null;
	mediaType?: FileInternalMediaTypeQueryString_2 | null;
	description?: FileInternalDescriptionQueryString_2 | null;
	owner?: FileInternalOwnerQueryString_2 | null;
}

export interface FileInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileInternalMediaTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FilePrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface FileAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface FileBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PublicUrlQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalInputObject_2 {
	content?: MarkdownRemarkInternalContentQueryString_2 | null;
	type?: MarkdownRemarkInternalTypeQueryString_2 | null;
	contentDigest?: MarkdownRemarkInternalContentDigestQueryString_2 | null;
	owner?: MarkdownRemarkInternalOwnerQueryString_2 | null;
}

export interface MarkdownRemarkInternalContentQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
	title?: MarkdownRemarkFrontmatterTitleQueryString_2 | null;
	link?: MarkdownRemarkFrontmatterLinkQueryString_2 | null;
	date?: MarkdownRemarkFrontmatterDateQueryString_2 | null;
	authors?: MarkdownRemarkFrontmatterAuthorsQueryList_2 | null;
	_PARENT?: MarkdownRemarkFrontmatterParentQueryString_2 | null;
	description?: MarkdownRemarkFrontmatterDescriptionQueryString_2 | null;
	draft?: MarkdownRemarkFrontmatterDraftQueryBoolean_2 | null;
	toc?: MarkdownRemarkFrontmatterTocQueryBoolean_2 | null;
	type?: MarkdownRemarkFrontmatterTypeQueryString_2 | null;
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterAuthorsQueryList_2 {
	elemMatch?: MarkdownRemarkFrontmatterAuthorsInputObject_2 | null;
}

export interface MarkdownRemarkFrontmatterAuthorsInputObject_2 {
	name?: MarkdownRemarkFrontmatterAuthorsNameQueryString_2 | null;
	url?: MarkdownRemarkFrontmatterAuthorsUrlQueryString_2 | null;
}

export interface MarkdownRemarkFrontmatterAuthorsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterAuthorsUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterParentQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterDraftQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface MarkdownRemarkFrontmatterTocQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
	nin?: (boolean | null)[] | null;
}

export interface MarkdownRemarkFrontmatterTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExcerptQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface HtmlQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface HeadingsQueryList_3 {
	elemMatch?: HeadingsListElemTypeName_3 | null;
}

export interface HeadingsListElemTypeName_3 {
	value?: HeadingsListElemValueQueryString_3 | null;
	depth?: HeadingsListElemDepthQueryInt_3 | null;
}

export interface HeadingsListElemValueQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface HeadingsListElemDepthQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface TimeToReadQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface TableOfContentsQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface WordCountTypeName_3 {
	paragraphs?: WordCountParagraphsQueryInt_3 | null;
	sentences?: WordCountSentencesQueryInt_3 | null;
	words?: WordCountWordsQueryInt_3 | null;
}

export interface WordCountParagraphsQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface WordCountSentencesQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface WordCountWordsQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface TodoJsonTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonTagsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonInternalInputObject_2 {
	contentDigest?: TodoJsonInternalContentDigestQueryString_2 | null;
	type?: TodoJsonInternalTypeQueryString_2 | null;
	owner?: TodoJsonInternalOwnerQueryString_2 | null;
}

export interface TodoJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface TodoJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonSubjectsQueryList_2 {
	elemMatch?: InterestsJsonSubjectsInputObject_2 | null;
}

export interface InterestsJsonSubjectsInputObject_2 {
	name?: InterestsJsonSubjectsNameQueryString_2 | null;
	intensity?: InterestsJsonSubjectsIntensityQueryInteger_2 | null;
}

export interface InterestsJsonSubjectsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonSubjectsIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface InterestsJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonInternalInputObject_2 {
	contentDigest?: InterestsJsonInternalContentDigestQueryString_2 | null;
	type?: InterestsJsonInternalTypeQueryString_2 | null;
	owner?: InterestsJsonInternalOwnerQueryString_2 | null;
}

export interface InterestsJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface InterestsJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonLogoQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonTelephoneQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonInternalInputObject_2 {
	contentDigest?: OrganizationJsonInternalContentDigestQueryString_2 | null;
	type?: OrganizationJsonInternalTypeQueryString_2 | null;
	owner?: OrganizationJsonInternalOwnerQueryString_2 | null;
	fieldOwners?: OrganizationJsonInternalFieldOwnersInputObject_2 | null;
}

export interface OrganizationJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonInternalFieldOwnersInputObject_2 {
	logo_image?: OrganizationJsonInternalFieldOwnersLogoImageQueryString_2 | null;
}

export interface OrganizationJsonInternalFieldOwnersLogoImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface OrganizationJsonFieldsInputObject_2 {
	logo_image?: OrganizationJsonFieldsLogoImageQueryString_2 | null;
}

export interface OrganizationJsonFieldsLogoImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonLanguagesQueryList_2 {
	elemMatch?: SkillsJsonLanguagesInputObject_2 | null;
}

export interface SkillsJsonLanguagesInputObject_2 {
	name?: SkillsJsonLanguagesNameQueryString_2 | null;
	intensity?: SkillsJsonLanguagesIntensityQueryInteger_2 | null;
}

export interface SkillsJsonLanguagesNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonLanguagesIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SkillsJsonTechnicalQueryList_2 {
	elemMatch?: SkillsJsonTechnicalInputObject_2 | null;
}

export interface SkillsJsonTechnicalInputObject_2 {
	name?: SkillsJsonTechnicalNameQueryString_2 | null;
	intensity?: SkillsJsonTechnicalIntensityQueryInteger_2 | null;
}

export interface SkillsJsonTechnicalNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonTechnicalIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SkillsJsonSoftQueryList_2 {
	elemMatch?: SkillsJsonSoftInputObject_2 | null;
}

export interface SkillsJsonSoftInputObject_2 {
	name?: SkillsJsonSoftNameQueryString_2 | null;
	intensity?: SkillsJsonSoftIntensityQueryInteger_2 | null;
}

export interface SkillsJsonSoftNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonSoftIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
	nin?: (number | null)[] | null;
}

export interface SkillsJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonInternalInputObject_2 {
	contentDigest?: SkillsJsonInternalContentDigestQueryString_2 | null;
	type?: SkillsJsonInternalTypeQueryString_2 | null;
	owner?: SkillsJsonInternalOwnerQueryString_2 | null;
}

export interface SkillsJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface SkillsJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonInternalInputObject_2 {
	contentDigest?: CompetencesJsonInternalContentDigestQueryString_2 | null;
	type?: CompetencesJsonInternalTypeQueryString_2 | null;
	owner?: CompetencesJsonInternalOwnerQueryString_2 | null;
}

export interface CompetencesJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface CompetencesJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonEmailQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonJobTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonSocialQueryList_2 {
	elemMatch?: PersonalJsonSocialInputObject_2 | null;
}

export interface PersonalJsonSocialInputObject_2 {
	serviceName?: PersonalJsonSocialServiceNameQueryString_2 | null;
	icon?: PersonalJsonSocialIconQueryString_2 | null;
	url?: PersonalJsonSocialUrlQueryString_2 | null;
}

export interface PersonalJsonSocialServiceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonSocialIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonSocialUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonInternalInputObject_2 {
	contentDigest?: PersonalJsonInternalContentDigestQueryString_2 | null;
	type?: PersonalJsonInternalTypeQueryString_2 | null;
	owner?: PersonalJsonInternalOwnerQueryString_2 | null;
}

export interface PersonalJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface PersonalJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkQueryList_2 {
	elemMatch?: ExperiencesJsonWorkInputObject_2 | null;
}

export interface ExperiencesJsonWorkInputObject_2 {
	company?: ExperiencesJsonWorkCompanyQueryString_2 | null;
	link?: ExperiencesJsonWorkLinkQueryString_2 | null;
	image?: ExperiencesJsonWorkImageQueryString_2 | null;
	period?: ExperiencesJsonWorkPeriodQueryList_2 | null;
	role?: ExperiencesJsonWorkRoleQueryString_2 | null;
	skills?: ExperiencesJsonWorkSkillsQueryList_2 | null;
	projects?: ExperiencesJsonWorkProjectsQueryList_2 | null;
}

export interface ExperiencesJsonWorkCompanyQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkPeriodQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkRoleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkSkillsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkProjectsQueryList_2 {
	elemMatch?: ExperiencesJsonWorkProjectsInputObject_2 | null;
}

export interface ExperiencesJsonWorkProjectsInputObject_2 {
	name?: ExperiencesJsonWorkProjectsNameQueryString_2 | null;
	url?: ExperiencesJsonWorkProjectsUrlQueryString_2 | null;
	description?: ExperiencesJsonWorkProjectsDescriptionQueryString_2 | null;
}

export interface ExperiencesJsonWorkProjectsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkProjectsUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonWorkProjectsDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonInternalInputObject_2 {
	contentDigest?: ExperiencesJsonInternalContentDigestQueryString_2 | null;
	type?: ExperiencesJsonInternalTypeQueryString_2 | null;
	owner?: ExperiencesJsonInternalOwnerQueryString_2 | null;
	fieldOwners?: ExperiencesJsonInternalFieldOwnersInputObject_2 | null;
}

export interface ExperiencesJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonInternalFieldOwnersInputObject_2 {
	image_image?: ExperiencesJsonInternalFieldOwnersImageImageQueryString_2 | null;
}

export interface ExperiencesJsonInternalFieldOwnersImageImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}

export interface ExperiencesJsonFieldsInputObject_2 {
	image_image?: ExperiencesJsonFieldsImageImageQueryList_2 | null;
}

export interface ExperiencesJsonFieldsImageImageQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
	nin?: (string | null)[] | null;
}
export interface AllSitePageQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: SitePageConnectionSort | null;
	filter?: FilterSitePage | null;
}
export interface AllSitePluginQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: SitePluginConnectionSort | null;
	filter?: FilterSitePlugin | null;
}
export interface AllDirectoryQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: DirectoryConnectionSort | null;
	filter?: FilterDirectory | null;
}
export interface AllFileQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: FileConnectionSort | null;
	filter?: FilterFile | null;
}
export interface AllMarkdownRemarkQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: MarkdownRemarkConnectionSort | null;
	filter?: FilterMarkdownRemark | null;
}
export interface AllTodoJsonQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: TodoJsonConnectionSort | null;
	filter?: FilterTodoJson | null;
}
export interface AllInterestsJsonQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: InterestsJsonConnectionSort | null;
	filter?: FilterInterestsJson | null;
}
export interface AllOrganizationJsonQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: OrganizationJsonConnectionSort | null;
	filter?: FilterOrganizationJson | null;
}
export interface AllSkillsJsonQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: SkillsJsonConnectionSort | null;
	filter?: FilterSkillsJson | null;
}
export interface AllCompetencesJsonQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: CompetencesJsonConnectionSort | null;
	filter?: FilterCompetencesJson | null;
}
export interface AllPersonalJsonQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: PersonalJsonConnectionSort | null;
	filter?: FilterPersonalJson | null;
}
export interface AllExperiencesJsonQueryArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: ExperiencesJsonConnectionSort | null;
	filter?: FilterExperiencesJson | null;
}
export interface SitePageQueryArgs {
	jsonName?: SitePageJsonNameQueryString | null;
	internalComponentName?: SitePageInternalComponentNameQueryString | null;
	path?: SitePagePathQueryString_2 | null;
	component?: SitePageComponentQueryString | null;
	componentChunkName?: SitePageComponentChunkNameQueryString | null;
	context?: SitePageContextInputObject | null;
	pluginCreator?: SitePagePluginCreatorInputObject | null;
	pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null;
	componentPath?: SitePageComponentPathQueryString | null;
	id?: SitePageIdQueryString_2 | null;
	internal?: SitePageInternalInputObject_2 | null;
}
export interface SitePluginQueryArgs {
	resolve?: SitePluginResolveQueryString_2 | null;
	id?: SitePluginIdQueryString_2 | null;
	name?: SitePluginNameQueryString_2 | null;
	version?: SitePluginVersionQueryString_2 | null;
	pluginOptions?: SitePluginPluginOptionsInputObject_2 | null;
	nodeAPIs?: SitePluginNodeApIsQueryList_2 | null;
	browserAPIs?: SitePluginBrowserApIsQueryList_2 | null;
	ssrAPIs?: SitePluginSsrApIsQueryList_2 | null;
	pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null;
	packageJson?: SitePluginPackageJsonInputObject_2 | null;
	internal?: SitePluginInternalInputObject_2 | null;
}
export interface SiteQueryArgs {
	siteMetadata?: SiteSiteMetadataInputObject_2 | null;
	port?: SitePortQueryString_2 | null;
	host?: SiteHostQueryString_2 | null;
	pathPrefix?: SitePathPrefixQueryString_2 | null;
	polyfill?: SitePolyfillQueryBoolean_2 | null;
	buildTime?: SiteBuildTimeQueryString_2 | null;
	id?: SiteIdQueryString_2 | null;
	internal?: SiteInternalInputObject_2 | null;
}
export interface DirectoryQueryArgs {
	id?: DirectoryIdQueryString_2 | null;
	internal?: DirectoryInternalInputObject_2 | null;
	sourceInstanceName?: DirectorySourceInstanceNameQueryString_2 | null;
	absolutePath?: DirectoryAbsolutePathQueryString_2 | null;
	relativePath?: DirectoryRelativePathQueryString_2 | null;
	extension?: DirectoryExtensionQueryString_2 | null;
	size?: DirectorySizeQueryInteger_2 | null;
	prettySize?: DirectoryPrettySizeQueryString_2 | null;
	modifiedTime?: DirectoryModifiedTimeQueryString_2 | null;
	accessTime?: DirectoryAccessTimeQueryString_2 | null;
	changeTime?: DirectoryChangeTimeQueryString_2 | null;
	birthTime?: DirectoryBirthTimeQueryString_2 | null;
	root?: DirectoryRootQueryString_2 | null;
	dir?: DirectoryDirQueryString_2 | null;
	base?: DirectoryBaseQueryString_2 | null;
	ext?: DirectoryExtQueryString_2 | null;
	name?: DirectoryNameQueryString_2 | null;
	relativeDirectory?: DirectoryRelativeDirectoryQueryString_2 | null;
	dev?: DirectoryDevQueryInteger_2 | null;
	mode?: DirectoryModeQueryInteger_2 | null;
	nlink?: DirectoryNlinkQueryInteger_2 | null;
	uid?: DirectoryUidQueryInteger_2 | null;
	gid?: DirectoryGidQueryInteger_2 | null;
	rdev?: DirectoryRdevQueryInteger_2 | null;
	blksize?: DirectoryBlksizeQueryInteger_2 | null;
	ino?: DirectoryInoQueryInteger_2 | null;
	blocks?: DirectoryBlocksQueryInteger_2 | null;
	atimeMs?: DirectoryAtimeMsQueryFloat_2 | null;
	mtimeMs?: DirectoryMtimeMsQueryFloat_2 | null;
	ctimeMs?: DirectoryCtimeMsQueryFloat_2 | null;
	birthtimeMs?: DirectoryBirthtimeMsQueryFloat_2 | null;
	atime?: DirectoryAtimeQueryString_2 | null;
	mtime?: DirectoryMtimeQueryString_2 | null;
	ctime?: DirectoryCtimeQueryString_2 | null;
	birthtime?: DirectoryBirthtimeQueryString_2 | null;
}
export interface FileQueryArgs {
	id?: FileIdQueryString_2 | null;
	internal?: FileInternalInputObject_2 | null;
	sourceInstanceName?: FileSourceInstanceNameQueryString_2 | null;
	absolutePath?: FileAbsolutePathQueryString_2 | null;
	relativePath?: FileRelativePathQueryString_2 | null;
	extension?: FileExtensionQueryString_2 | null;
	size?: FileSizeQueryInteger_2 | null;
	prettySize?: FilePrettySizeQueryString_2 | null;
	modifiedTime?: FileModifiedTimeQueryString_2 | null;
	accessTime?: FileAccessTimeQueryString_2 | null;
	changeTime?: FileChangeTimeQueryString_2 | null;
	birthTime?: FileBirthTimeQueryString_2 | null;
	root?: FileRootQueryString_2 | null;
	dir?: FileDirQueryString_2 | null;
	base?: FileBaseQueryString_2 | null;
	ext?: FileExtQueryString_2 | null;
	name?: FileNameQueryString_2 | null;
	relativeDirectory?: FileRelativeDirectoryQueryString_2 | null;
	dev?: FileDevQueryInteger_2 | null;
	mode?: FileModeQueryInteger_2 | null;
	nlink?: FileNlinkQueryInteger_2 | null;
	uid?: FileUidQueryInteger_2 | null;
	gid?: FileGidQueryInteger_2 | null;
	rdev?: FileRdevQueryInteger_2 | null;
	blksize?: FileBlksizeQueryInteger_2 | null;
	ino?: FileInoQueryInteger_2 | null;
	blocks?: FileBlocksQueryInteger_2 | null;
	atimeMs?: FileAtimeMsQueryFloat_2 | null;
	mtimeMs?: FileMtimeMsQueryFloat_2 | null;
	ctimeMs?: FileCtimeMsQueryFloat_2 | null;
	birthtimeMs?: FileBirthtimeMsQueryFloat_2 | null;
	atime?: FileAtimeQueryString_2 | null;
	mtime?: FileMtimeQueryString_2 | null;
	ctime?: FileCtimeQueryString_2 | null;
	birthtime?: FileBirthtimeQueryString_2 | null;
	publicURL?: PublicUrlQueryString_3 | null;
}
export interface MarkdownRemarkQueryArgs {
	id?: MarkdownRemarkIdQueryString_2 | null;
	internal?: MarkdownRemarkInternalInputObject_2 | null;
	frontmatter?: MarkdownRemarkFrontmatterInputObject_2 | null;
	excerpt?: ExcerptQueryString_3 | null;
	rawMarkdownBody?: MarkdownRemarkRawMarkdownBodyQueryString_2 | null;
	fileAbsolutePath?: MarkdownRemarkFileAbsolutePathQueryString_2 | null;
	html?: HtmlQueryString_3 | null;
	headings?: HeadingsQueryList_3 | null;
	timeToRead?: TimeToReadQueryInt_3 | null;
	tableOfContents?: TableOfContentsQueryString_3 | null;
	wordCount?: WordCountTypeName_3 | null;
}
export interface TodoJsonQueryArgs {
	title?: TodoJsonTitleQueryString_2 | null;
	tags?: TodoJsonTagsQueryList_2 | null;
	id?: TodoJsonIdQueryString_2 | null;
	internal?: TodoJsonInternalInputObject_2 | null;
}
export interface InterestsJsonQueryArgs {
	subjects?: InterestsJsonSubjectsQueryList_2 | null;
	id?: InterestsJsonIdQueryString_2 | null;
	internal?: InterestsJsonInternalInputObject_2 | null;
}
export interface OrganizationJsonQueryArgs {
	name?: OrganizationJsonNameQueryString_2 | null;
	url?: OrganizationJsonUrlQueryString_2 | null;
	logo?: OrganizationJsonLogoQueryString_2 | null;
	telephone?: OrganizationJsonTelephoneQueryString_2 | null;
	id?: OrganizationJsonIdQueryString_2 | null;
	internal?: OrganizationJsonInternalInputObject_2 | null;
	fields?: OrganizationJsonFieldsInputObject_2 | null;
}
export interface SkillsJsonQueryArgs {
	languages?: SkillsJsonLanguagesQueryList_2 | null;
	technical?: SkillsJsonTechnicalQueryList_2 | null;
	soft?: SkillsJsonSoftQueryList_2 | null;
	id?: SkillsJsonIdQueryString_2 | null;
	internal?: SkillsJsonInternalInputObject_2 | null;
}
export interface CompetencesJsonQueryArgs {
	name?: CompetencesJsonNameQueryString_2 | null;
	description?: CompetencesJsonDescriptionQueryString_2 | null;
	id?: CompetencesJsonIdQueryString_2 | null;
	internal?: CompetencesJsonInternalInputObject_2 | null;
}
export interface PersonalJsonQueryArgs {
	name?: PersonalJsonNameQueryString_2 | null;
	email?: PersonalJsonEmailQueryString_2 | null;
	jobTitle?: PersonalJsonJobTitleQueryString_2 | null;
	social?: PersonalJsonSocialQueryList_2 | null;
	id?: PersonalJsonIdQueryString_2 | null;
	internal?: PersonalJsonInternalInputObject_2 | null;
}
export interface ExperiencesJsonQueryArgs {
	work?: ExperiencesJsonWorkQueryList_2 | null;
	id?: ExperiencesJsonIdQueryString_2 | null;
	internal?: ExperiencesJsonInternalInputObject_2 | null;
	fields?: ExperiencesJsonFieldsInputObject_2 | null;
}
export interface DistinctSitePageConnectionArgs {
	field?: SitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: SitePageGroupEnum | null;
}
export interface BirthTimeParentArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DateFrontmatter_2Args {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctSitePluginConnectionArgs {
	field?: SitePluginDistinctEnum | null;
}
export interface GroupSitePluginConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: SitePluginGroupEnum | null;
}
export interface DistinctDirectoryConnectionArgs {
	field?: DirectoryDistinctEnum | null;
}
export interface GroupDirectoryConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: DirectoryGroupEnum | null;
}
export interface ModifiedTimeDirectoryArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeDirectoryArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeDirectoryArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeDirectoryArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeDirectoryArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeDirectoryArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeDirectoryArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeDirectoryArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctFileConnectionArgs {
	field?: FileDistinctEnum | null;
}
export interface GroupFileConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: FileGroupEnum | null;
}
export interface ModifiedTimeFileArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeFileArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeFileArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeFileArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeFileArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeFileArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeFileArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeFileArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface ExcerptMarkdownRemarkArgs {
	pruneLength?: number | null;
	truncate?: boolean | null;
}
export interface HeadingsMarkdownRemarkArgs {
	depth?: HeadingLevels | null;
}
export interface TableOfContentsMarkdownRemarkArgs {
	pathToSlugField?: string | null;
}
export interface DateFrontmatter_3Args {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctMarkdownRemarkConnectionArgs {
	field?: MarkdownRemarkDistinctEnum | null;
}
export interface GroupMarkdownRemarkConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: MarkdownRemarkGroupEnum | null;
}
export interface DistinctTodoJsonConnectionArgs {
	field?: TodoJsonDistinctEnum | null;
}
export interface GroupTodoJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: TodoJsonGroupEnum | null;
}
export interface DistinctInterestsJsonConnectionArgs {
	field?: InterestsJsonDistinctEnum | null;
}
export interface GroupInterestsJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: InterestsJsonGroupEnum | null;
}
export interface DistinctOrganizationJsonConnectionArgs {
	field?: OrganizationJsonDistinctEnum | null;
}
export interface GroupOrganizationJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: OrganizationJsonGroupEnum | null;
}
export interface DistinctSkillsJsonConnectionArgs {
	field?: SkillsJsonDistinctEnum | null;
}
export interface GroupSkillsJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: SkillsJsonGroupEnum | null;
}
export interface DistinctCompetencesJsonConnectionArgs {
	field?: CompetencesJsonDistinctEnum | null;
}
export interface GroupCompetencesJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: CompetencesJsonGroupEnum | null;
}
export interface DistinctPersonalJsonConnectionArgs {
	field?: PersonalJsonDistinctEnum | null;
}
export interface GroupPersonalJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: PersonalJsonGroupEnum | null;
}
export interface DistinctExperiencesJsonConnectionArgs {
	field?: ExperiencesJsonDistinctEnum | null;
}
export interface GroupExperiencesJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: ExperiencesJsonGroupEnum | null;
}
export interface PortSiteArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BuildTimeSiteArgs {
	formatString?:
		| string
		| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
	fromNow?:
		| boolean
		| null /** Returns a string generated with Moment.js' fromNow function */;
	difference?:
		| string
		| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
	locale?:
		| string
		| null /** Configures the locale Moment.js will use to format the date. */;
}

export enum SitePageConnectionSortByFieldsEnum {
	jsonName = "jsonName",
	internalComponentName = "internalComponentName",
	path = "path",
	component = "component",
	componentChunkName = "componentChunkName",
	context___group = "context___group",
	context___pathPrefix = "context___pathPrefix",
	context___additionalContext___listTitle = "context___additionalContext___listTitle",
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

export enum SitePageConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum SitePageDistinctEnum {
	jsonName = "jsonName",
	internalComponentName = "internalComponentName",
	path = "path",
	component = "component",
	componentChunkName = "componentChunkName",
	context___group = "context___group",
	context___pathPrefix = "context___pathPrefix",
	context___additionalContext___listTitle = "context___additionalContext___listTitle",
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

export enum SitePageGroupEnum {
	jsonName = "jsonName",
	internalComponentName = "internalComponentName",
	path = "path",
	component = "component",
	componentChunkName = "componentChunkName",
	context___group = "context___group",
	context___pathPrefix = "context___pathPrefix",
	context___additionalContext___listTitle = "context___additionalContext___listTitle",
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
	pluginOptions___production = "pluginOptions___production",
	pluginOptions___analyzerMode = "pluginOptions___analyzerMode",
	pluginOptions___defaultSizes = "pluginOptions___defaultSizes",
	pluginOptions___openAnalyzer = "pluginOptions___openAnalyzer",
	pluginOptions___name = "pluginOptions___name",
	pluginOptions___path = "pluginOptions___path",
	pluginOptions___maxWidth = "pluginOptions___maxWidth",
	pluginOptions___wrapperStyle = "pluginOptions___wrapperStyle",
	pluginOptions___backgroundColor = "pluginOptions___backgroundColor",
	pluginOptions___linkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
	pluginOptions___showCaptions = "pluginOptions___showCaptions",
	pluginOptions___pathPrefix = "pluginOptions___pathPrefix",
	pluginOptions___withWebp = "pluginOptions___withWebp",
	pluginOptions___inlineCodeMarker = "pluginOptions___inlineCodeMarker",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	pluginOptions___omitGoogleFont = "pluginOptions___omitGoogleFont",
	pluginOptions___query = "pluginOptions___query",
	pluginOptions___feeds = "pluginOptions___feeds",
	pluginOptions___headers______js = "pluginOptions___headers______js",
	pluginOptions___headers____sw_js = "pluginOptions___headers____sw_js",
	pluginOptions___headers______webmanifest = "pluginOptions___headers______webmanifest",
	pluginOptions___headers______css = "pluginOptions___headers______css",
	pluginOptions___headers______png = "pluginOptions___headers______png",
	pluginOptions___headers______jpg = "pluginOptions___headers______jpg",
	pluginOptions___headers______jpeg = "pluginOptions___headers______jpeg",
	pluginOptions___headers______gif = "pluginOptions___headers______gif",
	pluginOptions___headers______svg = "pluginOptions___headers______svg",
	pluginOptions___allPageHeaders = "pluginOptions___allPageHeaders",
	pluginOptions___short_name = "pluginOptions___short_name",
	pluginOptions___start_url = "pluginOptions___start_url",
	pluginOptions___background_color = "pluginOptions___background_color",
	pluginOptions___theme_color = "pluginOptions___theme_color",
	pluginOptions___display = "pluginOptions___display",
	pluginOptions___icon = "pluginOptions___icon",
	pluginOptions___pathCheck = "pluginOptions___pathCheck",
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

export enum SitePluginConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum SitePluginDistinctEnum {
	resolve = "resolve",
	id = "id",
	name = "name",
	version = "version",
	pluginOptions___plugins = "pluginOptions___plugins",
	pluginOptions___production = "pluginOptions___production",
	pluginOptions___analyzerMode = "pluginOptions___analyzerMode",
	pluginOptions___defaultSizes = "pluginOptions___defaultSizes",
	pluginOptions___openAnalyzer = "pluginOptions___openAnalyzer",
	pluginOptions___name = "pluginOptions___name",
	pluginOptions___path = "pluginOptions___path",
	pluginOptions___maxWidth = "pluginOptions___maxWidth",
	pluginOptions___wrapperStyle = "pluginOptions___wrapperStyle",
	pluginOptions___backgroundColor = "pluginOptions___backgroundColor",
	pluginOptions___linkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
	pluginOptions___showCaptions = "pluginOptions___showCaptions",
	pluginOptions___pathPrefix = "pluginOptions___pathPrefix",
	pluginOptions___withWebp = "pluginOptions___withWebp",
	pluginOptions___inlineCodeMarker = "pluginOptions___inlineCodeMarker",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	pluginOptions___omitGoogleFont = "pluginOptions___omitGoogleFont",
	pluginOptions___query = "pluginOptions___query",
	pluginOptions___feeds = "pluginOptions___feeds",
	pluginOptions___headers______js = "pluginOptions___headers______js",
	pluginOptions___headers____sw_js = "pluginOptions___headers____sw_js",
	pluginOptions___headers______webmanifest = "pluginOptions___headers______webmanifest",
	pluginOptions___headers______css = "pluginOptions___headers______css",
	pluginOptions___headers______png = "pluginOptions___headers______png",
	pluginOptions___headers______jpg = "pluginOptions___headers______jpg",
	pluginOptions___headers______jpeg = "pluginOptions___headers______jpeg",
	pluginOptions___headers______gif = "pluginOptions___headers______gif",
	pluginOptions___headers______svg = "pluginOptions___headers______svg",
	pluginOptions___allPageHeaders = "pluginOptions___allPageHeaders",
	pluginOptions___short_name = "pluginOptions___short_name",
	pluginOptions___start_url = "pluginOptions___start_url",
	pluginOptions___background_color = "pluginOptions___background_color",
	pluginOptions___theme_color = "pluginOptions___theme_color",
	pluginOptions___display = "pluginOptions___display",
	pluginOptions___icon = "pluginOptions___icon",
	pluginOptions___pathCheck = "pluginOptions___pathCheck",
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

export enum SitePluginGroupEnum {
	resolve = "resolve",
	id = "id",
	name = "name",
	version = "version",
	pluginOptions___plugins = "pluginOptions___plugins",
	pluginOptions___production = "pluginOptions___production",
	pluginOptions___analyzerMode = "pluginOptions___analyzerMode",
	pluginOptions___defaultSizes = "pluginOptions___defaultSizes",
	pluginOptions___openAnalyzer = "pluginOptions___openAnalyzer",
	pluginOptions___name = "pluginOptions___name",
	pluginOptions___path = "pluginOptions___path",
	pluginOptions___maxWidth = "pluginOptions___maxWidth",
	pluginOptions___wrapperStyle = "pluginOptions___wrapperStyle",
	pluginOptions___backgroundColor = "pluginOptions___backgroundColor",
	pluginOptions___linkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
	pluginOptions___showCaptions = "pluginOptions___showCaptions",
	pluginOptions___pathPrefix = "pluginOptions___pathPrefix",
	pluginOptions___withWebp = "pluginOptions___withWebp",
	pluginOptions___inlineCodeMarker = "pluginOptions___inlineCodeMarker",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	pluginOptions___omitGoogleFont = "pluginOptions___omitGoogleFont",
	pluginOptions___query = "pluginOptions___query",
	pluginOptions___feeds = "pluginOptions___feeds",
	pluginOptions___headers______js = "pluginOptions___headers______js",
	pluginOptions___headers____sw_js = "pluginOptions___headers____sw_js",
	pluginOptions___headers______webmanifest = "pluginOptions___headers______webmanifest",
	pluginOptions___headers______css = "pluginOptions___headers______css",
	pluginOptions___headers______png = "pluginOptions___headers______png",
	pluginOptions___headers______jpg = "pluginOptions___headers______jpg",
	pluginOptions___headers______jpeg = "pluginOptions___headers______jpeg",
	pluginOptions___headers______gif = "pluginOptions___headers______gif",
	pluginOptions___headers______svg = "pluginOptions___headers______svg",
	pluginOptions___allPageHeaders = "pluginOptions___allPageHeaders",
	pluginOptions___short_name = "pluginOptions___short_name",
	pluginOptions___start_url = "pluginOptions___start_url",
	pluginOptions___background_color = "pluginOptions___background_color",
	pluginOptions___theme_color = "pluginOptions___theme_color",
	pluginOptions___display = "pluginOptions___display",
	pluginOptions___icon = "pluginOptions___icon",
	pluginOptions___pathCheck = "pluginOptions___pathCheck",
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

export enum DirectoryConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum DirectoryDistinctEnum {
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

export enum DirectoryGroupEnum {
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
	internal___type = "internal___type",
	internal___mediaType = "internal___mediaType",
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

export enum FileConnectionSortOrderValues {
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

export enum FileDistinctEnum {
	id = "id",
	children = "children",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___mediaType = "internal___mediaType",
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

export enum FileGroupEnum {
	id = "id",
	children = "children",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___mediaType = "internal___mediaType",
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
	frontmatter___link = "frontmatter___link",
	frontmatter___date = "frontmatter___date",
	frontmatter___authors = "frontmatter___authors",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___description = "frontmatter___description",
	frontmatter___draft = "frontmatter___draft",
	frontmatter___toc = "frontmatter___toc",
	frontmatter___type = "frontmatter___type",
	excerpt = "excerpt",
	rawMarkdownBody = "rawMarkdownBody",
	fileAbsolutePath = "fileAbsolutePath",
	html = "html",
	headings = "headings",
	timeToRead = "timeToRead",
	tableOfContents = "tableOfContents",
	wordCount___paragraphs = "wordCount___paragraphs",
	wordCount___sentences = "wordCount___sentences",
	wordCount___words = "wordCount___words",
}

export enum MarkdownRemarkConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum MarkdownRemarkDistinctEnum {
	id = "id",
	parent = "parent",
	internal___content = "internal___content",
	internal___type = "internal___type",
	internal___contentDigest = "internal___contentDigest",
	internal___owner = "internal___owner",
	frontmatter___title = "frontmatter___title",
	frontmatter___link = "frontmatter___link",
	frontmatter___date = "frontmatter___date",
	frontmatter___authors = "frontmatter___authors",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___description = "frontmatter___description",
	frontmatter___draft = "frontmatter___draft",
	frontmatter___toc = "frontmatter___toc",
	frontmatter___type = "frontmatter___type",
	excerpt = "excerpt",
	rawMarkdownBody = "rawMarkdownBody",
	fileAbsolutePath = "fileAbsolutePath",
}

export enum MarkdownRemarkGroupEnum {
	id = "id",
	parent = "parent",
	internal___content = "internal___content",
	internal___type = "internal___type",
	internal___contentDigest = "internal___contentDigest",
	internal___owner = "internal___owner",
	frontmatter___title = "frontmatter___title",
	frontmatter___link = "frontmatter___link",
	frontmatter___date = "frontmatter___date",
	frontmatter___authors = "frontmatter___authors",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___description = "frontmatter___description",
	frontmatter___draft = "frontmatter___draft",
	frontmatter___toc = "frontmatter___toc",
	frontmatter___type = "frontmatter___type",
	excerpt = "excerpt",
	rawMarkdownBody = "rawMarkdownBody",
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

export enum TodoJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum TodoJsonDistinctEnum {
	title = "title",
	tags = "tags",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum TodoJsonGroupEnum {
	title = "title",
	tags = "tags",
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

export enum InterestsJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum InterestsJsonDistinctEnum {
	subjects = "subjects",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum InterestsJsonGroupEnum {
	subjects = "subjects",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum OrganizationJsonConnectionSortByFieldsEnum {
	name = "name",
	url = "url",
	logo = "logo",
	telephone = "telephone",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
	internal___fieldOwners___logo_image = "internal___fieldOwners___logo_image",
	fields___logo_image = "fields___logo_image",
}

export enum OrganizationJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum OrganizationJsonDistinctEnum {
	name = "name",
	url = "url",
	logo = "logo",
	telephone = "telephone",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
	internal___fieldOwners___logo_image = "internal___fieldOwners___logo_image",
	fields___logo_image = "fields___logo_image",
}

export enum OrganizationJsonGroupEnum {
	name = "name",
	url = "url",
	logo = "logo",
	telephone = "telephone",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
	internal___fieldOwners___logo_image = "internal___fieldOwners___logo_image",
	fields___logo_image = "fields___logo_image",
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

export enum SkillsJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum SkillsJsonDistinctEnum {
	languages = "languages",
	technical = "technical",
	soft = "soft",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum SkillsJsonGroupEnum {
	languages = "languages",
	technical = "technical",
	soft = "soft",
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

export enum CompetencesJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum CompetencesJsonDistinctEnum {
	name = "name",
	description = "description",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum CompetencesJsonGroupEnum {
	name = "name",
	description = "description",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum PersonalJsonConnectionSortByFieldsEnum {
	name = "name",
	email = "email",
	jobTitle = "jobTitle",
	social = "social",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum PersonalJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum PersonalJsonDistinctEnum {
	name = "name",
	email = "email",
	jobTitle = "jobTitle",
	social = "social",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
}

export enum PersonalJsonGroupEnum {
	name = "name",
	email = "email",
	jobTitle = "jobTitle",
	social = "social",
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
	internal___fieldOwners___image_image = "internal___fieldOwners___image_image",
	fields___image_image = "fields___image_image",
}

export enum ExperiencesJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum ExperiencesJsonDistinctEnum {
	work = "work",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
	internal___fieldOwners___image_image = "internal___fieldOwners___image_image",
	fields___image_image = "fields___image_image",
}

export enum ExperiencesJsonGroupEnum {
	work = "work",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
	internal___fieldOwners___image_image = "internal___fieldOwners___image_image",
	fields___image_image = "fields___image_image",
}

export namespace QueryResolvers {
	export interface Resolvers<Context = any> {
		allSitePage?: AllSitePageResolver<
			SitePageConnection | null,
			any,
			Context
		> /** Connection to all SitePage nodes */;
		allSitePlugin?: AllSitePluginResolver<
			SitePluginConnection | null,
			any,
			Context
		> /** Connection to all SitePlugin nodes */;
		allDirectory?: AllDirectoryResolver<
			DirectoryConnection | null,
			any,
			Context
		> /** Connection to all Directory nodes */;
		allFile?: AllFileResolver<
			FileConnection | null,
			any,
			Context
		> /** Connection to all File nodes */;
		allMarkdownRemark?: AllMarkdownRemarkResolver<
			MarkdownRemarkConnection | null,
			any,
			Context
		> /** Connection to all MarkdownRemark nodes */;
		allTodoJson?: AllTodoJsonResolver<
			TodoJsonConnection | null,
			any,
			Context
		> /** Connection to all TodoJson nodes */;
		allInterestsJson?: AllInterestsJsonResolver<
			InterestsJsonConnection | null,
			any,
			Context
		> /** Connection to all InterestsJson nodes */;
		allOrganizationJson?: AllOrganizationJsonResolver<
			OrganizationJsonConnection | null,
			any,
			Context
		> /** Connection to all OrganizationJson nodes */;
		allSkillsJson?: AllSkillsJsonResolver<
			SkillsJsonConnection | null,
			any,
			Context
		> /** Connection to all SkillsJson nodes */;
		allCompetencesJson?: AllCompetencesJsonResolver<
			CompetencesJsonConnection | null,
			any,
			Context
		> /** Connection to all CompetencesJson nodes */;
		allPersonalJson?: AllPersonalJsonResolver<
			PersonalJsonConnection | null,
			any,
			Context
		> /** Connection to all PersonalJson nodes */;
		allExperiencesJson?: AllExperiencesJsonResolver<
			ExperiencesJsonConnection | null,
			any,
			Context
		> /** Connection to all ExperiencesJson nodes */;
		sitePage?: SitePageResolver<SitePage | null, any, Context>;
		sitePlugin?: SitePluginResolver<SitePlugin | null, any, Context>;
		site?: SiteResolver<Site | null, any, Context>;
		directory?: DirectoryResolver<Directory | null, any, Context>;
		file?: FileResolver<File | null, any, Context>;
		markdownRemark?: MarkdownRemarkResolver<
			MarkdownRemark | null,
			any,
			Context
		>;
		todoJson?: TodoJsonResolver<TodoJson | null, any, Context>;
		interestsJson?: InterestsJsonResolver<
			InterestsJson | null,
			any,
			Context
		>;
		organizationJson?: OrganizationJsonResolver<
			OrganizationJson | null,
			any,
			Context
		>;
		skillsJson?: SkillsJsonResolver<SkillsJson | null, any, Context>;
		competencesJson?: CompetencesJsonResolver<
			CompetencesJson | null,
			any,
			Context
		>;
		personalJson?: PersonalJsonResolver<PersonalJson | null, any, Context>;
		experiencesJson?: ExperiencesJsonResolver<
			ExperiencesJson | null,
			any,
			Context
		>;
	}

	export type AllSitePageResolver<
		R = SitePageConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllSitePageArgs>;
	export interface AllSitePageArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: SitePageConnectionSort | null;
		filter?: FilterSitePage | null;
	}

	export type AllSitePluginResolver<
		R = SitePluginConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllSitePluginArgs>;
	export interface AllSitePluginArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: SitePluginConnectionSort | null;
		filter?: FilterSitePlugin | null;
	}

	export type AllDirectoryResolver<
		R = DirectoryConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllDirectoryArgs>;
	export interface AllDirectoryArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: DirectoryConnectionSort | null;
		filter?: FilterDirectory | null;
	}

	export type AllFileResolver<
		R = FileConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllFileArgs>;
	export interface AllFileArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: FileConnectionSort | null;
		filter?: FilterFile | null;
	}

	export type AllMarkdownRemarkResolver<
		R = MarkdownRemarkConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllMarkdownRemarkArgs>;
	export interface AllMarkdownRemarkArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: MarkdownRemarkConnectionSort | null;
		filter?: FilterMarkdownRemark | null;
	}

	export type AllTodoJsonResolver<
		R = TodoJsonConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllTodoJsonArgs>;
	export interface AllTodoJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: TodoJsonConnectionSort | null;
		filter?: FilterTodoJson | null;
	}

	export type AllInterestsJsonResolver<
		R = InterestsJsonConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllInterestsJsonArgs>;
	export interface AllInterestsJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: InterestsJsonConnectionSort | null;
		filter?: FilterInterestsJson | null;
	}

	export type AllOrganizationJsonResolver<
		R = OrganizationJsonConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllOrganizationJsonArgs>;
	export interface AllOrganizationJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: OrganizationJsonConnectionSort | null;
		filter?: FilterOrganizationJson | null;
	}

	export type AllSkillsJsonResolver<
		R = SkillsJsonConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllSkillsJsonArgs>;
	export interface AllSkillsJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: SkillsJsonConnectionSort | null;
		filter?: FilterSkillsJson | null;
	}

	export type AllCompetencesJsonResolver<
		R = CompetencesJsonConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllCompetencesJsonArgs>;
	export interface AllCompetencesJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: CompetencesJsonConnectionSort | null;
		filter?: FilterCompetencesJson | null;
	}

	export type AllPersonalJsonResolver<
		R = PersonalJsonConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllPersonalJsonArgs>;
	export interface AllPersonalJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: PersonalJsonConnectionSort | null;
		filter?: FilterPersonalJson | null;
	}

	export type AllExperiencesJsonResolver<
		R = ExperiencesJsonConnection | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AllExperiencesJsonArgs>;
	export interface AllExperiencesJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: ExperiencesJsonConnectionSort | null;
		filter?: FilterExperiencesJson | null;
	}

	export type SitePageResolver<
		R = SitePage | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, SitePageArgs>;
	export interface SitePageArgs {
		jsonName?: SitePageJsonNameQueryString | null;
		internalComponentName?: SitePageInternalComponentNameQueryString | null;
		path?: SitePagePathQueryString_2 | null;
		component?: SitePageComponentQueryString | null;
		componentChunkName?: SitePageComponentChunkNameQueryString | null;
		context?: SitePageContextInputObject | null;
		pluginCreator?: SitePagePluginCreatorInputObject | null;
		pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null;
		componentPath?: SitePageComponentPathQueryString | null;
		id?: SitePageIdQueryString_2 | null;
		internal?: SitePageInternalInputObject_2 | null;
	}

	export type SitePluginResolver<
		R = SitePlugin | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, SitePluginArgs>;
	export interface SitePluginArgs {
		resolve?: SitePluginResolveQueryString_2 | null;
		id?: SitePluginIdQueryString_2 | null;
		name?: SitePluginNameQueryString_2 | null;
		version?: SitePluginVersionQueryString_2 | null;
		pluginOptions?: SitePluginPluginOptionsInputObject_2 | null;
		nodeAPIs?: SitePluginNodeApIsQueryList_2 | null;
		browserAPIs?: SitePluginBrowserApIsQueryList_2 | null;
		ssrAPIs?: SitePluginSsrApIsQueryList_2 | null;
		pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null;
		packageJson?: SitePluginPackageJsonInputObject_2 | null;
		internal?: SitePluginInternalInputObject_2 | null;
	}

	export type SiteResolver<
		R = Site | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, SiteArgs>;
	export interface SiteArgs {
		siteMetadata?: SiteSiteMetadataInputObject_2 | null;
		port?: SitePortQueryString_2 | null;
		host?: SiteHostQueryString_2 | null;
		pathPrefix?: SitePathPrefixQueryString_2 | null;
		polyfill?: SitePolyfillQueryBoolean_2 | null;
		buildTime?: SiteBuildTimeQueryString_2 | null;
		id?: SiteIdQueryString_2 | null;
		internal?: SiteInternalInputObject_2 | null;
	}

	export type DirectoryResolver<
		R = Directory | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DirectoryArgs>;
	export interface DirectoryArgs {
		id?: DirectoryIdQueryString_2 | null;
		internal?: DirectoryInternalInputObject_2 | null;
		sourceInstanceName?: DirectorySourceInstanceNameQueryString_2 | null;
		absolutePath?: DirectoryAbsolutePathQueryString_2 | null;
		relativePath?: DirectoryRelativePathQueryString_2 | null;
		extension?: DirectoryExtensionQueryString_2 | null;
		size?: DirectorySizeQueryInteger_2 | null;
		prettySize?: DirectoryPrettySizeQueryString_2 | null;
		modifiedTime?: DirectoryModifiedTimeQueryString_2 | null;
		accessTime?: DirectoryAccessTimeQueryString_2 | null;
		changeTime?: DirectoryChangeTimeQueryString_2 | null;
		birthTime?: DirectoryBirthTimeQueryString_2 | null;
		root?: DirectoryRootQueryString_2 | null;
		dir?: DirectoryDirQueryString_2 | null;
		base?: DirectoryBaseQueryString_2 | null;
		ext?: DirectoryExtQueryString_2 | null;
		name?: DirectoryNameQueryString_2 | null;
		relativeDirectory?: DirectoryRelativeDirectoryQueryString_2 | null;
		dev?: DirectoryDevQueryInteger_2 | null;
		mode?: DirectoryModeQueryInteger_2 | null;
		nlink?: DirectoryNlinkQueryInteger_2 | null;
		uid?: DirectoryUidQueryInteger_2 | null;
		gid?: DirectoryGidQueryInteger_2 | null;
		rdev?: DirectoryRdevQueryInteger_2 | null;
		blksize?: DirectoryBlksizeQueryInteger_2 | null;
		ino?: DirectoryInoQueryInteger_2 | null;
		blocks?: DirectoryBlocksQueryInteger_2 | null;
		atimeMs?: DirectoryAtimeMsQueryFloat_2 | null;
		mtimeMs?: DirectoryMtimeMsQueryFloat_2 | null;
		ctimeMs?: DirectoryCtimeMsQueryFloat_2 | null;
		birthtimeMs?: DirectoryBirthtimeMsQueryFloat_2 | null;
		atime?: DirectoryAtimeQueryString_2 | null;
		mtime?: DirectoryMtimeQueryString_2 | null;
		ctime?: DirectoryCtimeQueryString_2 | null;
		birthtime?: DirectoryBirthtimeQueryString_2 | null;
	}

	export type FileResolver<
		R = File | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, FileArgs>;
	export interface FileArgs {
		id?: FileIdQueryString_2 | null;
		internal?: FileInternalInputObject_2 | null;
		sourceInstanceName?: FileSourceInstanceNameQueryString_2 | null;
		absolutePath?: FileAbsolutePathQueryString_2 | null;
		relativePath?: FileRelativePathQueryString_2 | null;
		extension?: FileExtensionQueryString_2 | null;
		size?: FileSizeQueryInteger_2 | null;
		prettySize?: FilePrettySizeQueryString_2 | null;
		modifiedTime?: FileModifiedTimeQueryString_2 | null;
		accessTime?: FileAccessTimeQueryString_2 | null;
		changeTime?: FileChangeTimeQueryString_2 | null;
		birthTime?: FileBirthTimeQueryString_2 | null;
		root?: FileRootQueryString_2 | null;
		dir?: FileDirQueryString_2 | null;
		base?: FileBaseQueryString_2 | null;
		ext?: FileExtQueryString_2 | null;
		name?: FileNameQueryString_2 | null;
		relativeDirectory?: FileRelativeDirectoryQueryString_2 | null;
		dev?: FileDevQueryInteger_2 | null;
		mode?: FileModeQueryInteger_2 | null;
		nlink?: FileNlinkQueryInteger_2 | null;
		uid?: FileUidQueryInteger_2 | null;
		gid?: FileGidQueryInteger_2 | null;
		rdev?: FileRdevQueryInteger_2 | null;
		blksize?: FileBlksizeQueryInteger_2 | null;
		ino?: FileInoQueryInteger_2 | null;
		blocks?: FileBlocksQueryInteger_2 | null;
		atimeMs?: FileAtimeMsQueryFloat_2 | null;
		mtimeMs?: FileMtimeMsQueryFloat_2 | null;
		ctimeMs?: FileCtimeMsQueryFloat_2 | null;
		birthtimeMs?: FileBirthtimeMsQueryFloat_2 | null;
		atime?: FileAtimeQueryString_2 | null;
		mtime?: FileMtimeQueryString_2 | null;
		ctime?: FileCtimeQueryString_2 | null;
		birthtime?: FileBirthtimeQueryString_2 | null;
		publicURL?: PublicUrlQueryString_3 | null;
	}

	export type MarkdownRemarkResolver<
		R = MarkdownRemark | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, MarkdownRemarkArgs>;
	export interface MarkdownRemarkArgs {
		id?: MarkdownRemarkIdQueryString_2 | null;
		internal?: MarkdownRemarkInternalInputObject_2 | null;
		frontmatter?: MarkdownRemarkFrontmatterInputObject_2 | null;
		excerpt?: ExcerptQueryString_3 | null;
		rawMarkdownBody?: MarkdownRemarkRawMarkdownBodyQueryString_2 | null;
		fileAbsolutePath?: MarkdownRemarkFileAbsolutePathQueryString_2 | null;
		html?: HtmlQueryString_3 | null;
		headings?: HeadingsQueryList_3 | null;
		timeToRead?: TimeToReadQueryInt_3 | null;
		tableOfContents?: TableOfContentsQueryString_3 | null;
		wordCount?: WordCountTypeName_3 | null;
	}

	export type TodoJsonResolver<
		R = TodoJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, TodoJsonArgs>;
	export interface TodoJsonArgs {
		title?: TodoJsonTitleQueryString_2 | null;
		tags?: TodoJsonTagsQueryList_2 | null;
		id?: TodoJsonIdQueryString_2 | null;
		internal?: TodoJsonInternalInputObject_2 | null;
	}

	export type InterestsJsonResolver<
		R = InterestsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, InterestsJsonArgs>;
	export interface InterestsJsonArgs {
		subjects?: InterestsJsonSubjectsQueryList_2 | null;
		id?: InterestsJsonIdQueryString_2 | null;
		internal?: InterestsJsonInternalInputObject_2 | null;
	}

	export type OrganizationJsonResolver<
		R = OrganizationJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, OrganizationJsonArgs>;
	export interface OrganizationJsonArgs {
		name?: OrganizationJsonNameQueryString_2 | null;
		url?: OrganizationJsonUrlQueryString_2 | null;
		logo?: OrganizationJsonLogoQueryString_2 | null;
		telephone?: OrganizationJsonTelephoneQueryString_2 | null;
		id?: OrganizationJsonIdQueryString_2 | null;
		internal?: OrganizationJsonInternalInputObject_2 | null;
		fields?: OrganizationJsonFieldsInputObject_2 | null;
	}

	export type SkillsJsonResolver<
		R = SkillsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, SkillsJsonArgs>;
	export interface SkillsJsonArgs {
		languages?: SkillsJsonLanguagesQueryList_2 | null;
		technical?: SkillsJsonTechnicalQueryList_2 | null;
		soft?: SkillsJsonSoftQueryList_2 | null;
		id?: SkillsJsonIdQueryString_2 | null;
		internal?: SkillsJsonInternalInputObject_2 | null;
	}

	export type CompetencesJsonResolver<
		R = CompetencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, CompetencesJsonArgs>;
	export interface CompetencesJsonArgs {
		name?: CompetencesJsonNameQueryString_2 | null;
		description?: CompetencesJsonDescriptionQueryString_2 | null;
		id?: CompetencesJsonIdQueryString_2 | null;
		internal?: CompetencesJsonInternalInputObject_2 | null;
	}

	export type PersonalJsonResolver<
		R = PersonalJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, PersonalJsonArgs>;
	export interface PersonalJsonArgs {
		name?: PersonalJsonNameQueryString_2 | null;
		email?: PersonalJsonEmailQueryString_2 | null;
		jobTitle?: PersonalJsonJobTitleQueryString_2 | null;
		social?: PersonalJsonSocialQueryList_2 | null;
		id?: PersonalJsonIdQueryString_2 | null;
		internal?: PersonalJsonInternalInputObject_2 | null;
	}

	export type ExperiencesJsonResolver<
		R = ExperiencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, ExperiencesJsonArgs>;
	export interface ExperiencesJsonArgs {
		work?: ExperiencesJsonWorkQueryList_2 | null;
		id?: ExperiencesJsonIdQueryString_2 | null;
		internal?: ExperiencesJsonInternalInputObject_2 | null;
		fields?: ExperiencesJsonFieldsInputObject_2 | null;
	}
}
/** A connection to a list of items. */
export namespace SitePageConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(SitePageEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(SitePageGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (SitePageEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: SitePageDistinctEnum | null;
	}

	export type GroupResolver<
		R = (SitePageGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: SitePageGroupEnum | null;
	}
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
	export interface Resolvers<Context = any> {
		hasNextPage?: HasNextPageResolver<
			boolean,
			any,
			Context
		> /** When paginating, are there more items? */;
	}

	export type HasNextPageResolver<
		R = boolean,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace SitePageEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			SitePage | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			SitePage | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			SitePage | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = SitePage | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = SitePage | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = SitePage | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type SitePage */
export namespace SitePageResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		jsonName?: JsonNameResolver<string | null, any, Context>;
		internalComponentName?: InternalComponentNameResolver<
			string | null,
			any,
			Context
		>;
		path?: PathResolver<string | null, any, Context>;
		component?: ComponentResolver<string | null, any, Context>;
		componentChunkName?: ComponentChunkNameResolver<
			string | null,
			any,
			Context
		>;
		context?: ContextResolver<Context | null, any, Context>;
		pluginCreator?: PluginCreatorResolver<SitePlugin | null, any, Context>;
		pluginCreatorId?: PluginCreatorIdResolver<string | null, any, Context>;
		componentPath?: ComponentPathResolver<string | null, any, Context>;
		internal?: InternalResolver<Internal_14 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type JsonNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalComponentNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ComponentResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ComponentChunkNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ContextResolver<
		R = Context | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PluginCreatorResolver<
		R = SitePlugin | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PluginCreatorIdResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ComponentPathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_14 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace ContextResolvers {
	export interface Resolvers<Context = any> {
		group?: GroupResolver<(Group | null)[] | null, any, Context>;
		pathPrefix?: PathPrefixResolver<string | null, any, Context>;
		additionalContext?: AdditionalContextResolver<
			AdditionalContext | null,
			any,
			Context
		>;
		markdownPath?: MarkdownPathResolver<string | null, any, Context>;
	}

	export type GroupResolver<
		R = (Group | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PathPrefixResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AdditionalContextResolver<
		R = AdditionalContext | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type MarkdownPathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace GroupResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<Node | null, any, Context>;
	}

	export type NodeResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace NodeResolvers {
	export interface Resolvers<Context = any> {
		htmlAst?: HtmlAstResolver<HtmlAst | null, any, Context>;
		excerpt?: ExcerptResolver<string | null, any, Context>;
		timeToRead?: TimeToReadResolver<number | null, any, Context>;
		count?: CountResolver<Count | null, any, Context>;
		fileAbsolutePath?: FileAbsolutePathResolver<
			string | null,
			any,
			Context
		>;
		parent?: ParentResolver<Parent | null, any, Context>;
		frontmatter?: FrontmatterResolver<Frontmatter_2 | null, any, Context>;
	}

	export type HtmlAstResolver<
		R = HtmlAst | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ExcerptResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TimeToReadResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type CountResolver<
		R = Count | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FileAbsolutePathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ParentResolver<
		R = Parent | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FrontmatterResolver<
		R = Frontmatter_2 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace HtmlAstResolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		children?: ChildrenResolver<(Children | null)[] | null, any, Context>;
		data?: DataResolver<Data | null, any, Context>;
		tagName?: TagNameResolver<string | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Children | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DataResolver<
		R = Data | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TagNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace ChildrenResolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		tagName?: TagNameResolver<string | null, any, Context>;
		properties?: PropertiesResolver<Properties | null, any, Context>;
		children?: ChildrenResolver<(Children_2 | null)[] | null, any, Context>;
		value?: ValueResolver<string | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TagNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PropertiesResolver<
		R = Properties | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Children_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace PropertiesResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string | null, any, Context>;
		size?: SizeResolver<string | null, any, Context>;
		className?: ClassNameResolver<(string | null)[] | null, any, Context>;
		dataLanguage?: DataLanguageResolver<string | null, any, Context>;
		src?: SrcResolver<string | null, any, Context>;
		style?: StyleResolver<string | null, any, Context>;
		sandbox?: SandboxResolver<(string | null)[] | null, any, Context>;
		title?: TitleResolver<string | null, any, Context>;
		width?: WidthResolver<number | null, any, Context>;
		height?: HeightResolver<number | null, any, Context>;
		frameBorder?: FrameBorderResolver<string | null, any, Context>;
		allow?: AllowResolver<string | null, any, Context>;
		allowFullScreen?: AllowFullScreenResolver<boolean | null, any, Context>;
		attr?: AttrResolver<string | null, any, Context>;
	}

	export type IdResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SizeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ClassNameResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DataLanguageResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SrcResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type StyleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SandboxResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TitleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type WidthResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type HeightResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FrameBorderResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AllowResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AllowFullScreenResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AttrResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Children_2Resolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		tagName?: TagNameResolver<string | null, any, Context>;
		properties?: PropertiesResolver<Properties_2 | null, any, Context>;
		children?: ChildrenResolver<(Children_3 | null)[] | null, any, Context>;
		value?: ValueResolver<string | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TagNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PropertiesResolver<
		R = Properties_2 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Children_3 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Properties_2Resolvers {
	export interface Resolvers<Context = any> {
		href?: HrefResolver<string | null, any, Context>;
		ariaHidden?: AriaHiddenResolver<boolean | null, any, Context>;
		className?: ClassNameResolver<(string | null)[] | null, any, Context>;
		role?: RoleResolver<string | null, any, Context>;
		ariaLabelledBy?: AriaLabelledByResolver<
			(string | null)[] | null,
			any,
			Context
		>;
		id?: IdResolver<string | null, any, Context>;
		quote?: QuoteResolver<string | null, any, Context>;
		author?: AuthorResolver<string | null, any, Context>;
		from?: FromResolver<string | null, any, Context>;
		position?: PositionResolver<string | null, any, Context>;
		title?: TitleResolver<string | null, any, Context>;
		src?: SrcResolver<string | null, any, Context>;
		alt?: AltResolver<string | null, any, Context>;
	}

	export type HrefResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AriaHiddenResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ClassNameResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RoleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AriaLabelledByResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IdResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type QuoteResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AuthorResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FromResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PositionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TitleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SrcResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AltResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Children_3Resolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		tagName?: TagNameResolver<string | null, any, Context>;
		properties?: PropertiesResolver<Properties_3 | null, any, Context>;
		children?: ChildrenResolver<(Children_4 | null)[] | null, any, Context>;
		value?: ValueResolver<string | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TagNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PropertiesResolver<
		R = Properties_3 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Children_4 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Properties_3Resolvers {
	export interface Resolvers<Context = any> {
		ariaHidden?: AriaHiddenResolver<string | null, any, Context>;
		height?: HeightResolver<string | null, any, Context>;
		version?: VersionResolver<string | null, any, Context>;
		viewBox?: ViewBoxResolver<string | null, any, Context>;
		width?: WidthResolver<string | null, any, Context>;
		href?: HrefResolver<string | null, any, Context>;
		className?: ClassNameResolver<(string | null)[] | null, any, Context>;
		id?: IdResolver<string | null, any, Context>;
	}

	export type AriaHiddenResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type HeightResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type VersionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ViewBoxResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type WidthResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type HrefResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ClassNameResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IdResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Children_4Resolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		tagName?: TagNameResolver<string | null, any, Context>;
		properties?: PropertiesResolver<Properties_4 | null, any, Context>;
		children?: ChildrenResolver<(Children_5 | null)[] | null, any, Context>;
		value?: ValueResolver<string | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TagNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PropertiesResolver<
		R = Properties_4 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Children_5 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Properties_4Resolvers {
	export interface Resolvers<Context = any> {
		fillRule?: FillRuleResolver<string | null, any, Context>;
		d?: DResolver<string | null, any, Context>;
		href?: HrefResolver<string | null, any, Context>;
		className?: ClassNameResolver<(string | null)[] | null, any, Context>;
	}

	export type FillRuleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type HrefResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ClassNameResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Children_5Resolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		value?: ValueResolver<string | null, any, Context>;
		tagName?: TagNameResolver<string | null, any, Context>;
		properties?: PropertiesResolver<Properties_5 | null, any, Context>;
		children?: ChildrenResolver<(Children_6 | null)[] | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TagNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PropertiesResolver<
		R = Properties_5 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Children_6 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Properties_5Resolvers {
	export interface Resolvers<Context = any> {
		href?: HrefResolver<string | null, any, Context>;
		className?: ClassNameResolver<(string | null)[] | null, any, Context>;
		id?: IdResolver<string | null, any, Context>;
	}

	export type HrefResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ClassNameResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IdResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Children_6Resolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		value?: ValueResolver<string | null, any, Context>;
		tagName?: TagNameResolver<string | null, any, Context>;
		properties?: PropertiesResolver<Properties_6 | null, any, Context>;
		children?: ChildrenResolver<(Children_7 | null)[] | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TagNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PropertiesResolver<
		R = Properties_6 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Children_7 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Properties_6Resolvers {
	export interface Resolvers<Context = any> {
		className?: ClassNameResolver<(string | null)[] | null, any, Context>;
		href?: HrefResolver<string | null, any, Context>;
	}

	export type ClassNameResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type HrefResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Children_7Resolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		value?: ValueResolver<string | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace DataResolvers {
	export interface Resolvers<Context = any> {
		quirksMode?: QuirksModeResolver<boolean | null, any, Context>;
	}

	export type QuirksModeResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace CountResolvers {
	export interface Resolvers<Context = any> {
		words?: WordsResolver<number | null, any, Context>;
	}

	export type WordsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace ParentResolvers {
	export interface Resolvers<Context = any> {
		birthTime?: BirthTimeResolver<Date | null, any, Context>;
		relativeDirectory?: RelativeDirectoryResolver<
			string | null,
			any,
			Context
		>;
		name?: NameResolver<string | null, any, Context>;
	}

	export type BirthTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, BirthTimeArgs>;
	export interface BirthTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type RelativeDirectoryResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Frontmatter_2Resolvers {
	export interface Resolvers<Context = any> {
		title?: TitleResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
		date?: DateResolver<Date | null, any, Context>;
		authors?: AuthorsResolver<(Authors_2 | null)[] | null, any, Context>;
		link?: LinkResolver<string | null, any, Context>;
	}

	export type TitleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DateResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DateArgs>;
	export interface DateArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type AuthorsResolver<
		R = (Authors_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type LinkResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Authors_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		url?: UrlResolver<string | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type UrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace AdditionalContextResolvers {
	export interface Resolvers<Context = any> {
		listTitle?: ListTitleResolver<string | null, any, Context>;
	}

	export type ListTitleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type SitePlugin */
export namespace SitePluginResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		resolve?: ResolveResolver<string | null, any, Context>;
		name?: NameResolver<string | null, any, Context>;
		version?: VersionResolver<string | null, any, Context>;
		pluginOptions?: PluginOptionsResolver<
			PluginOptions_3 | null,
			any,
			Context
		>;
		nodeAPIs?: NodeApIsResolver<(string | null)[] | null, any, Context>;
		browserAPIs?: BrowserApIsResolver<
			(string | null)[] | null,
			any,
			Context
		>;
		ssrAPIs?: SsrApIsResolver<(string | null)[] | null, any, Context>;
		pluginFilepath?: PluginFilepathResolver<string | null, any, Context>;
		packageJson?: PackageJsonResolver<PackageJson_2 | null, any, Context>;
		internal?: InternalResolver<Internal_15 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ResolveResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type VersionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PluginOptionsResolver<
		R = PluginOptions_3 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NodeApIsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BrowserApIsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SsrApIsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PluginFilepathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PackageJsonResolver<
		R = PackageJson_2 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_15 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace PluginOptions_3Resolvers {
	export interface Resolvers<Context = any> {
		plugins?: PluginsResolver<(Plugins_2 | null)[] | null, any, Context>;
		production?: ProductionResolver<boolean | null, any, Context>;
		analyzerMode?: AnalyzerModeResolver<string | null, any, Context>;
		defaultSizes?: DefaultSizesResolver<string | null, any, Context>;
		openAnalyzer?: OpenAnalyzerResolver<boolean | null, any, Context>;
		name?: NameResolver<string | null, any, Context>;
		path?: PathResolver<string | null, any, Context>;
		maxWidth?: MaxWidthResolver<number | null, any, Context>;
		wrapperStyle?: WrapperStyleResolver<string | null, any, Context>;
		backgroundColor?: BackgroundColorResolver<string | null, any, Context>;
		linkImagesToOriginal?: LinkImagesToOriginalResolver<
			boolean | null,
			any,
			Context
		>;
		showCaptions?: ShowCaptionsResolver<boolean | null, any, Context>;
		pathPrefix?: PathPrefixResolver<string | null, any, Context>;
		withWebp?: WithWebpResolver<boolean | null, any, Context>;
		inlineCodeMarker?: InlineCodeMarkerResolver<
			string | null,
			any,
			Context
		>;
		pathToConfigModule?: PathToConfigModuleResolver<
			string | null,
			any,
			Context
		>;
		omitGoogleFont?: OmitGoogleFontResolver<boolean | null, any, Context>;
		query?: QueryResolver<string | null, any, Context>;
		feeds?: FeedsResolver<(Feeds_2 | null)[] | null, any, Context>;
		headers?: HeadersResolver<Headers_2 | null, any, Context>;
		allPageHeaders?: AllPageHeadersResolver<
			(string | null)[] | null,
			any,
			Context
		>;
		short_name?: ShortNameResolver<string | null, any, Context>;
		start_url?: StartUrlResolver<string | null, any, Context>;
		background_color?: BackgroundColorResolver<string | null, any, Context>;
		theme_color?: ThemeColorResolver<string | null, any, Context>;
		display?: DisplayResolver<string | null, any, Context>;
		icon?: IconResolver<string | null, any, Context>;
		pathCheck?: PathCheckResolver<boolean | null, any, Context>;
	}

	export type PluginsResolver<
		R = (Plugins_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ProductionResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AnalyzerModeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DefaultSizesResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OpenAnalyzerResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type MaxWidthResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type WrapperStyleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BackgroundColorResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type LinkImagesToOriginalResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ShowCaptionsResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PathPrefixResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type WithWebpResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InlineCodeMarkerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PathToConfigModuleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OmitGoogleFontResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type QueryResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FeedsResolver<
		R = (Feeds_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type HeadersResolver<
		R = Headers_2 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AllPageHeadersResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ShortNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type StartUrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BackgroundColorResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ThemeColorResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DisplayResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IconResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PathCheckResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Plugins_2Resolvers {
	export interface Resolvers<Context = any> {
		resolve?: ResolveResolver<string | null, any, Context>;
		id?: IdResolver<string | null, any, Context>;
		name?: NameResolver<string | null, any, Context>;
		version?: VersionResolver<string | null, any, Context>;
		pluginOptions?: PluginOptionsResolver<
			PluginOptions_4 | null,
			any,
			Context
		>;
		browserAPIs?: BrowserApIsResolver<
			(string | null)[] | null,
			any,
			Context
		>;
		ssrAPIs?: SsrApIsResolver<(string | null)[] | null, any, Context>;
		pluginFilepath?: PluginFilepathResolver<string | null, any, Context>;
	}

	export type ResolveResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IdResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type VersionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PluginOptionsResolver<
		R = PluginOptions_4 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BrowserApIsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SsrApIsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PluginFilepathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace PluginOptions_4Resolvers {
	export interface Resolvers<Context = any> {
		maxWidth?: MaxWidthResolver<number | null, any, Context>;
		wrapperStyle?: WrapperStyleResolver<string | null, any, Context>;
		backgroundColor?: BackgroundColorResolver<string | null, any, Context>;
		linkImagesToOriginal?: LinkImagesToOriginalResolver<
			boolean | null,
			any,
			Context
		>;
		showCaptions?: ShowCaptionsResolver<boolean | null, any, Context>;
		pathPrefix?: PathPrefixResolver<string | null, any, Context>;
		withWebp?: WithWebpResolver<boolean | null, any, Context>;
		inlineCodeMarker?: InlineCodeMarkerResolver<
			string | null,
			any,
			Context
		>;
	}

	export type MaxWidthResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type WrapperStyleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BackgroundColorResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type LinkImagesToOriginalResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ShowCaptionsResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PathPrefixResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type WithWebpResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InlineCodeMarkerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Feeds_2Resolvers {
	export interface Resolvers<Context = any> {
		query?: QueryResolver<string | null, any, Context>;
		output?: OutputResolver<string | null, any, Context>;
	}

	export type QueryResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OutputResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Headers_2Resolvers {
	export interface Resolvers<Context = any> {
		_xxjs?: XxjsResolver<(string | null)[] | null, any, Context>;
		_sw_js?: SwJsResolver<(string | null)[] | null, any, Context>;
		_xxwebmanifest?: XxwebmanifestResolver<
			(string | null)[] | null,
			any,
			Context
		>;
		_xxcss?: XxcssResolver<(string | null)[] | null, any, Context>;
		_xxpng?: XxpngResolver<(string | null)[] | null, any, Context>;
		_xxjpg?: XxjpgResolver<(string | null)[] | null, any, Context>;
		_xxjpeg?: XxjpegResolver<(string | null)[] | null, any, Context>;
		_xxgif?: XxgifResolver<(string | null)[] | null, any, Context>;
		_xxsvg?: XxsvgResolver<(string | null)[] | null, any, Context>;
	}

	export type XxjsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SwJsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type XxwebmanifestResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type XxcssResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type XxpngResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type XxjpgResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type XxjpegResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type XxgifResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type XxsvgResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace PackageJson_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
		version?: VersionResolver<string | null, any, Context>;
		main?: MainResolver<string | null, any, Context>;
		author?: AuthorResolver<string | null, any, Context>;
		license?: LicenseResolver<string | null, any, Context>;
		dependencies?: DependenciesResolver<
			(Dependencies_2 | null)[] | null,
			any,
			Context
		>;
		devDependencies?: DevDependenciesResolver<
			(DevDependencies_2 | null)[] | null,
			any,
			Context
		>;
		peerDependencies?: PeerDependenciesResolver<
			(PeerDependencies_2 | null)[] | null,
			any,
			Context
		>;
		keywords?: KeywordsResolver<(string | null)[] | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type VersionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type MainResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AuthorResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type LicenseResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DependenciesResolver<
		R = (Dependencies_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DevDependenciesResolver<
		R = (DevDependencies_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PeerDependenciesResolver<
		R = (PeerDependencies_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type KeywordsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Dependencies_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		version?: VersionResolver<string | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type VersionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace DevDependencies_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		version?: VersionResolver<string | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type VersionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace PeerDependencies_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		version?: VersionResolver<string | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type VersionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_15Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_14Resolvers {
	export interface Resolvers<Context = any> {
		type?: TypeResolver<string | null, any, Context>;
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace SitePageGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(SitePageGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (SitePageGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace SitePageGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			SitePage | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			SitePage | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			SitePage | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = SitePage | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = SitePage | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = SitePage | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace SitePluginConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(SitePluginEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(SitePluginGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (SitePluginEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: SitePluginDistinctEnum | null;
	}

	export type GroupResolver<
		R = (SitePluginGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: SitePluginGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace SitePluginEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			SitePlugin | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			SitePlugin | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			SitePlugin | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = SitePlugin | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = SitePlugin | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = SitePlugin | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace SitePluginGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(SitePluginGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (SitePluginGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace SitePluginGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			SitePlugin | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			SitePlugin | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			SitePlugin | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = SitePlugin | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = SitePlugin | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = SitePlugin | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DirectoryConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(DirectoryEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(DirectoryGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (DirectoryEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: DirectoryDistinctEnum | null;
	}

	export type GroupResolver<
		R = (DirectoryGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: DirectoryGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace DirectoryEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			Directory | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			Directory | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			Directory | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = Directory | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = Directory | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = Directory | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type Directory */
export namespace DirectoryResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		internal?: InternalResolver<Internal_16 | null, any, Context>;
		sourceInstanceName?: SourceInstanceNameResolver<
			string | null,
			any,
			Context
		>;
		absolutePath?: AbsolutePathResolver<string | null, any, Context>;
		relativePath?: RelativePathResolver<string | null, any, Context>;
		extension?: ExtensionResolver<string | null, any, Context>;
		size?: SizeResolver<number | null, any, Context>;
		prettySize?: PrettySizeResolver<string | null, any, Context>;
		modifiedTime?: ModifiedTimeResolver<Date | null, any, Context>;
		accessTime?: AccessTimeResolver<Date | null, any, Context>;
		changeTime?: ChangeTimeResolver<Date | null, any, Context>;
		birthTime?: BirthTimeResolver<Date | null, any, Context>;
		root?: RootResolver<string | null, any, Context>;
		dir?: DirResolver<string | null, any, Context>;
		base?: BaseResolver<string | null, any, Context>;
		ext?: ExtResolver<string | null, any, Context>;
		name?: NameResolver<string | null, any, Context>;
		relativeDirectory?: RelativeDirectoryResolver<
			string | null,
			any,
			Context
		>;
		dev?: DevResolver<number | null, any, Context>;
		mode?: ModeResolver<number | null, any, Context>;
		nlink?: NlinkResolver<number | null, any, Context>;
		uid?: UidResolver<number | null, any, Context>;
		gid?: GidResolver<number | null, any, Context>;
		rdev?: RdevResolver<number | null, any, Context>;
		blksize?: BlksizeResolver<number | null, any, Context>;
		ino?: InoResolver<number | null, any, Context>;
		blocks?: BlocksResolver<number | null, any, Context>;
		atimeMs?: AtimeMsResolver<number | null, any, Context>;
		mtimeMs?: MtimeMsResolver<number | null, any, Context>;
		ctimeMs?: CtimeMsResolver<number | null, any, Context>;
		birthtimeMs?: BirthtimeMsResolver<number | null, any, Context>;
		atime?: AtimeResolver<Date | null, any, Context>;
		mtime?: MtimeResolver<Date | null, any, Context>;
		ctime?: CtimeResolver<Date | null, any, Context>;
		birthtime?: BirthtimeResolver<Date | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_16 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SourceInstanceNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AbsolutePathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RelativePathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ExtensionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SizeResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PrettySizeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ModifiedTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, ModifiedTimeArgs>;
	export interface ModifiedTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type AccessTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AccessTimeArgs>;
	export interface AccessTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type ChangeTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, ChangeTimeArgs>;
	export interface ChangeTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type BirthTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, BirthTimeArgs>;
	export interface BirthTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type RootResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DirResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BaseResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ExtResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RelativeDirectoryResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DevResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ModeResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NlinkResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type UidResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type GidResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RdevResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BlksizeResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InoResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BlocksResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AtimeMsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type MtimeMsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type CtimeMsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BirthtimeMsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AtimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AtimeArgs>;
	export interface AtimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type MtimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, MtimeArgs>;
	export interface MtimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type CtimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, CtimeArgs>;
	export interface CtimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type BirthtimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, BirthtimeArgs>;
	export interface BirthtimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}
}

export namespace Internal_16Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DirectoryGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(DirectoryGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (DirectoryGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DirectoryGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			Directory | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			Directory | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			Directory | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = Directory | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = Directory | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = Directory | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace FileConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(FileEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(FileGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (FileEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: FileDistinctEnum | null;
	}

	export type GroupResolver<
		R = (FileGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: FileGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace FileEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			File | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			File | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			File | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = File | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = File | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = File | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type File */
export namespace FileResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		childrenTodoJson?: ChildrenTodoJsonResolver<
			(TodoJson | null)[] | null,
			any,
			Context
		> /** The children of this node of type todoJson */;
		childMarkdownRemark?: ChildMarkdownRemarkResolver<
			MarkdownRemark | null,
			any,
			Context
		> /** The child of this node of type markdownRemark */;
		childExperiencesJson?: ChildExperiencesJsonResolver<
			ExperiencesJson | null,
			any,
			Context
		> /** The child of this node of type experiencesJson */;
		childInterestsJson?: ChildInterestsJsonResolver<
			InterestsJson | null,
			any,
			Context
		> /** The child of this node of type interestsJson */;
		childOrganizationJson?: ChildOrganizationJsonResolver<
			OrganizationJson | null,
			any,
			Context
		> /** The child of this node of type organizationJson */;
		childSkillsJson?: ChildSkillsJsonResolver<
			SkillsJson | null,
			any,
			Context
		> /** The child of this node of type skillsJson */;
		childPersonalJson?: ChildPersonalJsonResolver<
			PersonalJson | null,
			any,
			Context
		> /** The child of this node of type personalJson */;
		childrenCompetencesJson?: ChildrenCompetencesJsonResolver<
			(CompetencesJson | null)[] | null,
			any,
			Context
		> /** The children of this node of type competencesJson */;
		internal?: InternalResolver<Internal_17 | null, any, Context>;
		sourceInstanceName?: SourceInstanceNameResolver<
			string | null,
			any,
			Context
		>;
		absolutePath?: AbsolutePathResolver<string | null, any, Context>;
		relativePath?: RelativePathResolver<string | null, any, Context>;
		extension?: ExtensionResolver<string | null, any, Context>;
		size?: SizeResolver<number | null, any, Context>;
		prettySize?: PrettySizeResolver<string | null, any, Context>;
		modifiedTime?: ModifiedTimeResolver<Date | null, any, Context>;
		accessTime?: AccessTimeResolver<Date | null, any, Context>;
		changeTime?: ChangeTimeResolver<Date | null, any, Context>;
		birthTime?: BirthTimeResolver<Date | null, any, Context>;
		root?: RootResolver<string | null, any, Context>;
		dir?: DirResolver<string | null, any, Context>;
		base?: BaseResolver<string | null, any, Context>;
		ext?: ExtResolver<string | null, any, Context>;
		name?: NameResolver<string | null, any, Context>;
		relativeDirectory?: RelativeDirectoryResolver<
			string | null,
			any,
			Context
		>;
		dev?: DevResolver<number | null, any, Context>;
		mode?: ModeResolver<number | null, any, Context>;
		nlink?: NlinkResolver<number | null, any, Context>;
		uid?: UidResolver<number | null, any, Context>;
		gid?: GidResolver<number | null, any, Context>;
		rdev?: RdevResolver<number | null, any, Context>;
		blksize?: BlksizeResolver<number | null, any, Context>;
		ino?: InoResolver<number | null, any, Context>;
		blocks?: BlocksResolver<number | null, any, Context>;
		atimeMs?: AtimeMsResolver<number | null, any, Context>;
		mtimeMs?: MtimeMsResolver<number | null, any, Context>;
		ctimeMs?: CtimeMsResolver<number | null, any, Context>;
		birthtimeMs?: BirthtimeMsResolver<number | null, any, Context>;
		atime?: AtimeResolver<Date | null, any, Context>;
		mtime?: MtimeResolver<Date | null, any, Context>;
		ctime?: CtimeResolver<Date | null, any, Context>;
		birthtime?: BirthtimeResolver<Date | null, any, Context>;
		publicURL?: PublicUrlResolver<
			string | null,
			any,
			Context
		> /** Copy file to static directory and return public url to it */;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenTodoJsonResolver<
		R = (TodoJson | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildMarkdownRemarkResolver<
		R = MarkdownRemark | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildExperiencesJsonResolver<
		R = ExperiencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildInterestsJsonResolver<
		R = InterestsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildOrganizationJsonResolver<
		R = OrganizationJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildSkillsJsonResolver<
		R = SkillsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildPersonalJsonResolver<
		R = PersonalJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenCompetencesJsonResolver<
		R = (CompetencesJson | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_17 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SourceInstanceNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AbsolutePathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RelativePathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ExtensionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SizeResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PrettySizeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ModifiedTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, ModifiedTimeArgs>;
	export interface ModifiedTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type AccessTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AccessTimeArgs>;
	export interface AccessTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type ChangeTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, ChangeTimeArgs>;
	export interface ChangeTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type BirthTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, BirthTimeArgs>;
	export interface BirthTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type RootResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DirResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BaseResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ExtResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RelativeDirectoryResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DevResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ModeResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NlinkResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type UidResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type GidResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RdevResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BlksizeResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InoResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BlocksResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AtimeMsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type MtimeMsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type CtimeMsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BirthtimeMsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type AtimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, AtimeArgs>;
	export interface AtimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type MtimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, MtimeArgs>;
	export interface MtimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type CtimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, CtimeArgs>;
	export interface CtimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type BirthtimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, BirthtimeArgs>;
	export interface BirthtimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type PublicUrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type TodoJson */
export namespace TodoJsonResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		title?: TitleResolver<string | null, any, Context>;
		tags?: TagsResolver<(string | null)[] | null, any, Context>;
		internal?: InternalResolver<Internal_18 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TitleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TagsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_18 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_18Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type MarkdownRemark */
export namespace MarkdownRemarkResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		internal?: InternalResolver<Internal_19 | null, any, Context>;
		frontmatter?: FrontmatterResolver<Frontmatter_3 | null, any, Context>;
		rawMarkdownBody?: RawMarkdownBodyResolver<string | null, any, Context>;
		fileAbsolutePath?: FileAbsolutePathResolver<
			string | null,
			any,
			Context
		>;
		html?: HtmlResolver<string | null, any, Context>;
		htmlAst?: HtmlAstResolver<Json | null, any, Context>;
		excerpt?: ExcerptResolver<string | null, any, Context>;
		headings?: HeadingsResolver<
			(MarkdownHeading | null)[] | null,
			any,
			Context
		>;
		timeToRead?: TimeToReadResolver<number | null, any, Context>;
		tableOfContents?: TableOfContentsResolver<string | null, any, Context>;
		wordCount?: WordCountResolver<WordCount | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_19 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FrontmatterResolver<
		R = Frontmatter_3 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RawMarkdownBodyResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FileAbsolutePathResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type HtmlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type HtmlAstResolver<
		R = Json | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ExcerptResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, ExcerptArgs>;
	export interface ExcerptArgs {
		pruneLength?: number | null;
		truncate?: boolean | null;
	}

	export type HeadingsResolver<
		R = (MarkdownHeading | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, HeadingsArgs>;
	export interface HeadingsArgs {
		depth?: HeadingLevels | null;
	}

	export type TimeToReadResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TableOfContentsResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, TableOfContentsArgs>;
	export interface TableOfContentsArgs {
		pathToSlugField?: string | null;
	}

	export type WordCountResolver<
		R = WordCount | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_19Resolvers {
	export interface Resolvers<Context = any> {
		content?: ContentResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Frontmatter_3Resolvers {
	export interface Resolvers<Context = any> {
		title?: TitleResolver<string | null, any, Context>;
		link?: LinkResolver<string | null, any, Context>;
		date?: DateResolver<Date | null, any, Context>;
		authors?: AuthorsResolver<(Authors_3 | null)[] | null, any, Context>;
		_PARENT?: ParentResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
		draft?: DraftResolver<boolean | null, any, Context>;
		toc?: TocResolver<boolean | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
	}

	export type TitleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type LinkResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DateResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DateArgs>;
	export interface DateArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type AuthorsResolver<
		R = (Authors_3 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ParentResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DraftResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TocResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Authors_3Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		url?: UrlResolver<string | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type UrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace MarkdownHeadingResolvers {
	export interface Resolvers<Context = any> {
		value?: ValueResolver<string | null, any, Context>;
		depth?: DepthResolver<number | null, any, Context>;
	}

	export type ValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DepthResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace WordCountResolvers {
	export interface Resolvers<Context = any> {
		paragraphs?: ParagraphsResolver<number | null, any, Context>;
		sentences?: SentencesResolver<number | null, any, Context>;
		words?: WordsResolver<number | null, any, Context>;
	}

	export type ParagraphsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SentencesResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type WordsResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type ExperiencesJson */
export namespace ExperiencesJsonResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		work?: WorkResolver<(Work_2 | null)[] | null, any, Context>;
		internal?: InternalResolver<Internal_20 | null, any, Context>;
		fields?: FieldsResolver<Fields_3 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type WorkResolver<
		R = (Work_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_20 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldsResolver<
		R = Fields_3 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Work_2Resolvers {
	export interface Resolvers<Context = any> {
		company?: CompanyResolver<string | null, any, Context>;
		link?: LinkResolver<string | null, any, Context>;
		image?: ImageResolver<string | null, any, Context>;
		period?: PeriodResolver<(string | null)[] | null, any, Context>;
		role?: RoleResolver<string | null, any, Context>;
		skills?: SkillsResolver<(string | null)[] | null, any, Context>;
		projects?: ProjectsResolver<(Projects_2 | null)[] | null, any, Context>;
	}

	export type CompanyResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type LinkResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ImageResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PeriodResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type RoleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SkillsResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ProjectsResolver<
		R = (Projects_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Projects_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		url?: UrlResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type UrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_20Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
		fieldOwners?: FieldOwnersResolver<FieldOwners_3 | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldOwnersResolver<
		R = FieldOwners_3 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace FieldOwners_3Resolvers {
	export interface Resolvers<Context = any> {
		image_image?: ImageImageResolver<string | null, any, Context>;
	}

	export type ImageImageResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Fields_3Resolvers {
	export interface Resolvers<Context = any> {
		image_image?: ImageImageResolver<
			(string | null)[] | null,
			any,
			Context
		>;
	}

	export type ImageImageResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type InterestsJson */
export namespace InterestsJsonResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		subjects?: SubjectsResolver<(Subjects_2 | null)[] | null, any, Context>;
		internal?: InternalResolver<Internal_21 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SubjectsResolver<
		R = (Subjects_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_21 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Subjects_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		intensity?: IntensityResolver<number | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IntensityResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_21Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type OrganizationJson */
export namespace OrganizationJsonResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		name?: NameResolver<string | null, any, Context>;
		url?: UrlResolver<string | null, any, Context>;
		logo?: LogoResolver<string | null, any, Context>;
		telephone?: TelephoneResolver<string | null, any, Context>;
		internal?: InternalResolver<Internal_22 | null, any, Context>;
		fields?: FieldsResolver<Fields_4 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type UrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type LogoResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TelephoneResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_22 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldsResolver<
		R = Fields_4 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_22Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
		fieldOwners?: FieldOwnersResolver<FieldOwners_4 | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldOwnersResolver<
		R = FieldOwners_4 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace FieldOwners_4Resolvers {
	export interface Resolvers<Context = any> {
		logo_image?: LogoImageResolver<string | null, any, Context>;
	}

	export type LogoImageResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Fields_4Resolvers {
	export interface Resolvers<Context = any> {
		logo_image?: LogoImageResolver<string | null, any, Context>;
	}

	export type LogoImageResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type SkillsJson */
export namespace SkillsJsonResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		languages?: LanguagesResolver<
			(Languages_2 | null)[] | null,
			any,
			Context
		>;
		technical?: TechnicalResolver<
			(Technical_2 | null)[] | null,
			any,
			Context
		>;
		soft?: SoftResolver<(Soft_2 | null)[] | null, any, Context>;
		internal?: InternalResolver<Internal_23 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type LanguagesResolver<
		R = (Languages_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TechnicalResolver<
		R = (Technical_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SoftResolver<
		R = (Soft_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_23 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Languages_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		intensity?: IntensityResolver<number | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IntensityResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Technical_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		intensity?: IntensityResolver<number | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IntensityResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Soft_2Resolvers {
	export interface Resolvers<Context = any> {
		name?: NameResolver<string | null, any, Context>;
		intensity?: IntensityResolver<number | null, any, Context>;
	}

	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IntensityResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_23Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type PersonalJson */
export namespace PersonalJsonResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		name?: NameResolver<string | null, any, Context>;
		email?: EmailResolver<string | null, any, Context>;
		jobTitle?: JobTitleResolver<string | null, any, Context>;
		social?: SocialResolver<(Social_2 | null)[] | null, any, Context>;
		internal?: InternalResolver<Internal_24 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EmailResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type JobTitleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SocialResolver<
		R = (Social_2 | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_24 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Social_2Resolvers {
	export interface Resolvers<Context = any> {
		serviceName?: ServiceNameResolver<string | null, any, Context>;
		icon?: IconResolver<string | null, any, Context>;
		url?: UrlResolver<string | null, any, Context>;
	}

	export type ServiceNameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type IconResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type UrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_24Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type CompetencesJson */
export namespace CompetencesJsonResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		name?: NameResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
		internal?: InternalResolver<Internal_25 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NameResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type InternalResolver<
		R = Internal_25 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_25Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_17Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		mediaType?: MediaTypeResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type MediaTypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace FileGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(FileGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (FileGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace FileGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			File | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			File | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			File | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = File | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = File | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = File | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace MarkdownRemarkConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(MarkdownRemarkEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(MarkdownRemarkGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (MarkdownRemarkEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: MarkdownRemarkDistinctEnum | null;
	}

	export type GroupResolver<
		R = (MarkdownRemarkGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: MarkdownRemarkGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace MarkdownRemarkEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			MarkdownRemark | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			MarkdownRemark | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			MarkdownRemark | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = MarkdownRemark | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = MarkdownRemark | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = MarkdownRemark | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace MarkdownRemarkGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(MarkdownRemarkGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (MarkdownRemarkGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace MarkdownRemarkGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			MarkdownRemark | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			MarkdownRemark | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			MarkdownRemark | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = MarkdownRemark | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = MarkdownRemark | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = MarkdownRemark | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace TodoJsonConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(TodoJsonEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(TodoJsonGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (TodoJsonEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: TodoJsonDistinctEnum | null;
	}

	export type GroupResolver<
		R = (TodoJsonGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: TodoJsonGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace TodoJsonEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			TodoJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			TodoJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			TodoJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = TodoJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = TodoJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = TodoJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace TodoJsonGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(TodoJsonGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (TodoJsonGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace TodoJsonGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			TodoJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			TodoJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			TodoJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = TodoJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = TodoJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = TodoJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace InterestsJsonConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(InterestsJsonEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(InterestsJsonGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (InterestsJsonEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: InterestsJsonDistinctEnum | null;
	}

	export type GroupResolver<
		R = (InterestsJsonGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: InterestsJsonGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace InterestsJsonEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			InterestsJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			InterestsJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			InterestsJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = InterestsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = InterestsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = InterestsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace InterestsJsonGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(InterestsJsonGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (InterestsJsonGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace InterestsJsonGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			InterestsJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			InterestsJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			InterestsJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = InterestsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = InterestsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = InterestsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace OrganizationJsonConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(OrganizationJsonEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(OrganizationJsonGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (OrganizationJsonEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: OrganizationJsonDistinctEnum | null;
	}

	export type GroupResolver<
		R = (OrganizationJsonGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: OrganizationJsonGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace OrganizationJsonEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			OrganizationJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			OrganizationJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			OrganizationJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = OrganizationJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = OrganizationJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = OrganizationJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace OrganizationJsonGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(OrganizationJsonGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (OrganizationJsonGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace OrganizationJsonGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			OrganizationJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			OrganizationJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			OrganizationJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = OrganizationJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = OrganizationJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = OrganizationJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace SkillsJsonConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(SkillsJsonEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(SkillsJsonGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (SkillsJsonEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: SkillsJsonDistinctEnum | null;
	}

	export type GroupResolver<
		R = (SkillsJsonGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: SkillsJsonGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace SkillsJsonEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			SkillsJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			SkillsJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			SkillsJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = SkillsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = SkillsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = SkillsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace SkillsJsonGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(SkillsJsonGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (SkillsJsonGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace SkillsJsonGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			SkillsJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			SkillsJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			SkillsJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = SkillsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = SkillsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = SkillsJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace CompetencesJsonConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(CompetencesJsonEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(CompetencesJsonGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (CompetencesJsonEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: CompetencesJsonDistinctEnum | null;
	}

	export type GroupResolver<
		R = (CompetencesJsonGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: CompetencesJsonGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace CompetencesJsonEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			CompetencesJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			CompetencesJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			CompetencesJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = CompetencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = CompetencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = CompetencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace CompetencesJsonGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(CompetencesJsonGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (CompetencesJsonGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace CompetencesJsonGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			CompetencesJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			CompetencesJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			CompetencesJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = CompetencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = CompetencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = CompetencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace PersonalJsonConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(PersonalJsonEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(PersonalJsonGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (PersonalJsonEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: PersonalJsonDistinctEnum | null;
	}

	export type GroupResolver<
		R = (PersonalJsonGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: PersonalJsonGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace PersonalJsonEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			PersonalJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			PersonalJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			PersonalJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = PersonalJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = PersonalJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = PersonalJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace PersonalJsonGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(PersonalJsonGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (PersonalJsonGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PersonalJsonGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			PersonalJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			PersonalJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			PersonalJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = PersonalJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = PersonalJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = PersonalJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace ExperiencesJsonConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(ExperiencesJsonEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		totalCount?: TotalCountResolver<number | null, any, Context>;
		distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
		group?: GroupResolver<
			(ExperiencesJsonGroupConnectionConnection | null)[] | null,
			any,
			Context
		>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (ExperiencesJsonEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DistinctResolver<
		R = (string | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, DistinctArgs>;
	export interface DistinctArgs {
		field?: ExperiencesJsonDistinctEnum | null;
	}

	export type GroupResolver<
		R = (ExperiencesJsonGroupConnectionConnection | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, GroupArgs>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: ExperiencesJsonGroupEnum | null;
	}
}
/** An edge in a connection. */
export namespace ExperiencesJsonEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			ExperiencesJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			ExperiencesJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			ExperiencesJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = ExperiencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = ExperiencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = ExperiencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace ExperiencesJsonGroupConnectionConnectionResolvers {
	export interface Resolvers<Context = any> {
		pageInfo?: PageInfoResolver<
			PageInfo,
			any,
			Context
		> /** Information to aid in pagination. */;
		edges?: EdgesResolver<
			(ExperiencesJsonGroupConnectionEdge | null)[] | null,
			any,
			Context
		> /** A list of edges. */;
		field?: FieldResolver<string | null, any, Context>;
		fieldValue?: FieldValueResolver<string | null, any, Context>;
		totalCount?: TotalCountResolver<number | null, any, Context>;
	}

	export type PageInfoResolver<
		R = PageInfo,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type EdgesResolver<
		R = (ExperiencesJsonGroupConnectionEdge | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type FieldValueResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TotalCountResolver<
		R = number | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ExperiencesJsonGroupConnectionEdgeResolvers {
	export interface Resolvers<Context = any> {
		node?: NodeResolver<
			ExperiencesJson | null,
			any,
			Context
		> /** The item at the end of the edge */;
		next?: NextResolver<
			ExperiencesJson | null,
			any,
			Context
		> /** The next edge in the connection */;
		previous?: PreviousResolver<
			ExperiencesJson | null,
			any,
			Context
		> /** The previous edge in the connection */;
	}

	export type NodeResolver<
		R = ExperiencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type NextResolver<
		R = ExperiencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PreviousResolver<
		R = ExperiencesJson | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
/** Node of type Site */
export namespace SiteResolvers {
	export interface Resolvers<Context = any> {
		id?: IdResolver<string, any, Context> /** The id of this node. */;
		parent?: ParentResolver<
			Node | null,
			any,
			Context
		> /** The parent of this node. */;
		children?: ChildrenResolver<
			(Node | null)[] | null,
			any,
			Context
		> /** The children of this node. */;
		siteMetadata?: SiteMetadataResolver<
			SiteMetadata_2 | null,
			any,
			Context
		>;
		port?: PortResolver<Date | null, any, Context>;
		host?: HostResolver<string | null, any, Context>;
		pathPrefix?: PathPrefixResolver<string | null, any, Context>;
		polyfill?: PolyfillResolver<boolean | null, any, Context>;
		buildTime?: BuildTimeResolver<Date | null, any, Context>;
		internal?: InternalResolver<Internal_26 | null, any, Context>;
	}

	export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
		R,
		Parent,
		Context
	>;
	export type ParentResolver<
		R = Node | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type ChildrenResolver<
		R = (Node | null)[] | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SiteMetadataResolver<
		R = SiteMetadata_2 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PortResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, PortArgs>;
	export interface PortArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type HostResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PathPrefixResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type PolyfillResolver<
		R = boolean | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type BuildTimeResolver<
		R = Date | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context, BuildTimeArgs>;
	export interface BuildTimeArgs {
		formatString?:
			| string
			| null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
		fromNow?:
			| boolean
			| null /** Returns a string generated with Moment.js' fromNow function */;
		difference?:
			| string
			| null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
		locale?:
			| string
			| null /** Configures the locale Moment.js will use to format the date. */;
	}

	export type InternalResolver<
		R = Internal_26 | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace SiteMetadata_2Resolvers {
	export interface Resolvers<Context = any> {
		title?: TitleResolver<string | null, any, Context>;
		siteUrl?: SiteUrlResolver<string | null, any, Context>;
		sourceUrl?: SourceUrlResolver<string | null, any, Context>;
		description?: DescriptionResolver<string | null, any, Context>;
	}

	export type TitleResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SiteUrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type SourceUrlResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type DescriptionResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}

export namespace Internal_26Resolvers {
	export interface Resolvers<Context = any> {
		contentDigest?: ContentDigestResolver<string | null, any, Context>;
		type?: TypeResolver<string | null, any, Context>;
		owner?: OwnerResolver<string | null, any, Context>;
	}

	export type ContentDigestResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type TypeResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
	export type OwnerResolver<
		R = string | null,
		Parent = any,
		Context = any
	> = Resolver<R, Parent, Context>;
}
