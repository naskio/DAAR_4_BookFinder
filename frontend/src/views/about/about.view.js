import React from "react";
import {Grid, Box, Typography, Link as UILink} from "@material-ui/core";
import LOGO from "../../assets/images/logo_text.png";
import {Link} from "react-router-dom";

export default class extends React.PureComponent {
    render() {
        return <Box mt={8}>
            <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
            >
                <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>
                    <Box p={8}>
                        <Box p={2} mb={4}>
                            <Grid container justify='center'>
                                <Link to='/'>
                                    <img style={{
                                        height: 256,
                                        objectFit: 'contain',
                                    }} src={LOGO} alt="Book Finder"/>
                                </Link>
                            </Grid>
                        </Box>
                        <Typography variant='subtitle2' align='center' paragraph>Book Finder 2021</Typography>
                        <Typography variant='body1' align='left'>
                            is a project created at Sorbonne Université (DAAR course).
                        </Typography>
                        <Box my={2}>
                            <Typography variant='h6' align='left'>Authors</Typography>
                            <Box ml={2}>
                                <UILink
                                    variant="subtitle1"
                                    color="textPrimary"
                                    target="_blank"
                                    href='https://www.linkedin.com/in/nask/'
                                    component='a'
                                >
                                    Mehdi Nassim KHODJA
                                </UILink>
                                <br/>
                                <UILink
                                    variant="subtitle1"
                                    color="textPrimary"
                                    target="_blank"
                                    href='#'
                                    component='a'
                                >
                                    Qiwei XIAN
                                </UILink>
                                <br/>
                                <UILink
                                    variant="subtitle1"
                                    color="textPrimary"
                                    target="_blank"
                                    href='#'
                                    component='a'
                                >
                                    Adel EL AMRAOUI
                                </UILink>
                            </Box>
                            <br/>
                            <Typography variant='h6' align='left'>Supervisors</Typography>
                            <Box ml={2}>
                                <UILink
                                    variant="subtitle1"
                                    color="textPrimary"
                                    target="_blank"
                                    href='#'
                                    component='a'
                                >
                                    Dr. Binh-Minh BUI-XUAN
                                </UILink>
                                <br/>
                                <UILink
                                    variant="subtitle1"
                                    color="textPrimary"
                                    target="_blank"
                                    href='#'
                                    component='a'
                                >
                                    Arthur ESCRIOU
                                </UILink>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    }
}
