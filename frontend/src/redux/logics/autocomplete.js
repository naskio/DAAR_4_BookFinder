import axios from "axios";
import {API} from "../../config";

export const fetchAutocomplete = (data) => {
    return axios.get(API('autocomplete'), {
        params: data, // {q}
    }).then(res => {
        return res.data;
    });
};
