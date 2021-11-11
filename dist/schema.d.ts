import * as Raw from "./schema_raw.js";
/**
 * Modify raw schema definition to contain parsed attributes
 */
declare type Modify<T, R> = Omit<T, keyof R> & R;
/**
 * An alias model
 */
export interface IAlias {
    language: string;
    name: string;
}
/**
 * Base artwork record
 */
export interface IArtworkBaseRecord {
    id: number;
    image: string | null;
    language: string;
    score: number;
    thumbnail: string;
    type: number;
}
/**
 * Extended artwork record
 */
export declare type IArtworkExtendedRecord = Modify<Raw.IArtworkExtendedRecord, {
    updatedAt: Date;
}>;
/**
 * Artwork status record
 */
export interface IArtworkStatus {
    id: number;
    name: string;
}
/**
 * Artwork type record
 */
export interface IArtworkType {
    height: number;
    id: number;
    imageFormat: string;
    name: string;
    recordType: string;
    slug: string;
    thumbHeight: number;
    thumbWidth: number;
    width: number;
}
/**
 * Base award record
 */
export interface IAwardBaseRecord {
    id: number;
    name: string;
}
/**
 * Extended award record
 */
export interface IAwardExtendedRecord extends IAwardBaseRecord {
    categories: IAwardCategoryBaseRecord[];
    score: number;
}
/**
 * Base award category record
 */
export interface IAwardCategoryBaseRecord {
    allowCoNominees: boolean;
    award: IAwardBaseRecord;
    forMovies: boolean;
    forSeries: boolean;
    id: number;
    name: string;
}
/**
 * Extended award category record
 */
export declare type IAwardCategoryExtendedRecord = Modify<Raw.IAwardCategoryExtendedRecord, {
    nominees: IAwardNomineeBaseRecord[];
}>;
/**
 * Base award nominee record
 */
export declare type IAwardNomineeBaseRecord = Modify<Raw.IAwardNomineeBaseRecord, {
    character: ICharacter | null;
    episode: IEpisodeBaseRecord | null;
    movie: IMovieBaseRecord | null;
    series: ISeriesBaseRecord | null;
    year: number | null;
}>;
/**
 * Biography record
 */
export interface IBiography {
    biography: string;
    language: string;
}
/**
 * Character record
 */
export declare type ICharacter = Modify<Raw.ICharacter, {
    image: string | null;
    episodeId: number | null;
    movieId: number | null;
    seriesId: number | null;
    url: string | null;
}>;
export declare type ICompanies = Modify<Raw.ICompanies, {
    studio: ICompany[];
    network: ICompany[];
    production: ICompany[];
    distributor: ICompany[];
    specialEffects: ICompany[];
}>;
/**
 * A company record
 */
export declare type ICompany = Modify<Raw.ICompany, {
    activeDate: Date | null;
    inactiveDate: Date | null;
}>;
/**
 * A company type record
 */
export interface ICompanyType {
    companyTypeId: number;
    companyTypeName: string;
}
/**
 * Content rating record
 */
export interface IContentRating {
    id: number;
    name: string;
    country: string;
    contentType: string;
    description: string;
    order: number;
    fullname: string;
}
/**
 * Country record
 */
export interface ICountry {
    id: string;
    name: string;
    shortCode: string;
}
/**
 * Entity record
 */
export interface IEntity {
    movieId: number;
    order: number;
    seriesId: number;
}
/**
 * Entity type record
 */
export interface IEntityType {
    id: number;
    name: string;
    seriesId: number;
}
/**
 * Entity update record
 */
export declare type IEntityUpdate = Modify<Raw.IEntityUpdate, {
    timeStamp: Date;
}>;
/**
 * Base episode record
 */
export declare type IEpisodeBaseRecord = Modify<Raw.IEpisodeBaseRecord, {
    aired: Date | null;
}>;
/**
 * Extended episode record
 */
export declare type IEpisodeExtendedRecord = Modify<Modify<Raw.IEpisodeExtendedRecord, IEpisodeBaseRecord>, {
    characters: ICharacter[];
    networks: ICompany | null;
    studios: ICompany | null;
}>;
/**
 * Gender record
 */
export interface IGender {
    id: number;
    name: string;
}
/**
 * Base genre record
 */
export interface IGenreBaseRecord {
    id: number;
    name: string;
    slug: string;
}
/**
 * Language record
 */
export interface ILanguage {
    id: string;
    name: string;
    nativeName: string;
    shortCode: string;
}
/**
 * Base list record
 */
export declare type IListBaseRecord = Modify<Raw.IListBaseRecord, {
    url: string | null;
}>;
/**
 * Extended list record
 */
export interface IListExtendedRecord extends IListBaseRecord {
    entities: IEntity[];
}
/**
 * Extended movie record
 */
export declare type IMovieBaseRecord = Modify<Raw.IMovieBaseRecord, {
    lastUpdated: Date;
}>;
/**
 * Extended movie record
 */
export declare type IMovieExtendedRecord = Modify<Raw.IMovieExtendedRecord, {
    budget: number;
    boxOffice: number;
    characters: ICharacter[];
    releases: IRelease[];
    lastUpdated: Date;
    companies: ICompanies;
}>;
/**
 * Base network record
 */
export interface INetworkBaseRecord {
    abbreviation: string;
    country: string;
    id: number;
    name: string;
    slug: string;
}
/**
 * Base people record
 */
export interface IPeopleBaseRecord {
    aliases: IAlias[];
    id: number;
    image: string | null;
    name: string;
    score: number;
    nameTranslations: string[];
    overviewTranslations: string[];
}
/**
 * Extended people record
 */
export declare type IPeopleExtendedRecord = Modify<Raw.IPeopleExtendedRecord, {
    birth: Date | null;
    death: Date | null;
    characters: ICharacter[];
}>;
/**
 * People type record
 */
export interface IPeopleType {
    id: number;
    name: string;
}
/**
 * Race record
 */
export interface IRace {
}
/**
 * Release record
 */
export declare type IRelease = Modify<Raw.IRelease, {
    date: Date;
}>;
/**
 * Remote ID record
 */
export interface IRemoteID {
    id: string;
    type: number;
    sourceName: string;
}
/**
 * Search result
 */
export declare type ISearchResult = Modify<Raw.ISearchResult, {
    country: string | null;
    image_url: string | null;
    name_translated: string | null;
    network: string | null;
    overview: string | null;
    primary_language: string | null;
    primary_type: string | null;
    status: string | null;
    tvdb_id: number;
    year: number | null;
}>;
/**
 * A base season record
 */
export interface ISeasonBaseRecord {
    abbreviation?: string;
    country?: string;
    id: number;
    image: string | null;
    imageType: number | null;
    name: string;
    nameTranslations: string[];
    number: number;
    overviewTranslations: string[];
    seriesId: number;
    slug?: string;
    type: ISeasonType;
    companies: Raw.ICompanies;
    tagOptions?: ITagOption[];
}
/**
 * Extended season record
 */
export declare type ISeasonExtendedRecord = Modify<Raw.ISeasonExtendedRecord, {
    episodes: IEpisodeBaseRecord[];
    companies: ICompanies;
}>;
/**
 * Season type record
 */
export interface ISeasonType {
    id: number;
    name: string;
    type: number;
}
/**
 * A series airs day record
 */
export interface ISeriesAirsDays {
    friday: boolean;
    monday: boolean;
    saturday: boolean;
    sunday: boolean;
    thursday: boolean;
    tuesday: boolean;
    wednesday: boolean;
}
export declare type ISeriesBaseRecord = Modify<Raw.ISeriesBaseRecord, {
    firstAired: Date | null;
    lastAired: Date | null;
    nextAired: Date | null;
}>;
/**
 * The extended record for a series
 */
export declare type ISeriesExtendedRecord = Modify<Modify<Raw.ISeriesExtendedRecord, ISeriesBaseRecord>, {
    characters: ICharacter[];
    companies: ICompanies;
}>;
/**
 * Series episodes
 */
export declare type ISeriesEpisodes = Modify<Raw.ISeriesEpisodes, {
    series: ISeriesBaseRecord;
    episodes: IEpisodeBaseRecord[];
}>;
/**
 * Source type record
 */
export interface ISourceType {
    id: number;
    name: string;
    postfix: string;
    prefix: string;
    slug: string;
    sort: number;
}
/**
 * Status record
 */
export interface IStatus {
    id: number;
    keepUpdated: boolean;
    name: string;
    recordType: string;
}
/**
 * Studio record
 */
export interface IStudioBaseRecord {
    id: number;
    name: string;
    parentStudio: number;
}
/**
 * Tag record
 */
export interface ITag {
    allowsMultiple: boolean;
    helpText: string;
    id: number;
    name: string;
    options: ITagOption[];
}
/**
 * Tag option record
 */
export interface ITagOption {
    helpText: string;
    id: number;
    name: string;
    tag: number;
    tagName: string;
}
/**
 * An entity with selected tag option
 */
export interface ITagOptionEntity {
    name: string;
    tagId: number;
    tagName: string;
}
/**
 * Trailer record
 */
export interface ITrailer {
    id: number;
    language: string;
    name: string;
    url: string;
}
/**
 * Translation record
 */
export interface ITranslation {
    aliases: string[];
    isAlias: boolean;
    isPrimary: boolean;
    language: string;
    name: string;
    overview: string;
}
export interface ITranslationMeta {
    nameTranslations: ITranslation[];
    overviewTranslations: ITranslation[];
}
export interface IInspiration {
    id: number;
    type: string;
    typeNmae: string;
    url: string;
}
export interface IProductionCountry {
    id: number;
    country: string;
    name: string;
}
export {};
