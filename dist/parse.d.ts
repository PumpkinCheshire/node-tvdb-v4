import * as Schema from "./schema.js";
import * as Raw from "./schema_raw.js";
/**
 * A set of parsing functions to convert data types in responses
 */
declare const parse: {
    /**
     * Mutate a raw extended artwork schema into a parsed schema
     */
    artwork(artwork: Raw.IArtworkExtendedRecord): Schema.IArtworkExtendedRecord;
    /**
     * Mutate a raw extended award category schema into a parsed schema
     */
    awardCategory(category: Raw.IAwardCategoryExtendedRecord): Schema.IAwardCategoryExtendedRecord;
    /**
     * Mutate a raw award nominee schema into a parsed schema
     */
    awardNominee(nominee: Raw.IAwardNomineeBaseRecord): Schema.IAwardNomineeBaseRecord;
    /**
     * Mutate a raw character schema into a parsed schema
     */
    character(character: Raw.ICharacter): Schema.ICharacter;
    /**
     * Mutate a raw company schema into a parsed schema
     */
    company(company: Raw.ICompany): Schema.ICompany;
    companies(companies: Raw.ICompanies): Schema.ICompanies;
    /**
     * Parse a date and return a date object if valid, otherwise null
     *
     * @param dateString example: 1997-08-13
     */
    date(dateString?: string | undefined): Date | null;
    /**
     * Mutate a raw entity update schema into a parsed schema
     */
    entityUpdate(entity: Raw.IEntityUpdate): Schema.IEntityUpdate;
    /**
     * Mutate a raw episode schema into a parsed schema
     */
    episodeBaseRecord(episode: Raw.IEpisodeBaseRecord): Schema.IEpisodeBaseRecord;
    /**
     * Mutate a raw extended episode schema into a parsed schema
     */
    episodeExtendedRecord(episode: Raw.IEpisodeExtendedRecord): Schema.IEpisodeExtendedRecord;
    /**
     * Mutate a raw list schema into a parsed schema
     */
    listRecord(list: Raw.IListBaseRecord): Schema.IListBaseRecord;
    /**
 * Mutate a raw extended movie schema into a parsed schemo
 */
    movieBaseRecord(movie: Raw.IMovieBaseRecord): Schema.IMovieBaseRecord;
    /**
     * Mutate a raw extended movie schema into a parsed schemo
     */
    movieExtendedRecord(movie: Raw.IMovieExtendedRecord): Schema.IMovieExtendedRecord;
    /**
     * Parse a raw extended people schema into a parsed schema
     */
    peopleRecord(person: Raw.IPeopleExtendedRecord): Schema.IPeopleExtendedRecord;
    /**
     * Parse a raw release schema into a parsed schema
     */
    release(release: Raw.IRelease): Schema.IRelease;
    /**
     * Mutate a raw search result schema into a parsed schema
     */
    searchResult(result: Raw.ISearchResult): Schema.ISearchResult;
    /**
     * Mutate a raw extended season schema into a parsed schema
     */
    seasonExtendedRecord(season: Raw.ISeasonExtendedRecord): Schema.ISeasonExtendedRecord;
    /**
     * Mutate a raw series schema into a parsed schema
     */
    seriesBaseRecord(series: Raw.ISeriesBaseRecord): Schema.ISeriesBaseRecord;
    seriesCompanies(companies: Raw.ICompanies): Schema.ICompanies;
    /**
     * Mutate a raw extended series schema into a parsed schema
     */
    seriesExtendedRecord(series: Raw.ISeriesExtendedRecord): Schema.ISeriesExtendedRecord;
};
export default parse;
