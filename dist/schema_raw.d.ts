import * as Schema from "./schema.js";
export interface ICompanies {
    studio: ICompany[] | null;
    network: ICompany[] | null;
    production: ICompany[] | null;
    distributor: ICompany[] | null;
    specialEffects?: ICompany[] | null;
    special_effects?: ICompany[] | null;
}
/**
 * Extended artwork record
 */
export interface IArtworkExtendedRecord extends Schema.IArtworkBaseRecord {
    episodeId: number | null;
    height: number;
    movieId: number | null;
    networkId: number | null;
    peopleId: number | null;
    seasonId: number | null;
    seriesId: number | null;
    seriesPeopleId: number;
    thumbnailHeight: number;
    thumbnailWidth: number;
    updatedAt: number;
    width: number;
    tagOptions: Schema.ITagOption;
    status: {
        id: number;
        name: string | null;
    };
}
/**
 * Extended award category record
 */
export interface IAwardCategoryExtendedRecord extends Schema.IAwardCategoryBaseRecord {
    nominees: IAwardNomineeBaseRecord[];
}
/**
 * Base award nominee record
 */
export interface IAwardNomineeBaseRecord {
    character: ICharacter | null;
    details: string;
    episode: IEpisodeBaseRecord | null;
    id: number;
    isWinner: boolean;
    movie: Schema.IMovieBaseRecord | null;
    series: ISeriesBaseRecord | null;
    year: string;
}
/**
 * Character record
 */
export interface ICharacter {
    aliases: Schema.IAlias[];
    episodeId: number;
    id: number;
    image: string;
    isFeatured: boolean;
    movieId: number;
    name: string;
    nameTranslations: string[];
    overviewTranslations: string[];
    peopleId: number;
    peopleType: string;
    personName: string;
    seriesId: number;
    sort: number;
    type: number;
    url: string;
}
/**
 * A company record
 */
export interface ICompany {
    activeDate: string;
    aliases: Schema.IAlias[];
    country: string;
    id: number;
    inactiveDate: string;
    name: string;
    nameTranslations: string[];
    overviewTranslations: string[];
    primaryCompanyType: number;
    slug: string;
    companyType?: Schema.ICompanyType;
}
/**
 * Entity update record
 */
export interface IEntityUpdate {
    entityType: string;
    method: string;
    recordId: number;
    timeStamp: number;
}
/**
 * Base episode record
 */
export interface IEpisodeBaseRecord {
    aired: string;
    id: number;
    image: string;
    imageType: number;
    isMovie: number;
    name: string;
    nameTranslations: string[];
    number: number;
    overviewTranslations: string[];
    runtime: number;
    seasonNumber: number;
    seasons: Schema.ISeasonBaseRecord[];
    seriesId: number;
    finaleType: string | null;
    lastUpdated: string;
}
/**
 * Extended episode record
 */
export interface IEpisodeExtendedRecord extends IEpisodeBaseRecord {
    airsAfterSeason: number | null;
    airsBeforeEpisode: number | null;
    airsBeforeSeason: number | null;
    awards: Schema.IAwardBaseRecord[];
    characters: ICharacter[] | null;
    contentRatings: Schema.IContentRating[];
    network?: Schema.INetworkBaseRecord;
    productionCode: string;
    remoteIds: Schema.IRemoteID[];
    tagOptions: Schema.ITagOption[];
    trailers: Schema.ITrailer[];
    nominations: Schema.IAwardNomineeBaseRecord | null;
    networks: ICompany | null;
    studios: ICompany | null;
    translations: Schema.ITranslationMeta;
}
/**
 * Base list record
 */
export interface IListBaseRecord {
    aliases: Schema.IAlias[];
    id: number;
    isOfficial: boolean;
    name: string;
    nameTranslations: string[];
    overview: string;
    overviewTranslations: string[];
    url: string;
}
/**
 * Base movie record
 */
export interface IMovieBaseRecord {
    aliases: Schema.IAlias[];
    id: number;
    image: string | null;
    name: string;
    nameTranslations: string[];
    overviewTranslations: string[];
    score: number;
    runtime: number;
    slug: string;
    status: Schema.IStatus;
    lastUpdated: string;
}
/**
 * Extended movie record
 */
export interface IMovieExtendedRecord extends IMovieBaseRecord {
    artworks: Schema.IArtworkBaseRecord[];
    audioLanguages: string[] | null;
    awards: Schema.IAwardBaseRecord[] | null;
    boxOffice: string;
    budget: string;
    characters: ICharacter[] | null;
    lists: Schema.IListBaseRecord[];
    genres: Schema.IGenreBaseRecord[];
    originalCountry: string;
    originalLanguage: string | null;
    releases: IRelease[] | null;
    remoteIds: Schema.IRemoteID[];
    contentRatings: Schema.IContentRating[];
    studios: Schema.IStudioBaseRecord[];
    subtitleLanguages: string[] | null;
    tagOptions: Schema.ITagOption | null;
    trailers: Schema.ITrailer[] | null;
    inspirations: Schema.IInspiration[] | null;
    productionCountries: Schema.IProductionCountry[] | null;
    spokenLanguages: string[];
    firstRelease: Schema.IRelease;
    translations?: Schema.ITranslationMeta | null;
    companies: ICompanies;
}
/**
 * Extended people record
 */
export interface IPeopleExtendedRecord extends Schema.IPeopleBaseRecord {
    awards: Schema.IAwardBaseRecord[];
    biographies: Schema.IBiography[];
    birth: string;
    birthPlace: string;
    characters: ICharacter[];
    death: string;
    gender: number;
    races: Schema.IRace[];
    remoteIds: Schema.IRemoteID[];
    tagOptions: Schema.ITagOption[];
}
/**
 * A release record
 */
export interface IRelease {
    country: string;
    date: string;
    detail: string;
}
/**
 * Search result
 */
export interface ISearchResult {
    aliases?: string[];
    companies?: string[];
    company_type?: string;
    country: string;
    director?: string;
    extended_title?: string;
    genres?: string[];
    id: string;
    image_url: string;
    name: string;
    name_translated: string;
    network: string;
    official_list?: string;
    overview: string;
    overview_translated?: string[];
    posters?: string[];
    primary_language: string;
    primary_type: string;
    status: string;
    translations_with_lang?: string;
    tvdb_id: string;
    type: string;
    year?: string;
}
/**
 * Extended season record
 */
export interface ISeasonExtendedRecord {
    artwork: Schema.IArtworkBaseRecord[];
    episodes: IEpisodeBaseRecord[];
    trailers: Schema.ITrailer[];
    abbreviation?: string;
    country?: string;
    id: number;
    image: string | null;
    imageType: number | null;
    name: string;
    nameTranslations: string[];
    network: Schema.INetworkBaseRecord;
    number: number;
    overviewTranslations: string[];
    seriesId: number;
    slug?: string;
    type: Schema.ISeasonType;
    companies: ICompanies;
    tagOptions: Schema.ITagOption[];
}
/**
 * The base record for a series
 */
export interface ISeriesBaseRecord {
    abbreviation?: string;
    aliases: Schema.IAlias[];
    country?: string;
    defaultSeasonType: number;
    firstAired: string;
    id: number;
    image: string;
    isOrderRandomized: boolean;
    lastAired: string;
    name: string;
    nameTranslations: string[];
    nextAired: string;
    originalCountry: string;
    originalLanguage: string;
    overviewTranslations: string[];
    score: number;
    slug: string;
    status: Schema.IStatus;
    lastUpdated: string;
    averageRuntime: number;
}
/**
 * The extended record for a series
 */
export interface ISeriesExtendedRecord extends ISeriesBaseRecord {
    airsDays: Schema.ISeriesAirsDays;
    airsTime: string;
    airsTimeUTC: number | null;
    artworks: Schema.IArtworkBaseRecord[];
    companies: ICompanies;
    characters: ICharacter[];
    lists: {};
    genres: Schema.IGenreBaseRecord[];
    networks: Schema.INetworkBaseRecord[];
    remoteIds: Schema.IRemoteID[];
    seasons: Schema.ISeasonBaseRecord[];
    trailers: Schema.ITrailer[];
    translations: Schema.ITranslationMeta | null;
}
/**
 * Series episodes
 */
export interface ISeriesEpisodes {
    series: ISeriesBaseRecord;
    episodes: IEpisodeBaseRecord[];
}
