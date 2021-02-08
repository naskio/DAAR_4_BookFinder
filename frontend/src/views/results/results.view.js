import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {
    Paper,
    Box,
    Grid,
    IconButton,
    Tooltip,
    Typography,
} from "@material-ui/core";
import {ChevronLeft as BackIcon} from "@material-ui/icons";
import LOGO from "../../assets/images/logo_text.svg";
import {TITLE} from "../../config";
import BookPreview from '../../components/bookPreview';
import {priceFormatter} from "../../utils/formatters";


const View = ({setTitle, history, search}) => {
    useEffect(() => {
        setTitle(TITLE(`Search results for ${search.advanced ? "regex" : "keyword"} "${search.keyword}"`));
    }, [setTitle, search]);

    return (
        <Box mt={4}>
            <Grid
                container
                justify='center'
                direction='column'
                alignItems='center'
                spacing={6}
            >
                <Grid item>
                    <Link to='/'>
                        <Box display='inline'>
                            <img style={{
                                height: 180,
                                objectFit: 'contain',
                            }} src={LOGO} alt="Book Finder"/>
                        </Box>
                    </Link>
                </Grid>

                <Grid item style={{width: '100%'}}>
                    <Paper>
                        <Grid container
                              direction='row'
                              spacing={4}
                              justify='space-evenly'
                              alignItems='center'
                              wrap='nowrap'>
                            <Grid item>
                                <Tooltip title="Go Back">
                                    <IconButton
                                        // size='medium'
                                        onClick={() => {
                                            history.goBack();
                                        }}
                                        color='primary'
                                    >
                                        <BackIcon
                                            fontSize='large'
                                        />
                                    </IconButton>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={11}>
                                <Typography variant='h5'>
                                    {`Search results for ${search.advanced ? "regex" : "keyword"} "${search.keyword}"`}
                                </Typography>
                                <Typography variant='caption'>
                                    {`in ${priceFormatter(search.duration / 1000) || 'n/a'} seconds`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item container direction='row' justify='center' wrap={'wrap'} spacing={4}>
                    {search.res && search.res.map(book => (
                        <Grid item key={book.gutenberg_id}>
                            <BookPreview book={book}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default withRouter(View);
