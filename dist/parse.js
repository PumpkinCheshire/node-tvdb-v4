/**
 * A set of parsing functions to convert data types in responses
 */
const parse = {
    /**
     * Mutate a raw extended artwork schema into a parsed schema
     */
    artwork(artwork) {
        return Object.assign(artwork, {
            updatedAt: new Date(artwork.updatedAt * 1000)
        });
    },
    /**
     * Mutate a raw extended award category schema into a parsed schema
     */
    awardCategory(category) {
        return Object.assign(category, {
            nominees: category.nominees.map(parse.awardNominee)
        });
    },
    /**
     * Mutate a raw award nominee schema into a parsed schema
     */
    awardNominee(nominee) {
        return Object.assign(nominee, {
            character: nominee.character ? parse.character(nominee.character) : null,
            episode: nominee.episode ? parse.episodeBaseRecord(nominee.episode) : null,
            movie: nominee.movie ? nominee.movie : null,
            series: nominee.series ? parse.seriesBaseRecord(nominee.series) : null,
            year: nominee.year ? parseInt(nominee.year) : null
        });
    },
    /**
     * Mutate a raw character schema into a parsed schema
     */
    character(character) {
        return Object.assign(character, {
            episodeId: character.episodeId ? character.episodeId : null,
            movieId: character.movieId ? character.movieId : null,
            seriesId: character.seriesId ? character.seriesId : null,
            image: character.image || null,
            url: character.url || null
        });
    },
    /**
     * Mutate a raw company schema into a parsed schema
     */
    company(company) {
        return Object.assign(company, {
            activeDate: parse.date(company.activeDate),
            inactiveDate: parse.date(company.inactiveDate),
        });
    },
    companies(companies) {
        return Object.assign(companies, {
            studio: companies.studio ? companies.studio.map(parse.company) : [],
            network: companies.network ? companies.network.map(parse.company) : [],
            production: companies.production ? companies.production.map(parse.company) : [],
            distributor: companies.distributor ? companies.distributor.map(parse.company) : [],
            specialEffects: companies.specialEffects ? companies.specialEffects.map(parse.company) : (companies.special_effects ? companies.special_effects.map(parse.company) : [])
        });
    },
    /**
     * Parse a date and return a date object if valid, otherwise null
     *
     * @param dateString example: 1997-08-13
     */
    date(dateString) {
        if (dateString && dateString.length > 0) {
            return new Date(dateString);
        }
        return null;
    },
    /**
     * Mutate a raw entity update schema into a parsed schema
     */
    entityUpdate(entity) {
        return Object.assign(entity, {
            timeStamp: new Date(entity.timeStamp * 1000)
        });
    },
    /**
     * Mutate a raw episode schema into a parsed schema
     */
    episodeBaseRecord(episode) {
        return Object.assign(episode, {
            aired: parse.date(episode.aired),
            lastUpdated: parse.date(episode.lastUpdated)
        });
    },
    /**
     * Mutate a raw extended episode schema into a parsed schema
     */
    episodeExtendedRecord(episode) {
        return Object.assign(parse.episodeBaseRecord(episode), {
            characters: episode.characters ? episode.characters.map(parse.character) : [],
            networks: episode.networks ? parse.company(episode.networks) : null,
            studios: episode.studios ? parse.company(episode.studios) : null,
        });
    },
    /**
     * Mutate a raw list schema into a parsed schema
     */
    listRecord(list) {
        return Object.assign(list, {
            url: list.url || null
        });
    },
    /**
 * Mutate a raw extended movie schema into a parsed schemo
 */
    movieBaseRecord(movie) {
        return Object.assign(movie, {
            lastUpdated: parse.date(movie.lastUpdated)
        });
    },
    /**
     * Mutate a raw extended movie schema into a parsed schemo
     */
    movieExtendedRecord(movie) {
        return Object.assign(movie, {
            budget: parseFloat(movie.budget),
            boxOffice: parseFloat(movie.boxOffice),
            characters: movie.characters ? movie.characters.map(parse.character) : [],
            releases: movie.releases ? movie.releases.map(parse.release) : [],
            lastUpdated: parse.date(movie.lastUpdated),
            companies: parse.companies(movie.companies)
        });
    },
    /**
     * Parse a raw extended people schema into a parsed schema
     */
    peopleRecord(person) {
        return Object.assign(person, {
            birth: parse.date(person.birth),
            death: parse.date(person.death),
            characters: person.characters.map(parse.character)
        });
    },
    /**
     * Parse a raw release schema into a parsed schema
     */
    release(release) {
        return Object.assign(release, {
            date: parse.date(release.date)
        });
    },
    /**
     * Mutate a raw search result schema into a parsed schema
     */
    searchResult(result) {
        return Object.assign(result, {
            country: result.country || null,
            image_url: result.image_url || null,
            name_translated: result.name_translated || null,
            network: result.network || null,
            overview: result.overview || null,
            primary_language: result.primary_language || null,
            primary_type: result.primary_type || null,
            status: result.status || null,
            tvdb_id: parseInt(result.tvdb_id),
            year: result.year ? parseInt(result.year) : null
        });
    },
    /**
     * Mutate a raw extended season schema into a parsed schema
     */
    seasonExtendedRecord(season) {
        return Object.assign(season, {
            episodes: season.episodes.map(parse.episodeBaseRecord),
            companies: parse.companies(season.companies)
        });
    },
    /**
     * Mutate a raw series schema into a parsed schema
     */
    seriesBaseRecord(series) {
        return Object.assign(series, {
            firstAired: parse.date(series.firstAired),
            lastAired: parse.date(series.lastAired),
            nextAired: parse.date(series.nextAired),
            lastUpdated: parse.date(series.lastUpdated)
        });
    },
    seriesCompanies(companies) {
        return {
            studio: companies.studio ? companies.studio.map(parse.company) : [],
            network: companies.network ? companies.network.map(parse.company) : [],
            production: companies.production ? companies.production.map(parse.company) : [],
            distributor: companies.distributor ? companies.distributor.map(parse.company) : [],
            specialEffects: companies.specialEffects ? companies.specialEffects.map(parse.company) : (companies.special_effects ? companies.special_effects.map(parse.company) : [])
        };
    },
    /**
     * Mutate a raw extended series schema into a parsed schema
     */
    seriesExtendedRecord(series) {
        return Object.assign(parse.seriesBaseRecord(series), {
            characters: series.characters.map(parse.character),
            companies: parse.seriesCompanies(series.companies)
        });
    },
};
export default parse;
