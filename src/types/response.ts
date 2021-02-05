import { Server, Site } from './ploi'

/**
 * Generic Laravel Response from the API.
 * Docs: https://laravel.com/docs/8.x/eloquent-resources#data-wrapping-and-pagination
 */
export interface Response {
    data: any,
    links?: Links,
    meta?: Meta
}

interface Links {
    first: String,
    last: String,
    prev: String,
    next: String
}

interface Meta {
    current_page: Number,
    from: Number,
    last_page: Number,
    path: String,
    per_page: Number,
    to: Number,
    total: Number
}