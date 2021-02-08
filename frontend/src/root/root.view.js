import React from "react";
import Router from '../routing';
import {IS_DEV, TIMEOUT} from '../config';
import {
    setTimeOut,
    setupLoggingInterceptor,
    setupDurationInterceptor,
} from '../utils/axios';
import {ThemeProvider} from '@material-ui/styles';
import muiTheme from "../theme/material_ui";
import {HelmetProvider} from 'react-helmet-async';
import {SnackbarProvider} from 'notistack';
import {IconButton} from "@material-ui/core";
import {Close as CloseIcon} from "@material-ui/icons";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        /**
         * subscribers
         */
        this.notistackRef = React.createRef();


        /**
         * logging requests in DEV mode
         */
        if (IS_DEV) {
            setupLoggingInterceptor();
        }
        setupDurationInterceptor();
    }

    componentDidMount() {
        // timeout
        setTimeOut(TIMEOUT);
    }

    _closeSnackbar = key => () => {
        this.notistackRef.current.closeSnackbar(key);
    }

    render() {
        return (
            <>
                <ThemeProvider theme={muiTheme}>
                    <HelmetProvider>
                        <SnackbarProvider
                            ref={this.notistackRef}
                            maxSnack={3}
                            preventDuplicate={true}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            autoHideDuration={3000}
                            // hideIconVariant={false}
                            // dense={false}
                            action={(key) => (
                                <IconButton key="close" aria-label="close" color="inherit"
                                            onClick={this._closeSnackbar(key)}>
                                    <CloseIcon/>
                                </IconButton>
                            )}
                        >
                            <Router/>
                        </SnackbarProvider>
                    </HelmetProvider>
                </ThemeProvider>
            </>
        );
    }
}
