import React from "react";
import {
    Typography,
    CssBaseline,
    Link as UILink,
    Box,
    Grid,
    Container,
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import styles from './layout.mui_style';
import {Link} from 'react-router-dom';
import {withSnackbar} from "notistack";

class View extends React.PureComponent {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        const {classes, children} = this.props;
        return (
            <>
                <CssBaseline/>
                <Box className={classes.pageContainer}>
                    {/*Main Content*/}
                    <Box className={classes.contentWrap}>
                        <main className={classes.content}>
                            <Container>
                                {/*    <Grid*/}
                                {/*        container*/}
                                {/*        justify='center'*/}
                                {/*        alignItems='center'*/}
                                {/*        direction='column'*/}
                                {/*    >*/}
                                {/*        <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>*/}
                                {children}
                                {/*</Grid>*/}
                                {/*</Grid>*/}
                            </Container>
                        </main>
                    </Box>

                    {/*footer*/}
                    <Box className={classes.footer} component='footer'>
                        <Grid container justify='center' alignItems='center' direction='column'>
                            <nav>
                                <UILink variant="button" color={"textPrimary"}
                                        to={`/about`}
                                        component={Link}
                                        key={'about'}
                                        className={classes.link}>
                                    {'About'}
                                </UILink>
                            </nav>
                            <Box my={1}>
                                <Typography
                                    variant='caption'
                                    color='textPrimary'
                                    align='center'
                                >
                                    Book Finder © {this.getYear()}
                                </Typography>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
            </>
        );
    }
}

export default withStyles(styles)(withSnackbar(View));
