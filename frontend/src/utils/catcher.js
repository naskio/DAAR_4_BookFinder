import _ from 'lodash';
import {IS_DEV} from "../config";
import {stringTrimmed} from "./formatters";

export const formikApiErrorsCatcher = (err, setFieldError = null, enqueueSnackbar = null, logout = null) => {
    let globalMessage, alternative;
    if (IS_DEV) {
        console.log('err', err);
    }
    if (err.response) {
        if (IS_DEV) {
            console.log('err.response', err.response);
        }
        if (err.response.data) {
            if (err.response.data instanceof Object) {
                globalMessage = Object.entries(err.response.data).filter(([k,]) => ['detail', 'non_field_errors'].some(it => it === k))
                    .reduce((acc, [, v]) => {
                        if (v instanceof Array) {
                            return acc + (acc ? ', ' : '') + v.join(', ');
                        } else {
                            return acc + (acc ? ', ' : '') + v;
                        }
                    }, "");
                if (setFieldError) {
                    Object.entries(err.response.data).filter(([k,]) => !['detail', 'non_field_errors'].some(it => it === k)).forEach(
                        ([k, v]) => {
                            let errorMessage = v;
                            if (errorMessage instanceof Array) {
                                errorMessage = errorMessage.join(', ');
                            }
                            setFieldError(k, errorMessage);
                        }
                    )
                }
                if (!_.isEmpty(err.response.data)) {
                    alternative = JSON.stringify(err.response.data);
                }
                if (!alternative) {
                    alternative = "Error 400: Bad Request";
                }
            } else {
                globalMessage = err.response.data;
            }
        } else {
            globalMessage = err.response.statusText;
            if (!globalMessage) {
                globalMessage = `Error Code ${err.response.status}`;
            }
        }
    } else {
        if (err.message || err.type || err.code) {
            globalMessage = err.message || `Error ${err.type || err.code}`;
        } else {
            globalMessage = 'Unknown Error';
        }
    }
    if (enqueueSnackbar) {
        enqueueSnackbar(stringTrimmed(globalMessage || alternative), {
            variant: 'error',
        });
    }
    if (logout) {
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
            // if (err.response && err.response.status && Math.round(err.response.status / 100) === 4) {
            logout();
        }
    }
    if (IS_DEV) {
        console.log('globalMessage', globalMessage);
    }
    return stringTrimmed(globalMessage || alternative);
}
