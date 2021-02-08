import axios from 'axios';

export const setAuthorizationToken = token => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
};

export const setTimeOut = timeout => {
    axios.defaults.timeout = timeout;
};

export const setupLoggingInterceptor = () => {
    // request
    axios.interceptors.request.use(config => {
        console.log('Request:', config);
        return config;
    });
    // response
    axios.interceptors.response.use(response => {
        console.log('Response:', response);
        return response;
    });
};


export const setupDurationInterceptor = () => {
    // request
    axios.interceptors.request.use(config => {
        if (config) {
            config.metadata = {startTime: new Date()};
        }
        return config;
    }, error => {
        return Promise.reject(error);
    });
    // response
    axios.interceptors.response.use(response => {
        if (response && response.config && response.config.metadata) {
            response.config.metadata.endTime = new Date();
            if (response.config.metadata.startTime) {
                response.duration = response.config.metadata.endTime - response.config.metadata.startTime;
            }
        }
        return response;
    }, error => {
        try {
            if (axios.isCancel(error)) {
                return new Promise(() => {
                });
            }
            if (error && error.config && error.config.metadata) {
                error.config.metadata.endTime = new Date();
                if (error.config.metadata.startTime) {
                    error.duration = error.config.metadata.endTime - error.config.metadata.startTime;
                }
            }
        } catch (error) {
            console.log(error)
        }
        return Promise.reject(error);
    });
};

