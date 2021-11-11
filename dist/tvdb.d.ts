import ApiRequestManager from "./request.js";
import * as Schema from "./schema.js";
export default class TVDB {
    /**
     * The API key for The TVDB
     */
    private __apiKey;
    /**
     * The last-used pin for logging in
     */
    private __pin?;
    /**
     * The active authentiaction token
     */
    private __token?;
    /**
     * Enable auto-relogin if a request comes up unauthorized
     */
    protected autoRelogin: boolean;
    /**
     * Store the API request manager
     */
    protected requestManager: ApiRequestManager;
    /**
     * Create a new API instance of The TVDB
     *
     * @param apiKey The API key for The TVDB
     */
    constructor(apiKey: string, autoRelogin?: boolean);
    /**
     * Login to the TVDB and obtain a new token
     */
    login(pin?: string): Promise<void>;
    /**
     * Retrieve all available artwork statuses
     */
    artworkStatuses(): Promise<Schema.IArtworkStatus[]>;
    /**
     * Retrieve all available artwork types
     */
    artworkTypes(): Promise<Schema.IArtworkType[]>;
    /**
     * Retrieve a specific artwork record
     *
     * @param id
     */
    artwork(id: number): Promise<Schema.IArtworkBaseRecord>;
    /**
     * Retrieve a specific extended artwork record
     *
     * @param id
     */
    artworkExtended(id: number): Promise<Schema.IArtworkExtendedRecord>;
    /**
     * Retrieve translations for a specific artwork
     *
     * @param id
     * @param language
     */
    artworkTranslations(id: number, language: string): Promise<Schema.ITranslation>;
    /**
     * Retrieve a specific award category record
     *
     * @param id
     */
    awardCategory(id: number): Promise<Schema.IAwardCategoryBaseRecord>;
    /**
     * Retrieve a specific extended award category record
     *
     * @param id
     */
    awardCategoryExtended(id: number): Promise<Schema.IAwardCategoryExtendedRecord>;
    /**
     * Retrieve all award records
     *
     * @param page
     */
    allAwards(): Promise<Schema.IAwardBaseRecord[]>;
    /**
     * Retrieve a specific award record
     *
     * @param id
     */
    award(id: number): Promise<Schema.IAwardBaseRecord>;
    /**
     * Retrieve a specific extended award record
     *
     * @param id
     */
    awardExtended(id: number): Promise<Schema.IAwardExtendedRecord>;
    /**
     * Retrieve a character record
     *
     * @param id
     */
    character(id: number): Promise<Schema.ICharacter>;
    /**
     * Retrieve all company records
     *
     * @param page
     */
    allCompanies(page?: number): Promise<Schema.ICompany[]>;
    /**
     * Retrieve all company types
     */
    companyTypes(): Promise<Schema.ICompanyType[]>;
    /**
     * Retrieve a specific company record
     *
     * @param id
     */
    company(id: number): Promise<Schema.ICompany>;
    /**
     * Retrieve all available content ratings
     */
    contentRatings(): Promise<Schema.IContentRating[]>;
    /**
     * Retrieve all available countries
     */
    countries(): Promise<Schema.ICountry[]>;
    /**
     * Retrieve all available entity types
     */
    entityTypes(): Promise<Schema.IEntityType[]>;
    /**
     * Retrieve all available genders
     */
    genders(): Promise<Schema.IGender[]>;
    /**
     * Retrieve all available languages
     */
    languages(): Promise<Schema.ILanguage[]>;
    /**
     * Retrieve all available source types
     */
    sourceTypes(): Promise<Schema.ISourceType[]>;
    /**
     * Retrieve a specific episode record
     *
     * @param id
     */
    episode(id: number): Promise<Schema.IEpisodeBaseRecord>;
    /**
     * Retrieve a specific extended episode record
     *
     * @param id
     * @param meta
     */
    episodeExtended(id: number, meta?: string): Promise<Schema.IEpisodeExtendedRecord>;
    /**
     * Retrieve translations for a specific episode
     *
     * @param id
     * @param language
     */
    episodeTranslations(id: number, language: string): Promise<Schema.ITranslation>;
    /**
     * Retrieve all available genres
     */
    allGenres(): Promise<Schema.IGenreBaseRecord[]>;
    /**
     * Retrieve a specific genre record
     *
     * @param id
     */
    genre(id: number): Promise<Schema.IGenreBaseRecord>;
    /**
     * Retrieve all available lists
     *
     * @param page
     */
    allLists(page?: number): Promise<Schema.IListBaseRecord[]>;
    /**
     * Retrieve a specific list record
     *
     * @param id
     */
    list(id: number): Promise<Schema.IListBaseRecord>;
    /**
     * Retrieve a specific extended list record
     *
     * @param id
     */
    listExtended(id: number): Promise<Schema.IListExtendedRecord>;
    /**
     * Retrieve all available movie records
     *
     * @param page
     */
    allMovies(page?: number): Promise<Schema.IMovieBaseRecord[]>;
    /**
     * Retrieve a specific movie record
     *
     * @param id
     */
    movie(id: number): Promise<Schema.IMovieBaseRecord>;
    /**
     * Retrieve a specific extended movie record
     *
     * @param id
     * @param meta
     */
    movieExtended(id: number, meta?: string): Promise<Schema.IMovieExtendedRecord>;
    /**
     * Retrieve all available movie statuses
     */
    movieStatuses(): Promise<Schema.IStatus[]>;
    /**
     * Retrieve tronslations for a movie
     *
     * @param id
     * @param language
     */
    movieTranslations(id: number, language: string): Promise<Schema.ITranslation>;
    /**
     * Retrieve the different types of people
     */
    personTypes(): Promise<Schema.IPeopleType[]>;
    /**
     * Retrieve a specific person record
     *
     * @param id
     */
    person(id: number): Promise<Schema.IPeopleBaseRecord>;
    /**
     * Retrieve a specific extended person record
     *
     * @param id
     */
    personExtended(id: number): Promise<Schema.IPeopleExtendedRecord>;
    /**
     * Retrieve translations for a person
     *
     * @param id
     * @param language
     */
    personTranslations(id: number, language: string): Promise<Schema.ITranslation>;
    /**
     * Search for content
     *
     * @param query  The query to search
     * @param type   The constrained entity type
     * @param year   The year associated with a movie|series
     * @param offset The result offset
     * @param limit The result limit
     */
    search(query: string, type?: string, year?: number, offset?: number, limit?: number): Promise<Schema.ISearchResult[]>;
    /**
     *Retrieve a specific season record
     *
     * @param id
     */
    season(id: number): Promise<Schema.ISeasonBaseRecord>;
    /**
     * Retrieve a specific extended season record
     *
     * @param id
     */
    seasonExtended(id: number): Promise<Schema.ISeasonExtendedRecord>;
    /**
     * Retrieve all available season types
     */
    seasonTypes(): Promise<Schema.ISeasonType[]>;
    /**
     * Retrieve translations for a season
     *
     * @param id
     * @param language
     */
    seasonTranslations(id: number, language: string): Promise<Schema.ITranslation>;
    /**
     * Retrieve all available series
     */
    allSeries(page?: number): Promise<Schema.ISeriesBaseRecord[]>;
    /**
     * Retrieve a specific series record
     */
    series(id: number): Promise<Schema.ISeriesBaseRecord>;
    /**
     * Fetch a specific extended series record
     */
    seriesExtended(id: number, meta?: string): Promise<Schema.ISeriesExtendedRecord>;
    /**
     * Retrieve all episode records within a series
     *
     * @param id
     * @param seasonType The season type
     */
    seriesEpisodes(id: number, seasonType?: string, page?: number): Promise<Schema.ISeriesEpisodes>;
    /**
     * Retrieve translations for a series
     *
     * @param id       The ID of the series
     * @param language The language to translate to
     */
    seriesTranslations(id: number, language: string): Promise<Schema.ITranslation>;
    /**
     * Retrieve all available statuses for a series
     */
    seriesStatuses(): Promise<Schema.IStatus[]>;
    /**
     * Retrieve all updated entities
     *
     * @param since Timestamp in seconds
     */
    updates(since: number | Date, type: string, action: string): Promise<Schema.IEntityUpdate[]>;
}
