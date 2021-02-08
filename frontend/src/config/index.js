export const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

// export const URL = 'http://localhost:4000'; // mock endpoint
// export const URL = 'http://localhost:8000';
export const URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';


export const API = (model = undefined, id = undefined) => {
    if (model && id) {
        return `${URL}/api/${model}/${id}/`;
    }
    if (model) {
        return `${URL}/api/${model}/`;
    }
    return `${URL}/api/`;
};

export const TIMEOUT = 120 * 1000; // in ms (2 minutes)

export const TITLE = (section) => `Book Finder - ${section}`;

export const BASE_NAME = IS_DEV ? '' : '/DAAR_4_BookFinder';
