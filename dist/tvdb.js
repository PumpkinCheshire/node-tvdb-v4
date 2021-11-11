import ApiRequestManager from "./request.js";
import parse from "./parse.js";
export default class TVDB {
    /**
     * Create a new API instance of The TVDB
     *
     * @param apiKey The API key for The TVDB
     */
    constructor(apiKey, autoRelogin = true) {
        this.__apiKey = apiKey;
        this.autoRelogin = autoRelogin;
        this.requestManager = new ApiRequestManager();
        this.allAwards = this.allAwards.bind(this);
    }
    /**
     * Login to the TVDB and obtain a new token
     */
    async login(pin) {
        this.__pin = pin;
        let body = {
            apikey: this.__apiKey
        };
        if (pin) {
            body["pin"] = this.__pin;
        }
        let response = await this.requestManager.post("/login", undefined, undefined, body);
        this.__token = response.token;
    }
    // Artwork Information -------------------------------------------------------------------------
    /**
     * Retrieve all available artwork statuses
     */
    async artworkStatuses() {
        return await this.requestManager.get(`/artwork/statuses`, this.__token);
    }
    /**
     * Retrieve all available artwork types
     */
    async artworkTypes() {
        return await this.requestManager.get(`/artwork/types`, this.__token);
    }
    /**
     * Retrieve a specific artwork record
     *
     * @param id
     */
    async artwork(id) {
        return await this.requestManager.get(`/artwork/${id}`, this.__token);
    }
    /**
     * Retrieve a specific extended artwork record
     *
     * @param id
     */
    async artworkExtended(id) {
        let res = await this.requestManager.get(`/artwork/${id}/extended`, this.__token);
        return parse.artwork(res);
    }
    /**
     * Retrieve translations for a specific artwork
     *
     * @param id
     * @param language
     */
    async artworkTranslations(id, language) {
        return await this.requestManager.get(`/artwork/${id}/translations/${language}`, this.__token);
    }
    // Award Information ---------------------------------------------------------------------------
    /**
     * Retrieve a specific award category record
     *
     * @param id
     */
    async awardCategory(id) {
        return await this.requestManager.get(`/awards/categories/${id}`, this.__token);
    }
    /**
     * Retrieve a specific extended award category record
     *
     * @param id
     */
    async awardCategoryExtended(id) {
        let res = await this.requestManager.get(`/awards/categories/${id}/extended`, this.__token);
        return parse.awardCategory(res);
    }
    /**
     * Retrieve all award records
     *
     * @param page
     */
    async allAwards() {
        return await this.requestManager.get(`/awards`, this.__token);
    }
    /**
     * Retrieve a specific award record
     *
     * @param id
     */
    async award(id) {
        return await this.requestManager.get(`/awards/${id}`, this.__token);
    }
    /**
     * Retrieve a specific extended award record
     *
     * @param id
     */
    async awardExtended(id) {
        return await this.requestManager.get(`/awards/${id}/extended`, this.__token);
    }
    // Character Information -----------------------------------------------------------------------
    /**
     * Retrieve a character record
     *
     * @param id
     */
    async character(id) {
        let res = await this.requestManager.get(`/characters/${id}`, this.__token);
        return parse.character(res);
    }
    // Company Information -------------------------------------------------------------------------
    /**
     * Retrieve all company records
     *
     * @param page
     */
    async allCompanies(page = 0) {
        let res = await this.requestManager.get(`/companies`, this.__token, {
            page
        });
        return res.map(parse.company);
    }
    /**
     * Retrieve all company types
     */
    async companyTypes() {
        return await this.requestManager.get(`/companies/types`, this.__token);
    }
    /**
     * Retrieve a specific company record
     *
     * @param id
     */
    async company(id) {
        let res = await this.requestManager.get(`/companies/${id}`, this.__token);
        return parse.company(res);
    }
    // General Information -------------------------------------------------------------------------
    /**
     * Retrieve all available content ratings
     */
    async contentRatings() {
        return await this.requestManager.get(`/content/ratings`, this.__token);
    }
    /**
     * Retrieve all available countries
     */
    async countries() {
        return await this.requestManager.get(`/countries`, this.__token);
    }
    /**
     * Retrieve all available entity types
     */
    async entityTypes() {
        return await this.requestManager.get(`/entities/types`, this.__token);
    }
    /**
     * Retrieve all available genders
     */
    async genders() {
        return await this.requestManager.get(`/genders`, this.__token);
    }
    /**
     * Retrieve all available languages
     */
    async languages() {
        return await this.requestManager.get(`/languages`, this.__token);
    }
    /**
     * Retrieve all available source types
     */
    async sourceTypes() {
        return await this.requestManager.get(`/sources/types`, this.__token);
    }
    // Episode Information -------------------------------------------------------------------------
    /**
     * Retrieve a specific episode record
     *
     * @param id
     */
    async episode(id) {
        let res = await this.requestManager.get(`/episodes/${id}`, this.__token);
        return parse.episodeBaseRecord(res);
    }
    /**
     * Retrieve a specific extended episode record
     *
     * @param id
     * @param meta
     */
    async episodeExtended(id, meta = "") {
        let res = await this.requestManager.get(`/episodes/${id}/extended${meta ? ("?meta=" + meta) : ""}`, this.__token);
        return parse.episodeExtendedRecord(res);
    }
    /**
     * Retrieve translations for a specific episode
     *
     * @param id
     * @param language
     */
    async episodeTranslations(id, language) {
        return await this.requestManager.get(`/episodes/${id}/translations/${language}`, this.__token);
    }
    // Genre Information ---------------------------------------------------------------------------
    /**
     * Retrieve all available genres
     */
    async allGenres() {
        return await this.requestManager.get(`/genres`, this.__token);
    }
    /**
     * Retrieve a specific genre record
     *
     * @param id
     */
    async genre(id) {
        return await this.requestManager.get(`/genres/${id}`, this.__token);
    }
    // List Information ----------------------------------------------------------------------------
    /**
     * Retrieve all available lists
     *
     * @param page
     */
    async allLists(page = 0) {
        let res = await this.requestManager.get(`/lists`, this.__token, {
            page
        });
        return res.map(parse.listRecord);
    }
    /**
     * Retrieve a specific list record
     *
     * @param id
     */
    async list(id) {
        let res = await this.requestManager.get(`/lists/${id}`, this.__token);
        return parse.listRecord(res);
    }
    /**
     * Retrieve a specific extended list record
     *
     * @param id
     */
    async listExtended(id) {
        return await this.requestManager.get(`/lists/${id}/extended`, this.__token);
    }
    // Movie Informaiton ---------------------------------------------------------------------------
    /**
     * Retrieve all available movie records
     *
     * @param page
     */
    async allMovies(page = 0) {
        return await this.requestManager.get(`/movies`, this.__token, {
            page
        });
    }
    /**
     * Retrieve a specific movie record
     *
     * @param id
     */
    async movie(id) {
        let res = await this.requestManager.get(`/movies/${id}`, this.__token);
        return parse.movieBaseRecord(res);
    }
    /**
     * Retrieve a specific extended movie record
     *
     * @param id
     * @param meta
     */
    async movieExtended(id, meta = "") {
        let res = await this.requestManager.get(`/movies/${id}/extended${meta ? ("?meta=" + meta) : ""}`, this.__token);
        return parse.movieExtendedRecord(res);
    }
    /**
     * Retrieve all available movie statuses
     */
    async movieStatuses() {
        return await this.requestManager.get(`/movies/statuses`, this.__token);
    }
    /**
     * Retrieve tronslations for a movie
     *
     * @param id
     * @param language
     */
    async movieTranslations(id, language) {
        return await this.requestManager.get(`/movies/${id}/translations/${language}`, this.__token);
    }
    // People Information --------------------------------------------------------------------------
    /**
     * Retrieve the different types of people
     */
    async personTypes() {
        return await this.requestManager.get(`/people/types`, this.__token);
    }
    /**
     * Retrieve a specific person record
     *
     * @param id
     */
    async person(id) {
        return await this.requestManager.get(`/people/${id}`, this.__token);
    }
    /**
     * Retrieve a specific extended person record
     *
     * @param id
     */
    async personExtended(id) {
        let res = await this.requestManager.get(`/people/${id}/extended`, this.__token);
        return parse.peopleRecord(res);
    }
    /**
     * Retrieve translations for a person
     *
     * @param id
     * @param language
     */
    async personTranslations(id, language) {
        return await this.requestManager.get(`/people/${id}/translations/${language}`, this.__token);
    }
    // Search Information --------------------------------------------------------------------------
    /**
     * Search for content
     *
     * @param query  The query to search
     * @param type   The constrained entity type
     * @param year   The year associated with a movie|series
     * @param offset The result offset
     * @param limit The result limit
     */
    async search(query, type, year, offset, limit) {
        let res = await this.requestManager.get(`/search`, this.__token, {
            query, type, year, offset, limit
        });
        return res.map(parse.searchResult);
    }
    // Season Information --------------------------------------------------------------------------
    /**
     *Retrieve a specific season record
     *
     * @param id
     */
    async season(id) {
        return await this.requestManager.get(`/seasons/${id}`, this.__token);
    }
    /**
     * Retrieve a specific extended season record
     *
     * @param id
     */
    async seasonExtended(id) {
        let res = await this.requestManager.get(`/seasons/${id}/extended`, this.__token);
        return parse.seasonExtendedRecord(res);
    }
    /**
     * Retrieve all available season types
     */
    async seasonTypes() {
        return await this.requestManager.get(`/seasons/types`, this.__token);
    }
    /**
     * Retrieve translations for a season
     *
     * @param id
     * @param language
     */
    async seasonTranslations(id, language) {
        return await this.requestManager.get(`/seasons/${id}/translations/${language}`, this.__token);
    }
    // Series Information --------------------------------------------------------------------------
    /**
     * Retrieve all available series
     */
    async allSeries(page = 0) {
        let res = await this.requestManager.get(`/series`, this.__token, {
            page
        });
        return res.map(parse.seriesBaseRecord);
    }
    /**
     * Retrieve a specific series record
     */
    async series(id) {
        let res = await this.requestManager.get(`/series/${id}`, this.__token);
        return parse.seriesBaseRecord(res);
    }
    /**
     * Fetch a specific extended series record
     */
    async seriesExtended(id, meta = "") {
        let res = await this.requestManager.get(`/series/${id}/extended${meta ? ("?meta=" + meta) : ""}`, this.__token);
        return parse.seriesExtendedRecord(res);
    }
    /**
     * Retrieve all episode records within a series
     *
     * @param id
     * @param seasonType The season type
     */
    async seriesEpisodes(id, seasonType = "default", page = 0) {
        let res = await this.requestManager.get(`/series/${id}/episodes/${seasonType}`, this.__token, {
            page,
            "season-type": seasonType
        });
        return {
            series: parse.seriesBaseRecord(res.series),
            episodes: res.episodes.map(parse.episodeBaseRecord)
        };
    }
    /**
     * Retrieve translations for a series
     *
     * @param id       The ID of the series
     * @param language The language to translate to
     */
    async seriesTranslations(id, language) {
        return await this.requestManager.get(`/series/${id}/translations/${language}`, this.__token);
    }
    /**
     * Retrieve all available statuses for a series
     */
    async seriesStatuses() {
        return await this.requestManager.get(`/series/statuses`, this.__token);
    }
    /**
     * Retrieve all updated entities
     *
     * @param since Timestamp in seconds
     */
    async updates(since, type, action) {
        if (since instanceof Date) {
            since = Math.floor(since.getTime() / 1000);
        }
        let res = await this.requestManager.get(`/updates`, this.__token, {
            since, type, action
        });
        return res.map(parse.entityUpdate);
    }
}
