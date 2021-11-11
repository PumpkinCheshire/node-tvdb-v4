/// <reference types="node" />
import { RequestOptions } from "https";
/**
 * A status error is used to indicate responses with non-200 status codes
 */
export declare class StatusError<T = any> extends Error {
    /**
     * The resulting body of a response
     */
    readonly response: T;
    /**
     * The resulting status code of a response
     */
    readonly statusCode?: number;
    /**
     * Create a new error indicating non-200 status
     */
    constructor(response: T, statusCode: number);
}
/**
 * The API response structure
 */
export interface IApiResponse<T> {
    status: string;
    data: T;
}
/**
 * A request manager with atomic/persistent request options
 */
export default class ApiRequestManager {
    /**
     * Store additional request options
     */
    protected options: RequestOptions;
    /**
     * Create a new API request manager
     *
     * @param options Additional request options
     */
    constructor(options?: RequestOptions);
    /**
     * Perform a generic HTTPS request
     *
     * @param method    The HTTP method
     * @param url       The URL to request
     * @param authToken An optional bearer token
     * @param params    Optional parameters
     * @param body      Optional body
     */
    protected request<T>(method: string, url: string, authToken?: string, params?: any, body?: string): Promise<T>;
    /**
     * Perform a generic GET request
     */
    get<T = any>(path: string, authToken?: string, params?: any): Promise<T>;
    /**
     * Perform a generic POST request
     */
    post<T = any>(path: string, authToken?: string, params?: any, body?: any): Promise<T>;
}
