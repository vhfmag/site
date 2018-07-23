/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
	parent: any,
	args: Args,
	context: any,
	info: GraphQLResolveInfo,
) => Promise<Result> | Result;

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any;
/** An object with an id, parent, and children */
export interface Node {
	id: string /** The id of the node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
}

export interface RootQueryType {
	allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */;
	allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */;
	allDirectory?: DirectoryConnection | null /** Connection to all Directory nodes */;
	allFile?: FileConnection | null /** Connection to all File nodes */;
	allMarkdownRemark?: MarkdownRemarkConnection | null /** Connection to all MarkdownRemark nodes */;
	allTodoJson?: TodoJsonConnection | null /** Connection to all TodoJson nodes */;
	allOrganizationJson?: OrganizationJsonConnection | null /** Connection to all OrganizationJson nodes */;
	allPersonalJson?: PersonalJsonConnection | null /** Connection to all PersonalJson nodes */;
	allCompetencesJson?: CompetencesJsonConnection | null /** Connection to all CompetencesJson nodes */;
	allExperiencesJson?: ExperiencesJsonConnection | null /** Connection to all ExperiencesJson nodes */;
	allInterestsJson?: InterestsJsonConnection | null /** Connection to all InterestsJson nodes */;
	allSkillsJson?: SkillsJsonConnection | null /** Connection to all SkillsJson nodes */;
	sitePage?: SitePage | null;
	sitePlugin?: SitePlugin | null;
	site?: Site | null;
	directory?: Directory | null;
	file?: File | null;
	markdownRemark?: MarkdownRemark | null;
	todoJson?: TodoJson | null;
	organizationJson?: OrganizationJson | null;
	personalJson?: PersonalJson | null;
	competencesJson?: CompetencesJson | null;
	experiencesJson?: ExperiencesJson | null;
	interestsJson?: InterestsJson | null;
	skillsJson?: SkillsJson | null;
}
/** A connection to a list of items. */
export interface SitePageConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (SitePageEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (sitePageGroupConnectionConnection | null)[] | null;
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
	context?: context | null;
	pluginCreator?: SitePlugin | null;
	pluginCreatorId?: string | null;
	componentPath?: string | null;
	internal?: internal_14 | null;
}

export interface context {
	group?: (group | null)[] | null;
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
	parent?: parent | null;
	count?: count | null;
	timeToRead?: number | null;
}

export interface frontmatter_2 {
	date?: Date | null;
	authors?: (authors_2 | null)[] | null;
	draft?: boolean | null;
	link?: string | null;
	title?: string | null;
	description?: string | null;
}

export interface authors_2 {
	name?: string | null;
	url?: string | null;
}

export interface parent {
	modifiedTime?: Date | null;
}

export interface count {
	words?: number | null;
}

export interface additionalContext {
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
	pluginOptions?: pluginOptions_3 | null;
	nodeAPIs?: (string | null)[] | null;
	browserAPIs?: (string | null)[] | null;
	ssrAPIs?: (string | null)[] | null;
	pluginFilepath?: string | null;
	packageJson?: packageJson_2 | null;
	internal?: internal_15 | null;
}

export interface pluginOptions_3 {
	plugins?: (plugins_2 | null)[] | null;
	name?: string | null;
	path?: string | null;
	emojiConversion?: string | null;
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
	icon?: string | null;
	pathToConfigModule?: string | null;
	omitGoogleFont?: boolean | null;
	query?: string | null;
	feeds?: (feeds_2 | null)[] | null;
	pathCheck?: boolean | null;
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
	emojiConversion?: string | null;
	maxWidth?: number | null;
	wrapperStyle?: string | null;
	backgroundColor?: string | null;
	linkImagesToOriginal?: boolean | null;
	showCaptions?: boolean | null;
	pathPrefix?: string | null;
	inlineCodeMarker?: string | null;
}

export interface feeds_2 {
	query?: string | null;
	output?: string | null;
}

export interface packageJson_2 {
	name?: string | null;
	description?: string | null;
	version?: string | null;
	main?: string | null;
	author?: string | null;
	license?: string | null;
	dependencies?: (dependencies_2 | null)[] | null;
	devDependencies?: (devDependencies_2 | null)[] | null;
	peerDependencies?: (peerDependencies_2 | null)[] | null;
	keywords?: (string | null)[] | null;
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

export interface internal_15 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface internal_14 {
	type?: string | null;
	contentDigest?: string | null;
	description?: string | null;
	owner?: string | null;
}
/** A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (sitePageGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface sitePageGroupConnectionEdge {
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
	group?: (sitePluginGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface SitePluginEdge {
	node?: SitePlugin | null /** The item at the end of the edge */;
	next?: SitePlugin | null /** The next edge in the connection */;
	previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (sitePluginGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
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
	group?: (directoryGroupConnectionConnection | null)[] | null;
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
}

export interface internal_16 {
	contentDigest?: string | null;
	type?: string | null;
	description?: string | null;
	owner?: string | null;
}
/** A connection to a list of items. */
export interface directoryGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (directoryGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface directoryGroupConnectionEdge {
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
	group?: (fileGroupConnectionConnection | null)[] | null;
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
	childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */;
	childrenTodoJson?:
		| (TodoJson | null)[]
		| null /** The children of this node of type todoJson */;
	childOrganizationJson?: OrganizationJson | null /** The child of this node of type organizationJson */;
	childPersonalJson?: PersonalJson | null /** The child of this node of type personalJson */;
	childrenCompetencesJson?:
		| (CompetencesJson | null)[]
		| null /** The children of this node of type competencesJson */;
	childExperiencesJson?: ExperiencesJson | null /** The child of this node of type experiencesJson */;
	childInterestsJson?: InterestsJson | null /** The child of this node of type interestsJson */;
	childSkillsJson?: SkillsJson | null /** The child of this node of type skillsJson */;
	internal?: internal_17 | null;
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
/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	internal?: internal_18 | null;
	frontmatter?: frontmatter_3 | null;
	rawMarkdownBody?: string | null;
	fileAbsolutePath?: string | null;
	html?: string | null;
	htmlAst?: JSON | null;
	excerpt?: string | null;
	headings?: (MarkdownHeading | null)[] | null;
	timeToRead?: number | null;
	tableOfContents?: string | null;
	wordCount?: wordCount | null;
}

export interface internal_18 {
	content?: string | null;
	type?: string | null;
	contentDigest?: string | null;
	owner?: string | null;
}

export interface frontmatter_3 {
	title?: string | null;
	authors?: (authors_3 | null)[] | null;
	link?: string | null;
	_PARENT?: string | null;
	parent?: string | null;
	startDate?: Date | null;
	description?: string | null;
	date?: Date | null;
	type?: string | null;
	draft?: boolean | null;
}

export interface authors_3 {
	name?: string | null;
	url?: string | null;
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
/** Node of type TodoJson */
export interface TodoJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	title?: string | null;
	tags?: (string | null)[] | null;
	internal?: internal_19 | null;
}

export interface internal_19 {
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
	internal?: internal_20 | null;
	fields?: fields_3 | null;
}

export interface internal_20 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
	fieldOwners?: fieldOwners_3 | null;
}

export interface fieldOwners_3 {
	logo_image?: string | null;
}

export interface fields_3 {
	logo_image?: string | null;
}
/** Node of type PersonalJson */
export interface PersonalJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	name?: string | null;
	email?: string | null;
	jobTitle?: string | null;
	social?: (social_2 | null)[] | null;
	internal?: internal_21 | null;
}

export interface social_2 {
	serviceName?: string | null;
	icon?: string | null;
	url?: string | null;
}

export interface internal_21 {
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
	internal?: internal_22 | null;
}

export interface internal_22 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/** Node of type ExperiencesJson */
export interface ExperiencesJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	work?: (work_2 | null)[] | null;
	internal?: internal_23 | null;
	fields?: fields_4 | null;
}

export interface work_2 {
	company?: string | null;
	link?: string | null;
	image?: string | null;
	period?: string | null;
	role?: string | null;
	tasks?: (string | null)[] | null;
}

export interface internal_23 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
	fieldOwners?: fieldOwners_4 | null;
}

export interface fieldOwners_4 {
	image_image?: string | null;
}

export interface fields_4 {
	image_image?: (string | null)[] | null;
}
/** Node of type InterestsJson */
export interface InterestsJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	subjects?: (subjects_2 | null)[] | null;
	internal?: internal_24 | null;
}

export interface subjects_2 {
	name?: string | null;
	intensity?: number | null;
}

export interface internal_24 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}
/** Node of type SkillsJson */
export interface SkillsJson extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	languages?: (languages_2 | null)[] | null;
	technical?: (technical_2 | null)[] | null;
	soft?: (soft_2 | null)[] | null;
	internal?: internal_25 | null;
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

export interface internal_25 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface internal_17 {
	contentDigest?: string | null;
	type?: string | null;
	mediaType?: string | null;
	description?: string | null;
	owner?: string | null;
}
/** A connection to a list of items. */
export interface fileGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (fileGroupConnectionEdge | null)[] | null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface fileGroupConnectionEdge {
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
	group?: (markdownRemarkGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface MarkdownRemarkEdge {
	node?: MarkdownRemark | null /** The item at the end of the edge */;
	next?: MarkdownRemark | null /** The next edge in the connection */;
	previous?: MarkdownRemark | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (markdownRemarkGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
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
	group?: (todoJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface TodoJsonEdge {
	node?: TodoJson | null /** The item at the end of the edge */;
	next?: TodoJson | null /** The next edge in the connection */;
	previous?: TodoJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface todoJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (todoJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface todoJsonGroupConnectionEdge {
	node?: TodoJson | null /** The item at the end of the edge */;
	next?: TodoJson | null /** The next edge in the connection */;
	previous?: TodoJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface OrganizationJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (OrganizationJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (organizationJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface OrganizationJsonEdge {
	node?: OrganizationJson | null /** The item at the end of the edge */;
	next?: OrganizationJson | null /** The next edge in the connection */;
	previous?: OrganizationJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface organizationJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (organizationJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface organizationJsonGroupConnectionEdge {
	node?: OrganizationJson | null /** The item at the end of the edge */;
	next?: OrganizationJson | null /** The next edge in the connection */;
	previous?: OrganizationJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface PersonalJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (PersonalJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (personalJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface PersonalJsonEdge {
	node?: PersonalJson | null /** The item at the end of the edge */;
	next?: PersonalJson | null /** The next edge in the connection */;
	previous?: PersonalJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface personalJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (personalJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface personalJsonGroupConnectionEdge {
	node?: PersonalJson | null /** The item at the end of the edge */;
	next?: PersonalJson | null /** The next edge in the connection */;
	previous?: PersonalJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface CompetencesJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (CompetencesJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (competencesJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface CompetencesJsonEdge {
	node?: CompetencesJson | null /** The item at the end of the edge */;
	next?: CompetencesJson | null /** The next edge in the connection */;
	previous?: CompetencesJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface competencesJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (competencesJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface competencesJsonGroupConnectionEdge {
	node?: CompetencesJson | null /** The item at the end of the edge */;
	next?: CompetencesJson | null /** The next edge in the connection */;
	previous?: CompetencesJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface ExperiencesJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (ExperiencesJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (experiencesJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface ExperiencesJsonEdge {
	node?: ExperiencesJson | null /** The item at the end of the edge */;
	next?: ExperiencesJson | null /** The next edge in the connection */;
	previous?: ExperiencesJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface experiencesJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (experiencesJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface experiencesJsonGroupConnectionEdge {
	node?: ExperiencesJson | null /** The item at the end of the edge */;
	next?: ExperiencesJson | null /** The next edge in the connection */;
	previous?: ExperiencesJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface InterestsJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (InterestsJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (interestsJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface InterestsJsonEdge {
	node?: InterestsJson | null /** The item at the end of the edge */;
	next?: InterestsJson | null /** The next edge in the connection */;
	previous?: InterestsJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface interestsJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (interestsJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface interestsJsonGroupConnectionEdge {
	node?: InterestsJson | null /** The item at the end of the edge */;
	next?: InterestsJson | null /** The next edge in the connection */;
	previous?: InterestsJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SkillsJsonConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?: (SkillsJsonEdge | null)[] | null /** A list of edges. */;
	totalCount?: number | null;
	distinct?: (string | null)[] | null;
	group?: (skillsJsonGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface SkillsJsonEdge {
	node?: SkillsJson | null /** The item at the end of the edge */;
	next?: SkillsJson | null /** The next edge in the connection */;
	previous?: SkillsJson | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface skillsJsonGroupConnectionConnection {
	pageInfo: PageInfo /** Information to aid in pagination. */;
	edges?:
		| (skillsJsonGroupConnectionEdge | null)[]
		| null /** A list of edges. */;
	field?: string | null;
	fieldValue?: string | null;
	totalCount?: number | null;
}
/** An edge in a connection. */
export interface skillsJsonGroupConnectionEdge {
	node?: SkillsJson | null /** The item at the end of the edge */;
	next?: SkillsJson | null /** The next edge in the connection */;
	previous?: SkillsJson | null /** The previous edge in the connection */;
}
/** Node of type Site */
export interface Site extends Node {
	id: string /** The id of this node. */;
	parent?: Node | null /** The parent of this node. */;
	children?: (Node | null)[] | null /** The children of this node. */;
	siteMetadata?: siteMetadata_2 | null;
	port?: Date | null;
	host?: string | null;
	pathPrefix?: string | null;
	polyfill?: boolean | null;
	buildTime?: Date | null;
	internal?: internal_26 | null;
}

export interface siteMetadata_2 {
	title?: string | null;
	siteUrl?: string | null;
	sourceUrl?: string | null;
	description?: string | null;
}

export interface internal_26 {
	contentDigest?: string | null;
	type?: string | null;
	owner?: string | null;
}

export interface sitePageConnectionSort {
	fields: (SitePageConnectionSortByFieldsEnum | null)[];
	order?: sitePageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterSitePage {
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

export interface sitePageConnectionJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionComponentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	elemMatch?: sitePageConnectionContextGroupInputObject | null;
}

export interface sitePageConnectionContextGroupInputObject {
	node?: sitePageConnectionContextGroupNodeInputObject | null;
}

export interface sitePageConnectionContextGroupNodeInputObject {
	excerpt?: sitePageConnectionContextGroupNodeExcerptQueryString | null;
	fileAbsolutePath?: sitePageConnectionContextGroupNodeFileAbsolutePathQueryString | null;
	frontmatter?: sitePageConnectionContextGroupNodeFrontmatterInputObject | null;
	parent?: sitePageConnectionContextGroupNodeParentInputObject | null;
	count?: sitePageConnectionContextGroupNodeCountInputObject | null;
	timeToRead?: sitePageConnectionContextGroupNodeTimeToReadQueryInteger | null;
}

export interface sitePageConnectionContextGroupNodeExcerptQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeFileAbsolutePathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterInputObject {
	date?: sitePageConnectionContextGroupNodeFrontmatterDateQueryString | null;
	authors?: sitePageConnectionContextGroupNodeFrontmatterAuthorsQueryList | null;
	draft?: sitePageConnectionContextGroupNodeFrontmatterDraftQueryBoolean | null;
	link?: sitePageConnectionContextGroupNodeFrontmatterLinkQueryString | null;
	title?: sitePageConnectionContextGroupNodeFrontmatterTitleQueryString | null;
	description?: sitePageConnectionContextGroupNodeFrontmatterDescriptionQueryString | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterDateQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterAuthorsQueryList {
	elemMatch?: sitePageConnectionContextGroupNodeFrontmatterAuthorsInputObject | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterAuthorsInputObject {
	name?: sitePageConnectionContextGroupNodeFrontmatterAuthorsNameQueryString | null;
	url?: sitePageConnectionContextGroupNodeFrontmatterAuthorsUrlQueryString | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterAuthorsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterAuthorsUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterDraftQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterLinkQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeFrontmatterDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeParentInputObject {
	modifiedTime?: sitePageConnectionContextGroupNodeParentModifiedTimeQueryString | null;
}

export interface sitePageConnectionContextGroupNodeParentModifiedTimeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeCountInputObject {
	words?: sitePageConnectionContextGroupNodeCountWordsQueryInteger | null;
}

export interface sitePageConnectionContextGroupNodeCountWordsQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageConnectionContextGroupNodeTimeToReadQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageConnectionContextPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextFirstQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionContextLastQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionContextIndexQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageConnectionContextPageCountQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageConnectionContextAdditionalContextInputObject {
	listTitle?: sitePageConnectionContextAdditionalContextListTitleQueryString | null;
}

export interface sitePageConnectionContextAdditionalContextListTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextSlugQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionContextMarkdownPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
	plugins?: sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null;
	name?: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
	path?: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
	emojiConversion?: sitePageConnectionPluginCreatorPluginOptionsEmojiConversionQueryString | null;
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
	icon?: sitePageConnectionPluginCreatorPluginOptionsIconQueryString | null;
	pathToConfigModule?: sitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString | null;
	omitGoogleFont?: sitePageConnectionPluginCreatorPluginOptionsOmitGoogleFontQueryBoolean | null;
	query?: sitePageConnectionPluginCreatorPluginOptionsQueryQueryString | null;
	feeds?: sitePageConnectionPluginCreatorPluginOptionsFeedsQueryList | null;
	pathCheck?: sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
	elemMatch?: sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
	emojiConversion?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsEmojiConversionQueryString | null;
	maxWidth?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
	inlineCodeMarker?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsEmojiConversionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsEmojiConversionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsOmitGoogleFontQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsQueryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsFeedsQueryList {
	elemMatch?: sitePageConnectionPluginCreatorPluginOptionsFeedsInputObject | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsFeedsInputObject {
	query?: sitePageConnectionPluginCreatorPluginOptionsFeedsQueryQueryString | null;
	output?: sitePageConnectionPluginCreatorPluginOptionsFeedsOutputQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsFeedsQueryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsFeedsOutputQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorBrowserApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorSsrApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
	elemMatch?: sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
	elemMatch?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
	elemMatch?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorParentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionComponentPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionInternalDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionSort {
	fields: (SitePluginConnectionSortByFieldsEnum | null)[];
	order?: sitePluginConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
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
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
	plugins?: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
	name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
	path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
	emojiConversion?: sitePluginConnectionPluginOptionsEmojiConversionQueryString_2 | null;
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
	icon?: sitePluginConnectionPluginOptionsIconQueryString_2 | null;
	pathToConfigModule?: sitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 | null;
	omitGoogleFont?: sitePluginConnectionPluginOptionsOmitGoogleFontQueryBoolean_2 | null;
	query?: sitePluginConnectionPluginOptionsQueryQueryString_2 | null;
	feeds?: sitePluginConnectionPluginOptionsFeedsQueryList_2 | null;
	pathCheck?: sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
	elemMatch?: sitePluginConnectionPluginOptionsPluginsInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
	emojiConversion?: sitePluginConnectionPluginOptionsPluginsPluginOptionsEmojiConversionQueryString_2 | null;
	maxWidth?: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
	linkImagesToOriginal?: sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
	inlineCodeMarker?: sitePluginConnectionPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsEmojiConversionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsEmojiConversionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsShortNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsStartUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsThemeColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsDisplayQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsOmitGoogleFontQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsQueryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsFeedsQueryList_2 {
	elemMatch?: sitePluginConnectionPluginOptionsFeedsInputObject_2 | null;
}

export interface sitePluginConnectionPluginOptionsFeedsInputObject_2 {
	query?: sitePluginConnectionPluginOptionsFeedsQueryQueryString_2 | null;
	output?: sitePluginConnectionPluginOptionsFeedsOutputQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsFeedsQueryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsFeedsOutputQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionBrowserApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionSsrApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
	elemMatch?: sitePluginConnectionPackageJsonDependenciesInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
	elemMatch?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
	elemMatch?: sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionSort {
	fields: (DirectoryConnectionSortByFieldsEnum | null)[];
	order?: directoryConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
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
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface directoryConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryConnectionAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryConnectionBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionSort {
	fields: (FileConnectionSortByFieldsEnum | null)[];
	order?: fileConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
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
	in?: (string | null)[] | null;
}

export interface fileConnectionInternalInputObject_2 {
	contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null;
	type?: fileConnectionInternalTypeQueryString_2 | null;
	mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null;
	description?: fileConnectionInternalDescriptionQueryString_2 | null;
	owner?: fileConnectionInternalOwnerQueryString_2 | null;
}

export interface fileConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileConnectionAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileConnectionBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface publicUrlQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionSort {
	fields: (MarkdownRemarkConnectionSortByFieldsEnum | null)[];
	order?: markdownRemarkConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterMarkdownRemark {
	id?: markdownRemarkConnectionIdQueryString_2 | null;
	internal?: markdownRemarkConnectionInternalInputObject_2 | null;
	frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null;
	excerpt?: excerptQueryString_4 | null;
	rawMarkdownBody?: markdownRemarkConnectionRawMarkdownBodyQueryString_2 | null;
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
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
	title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
	authors?: markdownRemarkConnectionFrontmatterAuthorsQueryList_2 | null;
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
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorsQueryList_2 {
	elemMatch?: markdownRemarkConnectionFrontmatterAuthorsInputObject_2 | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorsInputObject_2 {
	name?: markdownRemarkConnectionFrontmatterAuthorsNameQueryString_2 | null;
	url?: markdownRemarkConnectionFrontmatterAuthorsUrlQueryString_2 | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorsUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterStartDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface excerptQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionRawMarkdownBodyQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface htmlQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface headingsQueryList_4 {
	elemMatch?: headingsListElemTypeName_4 | null;
}

export interface headingsListElemTypeName_4 {
	value?: headingsListElemValueQueryString_4 | null;
	depth?: headingsListElemDepthQueryInt_4 | null;
}

export interface headingsListElemValueQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface headingsListElemDepthQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface timeToReadQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface tableOfContentsQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface wordCountTypeName_4 {
	paragraphs?: wordCountParagraphsQueryInt_4 | null;
	sentences?: wordCountSentencesQueryInt_4 | null;
	words?: wordCountWordsQueryInt_4 | null;
}

export interface wordCountParagraphsQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface wordCountSentencesQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface wordCountWordsQueryInt_4 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface todoJsonConnectionSort {
	fields: (TodoJsonConnectionSortByFieldsEnum | null)[];
	order?: todoJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
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
	in?: (string | null)[] | null;
}

export interface todoJsonConnectionTagsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface todoJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface todoJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface todoJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionSort {
	fields: (OrganizationJsonConnectionSortByFieldsEnum | null)[];
	order?: organizationJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterOrganizationJson {
	name?: organizationJsonConnectionNameQueryString_2 | null;
	url?: organizationJsonConnectionUrlQueryString_2 | null;
	logo?: organizationJsonConnectionLogoQueryString_2 | null;
	telephone?: organizationJsonConnectionTelephoneQueryString_2 | null;
	id?: organizationJsonConnectionIdQueryString_2 | null;
	internal?: organizationJsonConnectionInternalInputObject_2 | null;
	fields?: organizationJsonConnectionFieldsInputObject_2 | null;
}

export interface organizationJsonConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionLogoQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionTelephoneQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionInternalInputObject_2 {
	contentDigest?: organizationJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: organizationJsonConnectionInternalTypeQueryString_2 | null;
	owner?: organizationJsonConnectionInternalOwnerQueryString_2 | null;
	fieldOwners?: organizationJsonConnectionInternalFieldOwnersInputObject_2 | null;
}

export interface organizationJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionInternalFieldOwnersInputObject_2 {
	logo_image?: organizationJsonConnectionInternalFieldOwnersLogoImageQueryString_2 | null;
}

export interface organizationJsonConnectionInternalFieldOwnersLogoImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonConnectionFieldsInputObject_2 {
	logo_image?: organizationJsonConnectionFieldsLogoImageQueryString_2 | null;
}

export interface organizationJsonConnectionFieldsLogoImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionSort {
	fields: (PersonalJsonConnectionSortByFieldsEnum | null)[];
	order?: personalJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterPersonalJson {
	name?: personalJsonConnectionNameQueryString_2 | null;
	email?: personalJsonConnectionEmailQueryString_2 | null;
	jobTitle?: personalJsonConnectionJobTitleQueryString_2 | null;
	social?: personalJsonConnectionSocialQueryList_2 | null;
	id?: personalJsonConnectionIdQueryString_2 | null;
	internal?: personalJsonConnectionInternalInputObject_2 | null;
}

export interface personalJsonConnectionNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionEmailQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionJobTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionSocialQueryList_2 {
	elemMatch?: personalJsonConnectionSocialInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionSocialIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionSocialUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface competencesJsonConnectionSort {
	fields: (CompetencesJsonConnectionSortByFieldsEnum | null)[];
	order?: competencesJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
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
	in?: (string | null)[] | null;
}

export interface competencesJsonConnectionDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface competencesJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface competencesJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface competencesJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionSort {
	fields: (ExperiencesJsonConnectionSortByFieldsEnum | null)[];
	order?: experiencesJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterExperiencesJson {
	work?: experiencesJsonConnectionWorkQueryList_2 | null;
	id?: experiencesJsonConnectionIdQueryString_2 | null;
	internal?: experiencesJsonConnectionInternalInputObject_2 | null;
	fields?: experiencesJsonConnectionFieldsInputObject_2 | null;
}

export interface experiencesJsonConnectionWorkQueryList_2 {
	elemMatch?: experiencesJsonConnectionWorkInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionWorkLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionWorkImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionWorkPeriodQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionWorkRoleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionWorkTasksQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionInternalInputObject_2 {
	contentDigest?: experiencesJsonConnectionInternalContentDigestQueryString_2 | null;
	type?: experiencesJsonConnectionInternalTypeQueryString_2 | null;
	owner?: experiencesJsonConnectionInternalOwnerQueryString_2 | null;
	fieldOwners?: experiencesJsonConnectionInternalFieldOwnersInputObject_2 | null;
}

export interface experiencesJsonConnectionInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionInternalFieldOwnersInputObject_2 {
	image_image?: experiencesJsonConnectionInternalFieldOwnersImageImageQueryString_2 | null;
}

export interface experiencesJsonConnectionInternalFieldOwnersImageImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonConnectionFieldsInputObject_2 {
	image_image?: experiencesJsonConnectionFieldsImageImageQueryList_2 | null;
}

export interface experiencesJsonConnectionFieldsImageImageQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface interestsJsonConnectionSort {
	fields: (InterestsJsonConnectionSortByFieldsEnum | null)[];
	order?: interestsJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterInterestsJson {
	subjects?: interestsJsonConnectionSubjectsQueryList_2 | null;
	id?: interestsJsonConnectionIdQueryString_2 | null;
	internal?: interestsJsonConnectionInternalInputObject_2 | null;
}

export interface interestsJsonConnectionSubjectsQueryList_2 {
	elemMatch?: interestsJsonConnectionSubjectsInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface interestsJsonConnectionSubjectsIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface interestsJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface interestsJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface interestsJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface skillsJsonConnectionSort {
	fields: (SkillsJsonConnectionSortByFieldsEnum | null)[];
	order?: skillsJsonConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterSkillsJson {
	languages?: skillsJsonConnectionLanguagesQueryList_2 | null;
	technical?: skillsJsonConnectionTechnicalQueryList_2 | null;
	soft?: skillsJsonConnectionSoftQueryList_2 | null;
	id?: skillsJsonConnectionIdQueryString_2 | null;
	internal?: skillsJsonConnectionInternalInputObject_2 | null;
}

export interface skillsJsonConnectionLanguagesQueryList_2 {
	elemMatch?: skillsJsonConnectionLanguagesInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface skillsJsonConnectionLanguagesIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface skillsJsonConnectionTechnicalQueryList_2 {
	elemMatch?: skillsJsonConnectionTechnicalInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface skillsJsonConnectionTechnicalIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface skillsJsonConnectionSoftQueryList_2 {
	elemMatch?: skillsJsonConnectionSoftInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface skillsJsonConnectionSoftIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface skillsJsonConnectionIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface skillsJsonConnectionInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface skillsJsonConnectionInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageJsonNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageInternalComponentNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageComponentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageComponentChunkNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	elemMatch?: sitePageContextGroupInputObject | null;
}

export interface sitePageContextGroupInputObject {
	node?: sitePageContextGroupNodeInputObject | null;
}

export interface sitePageContextGroupNodeInputObject {
	excerpt?: sitePageContextGroupNodeExcerptQueryString | null;
	fileAbsolutePath?: sitePageContextGroupNodeFileAbsolutePathQueryString | null;
	frontmatter?: sitePageContextGroupNodeFrontmatterInputObject | null;
	parent?: sitePageContextGroupNodeParentInputObject | null;
	count?: sitePageContextGroupNodeCountInputObject | null;
	timeToRead?: sitePageContextGroupNodeTimeToReadQueryInteger | null;
}

export interface sitePageContextGroupNodeExcerptQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeFileAbsolutePathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeFrontmatterInputObject {
	date?: sitePageContextGroupNodeFrontmatterDateQueryString | null;
	authors?: sitePageContextGroupNodeFrontmatterAuthorsQueryList | null;
	draft?: sitePageContextGroupNodeFrontmatterDraftQueryBoolean | null;
	link?: sitePageContextGroupNodeFrontmatterLinkQueryString | null;
	title?: sitePageContextGroupNodeFrontmatterTitleQueryString | null;
	description?: sitePageContextGroupNodeFrontmatterDescriptionQueryString | null;
}

export interface sitePageContextGroupNodeFrontmatterDateQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeFrontmatterAuthorsQueryList {
	elemMatch?: sitePageContextGroupNodeFrontmatterAuthorsInputObject | null;
}

export interface sitePageContextGroupNodeFrontmatterAuthorsInputObject {
	name?: sitePageContextGroupNodeFrontmatterAuthorsNameQueryString | null;
	url?: sitePageContextGroupNodeFrontmatterAuthorsUrlQueryString | null;
}

export interface sitePageContextGroupNodeFrontmatterAuthorsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeFrontmatterAuthorsUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeFrontmatterDraftQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageContextGroupNodeFrontmatterLinkQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeFrontmatterTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeFrontmatterDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeParentInputObject {
	modifiedTime?: sitePageContextGroupNodeParentModifiedTimeQueryString | null;
}

export interface sitePageContextGroupNodeParentModifiedTimeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextGroupNodeCountInputObject {
	words?: sitePageContextGroupNodeCountWordsQueryInteger | null;
}

export interface sitePageContextGroupNodeCountWordsQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageContextGroupNodeTimeToReadQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageContextPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextFirstQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageContextLastQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePageContextIndexQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageContextPageCountQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePageContextAdditionalContextInputObject {
	listTitle?: sitePageContextAdditionalContextListTitleQueryString | null;
}

export interface sitePageContextAdditionalContextListTitleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextSlugQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageContextMarkdownPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
	plugins?: sitePagePluginCreatorPluginOptionsPluginsQueryList | null;
	name?: sitePagePluginCreatorPluginOptionsNameQueryString | null;
	path?: sitePagePluginCreatorPluginOptionsPathQueryString | null;
	emojiConversion?: sitePagePluginCreatorPluginOptionsEmojiConversionQueryString | null;
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
	icon?: sitePagePluginCreatorPluginOptionsIconQueryString | null;
	pathToConfigModule?: sitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString | null;
	omitGoogleFont?: sitePagePluginCreatorPluginOptionsOmitGoogleFontQueryBoolean | null;
	query?: sitePagePluginCreatorPluginOptionsQueryQueryString | null;
	feeds?: sitePagePluginCreatorPluginOptionsFeedsQueryList | null;
	pathCheck?: sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsQueryList {
	elemMatch?: sitePagePluginCreatorPluginOptionsPluginsInputObject | null;
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
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsIdQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
	emojiConversion?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsEmojiConversionQueryString | null;
	maxWidth?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
	wrapperStyle?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
	backgroundColor?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
	linkImagesToOriginal?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
	showCaptions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
	pathPrefix?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
	inlineCodeMarker?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsEmojiConversionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsEmojiConversionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsWrapperStyleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPathPrefixQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsInlineCodeMarkerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsShortNameQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsStartUrlQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsThemeColorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsDisplayQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsIconQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsOmitGoogleFontQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsQueryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsFeedsQueryList {
	elemMatch?: sitePagePluginCreatorPluginOptionsFeedsInputObject | null;
}

export interface sitePagePluginCreatorPluginOptionsFeedsInputObject {
	query?: sitePagePluginCreatorPluginOptionsFeedsQueryQueryString | null;
	output?: sitePagePluginCreatorPluginOptionsFeedsOutputQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsFeedsQueryQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsFeedsOutputQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePagePluginCreatorNodeApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorBrowserApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorSsrApIsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonAuthorQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
	elemMatch?: sitePagePluginCreatorPackageJsonDependenciesInputObject | null;
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
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
	elemMatch?: sitePagePluginCreatorPackageJsonDevDependenciesInputObject | null;
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
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
	elemMatch?: sitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null;
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
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorParentQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorInternalTypeQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageComponentPathQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageInternalDescriptionQueryString {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePageInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginResolveQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
	plugins?: sitePluginPluginOptionsPluginsQueryList_2 | null;
	name?: sitePluginPluginOptionsNameQueryString_2 | null;
	path?: sitePluginPluginOptionsPathQueryString_2 | null;
	emojiConversion?: sitePluginPluginOptionsEmojiConversionQueryString_2 | null;
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
	icon?: sitePluginPluginOptionsIconQueryString_2 | null;
	pathToConfigModule?: sitePluginPluginOptionsPathToConfigModuleQueryString_2 | null;
	omitGoogleFont?: sitePluginPluginOptionsOmitGoogleFontQueryBoolean_2 | null;
	query?: sitePluginPluginOptionsQueryQueryString_2 | null;
	feeds?: sitePluginPluginOptionsFeedsQueryList_2 | null;
	pathCheck?: sitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
	elemMatch?: sitePluginPluginOptionsPluginsInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
	emojiConversion?: sitePluginPluginOptionsPluginsPluginOptionsEmojiConversionQueryString_2 | null;
	maxWidth?: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
	wrapperStyle?: sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
	backgroundColor?: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
	linkImagesToOriginal?: sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
	showCaptions?: sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
	pathPrefix?: sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
	inlineCodeMarker?: sitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsEmojiConversionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsEmojiConversionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface sitePluginPluginOptionsWrapperStyleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginPluginOptionsShowCaptionsQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginPluginOptionsPathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsInlineCodeMarkerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsShortNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsStartUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsThemeColorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsDisplayQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPathToConfigModuleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsOmitGoogleFontQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginPluginOptionsQueryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsFeedsQueryList_2 {
	elemMatch?: sitePluginPluginOptionsFeedsInputObject_2 | null;
}

export interface sitePluginPluginOptionsFeedsInputObject_2 {
	query?: sitePluginPluginOptionsFeedsQueryQueryString_2 | null;
	output?: sitePluginPluginOptionsFeedsOutputQueryString_2 | null;
}

export interface sitePluginPluginOptionsFeedsQueryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsFeedsOutputQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPathCheckQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface sitePluginNodeApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginBrowserApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginSsrApIsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonAuthorQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
	elemMatch?: sitePluginPackageJsonDependenciesInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
	elemMatch?: sitePluginPackageJsonDevDependenciesInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
	elemMatch?: sitePluginPackageJsonPeerDependenciesInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface sitePluginInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface siteSiteMetadataInputObject_2 {
	title?: siteSiteMetadataTitleQueryString_2 | null;
	siteUrl?: siteSiteMetadataSiteUrlQueryString_2 | null;
	sourceUrl?: siteSiteMetadataSourceUrlQueryString_2 | null;
	description?: siteSiteMetadataDescriptionQueryString_2 | null;
}

export interface siteSiteMetadataTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface siteSiteMetadataSiteUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface siteSiteMetadataSourceUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface siteSiteMetadataDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePortQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface siteHostQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePathPrefixQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface sitePolyfillQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface siteBuildTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface siteIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface siteInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface siteInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface directoryInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directorySourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directorySizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryPrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface directoryAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface directoryBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileInternalInputObject_2 {
	contentDigest?: fileInternalContentDigestQueryString_2 | null;
	type?: fileInternalTypeQueryString_2 | null;
	mediaType?: fileInternalMediaTypeQueryString_2 | null;
	description?: fileInternalDescriptionQueryString_2 | null;
	owner?: fileInternalOwnerQueryString_2 | null;
}

export interface fileInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileInternalMediaTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileInternalDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileSourceInstanceNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileRelativePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileExtensionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileSizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface filePrettySizeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileModifiedTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileAccessTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileChangeTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileBirthTimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileRootQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileDirQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileBaseQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileExtQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileRelativeDirectoryQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileDevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileModeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileNlinkQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileUidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileGidQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileRdevQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileBlksizeQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileInoQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileBlocksQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileAtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileMtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileCtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface fileAtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileMtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileCtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface fileBirthtimeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface publicUrlQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface markdownRemarkInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterInputObject_2 {
	title?: markdownRemarkFrontmatterTitleQueryString_2 | null;
	authors?: markdownRemarkFrontmatterAuthorsQueryList_2 | null;
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
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterAuthorsQueryList_2 {
	elemMatch?: markdownRemarkFrontmatterAuthorsInputObject_2 | null;
}

export interface markdownRemarkFrontmatterAuthorsInputObject_2 {
	name?: markdownRemarkFrontmatterAuthorsNameQueryString_2 | null;
	url?: markdownRemarkFrontmatterAuthorsUrlQueryString_2 | null;
}

export interface markdownRemarkFrontmatterAuthorsNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterAuthorsUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterParentQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterParentQueryString_4 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterStartDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterDateQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {
	eq?: boolean | null;
	ne?: boolean | null;
	in?: (boolean | null)[] | null;
}

export interface excerptQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkRawMarkdownBodyQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface htmlQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface headingsQueryList_3 {
	elemMatch?: headingsListElemTypeName_3 | null;
}

export interface headingsListElemTypeName_3 {
	value?: headingsListElemValueQueryString_3 | null;
	depth?: headingsListElemDepthQueryInt_3 | null;
}

export interface headingsListElemValueQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface headingsListElemDepthQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface timeToReadQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface tableOfContentsQueryString_3 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface wordCountTypeName_3 {
	paragraphs?: wordCountParagraphsQueryInt_3 | null;
	sentences?: wordCountSentencesQueryInt_3 | null;
	words?: wordCountWordsQueryInt_3 | null;
}

export interface wordCountParagraphsQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface wordCountSentencesQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface wordCountWordsQueryInt_3 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface todoJsonTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface todoJsonTagsQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface todoJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface todoJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface todoJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonLogoQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonTelephoneQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonInternalInputObject_2 {
	contentDigest?: organizationJsonInternalContentDigestQueryString_2 | null;
	type?: organizationJsonInternalTypeQueryString_2 | null;
	owner?: organizationJsonInternalOwnerQueryString_2 | null;
	fieldOwners?: organizationJsonInternalFieldOwnersInputObject_2 | null;
}

export interface organizationJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonInternalFieldOwnersInputObject_2 {
	logo_image?: organizationJsonInternalFieldOwnersLogoImageQueryString_2 | null;
}

export interface organizationJsonInternalFieldOwnersLogoImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface organizationJsonFieldsInputObject_2 {
	logo_image?: organizationJsonFieldsLogoImageQueryString_2 | null;
}

export interface organizationJsonFieldsLogoImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonEmailQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonJobTitleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonSocialQueryList_2 {
	elemMatch?: personalJsonSocialInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface personalJsonSocialIconQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonSocialUrlQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface personalJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface personalJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface competencesJsonNameQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface competencesJsonDescriptionQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface competencesJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface competencesJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface competencesJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonWorkQueryList_2 {
	elemMatch?: experiencesJsonWorkInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface experiencesJsonWorkLinkQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonWorkImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonWorkPeriodQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonWorkRoleQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonWorkTasksQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonInternalInputObject_2 {
	contentDigest?: experiencesJsonInternalContentDigestQueryString_2 | null;
	type?: experiencesJsonInternalTypeQueryString_2 | null;
	owner?: experiencesJsonInternalOwnerQueryString_2 | null;
	fieldOwners?: experiencesJsonInternalFieldOwnersInputObject_2 | null;
}

export interface experiencesJsonInternalContentDigestQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonInternalFieldOwnersInputObject_2 {
	image_image?: experiencesJsonInternalFieldOwnersImageImageQueryString_2 | null;
}

export interface experiencesJsonInternalFieldOwnersImageImageQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface experiencesJsonFieldsInputObject_2 {
	image_image?: experiencesJsonFieldsImageImageQueryList_2 | null;
}

export interface experiencesJsonFieldsImageImageQueryList_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface interestsJsonSubjectsQueryList_2 {
	elemMatch?: interestsJsonSubjectsInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface interestsJsonSubjectsIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface interestsJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface interestsJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface interestsJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface skillsJsonLanguagesQueryList_2 {
	elemMatch?: skillsJsonLanguagesInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface skillsJsonLanguagesIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface skillsJsonTechnicalQueryList_2 {
	elemMatch?: skillsJsonTechnicalInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface skillsJsonTechnicalIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface skillsJsonSoftQueryList_2 {
	elemMatch?: skillsJsonSoftInputObject_2 | null;
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
	in?: (string | null)[] | null;
}

export interface skillsJsonSoftIntensityQueryInteger_2 {
	eq?: number | null;
	ne?: number | null;
	gt?: number | null;
	gte?: number | null;
	lt?: number | null;
	lte?: number | null;
	in?: (number | null)[] | null;
}

export interface skillsJsonIdQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
	in?: (string | null)[] | null;
}

export interface skillsJsonInternalTypeQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
}

export interface skillsJsonInternalOwnerQueryString_2 {
	eq?: string | null;
	ne?: string | null;
	regex?: string | null;
	glob?: string | null;
	in?: (string | null)[] | null;
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
export interface AllOrganizationJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: organizationJsonConnectionSort | null;
	filter?: filterOrganizationJson | null;
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
export interface AllExperiencesJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: experiencesJsonConnectionSort | null;
	filter?: filterExperiencesJson | null;
}
export interface AllInterestsJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: interestsJsonConnectionSort | null;
	filter?: filterInterestsJson | null;
}
export interface AllSkillsJsonRootQueryTypeArgs {
	skip?: number | null;
	limit?: number | null;
	sort?: skillsJsonConnectionSort | null;
	filter?: filterSkillsJson | null;
}
export interface SitePageRootQueryTypeArgs {
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
	rawMarkdownBody?: markdownRemarkRawMarkdownBodyQueryString_2 | null;
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
export interface OrganizationJsonRootQueryTypeArgs {
	name?: organizationJsonNameQueryString_2 | null;
	url?: organizationJsonUrlQueryString_2 | null;
	logo?: organizationJsonLogoQueryString_2 | null;
	telephone?: organizationJsonTelephoneQueryString_2 | null;
	id?: organizationJsonIdQueryString_2 | null;
	internal?: organizationJsonInternalInputObject_2 | null;
	fields?: organizationJsonFieldsInputObject_2 | null;
}
export interface PersonalJsonRootQueryTypeArgs {
	name?: personalJsonNameQueryString_2 | null;
	email?: personalJsonEmailQueryString_2 | null;
	jobTitle?: personalJsonJobTitleQueryString_2 | null;
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
export interface ExperiencesJsonRootQueryTypeArgs {
	work?: experiencesJsonWorkQueryList_2 | null;
	id?: experiencesJsonIdQueryString_2 | null;
	internal?: experiencesJsonInternalInputObject_2 | null;
	fields?: experiencesJsonFieldsInputObject_2 | null;
}
export interface InterestsJsonRootQueryTypeArgs {
	subjects?: interestsJsonSubjectsQueryList_2 | null;
	id?: interestsJsonIdQueryString_2 | null;
	internal?: interestsJsonInternalInputObject_2 | null;
}
export interface SkillsJsonRootQueryTypeArgs {
	languages?: skillsJsonLanguagesQueryList_2 | null;
	technical?: skillsJsonTechnicalQueryList_2 | null;
	soft?: skillsJsonSoftQueryList_2 | null;
	id?: skillsJsonIdQueryString_2 | null;
	internal?: skillsJsonInternalInputObject_2 | null;
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
export interface ModifiedTimeParentArgs {
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
}
export interface HeadingsMarkdownRemarkArgs {
	depth?: HeadingLevels | null;
}
export interface StartDateFrontmatter_3Args {
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
export interface DistinctOrganizationJsonConnectionArgs {
	field?: organizationJsonDistinctEnum | null;
}
export interface GroupOrganizationJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: organizationJsonGroupEnum | null;
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
export interface DistinctExperiencesJsonConnectionArgs {
	field?: experiencesJsonDistinctEnum | null;
}
export interface GroupExperiencesJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: experiencesJsonGroupEnum | null;
}
export interface DistinctInterestsJsonConnectionArgs {
	field?: interestsJsonDistinctEnum | null;
}
export interface GroupInterestsJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: interestsJsonGroupEnum | null;
}
export interface DistinctSkillsJsonConnectionArgs {
	field?: skillsJsonDistinctEnum | null;
}
export interface GroupSkillsJsonConnectionArgs {
	skip?: number | null;
	limit?: number | null;
	field?: skillsJsonGroupEnum | null;
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
	context___first = "context___first",
	context___last = "context___last",
	context___index = "context___index",
	context___pageCount = "context___pageCount",
	context___additionalContext___listTitle = "context___additionalContext___listTitle",
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
	context___additionalContext___listTitle = "context___additionalContext___listTitle",
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
	context___additionalContext___listTitle = "context___additionalContext___listTitle",
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
	pluginOptions___emojiConversion = "pluginOptions___emojiConversion",
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
	pluginOptions___icon = "pluginOptions___icon",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	pluginOptions___omitGoogleFont = "pluginOptions___omitGoogleFont",
	pluginOptions___query = "pluginOptions___query",
	pluginOptions___feeds = "pluginOptions___feeds",
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
	pluginOptions___emojiConversion = "pluginOptions___emojiConversion",
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
	pluginOptions___icon = "pluginOptions___icon",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	pluginOptions___omitGoogleFont = "pluginOptions___omitGoogleFont",
	pluginOptions___query = "pluginOptions___query",
	pluginOptions___feeds = "pluginOptions___feeds",
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

export enum sitePluginGroupEnum {
	resolve = "resolve",
	id = "id",
	name = "name",
	version = "version",
	pluginOptions___plugins = "pluginOptions___plugins",
	pluginOptions___name = "pluginOptions___name",
	pluginOptions___path = "pluginOptions___path",
	pluginOptions___emojiConversion = "pluginOptions___emojiConversion",
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
	pluginOptions___icon = "pluginOptions___icon",
	pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
	pluginOptions___omitGoogleFont = "pluginOptions___omitGoogleFont",
	pluginOptions___query = "pluginOptions___query",
	pluginOptions___feeds = "pluginOptions___feeds",
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

export enum fileGroupEnum {
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
	frontmatter___authors = "frontmatter___authors",
	frontmatter___link = "frontmatter___link",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___parent = "frontmatter___parent",
	frontmatter___startDate = "frontmatter___startDate",
	frontmatter___description = "frontmatter___description",
	frontmatter___date = "frontmatter___date",
	frontmatter___type = "frontmatter___type",
	frontmatter___draft = "frontmatter___draft",
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
	frontmatter___authors = "frontmatter___authors",
	frontmatter___link = "frontmatter___link",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___parent = "frontmatter___parent",
	frontmatter___startDate = "frontmatter___startDate",
	frontmatter___description = "frontmatter___description",
	frontmatter___date = "frontmatter___date",
	frontmatter___type = "frontmatter___type",
	frontmatter___draft = "frontmatter___draft",
	excerpt = "excerpt",
	rawMarkdownBody = "rawMarkdownBody",
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
	frontmatter___authors = "frontmatter___authors",
	frontmatter___link = "frontmatter___link",
	frontmatter____PARENT = "frontmatter____PARENT",
	frontmatter___parent = "frontmatter___parent",
	frontmatter___startDate = "frontmatter___startDate",
	frontmatter___description = "frontmatter___description",
	frontmatter___date = "frontmatter___date",
	frontmatter___type = "frontmatter___type",
	frontmatter___draft = "frontmatter___draft",
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

export enum organizationJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum organizationJsonDistinctEnum {
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

export enum organizationJsonGroupEnum {
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

export enum personalJsonConnectionSortOrderValues {
	ASC = "ASC",
	DESC = "DESC",
}

export enum personalJsonDistinctEnum {
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

export enum personalJsonGroupEnum {
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
	internal___fieldOwners___image_image = "internal___fieldOwners___image_image",
	fields___image_image = "fields___image_image",
}

export enum experiencesJsonGroupEnum {
	work = "work",
	id = "id",
	parent = "parent",
	internal___contentDigest = "internal___contentDigest",
	internal___type = "internal___type",
	internal___owner = "internal___owner",
	internal___fieldOwners___image_image = "internal___fieldOwners___image_image",
	fields___image_image = "fields___image_image",
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

export namespace RootQueryTypeResolvers {
	export interface Resolvers {
		allSitePage?: AllSitePageResolver /** Connection to all SitePage nodes */;
		allSitePlugin?: AllSitePluginResolver /** Connection to all SitePlugin nodes */;
		allDirectory?: AllDirectoryResolver /** Connection to all Directory nodes */;
		allFile?: AllFileResolver /** Connection to all File nodes */;
		allMarkdownRemark?: AllMarkdownRemarkResolver /** Connection to all MarkdownRemark nodes */;
		allTodoJson?: AllTodoJsonResolver /** Connection to all TodoJson nodes */;
		allOrganizationJson?: AllOrganizationJsonResolver /** Connection to all OrganizationJson nodes */;
		allPersonalJson?: AllPersonalJsonResolver /** Connection to all PersonalJson nodes */;
		allCompetencesJson?: AllCompetencesJsonResolver /** Connection to all CompetencesJson nodes */;
		allExperiencesJson?: AllExperiencesJsonResolver /** Connection to all ExperiencesJson nodes */;
		allInterestsJson?: AllInterestsJsonResolver /** Connection to all InterestsJson nodes */;
		allSkillsJson?: AllSkillsJsonResolver /** Connection to all SkillsJson nodes */;
		sitePage?: SitePageResolver;
		sitePlugin?: SitePluginResolver;
		site?: SiteResolver;
		directory?: DirectoryResolver;
		file?: FileResolver;
		markdownRemark?: MarkdownRemarkResolver;
		todoJson?: TodoJsonResolver;
		organizationJson?: OrganizationJsonResolver;
		personalJson?: PersonalJsonResolver;
		competencesJson?: CompetencesJsonResolver;
		experiencesJson?: ExperiencesJsonResolver;
		interestsJson?: InterestsJsonResolver;
		skillsJson?: SkillsJsonResolver;
	}

	export type AllSitePageResolver = Resolver<
		SitePageConnection | null,
		AllSitePageArgs
	>;
	export interface AllSitePageArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: sitePageConnectionSort | null;
		filter?: filterSitePage | null;
	}

	export type AllSitePluginResolver = Resolver<
		SitePluginConnection | null,
		AllSitePluginArgs
	>;
	export interface AllSitePluginArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: sitePluginConnectionSort | null;
		filter?: filterSitePlugin | null;
	}

	export type AllDirectoryResolver = Resolver<
		DirectoryConnection | null,
		AllDirectoryArgs
	>;
	export interface AllDirectoryArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: directoryConnectionSort | null;
		filter?: filterDirectory | null;
	}

	export type AllFileResolver = Resolver<FileConnection | null, AllFileArgs>;
	export interface AllFileArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: fileConnectionSort | null;
		filter?: filterFile | null;
	}

	export type AllMarkdownRemarkResolver = Resolver<
		MarkdownRemarkConnection | null,
		AllMarkdownRemarkArgs
	>;
	export interface AllMarkdownRemarkArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: markdownRemarkConnectionSort | null;
		filter?: filterMarkdownRemark | null;
	}

	export type AllTodoJsonResolver = Resolver<
		TodoJsonConnection | null,
		AllTodoJsonArgs
	>;
	export interface AllTodoJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: todoJsonConnectionSort | null;
		filter?: filterTodoJson | null;
	}

	export type AllOrganizationJsonResolver = Resolver<
		OrganizationJsonConnection | null,
		AllOrganizationJsonArgs
	>;
	export interface AllOrganizationJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: organizationJsonConnectionSort | null;
		filter?: filterOrganizationJson | null;
	}

	export type AllPersonalJsonResolver = Resolver<
		PersonalJsonConnection | null,
		AllPersonalJsonArgs
	>;
	export interface AllPersonalJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: personalJsonConnectionSort | null;
		filter?: filterPersonalJson | null;
	}

	export type AllCompetencesJsonResolver = Resolver<
		CompetencesJsonConnection | null,
		AllCompetencesJsonArgs
	>;
	export interface AllCompetencesJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: competencesJsonConnectionSort | null;
		filter?: filterCompetencesJson | null;
	}

	export type AllExperiencesJsonResolver = Resolver<
		ExperiencesJsonConnection | null,
		AllExperiencesJsonArgs
	>;
	export interface AllExperiencesJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: experiencesJsonConnectionSort | null;
		filter?: filterExperiencesJson | null;
	}

	export type AllInterestsJsonResolver = Resolver<
		InterestsJsonConnection | null,
		AllInterestsJsonArgs
	>;
	export interface AllInterestsJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: interestsJsonConnectionSort | null;
		filter?: filterInterestsJson | null;
	}

	export type AllSkillsJsonResolver = Resolver<
		SkillsJsonConnection | null,
		AllSkillsJsonArgs
	>;
	export interface AllSkillsJsonArgs {
		skip?: number | null;
		limit?: number | null;
		sort?: skillsJsonConnectionSort | null;
		filter?: filterSkillsJson | null;
	}

	export type SitePageResolver = Resolver<SitePage | null, SitePageArgs>;
	export interface SitePageArgs {
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

	export type SitePluginResolver = Resolver<
		SitePlugin | null,
		SitePluginArgs
	>;
	export interface SitePluginArgs {
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

	export type SiteResolver = Resolver<Site | null, SiteArgs>;
	export interface SiteArgs {
		siteMetadata?: siteSiteMetadataInputObject_2 | null;
		port?: sitePortQueryString_2 | null;
		host?: siteHostQueryString_2 | null;
		pathPrefix?: sitePathPrefixQueryString_2 | null;
		polyfill?: sitePolyfillQueryBoolean_2 | null;
		buildTime?: siteBuildTimeQueryString_2 | null;
		id?: siteIdQueryString_2 | null;
		internal?: siteInternalInputObject_2 | null;
	}

	export type DirectoryResolver = Resolver<Directory | null, DirectoryArgs>;
	export interface DirectoryArgs {
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

	export type FileResolver = Resolver<File | null, FileArgs>;
	export interface FileArgs {
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

	export type MarkdownRemarkResolver = Resolver<
		MarkdownRemark | null,
		MarkdownRemarkArgs
	>;
	export interface MarkdownRemarkArgs {
		id?: markdownRemarkIdQueryString_2 | null;
		internal?: markdownRemarkInternalInputObject_2 | null;
		frontmatter?: markdownRemarkFrontmatterInputObject_2 | null;
		excerpt?: excerptQueryString_3 | null;
		rawMarkdownBody?: markdownRemarkRawMarkdownBodyQueryString_2 | null;
		fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null;
		html?: htmlQueryString_3 | null;
		headings?: headingsQueryList_3 | null;
		timeToRead?: timeToReadQueryInt_3 | null;
		tableOfContents?: tableOfContentsQueryString_3 | null;
		wordCount?: wordCountTypeName_3 | null;
	}

	export type TodoJsonResolver = Resolver<TodoJson | null, TodoJsonArgs>;
	export interface TodoJsonArgs {
		title?: todoJsonTitleQueryString_2 | null;
		tags?: todoJsonTagsQueryList_2 | null;
		id?: todoJsonIdQueryString_2 | null;
		internal?: todoJsonInternalInputObject_2 | null;
	}

	export type OrganizationJsonResolver = Resolver<
		OrganizationJson | null,
		OrganizationJsonArgs
	>;
	export interface OrganizationJsonArgs {
		name?: organizationJsonNameQueryString_2 | null;
		url?: organizationJsonUrlQueryString_2 | null;
		logo?: organizationJsonLogoQueryString_2 | null;
		telephone?: organizationJsonTelephoneQueryString_2 | null;
		id?: organizationJsonIdQueryString_2 | null;
		internal?: organizationJsonInternalInputObject_2 | null;
		fields?: organizationJsonFieldsInputObject_2 | null;
	}

	export type PersonalJsonResolver = Resolver<
		PersonalJson | null,
		PersonalJsonArgs
	>;
	export interface PersonalJsonArgs {
		name?: personalJsonNameQueryString_2 | null;
		email?: personalJsonEmailQueryString_2 | null;
		jobTitle?: personalJsonJobTitleQueryString_2 | null;
		social?: personalJsonSocialQueryList_2 | null;
		id?: personalJsonIdQueryString_2 | null;
		internal?: personalJsonInternalInputObject_2 | null;
	}

	export type CompetencesJsonResolver = Resolver<
		CompetencesJson | null,
		CompetencesJsonArgs
	>;
	export interface CompetencesJsonArgs {
		name?: competencesJsonNameQueryString_2 | null;
		description?: competencesJsonDescriptionQueryString_2 | null;
		id?: competencesJsonIdQueryString_2 | null;
		internal?: competencesJsonInternalInputObject_2 | null;
	}

	export type ExperiencesJsonResolver = Resolver<
		ExperiencesJson | null,
		ExperiencesJsonArgs
	>;
	export interface ExperiencesJsonArgs {
		work?: experiencesJsonWorkQueryList_2 | null;
		id?: experiencesJsonIdQueryString_2 | null;
		internal?: experiencesJsonInternalInputObject_2 | null;
		fields?: experiencesJsonFieldsInputObject_2 | null;
	}

	export type InterestsJsonResolver = Resolver<
		InterestsJson | null,
		InterestsJsonArgs
	>;
	export interface InterestsJsonArgs {
		subjects?: interestsJsonSubjectsQueryList_2 | null;
		id?: interestsJsonIdQueryString_2 | null;
		internal?: interestsJsonInternalInputObject_2 | null;
	}

	export type SkillsJsonResolver = Resolver<
		SkillsJson | null,
		SkillsJsonArgs
	>;
	export interface SkillsJsonArgs {
		languages?: skillsJsonLanguagesQueryList_2 | null;
		technical?: skillsJsonTechnicalQueryList_2 | null;
		soft?: skillsJsonSoftQueryList_2 | null;
		id?: skillsJsonIdQueryString_2 | null;
		internal?: skillsJsonInternalInputObject_2 | null;
	}
} /** A connection to a list of items. */
export namespace SitePageConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(SitePageEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: sitePageDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(sitePageGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: sitePageGroupEnum | null;
	}
} /** Information about pagination in a connection. */
export namespace PageInfoResolvers {
	export interface Resolvers {
		hasNextPage?: HasNextPageResolver /** When paginating, are there more items? */;
	}

	export type HasNextPageResolver = Resolver<boolean>;
} /** An edge in a connection. */
export namespace SitePageEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<SitePage | null>;
	export type NextResolver = Resolver<SitePage | null>;
	export type PreviousResolver = Resolver<SitePage | null>;
} /** Node of type SitePage */
export namespace SitePageResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		jsonName?: JsonNameResolver;
		internalComponentName?: InternalComponentNameResolver;
		path?: PathResolver;
		component?: ComponentResolver;
		componentChunkName?: ComponentChunkNameResolver;
		context?: ContextResolver;
		pluginCreator?: PluginCreatorResolver;
		pluginCreatorId?: PluginCreatorIdResolver;
		componentPath?: ComponentPathResolver;
		internal?: InternalResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type JsonNameResolver = Resolver<string | null>;
	export type InternalComponentNameResolver = Resolver<string | null>;
	export type PathResolver = Resolver<string | null>;
	export type ComponentResolver = Resolver<string | null>;
	export type ComponentChunkNameResolver = Resolver<string | null>;
	export type ContextResolver = Resolver<context | null>;
	export type PluginCreatorResolver = Resolver<SitePlugin | null>;
	export type PluginCreatorIdResolver = Resolver<string | null>;
	export type ComponentPathResolver = Resolver<string | null>;
	export type InternalResolver = Resolver<internal_14 | null>;
}
export namespace contextResolvers {
	export interface Resolvers {
		group?: GroupResolver;
		pathPrefix?: PathPrefixResolver;
		first?: FirstResolver;
		last?: LastResolver;
		index?: IndexResolver;
		pageCount?: PageCountResolver;
		additionalContext?: AdditionalContextResolver;
		slug?: SlugResolver;
		markdownPath?: MarkdownPathResolver;
	}

	export type GroupResolver = Resolver<(group | null)[] | null>;
	export type PathPrefixResolver = Resolver<string | null>;
	export type FirstResolver = Resolver<boolean | null>;
	export type LastResolver = Resolver<boolean | null>;
	export type IndexResolver = Resolver<number | null>;
	export type PageCountResolver = Resolver<number | null>;
	export type AdditionalContextResolver = Resolver<additionalContext | null>;
	export type SlugResolver = Resolver<string | null>;
	export type MarkdownPathResolver = Resolver<string | null>;
}
export namespace groupResolvers {
	export interface Resolvers {
		node?: NodeResolver;
	}

	export type NodeResolver = Resolver<node | null>;
}
export namespace nodeResolvers {
	export interface Resolvers {
		excerpt?: ExcerptResolver;
		fileAbsolutePath?: FileAbsolutePathResolver;
		frontmatter?: FrontmatterResolver;
		parent?: ParentResolver;
		count?: CountResolver;
		timeToRead?: TimeToReadResolver;
	}

	export type ExcerptResolver = Resolver<string | null>;
	export type FileAbsolutePathResolver = Resolver<string | null>;
	export type FrontmatterResolver = Resolver<frontmatter_2 | null>;
	export type ParentResolver = Resolver<parent | null>;
	export type CountResolver = Resolver<count | null>;
	export type TimeToReadResolver = Resolver<number | null>;
}
export namespace frontmatter_2Resolvers {
	export interface Resolvers {
		date?: DateResolver;
		authors?: AuthorsResolver;
		draft?: DraftResolver;
		link?: LinkResolver;
		title?: TitleResolver;
		description?: DescriptionResolver;
	}

	export type DateResolver = Resolver<Date | null, DateArgs>;
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

	export type AuthorsResolver = Resolver<(authors_2 | null)[] | null>;
	export type DraftResolver = Resolver<boolean | null>;
	export type LinkResolver = Resolver<string | null>;
	export type TitleResolver = Resolver<string | null>;
	export type DescriptionResolver = Resolver<string | null>;
}
export namespace authors_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		url?: UrlResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type UrlResolver = Resolver<string | null>;
}
export namespace parentResolvers {
	export interface Resolvers {
		modifiedTime?: ModifiedTimeResolver;
	}

	export type ModifiedTimeResolver = Resolver<Date | null, ModifiedTimeArgs>;
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
}
export namespace countResolvers {
	export interface Resolvers {
		words?: WordsResolver;
	}

	export type WordsResolver = Resolver<number | null>;
}
export namespace additionalContextResolvers {
	export interface Resolvers {
		listTitle?: ListTitleResolver;
	}

	export type ListTitleResolver = Resolver<string | null>;
} /** Node of type SitePlugin */
export namespace SitePluginResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		resolve?: ResolveResolver;
		name?: NameResolver;
		version?: VersionResolver;
		pluginOptions?: PluginOptionsResolver;
		nodeAPIs?: NodeAPIsResolver;
		browserAPIs?: BrowserAPIsResolver;
		ssrAPIs?: SsrAPIsResolver;
		pluginFilepath?: PluginFilepathResolver;
		packageJson?: PackageJsonResolver;
		internal?: InternalResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type ResolveResolver = Resolver<string | null>;
	export type NameResolver = Resolver<string | null>;
	export type VersionResolver = Resolver<string | null>;
	export type PluginOptionsResolver = Resolver<pluginOptions_3 | null>;
	export type NodeAPIsResolver = Resolver<(string | null)[] | null>;
	export type BrowserAPIsResolver = Resolver<(string | null)[] | null>;
	export type SsrAPIsResolver = Resolver<(string | null)[] | null>;
	export type PluginFilepathResolver = Resolver<string | null>;
	export type PackageJsonResolver = Resolver<packageJson_2 | null>;
	export type InternalResolver = Resolver<internal_15 | null>;
}
export namespace pluginOptions_3Resolvers {
	export interface Resolvers {
		plugins?: PluginsResolver;
		name?: NameResolver;
		path?: PathResolver;
		emojiConversion?: EmojiConversionResolver;
		maxWidth?: MaxWidthResolver;
		wrapperStyle?: WrapperStyleResolver;
		backgroundColor?: BackgroundColorResolver;
		linkImagesToOriginal?: LinkImagesToOriginalResolver;
		showCaptions?: ShowCaptionsResolver;
		pathPrefix?: PathPrefixResolver;
		inlineCodeMarker?: InlineCodeMarkerResolver;
		short_name?: Short_nameResolver;
		start_url?: Start_urlResolver;
		background_color?: Background_colorResolver;
		theme_color?: Theme_colorResolver;
		display?: DisplayResolver;
		icon?: IconResolver;
		pathToConfigModule?: PathToConfigModuleResolver;
		omitGoogleFont?: OmitGoogleFontResolver;
		query?: QueryResolver;
		feeds?: FeedsResolver;
		pathCheck?: PathCheckResolver;
	}

	export type PluginsResolver = Resolver<(plugins_2 | null)[] | null>;
	export type NameResolver = Resolver<string | null>;
	export type PathResolver = Resolver<string | null>;
	export type EmojiConversionResolver = Resolver<string | null>;
	export type MaxWidthResolver = Resolver<number | null>;
	export type WrapperStyleResolver = Resolver<string | null>;
	export type BackgroundColorResolver = Resolver<string | null>;
	export type LinkImagesToOriginalResolver = Resolver<boolean | null>;
	export type ShowCaptionsResolver = Resolver<boolean | null>;
	export type PathPrefixResolver = Resolver<string | null>;
	export type InlineCodeMarkerResolver = Resolver<string | null>;
	export type Short_nameResolver = Resolver<string | null>;
	export type Start_urlResolver = Resolver<string | null>;
	export type Background_colorResolver = Resolver<string | null>;
	export type Theme_colorResolver = Resolver<string | null>;
	export type DisplayResolver = Resolver<string | null>;
	export type IconResolver = Resolver<string | null>;
	export type PathToConfigModuleResolver = Resolver<string | null>;
	export type OmitGoogleFontResolver = Resolver<boolean | null>;
	export type QueryResolver = Resolver<string | null>;
	export type FeedsResolver = Resolver<(feeds_2 | null)[] | null>;
	export type PathCheckResolver = Resolver<boolean | null>;
}
export namespace plugins_2Resolvers {
	export interface Resolvers {
		resolve?: ResolveResolver;
		id?: IdResolver;
		name?: NameResolver;
		version?: VersionResolver;
		pluginOptions?: PluginOptionsResolver;
		pluginFilepath?: PluginFilepathResolver;
	}

	export type ResolveResolver = Resolver<string | null>;
	export type IdResolver = Resolver<string | null>;
	export type NameResolver = Resolver<string | null>;
	export type VersionResolver = Resolver<string | null>;
	export type PluginOptionsResolver = Resolver<pluginOptions_4 | null>;
	export type PluginFilepathResolver = Resolver<string | null>;
}
export namespace pluginOptions_4Resolvers {
	export interface Resolvers {
		emojiConversion?: EmojiConversionResolver;
		maxWidth?: MaxWidthResolver;
		wrapperStyle?: WrapperStyleResolver;
		backgroundColor?: BackgroundColorResolver;
		linkImagesToOriginal?: LinkImagesToOriginalResolver;
		showCaptions?: ShowCaptionsResolver;
		pathPrefix?: PathPrefixResolver;
		inlineCodeMarker?: InlineCodeMarkerResolver;
	}

	export type EmojiConversionResolver = Resolver<string | null>;
	export type MaxWidthResolver = Resolver<number | null>;
	export type WrapperStyleResolver = Resolver<string | null>;
	export type BackgroundColorResolver = Resolver<string | null>;
	export type LinkImagesToOriginalResolver = Resolver<boolean | null>;
	export type ShowCaptionsResolver = Resolver<boolean | null>;
	export type PathPrefixResolver = Resolver<string | null>;
	export type InlineCodeMarkerResolver = Resolver<string | null>;
}
export namespace feeds_2Resolvers {
	export interface Resolvers {
		query?: QueryResolver;
		output?: OutputResolver;
	}

	export type QueryResolver = Resolver<string | null>;
	export type OutputResolver = Resolver<string | null>;
}
export namespace packageJson_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		description?: DescriptionResolver;
		version?: VersionResolver;
		main?: MainResolver;
		author?: AuthorResolver;
		license?: LicenseResolver;
		dependencies?: DependenciesResolver;
		devDependencies?: DevDependenciesResolver;
		peerDependencies?: PeerDependenciesResolver;
		keywords?: KeywordsResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type DescriptionResolver = Resolver<string | null>;
	export type VersionResolver = Resolver<string | null>;
	export type MainResolver = Resolver<string | null>;
	export type AuthorResolver = Resolver<string | null>;
	export type LicenseResolver = Resolver<string | null>;
	export type DependenciesResolver = Resolver<
		(dependencies_2 | null)[] | null
	>;
	export type DevDependenciesResolver = Resolver<
		(devDependencies_2 | null)[] | null
	>;
	export type PeerDependenciesResolver = Resolver<
		(peerDependencies_2 | null)[] | null
	>;
	export type KeywordsResolver = Resolver<(string | null)[] | null>;
}
export namespace dependencies_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		version?: VersionResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type VersionResolver = Resolver<string | null>;
}
export namespace devDependencies_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		version?: VersionResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type VersionResolver = Resolver<string | null>;
}
export namespace peerDependencies_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		version?: VersionResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type VersionResolver = Resolver<string | null>;
}
export namespace internal_15Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
}
export namespace internal_14Resolvers {
	export interface Resolvers {
		type?: TypeResolver;
		contentDigest?: ContentDigestResolver;
		description?: DescriptionResolver;
		owner?: OwnerResolver;
	}

	export type TypeResolver = Resolver<string | null>;
	export type ContentDigestResolver = Resolver<string | null>;
	export type DescriptionResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
} /** A connection to a list of items. */
export namespace sitePageGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(sitePageGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace sitePageGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<SitePage | null>;
	export type NextResolver = Resolver<SitePage | null>;
	export type PreviousResolver = Resolver<SitePage | null>;
} /** A connection to a list of items. */
export namespace SitePluginConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(SitePluginEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: sitePluginDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(sitePluginGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: sitePluginGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace SitePluginEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<SitePlugin | null>;
	export type NextResolver = Resolver<SitePlugin | null>;
	export type PreviousResolver = Resolver<SitePlugin | null>;
} /** A connection to a list of items. */
export namespace sitePluginGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(sitePluginGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace sitePluginGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<SitePlugin | null>;
	export type NextResolver = Resolver<SitePlugin | null>;
	export type PreviousResolver = Resolver<SitePlugin | null>;
} /** A connection to a list of items. */
export namespace DirectoryConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(DirectoryEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: directoryDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(directoryGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: directoryGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace DirectoryEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<Directory | null>;
	export type NextResolver = Resolver<Directory | null>;
	export type PreviousResolver = Resolver<Directory | null>;
} /** Node of type Directory */
export namespace DirectoryResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		internal?: InternalResolver;
		sourceInstanceName?: SourceInstanceNameResolver;
		absolutePath?: AbsolutePathResolver;
		relativePath?: RelativePathResolver;
		extension?: ExtensionResolver;
		size?: SizeResolver;
		prettySize?: PrettySizeResolver;
		modifiedTime?: ModifiedTimeResolver;
		accessTime?: AccessTimeResolver;
		changeTime?: ChangeTimeResolver;
		birthTime?: BirthTimeResolver;
		root?: RootResolver;
		dir?: DirResolver;
		base?: BaseResolver;
		ext?: ExtResolver;
		name?: NameResolver;
		relativeDirectory?: RelativeDirectoryResolver;
		dev?: DevResolver;
		mode?: ModeResolver;
		nlink?: NlinkResolver;
		uid?: UidResolver;
		gid?: GidResolver;
		rdev?: RdevResolver;
		blksize?: BlksizeResolver;
		ino?: InoResolver;
		blocks?: BlocksResolver;
		atimeMs?: AtimeMsResolver;
		mtimeMs?: MtimeMsResolver;
		ctimeMs?: CtimeMsResolver;
		birthtimeMs?: BirthtimeMsResolver;
		atime?: AtimeResolver;
		mtime?: MtimeResolver;
		ctime?: CtimeResolver;
		birthtime?: BirthtimeResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type InternalResolver = Resolver<internal_16 | null>;
	export type SourceInstanceNameResolver = Resolver<string | null>;
	export type AbsolutePathResolver = Resolver<string | null>;
	export type RelativePathResolver = Resolver<string | null>;
	export type ExtensionResolver = Resolver<string | null>;
	export type SizeResolver = Resolver<number | null>;
	export type PrettySizeResolver = Resolver<string | null>;
	export type ModifiedTimeResolver = Resolver<Date | null, ModifiedTimeArgs>;
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

	export type AccessTimeResolver = Resolver<Date | null, AccessTimeArgs>;
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

	export type ChangeTimeResolver = Resolver<Date | null, ChangeTimeArgs>;
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

	export type BirthTimeResolver = Resolver<Date | null, BirthTimeArgs>;
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

	export type RootResolver = Resolver<string | null>;
	export type DirResolver = Resolver<string | null>;
	export type BaseResolver = Resolver<string | null>;
	export type ExtResolver = Resolver<string | null>;
	export type NameResolver = Resolver<string | null>;
	export type RelativeDirectoryResolver = Resolver<string | null>;
	export type DevResolver = Resolver<number | null>;
	export type ModeResolver = Resolver<number | null>;
	export type NlinkResolver = Resolver<number | null>;
	export type UidResolver = Resolver<number | null>;
	export type GidResolver = Resolver<number | null>;
	export type RdevResolver = Resolver<number | null>;
	export type BlksizeResolver = Resolver<number | null>;
	export type InoResolver = Resolver<number | null>;
	export type BlocksResolver = Resolver<number | null>;
	export type AtimeMsResolver = Resolver<number | null>;
	export type MtimeMsResolver = Resolver<number | null>;
	export type CtimeMsResolver = Resolver<number | null>;
	export type BirthtimeMsResolver = Resolver<number | null>;
	export type AtimeResolver = Resolver<Date | null, AtimeArgs>;
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

	export type MtimeResolver = Resolver<Date | null, MtimeArgs>;
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

	export type CtimeResolver = Resolver<Date | null, CtimeArgs>;
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

	export type BirthtimeResolver = Resolver<Date | null, BirthtimeArgs>;
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
export namespace internal_16Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		description?: DescriptionResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type DescriptionResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
} /** A connection to a list of items. */
export namespace directoryGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(directoryGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace directoryGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<Directory | null>;
	export type NextResolver = Resolver<Directory | null>;
	export type PreviousResolver = Resolver<Directory | null>;
} /** A connection to a list of items. */
export namespace FileConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(FileEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: fileDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(fileGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: fileGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace FileEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<File | null>;
	export type NextResolver = Resolver<File | null>;
	export type PreviousResolver = Resolver<File | null>;
} /** Node of type File */
export namespace FileResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		childMarkdownRemark?: ChildMarkdownRemarkResolver /** The child of this node of type markdownRemark */;
		childrenTodoJson?: ChildrenTodoJsonResolver /** The children of this node of type todoJson */;
		childOrganizationJson?: ChildOrganizationJsonResolver /** The child of this node of type organizationJson */;
		childPersonalJson?: ChildPersonalJsonResolver /** The child of this node of type personalJson */;
		childrenCompetencesJson?: ChildrenCompetencesJsonResolver /** The children of this node of type competencesJson */;
		childExperiencesJson?: ChildExperiencesJsonResolver /** The child of this node of type experiencesJson */;
		childInterestsJson?: ChildInterestsJsonResolver /** The child of this node of type interestsJson */;
		childSkillsJson?: ChildSkillsJsonResolver /** The child of this node of type skillsJson */;
		internal?: InternalResolver;
		sourceInstanceName?: SourceInstanceNameResolver;
		absolutePath?: AbsolutePathResolver;
		relativePath?: RelativePathResolver;
		extension?: ExtensionResolver;
		size?: SizeResolver;
		prettySize?: PrettySizeResolver;
		modifiedTime?: ModifiedTimeResolver;
		accessTime?: AccessTimeResolver;
		changeTime?: ChangeTimeResolver;
		birthTime?: BirthTimeResolver;
		root?: RootResolver;
		dir?: DirResolver;
		base?: BaseResolver;
		ext?: ExtResolver;
		name?: NameResolver;
		relativeDirectory?: RelativeDirectoryResolver;
		dev?: DevResolver;
		mode?: ModeResolver;
		nlink?: NlinkResolver;
		uid?: UidResolver;
		gid?: GidResolver;
		rdev?: RdevResolver;
		blksize?: BlksizeResolver;
		ino?: InoResolver;
		blocks?: BlocksResolver;
		atimeMs?: AtimeMsResolver;
		mtimeMs?: MtimeMsResolver;
		ctimeMs?: CtimeMsResolver;
		birthtimeMs?: BirthtimeMsResolver;
		atime?: AtimeResolver;
		mtime?: MtimeResolver;
		ctime?: CtimeResolver;
		birthtime?: BirthtimeResolver;
		publicURL?: PublicURLResolver /** Copy file to static directory and return public url to it */;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type ChildMarkdownRemarkResolver = Resolver<MarkdownRemark | null>;
	export type ChildrenTodoJsonResolver = Resolver<(TodoJson | null)[] | null>;
	export type ChildOrganizationJsonResolver = Resolver<OrganizationJson | null>;
	export type ChildPersonalJsonResolver = Resolver<PersonalJson | null>;
	export type ChildrenCompetencesJsonResolver = Resolver<
		(CompetencesJson | null)[] | null
	>;
	export type ChildExperiencesJsonResolver = Resolver<ExperiencesJson | null>;
	export type ChildInterestsJsonResolver = Resolver<InterestsJson | null>;
	export type ChildSkillsJsonResolver = Resolver<SkillsJson | null>;
	export type InternalResolver = Resolver<internal_17 | null>;
	export type SourceInstanceNameResolver = Resolver<string | null>;
	export type AbsolutePathResolver = Resolver<string | null>;
	export type RelativePathResolver = Resolver<string | null>;
	export type ExtensionResolver = Resolver<string | null>;
	export type SizeResolver = Resolver<number | null>;
	export type PrettySizeResolver = Resolver<string | null>;
	export type ModifiedTimeResolver = Resolver<Date | null, ModifiedTimeArgs>;
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

	export type AccessTimeResolver = Resolver<Date | null, AccessTimeArgs>;
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

	export type ChangeTimeResolver = Resolver<Date | null, ChangeTimeArgs>;
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

	export type BirthTimeResolver = Resolver<Date | null, BirthTimeArgs>;
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

	export type RootResolver = Resolver<string | null>;
	export type DirResolver = Resolver<string | null>;
	export type BaseResolver = Resolver<string | null>;
	export type ExtResolver = Resolver<string | null>;
	export type NameResolver = Resolver<string | null>;
	export type RelativeDirectoryResolver = Resolver<string | null>;
	export type DevResolver = Resolver<number | null>;
	export type ModeResolver = Resolver<number | null>;
	export type NlinkResolver = Resolver<number | null>;
	export type UidResolver = Resolver<number | null>;
	export type GidResolver = Resolver<number | null>;
	export type RdevResolver = Resolver<number | null>;
	export type BlksizeResolver = Resolver<number | null>;
	export type InoResolver = Resolver<number | null>;
	export type BlocksResolver = Resolver<number | null>;
	export type AtimeMsResolver = Resolver<number | null>;
	export type MtimeMsResolver = Resolver<number | null>;
	export type CtimeMsResolver = Resolver<number | null>;
	export type BirthtimeMsResolver = Resolver<number | null>;
	export type AtimeResolver = Resolver<Date | null, AtimeArgs>;
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

	export type MtimeResolver = Resolver<Date | null, MtimeArgs>;
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

	export type CtimeResolver = Resolver<Date | null, CtimeArgs>;
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

	export type BirthtimeResolver = Resolver<Date | null, BirthtimeArgs>;
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

	export type PublicURLResolver = Resolver<string | null>;
} /** Node of type MarkdownRemark */
export namespace MarkdownRemarkResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		internal?: InternalResolver;
		frontmatter?: FrontmatterResolver;
		rawMarkdownBody?: RawMarkdownBodyResolver;
		fileAbsolutePath?: FileAbsolutePathResolver;
		html?: HtmlResolver;
		htmlAst?: HtmlAstResolver;
		excerpt?: ExcerptResolver;
		headings?: HeadingsResolver;
		timeToRead?: TimeToReadResolver;
		tableOfContents?: TableOfContentsResolver;
		wordCount?: WordCountResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type InternalResolver = Resolver<internal_18 | null>;
	export type FrontmatterResolver = Resolver<frontmatter_3 | null>;
	export type RawMarkdownBodyResolver = Resolver<string | null>;
	export type FileAbsolutePathResolver = Resolver<string | null>;
	export type HtmlResolver = Resolver<string | null>;
	export type HtmlAstResolver = Resolver<JSON | null>;
	export type ExcerptResolver = Resolver<string | null, ExcerptArgs>;
	export interface ExcerptArgs {
		pruneLength?: number | null;
	}

	export type HeadingsResolver = Resolver<
		(MarkdownHeading | null)[] | null,
		HeadingsArgs
	>;
	export interface HeadingsArgs {
		depth?: HeadingLevels | null;
	}

	export type TimeToReadResolver = Resolver<number | null>;
	export type TableOfContentsResolver = Resolver<string | null>;
	export type WordCountResolver = Resolver<wordCount | null>;
}
export namespace internal_18Resolvers {
	export interface Resolvers {
		content?: ContentResolver;
		type?: TypeResolver;
		contentDigest?: ContentDigestResolver;
		owner?: OwnerResolver;
	}

	export type ContentResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type ContentDigestResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
}
export namespace frontmatter_3Resolvers {
	export interface Resolvers {
		title?: TitleResolver;
		authors?: AuthorsResolver;
		link?: LinkResolver;
		_PARENT?: _PARENTResolver;
		parent?: ParentResolver;
		startDate?: StartDateResolver;
		description?: DescriptionResolver;
		date?: DateResolver;
		type?: TypeResolver;
		draft?: DraftResolver;
	}

	export type TitleResolver = Resolver<string | null>;
	export type AuthorsResolver = Resolver<(authors_3 | null)[] | null>;
	export type LinkResolver = Resolver<string | null>;
	export type _PARENTResolver = Resolver<string | null>;
	export type ParentResolver = Resolver<string | null>;
	export type StartDateResolver = Resolver<Date | null, StartDateArgs>;
	export interface StartDateArgs {
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

	export type DescriptionResolver = Resolver<string | null>;
	export type DateResolver = Resolver<Date | null, DateArgs>;
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

	export type TypeResolver = Resolver<string | null>;
	export type DraftResolver = Resolver<boolean | null>;
}
export namespace authors_3Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		url?: UrlResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type UrlResolver = Resolver<string | null>;
}
export namespace MarkdownHeadingResolvers {
	export interface Resolvers {
		value?: ValueResolver;
		depth?: DepthResolver;
	}

	export type ValueResolver = Resolver<string | null>;
	export type DepthResolver = Resolver<number | null>;
}
export namespace wordCountResolvers {
	export interface Resolvers {
		paragraphs?: ParagraphsResolver;
		sentences?: SentencesResolver;
		words?: WordsResolver;
	}

	export type ParagraphsResolver = Resolver<number | null>;
	export type SentencesResolver = Resolver<number | null>;
	export type WordsResolver = Resolver<number | null>;
} /** Node of type TodoJson */
export namespace TodoJsonResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		title?: TitleResolver;
		tags?: TagsResolver;
		internal?: InternalResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type TitleResolver = Resolver<string | null>;
	export type TagsResolver = Resolver<(string | null)[] | null>;
	export type InternalResolver = Resolver<internal_19 | null>;
}
export namespace internal_19Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
} /** Node of type OrganizationJson */
export namespace OrganizationJsonResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		name?: NameResolver;
		url?: UrlResolver;
		logo?: LogoResolver;
		telephone?: TelephoneResolver;
		internal?: InternalResolver;
		fields?: FieldsResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type NameResolver = Resolver<string | null>;
	export type UrlResolver = Resolver<string | null>;
	export type LogoResolver = Resolver<string | null>;
	export type TelephoneResolver = Resolver<string | null>;
	export type InternalResolver = Resolver<internal_20 | null>;
	export type FieldsResolver = Resolver<fields_3 | null>;
}
export namespace internal_20Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
		fieldOwners?: FieldOwnersResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
	export type FieldOwnersResolver = Resolver<fieldOwners_3 | null>;
}
export namespace fieldOwners_3Resolvers {
	export interface Resolvers {
		logo_image?: Logo_imageResolver;
	}

	export type Logo_imageResolver = Resolver<string | null>;
}
export namespace fields_3Resolvers {
	export interface Resolvers {
		logo_image?: Logo_imageResolver;
	}

	export type Logo_imageResolver = Resolver<string | null>;
} /** Node of type PersonalJson */
export namespace PersonalJsonResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		name?: NameResolver;
		email?: EmailResolver;
		jobTitle?: JobTitleResolver;
		social?: SocialResolver;
		internal?: InternalResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type NameResolver = Resolver<string | null>;
	export type EmailResolver = Resolver<string | null>;
	export type JobTitleResolver = Resolver<string | null>;
	export type SocialResolver = Resolver<(social_2 | null)[] | null>;
	export type InternalResolver = Resolver<internal_21 | null>;
}
export namespace social_2Resolvers {
	export interface Resolvers {
		serviceName?: ServiceNameResolver;
		icon?: IconResolver;
		url?: UrlResolver;
	}

	export type ServiceNameResolver = Resolver<string | null>;
	export type IconResolver = Resolver<string | null>;
	export type UrlResolver = Resolver<string | null>;
}
export namespace internal_21Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
} /** Node of type CompetencesJson */
export namespace CompetencesJsonResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		name?: NameResolver;
		description?: DescriptionResolver;
		internal?: InternalResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type NameResolver = Resolver<string | null>;
	export type DescriptionResolver = Resolver<string | null>;
	export type InternalResolver = Resolver<internal_22 | null>;
}
export namespace internal_22Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
} /** Node of type ExperiencesJson */
export namespace ExperiencesJsonResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		work?: WorkResolver;
		internal?: InternalResolver;
		fields?: FieldsResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type WorkResolver = Resolver<(work_2 | null)[] | null>;
	export type InternalResolver = Resolver<internal_23 | null>;
	export type FieldsResolver = Resolver<fields_4 | null>;
}
export namespace work_2Resolvers {
	export interface Resolvers {
		company?: CompanyResolver;
		link?: LinkResolver;
		image?: ImageResolver;
		period?: PeriodResolver;
		role?: RoleResolver;
		tasks?: TasksResolver;
	}

	export type CompanyResolver = Resolver<string | null>;
	export type LinkResolver = Resolver<string | null>;
	export type ImageResolver = Resolver<string | null>;
	export type PeriodResolver = Resolver<string | null>;
	export type RoleResolver = Resolver<string | null>;
	export type TasksResolver = Resolver<(string | null)[] | null>;
}
export namespace internal_23Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
		fieldOwners?: FieldOwnersResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
	export type FieldOwnersResolver = Resolver<fieldOwners_4 | null>;
}
export namespace fieldOwners_4Resolvers {
	export interface Resolvers {
		image_image?: Image_imageResolver;
	}

	export type Image_imageResolver = Resolver<string | null>;
}
export namespace fields_4Resolvers {
	export interface Resolvers {
		image_image?: Image_imageResolver;
	}

	export type Image_imageResolver = Resolver<(string | null)[] | null>;
} /** Node of type InterestsJson */
export namespace InterestsJsonResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		subjects?: SubjectsResolver;
		internal?: InternalResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type SubjectsResolver = Resolver<(subjects_2 | null)[] | null>;
	export type InternalResolver = Resolver<internal_24 | null>;
}
export namespace subjects_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		intensity?: IntensityResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type IntensityResolver = Resolver<number | null>;
}
export namespace internal_24Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
} /** Node of type SkillsJson */
export namespace SkillsJsonResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		languages?: LanguagesResolver;
		technical?: TechnicalResolver;
		soft?: SoftResolver;
		internal?: InternalResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type LanguagesResolver = Resolver<(languages_2 | null)[] | null>;
	export type TechnicalResolver = Resolver<(technical_2 | null)[] | null>;
	export type SoftResolver = Resolver<(soft_2 | null)[] | null>;
	export type InternalResolver = Resolver<internal_25 | null>;
}
export namespace languages_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		intensity?: IntensityResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type IntensityResolver = Resolver<number | null>;
}
export namespace technical_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		intensity?: IntensityResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type IntensityResolver = Resolver<number | null>;
}
export namespace soft_2Resolvers {
	export interface Resolvers {
		name?: NameResolver;
		intensity?: IntensityResolver;
	}

	export type NameResolver = Resolver<string | null>;
	export type IntensityResolver = Resolver<number | null>;
}
export namespace internal_25Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
}
export namespace internal_17Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		mediaType?: MediaTypeResolver;
		description?: DescriptionResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type MediaTypeResolver = Resolver<string | null>;
	export type DescriptionResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
} /** A connection to a list of items. */
export namespace fileGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(fileGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace fileGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<File | null>;
	export type NextResolver = Resolver<File | null>;
	export type PreviousResolver = Resolver<File | null>;
} /** A connection to a list of items. */
export namespace MarkdownRemarkConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(MarkdownRemarkEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: markdownRemarkDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(markdownRemarkGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: markdownRemarkGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace MarkdownRemarkEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<MarkdownRemark | null>;
	export type NextResolver = Resolver<MarkdownRemark | null>;
	export type PreviousResolver = Resolver<MarkdownRemark | null>;
} /** A connection to a list of items. */
export namespace markdownRemarkGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(markdownRemarkGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace markdownRemarkGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<MarkdownRemark | null>;
	export type NextResolver = Resolver<MarkdownRemark | null>;
	export type PreviousResolver = Resolver<MarkdownRemark | null>;
} /** A connection to a list of items. */
export namespace TodoJsonConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(TodoJsonEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: todoJsonDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(todoJsonGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: todoJsonGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace TodoJsonEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<TodoJson | null>;
	export type NextResolver = Resolver<TodoJson | null>;
	export type PreviousResolver = Resolver<TodoJson | null>;
} /** A connection to a list of items. */
export namespace todoJsonGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(todoJsonGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace todoJsonGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<TodoJson | null>;
	export type NextResolver = Resolver<TodoJson | null>;
	export type PreviousResolver = Resolver<TodoJson | null>;
} /** A connection to a list of items. */
export namespace OrganizationJsonConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(OrganizationJsonEdge | null)[] | null
	>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: organizationJsonDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(organizationJsonGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: organizationJsonGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace OrganizationJsonEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<OrganizationJson | null>;
	export type NextResolver = Resolver<OrganizationJson | null>;
	export type PreviousResolver = Resolver<OrganizationJson | null>;
} /** A connection to a list of items. */
export namespace organizationJsonGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(organizationJsonGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace organizationJsonGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<OrganizationJson | null>;
	export type NextResolver = Resolver<OrganizationJson | null>;
	export type PreviousResolver = Resolver<OrganizationJson | null>;
} /** A connection to a list of items. */
export namespace PersonalJsonConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(PersonalJsonEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: personalJsonDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(personalJsonGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: personalJsonGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace PersonalJsonEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<PersonalJson | null>;
	export type NextResolver = Resolver<PersonalJson | null>;
	export type PreviousResolver = Resolver<PersonalJson | null>;
} /** A connection to a list of items. */
export namespace personalJsonGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(personalJsonGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace personalJsonGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<PersonalJson | null>;
	export type NextResolver = Resolver<PersonalJson | null>;
	export type PreviousResolver = Resolver<PersonalJson | null>;
} /** A connection to a list of items. */
export namespace CompetencesJsonConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(CompetencesJsonEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: competencesJsonDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(competencesJsonGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: competencesJsonGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace CompetencesJsonEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<CompetencesJson | null>;
	export type NextResolver = Resolver<CompetencesJson | null>;
	export type PreviousResolver = Resolver<CompetencesJson | null>;
} /** A connection to a list of items. */
export namespace competencesJsonGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(competencesJsonGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace competencesJsonGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<CompetencesJson | null>;
	export type NextResolver = Resolver<CompetencesJson | null>;
	export type PreviousResolver = Resolver<CompetencesJson | null>;
} /** A connection to a list of items. */
export namespace ExperiencesJsonConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(ExperiencesJsonEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: experiencesJsonDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(experiencesJsonGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: experiencesJsonGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace ExperiencesJsonEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<ExperiencesJson | null>;
	export type NextResolver = Resolver<ExperiencesJson | null>;
	export type PreviousResolver = Resolver<ExperiencesJson | null>;
} /** A connection to a list of items. */
export namespace experiencesJsonGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(experiencesJsonGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace experiencesJsonGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<ExperiencesJson | null>;
	export type NextResolver = Resolver<ExperiencesJson | null>;
	export type PreviousResolver = Resolver<ExperiencesJson | null>;
} /** A connection to a list of items. */
export namespace InterestsJsonConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(InterestsJsonEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: interestsJsonDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(interestsJsonGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: interestsJsonGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace InterestsJsonEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<InterestsJson | null>;
	export type NextResolver = Resolver<InterestsJson | null>;
	export type PreviousResolver = Resolver<InterestsJson | null>;
} /** A connection to a list of items. */
export namespace interestsJsonGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(interestsJsonGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace interestsJsonGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<InterestsJson | null>;
	export type NextResolver = Resolver<InterestsJson | null>;
	export type PreviousResolver = Resolver<InterestsJson | null>;
} /** A connection to a list of items. */
export namespace SkillsJsonConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		totalCount?: TotalCountResolver;
		distinct?: DistinctResolver;
		group?: GroupResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<(SkillsJsonEdge | null)[] | null>;
	export type TotalCountResolver = Resolver<number | null>;
	export type DistinctResolver = Resolver<
		(string | null)[] | null,
		DistinctArgs
	>;
	export interface DistinctArgs {
		field?: skillsJsonDistinctEnum | null;
	}

	export type GroupResolver = Resolver<
		(skillsJsonGroupConnectionConnection | null)[] | null,
		GroupArgs
	>;
	export interface GroupArgs {
		skip?: number | null;
		limit?: number | null;
		field?: skillsJsonGroupEnum | null;
	}
} /** An edge in a connection. */
export namespace SkillsJsonEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<SkillsJson | null>;
	export type NextResolver = Resolver<SkillsJson | null>;
	export type PreviousResolver = Resolver<SkillsJson | null>;
} /** A connection to a list of items. */
export namespace skillsJsonGroupConnectionConnectionResolvers {
	export interface Resolvers {
		pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
		edges?: EdgesResolver /** A list of edges. */;
		field?: FieldResolver;
		fieldValue?: FieldValueResolver;
		totalCount?: TotalCountResolver;
	}

	export type PageInfoResolver = Resolver<PageInfo>;
	export type EdgesResolver = Resolver<
		(skillsJsonGroupConnectionEdge | null)[] | null
	>;
	export type FieldResolver = Resolver<string | null>;
	export type FieldValueResolver = Resolver<string | null>;
	export type TotalCountResolver = Resolver<number | null>;
} /** An edge in a connection. */
export namespace skillsJsonGroupConnectionEdgeResolvers {
	export interface Resolvers {
		node?: NodeResolver /** The item at the end of the edge */;
		next?: NextResolver /** The next edge in the connection */;
		previous?: PreviousResolver /** The previous edge in the connection */;
	}

	export type NodeResolver = Resolver<SkillsJson | null>;
	export type NextResolver = Resolver<SkillsJson | null>;
	export type PreviousResolver = Resolver<SkillsJson | null>;
} /** Node of type Site */
export namespace SiteResolvers {
	export interface Resolvers {
		id?: IdResolver /** The id of this node. */;
		parent?: ParentResolver /** The parent of this node. */;
		children?: ChildrenResolver /** The children of this node. */;
		siteMetadata?: SiteMetadataResolver;
		port?: PortResolver;
		host?: HostResolver;
		pathPrefix?: PathPrefixResolver;
		polyfill?: PolyfillResolver;
		buildTime?: BuildTimeResolver;
		internal?: InternalResolver;
	}

	export type IdResolver = Resolver<string>;
	export type ParentResolver = Resolver<Node | null>;
	export type ChildrenResolver = Resolver<(Node | null)[] | null>;
	export type SiteMetadataResolver = Resolver<siteMetadata_2 | null>;
	export type PortResolver = Resolver<Date | null, PortArgs>;
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

	export type HostResolver = Resolver<string | null>;
	export type PathPrefixResolver = Resolver<string | null>;
	export type PolyfillResolver = Resolver<boolean | null>;
	export type BuildTimeResolver = Resolver<Date | null, BuildTimeArgs>;
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

	export type InternalResolver = Resolver<internal_26 | null>;
}
export namespace siteMetadata_2Resolvers {
	export interface Resolvers {
		title?: TitleResolver;
		siteUrl?: SiteUrlResolver;
		sourceUrl?: SourceUrlResolver;
		description?: DescriptionResolver;
	}

	export type TitleResolver = Resolver<string | null>;
	export type SiteUrlResolver = Resolver<string | null>;
	export type SourceUrlResolver = Resolver<string | null>;
	export type DescriptionResolver = Resolver<string | null>;
}
export namespace internal_26Resolvers {
	export interface Resolvers {
		contentDigest?: ContentDigestResolver;
		type?: TypeResolver;
		owner?: OwnerResolver;
	}

	export type ContentDigestResolver = Resolver<string | null>;
	export type TypeResolver = Resolver<string | null>;
	export type OwnerResolver = Resolver<string | null>;
}
