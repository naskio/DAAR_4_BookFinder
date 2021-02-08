import axios from "axios";
import {API} from "../../config";

export const fetchBooks = (id = undefined) => {
    return axios.get(API('books', id)).then(res => {
        return res.data;
    });
};
