import https from "https";
/**
 * The API URL
 */
const API_URL = "https://api4.thetvdb.com/v4";
/**
 * A status error is used to indicate responses with non-200 status codes
 */
export class StatusError extends Error {
    /**
     * Create a new error indicating non-200 status
     */
    constructor(response, statusCode) {
        super();
        Object.setPrototypeOf(this, StatusError.prototype);
        this.response = response;
        this.statusCode = statusCode;
    }
}
/**
 * A request manager with atomic/persistent request options
 */
export default class ApiRequestManager {
    /**
     * Create a new API request manager
     *
     * @param options Additional request options
     */
    constructor(options = {}) {
        this.options = options;
    }
    /**
     * Perform a generic HTTPS request
     *
     * @param method    The HTTP method
     * @param url       The URL to request
     * @param authToken An optional bearer token
     * @param params    Optional parameters
     * @param body      Optional body
     */
    request(method, url, authToken, params, body) {
        return new Promise((resolve, reject) => {
            // Create request options
            let options = Object.assign({ method, headers: {} }, this.options);
            if (authToken) {
                options.headers["Authorization"] = `Bearer ${authToken}`;
            }
            if (body) {
                options.headers["Content-Type"] = "application/json";
                options.headers["Content-Length"] = body.length;
            }
            // Add search parameters if necessary
            let requestUrl = new URL(url);
            if (params) {
                Object.keys(params).forEach((key) => {
                    if (params[key] !== undefined) {
                        requestUrl.searchParams.set(key, params[key]);
                    }
                });
            }
            // Create the request
            let request = https.request(requestUrl, options, (res) => {
                let rawData = "";
                res.setEncoding("utf8");
                res.on("data", chunk => { rawData += chunk; });
                res.on("error", reject);
                res.on("end", () => {
                    let response;
                    try {
                        response = JSON.parse(rawData);
                        if (res.statusCode == 200) {
                            resolve(response.data);
                        }
                        else {
                            reject(new StatusError(response, res.statusCode));
                        }
                    }
                    catch {
                        reject(new StatusError("Parse Error on rawData", res.statusCode));
                    }
                });
            })
                .on("error", reject)
                .on("timeout", () => reject("timeout"));
            if (body) {
                request.write(body);
            }
            request.end();
        });
    }
    /**
     * Perform a generic GET request
     */
    async get(path, authToken, params) {
        return this.request("GET", `${API_URL}${path}`, authToken, params);
    }
    /**
     * Perform a generic POST request
     */
    async post(path, authToken, params, body) {
        if (body !== undefined) {
            body = JSON.stringify(body);
        }
        return this.request("POST", `${API_URL}${path}`, authToken, params, body);
    }
}
