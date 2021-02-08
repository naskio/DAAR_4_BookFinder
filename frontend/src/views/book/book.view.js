import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import RefreshWrapper from '../../components/refreshWrapper';
import _ from 'lodash';
import {formikApiErrorsCatcher} from "../../utils/catcher";
import {withRouter} from 'react-router-dom';
import {
    Box,
    Grid,
    Button,
    Typography,
} from "@material-ui/core";
import {
    fetchBooks,
} from "../../redux/logics/books";
import LOGO from "../../assets/images/logo_text.svg";
import {useSnackbar} from "notistack";
import {TITLE} from "../../config";
import BookPreview from '../../components/bookPreview';
import {getLanguage} from "../../components/bookPreview/bookPreview.view";


const View = ({setTitle, history}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {id: bookId} = useParams();
    // state
    const [refreshing, setRefreshing] = useState(false);
    const [book, setBook] = useState({});
    // on mount/unmount
    useEffect(() => {
        let is_mounted = true;
        setTitle(TITLE(`Book`));
        setRefreshing(true);
        fetchBooks(bookId)
            .then((data) => {
                if (is_mounted) {
                    setBook(data);
                    setTitle(TITLE(`Book - ${data.title}`));
                }
            })
            .catch(err => {
                formikApiErrorsCatcher(err, null, enqueueSnackbar);
                history.push('/');
            }).finally(() => {
            if (is_mounted) {
                setRefreshing(false);
            }
        })

        return () => {
            is_mounted = false;
        }
    }, [bookId, history, setTitle, enqueueSnackbar]);
    return (
        <RefreshWrapper refreshing={refreshing}>
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

                    <Grid item container direction='row' spacing={6}>
                        <Grid item xs={4} style={{width: '100%'}}>
                            <img src={book.cover_url}
                                 alt={book.title}
                                 style={{
                                     width: '100%',
                                     objectFit: 'contain',
                                 }}/>
                        </Grid>
                        <Grid item xs={8} container direction='column' spacing={3}>

                            <Grid item>
                                <Typography gutterBottom display='inline' variant={'h2'}>{book.title}</Typography>
                            </Grid>


                            <Grid item>
                                <Typography
                                    gutterBottom
                                    display='inline'
                                    variant={'subtitle1'}>
                                    <strong>Language: </strong>
                                    {getLanguage(book.language)}
                                </Typography>
                            </Grid>

                            {!_.isEmpty(book.authors) && (
                                <Grid item>
                                    <Typography
                                        gutterBottom
                                        display='inline'
                                        variant={'subtitle1'}>
                                        <strong>Authors: </strong>
                                        {book.authors.map(a => a.full_name).join(', ')}
                                    </Typography>
                                </Grid>
                            )}

                            {!_.isEmpty(book.bookshelves) && (
                                <Grid item>
                                    <Typography
                                        gutterBottom
                                        display='inline'
                                        variant={'subtitle1'}>
                                        <strong>Bookshelves: </strong>
                                        {book.bookshelves.map(a => a.label).join(', ')}
                                    </Typography>
                                </Grid>
                            )}

                            <Grid item>
                                <Button
                                    variant="contained"
                                    size='large'
                                    color='primary'
                                    target="_blank"
                                    href={book.download_url}
                                >
                                    Download
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>

                    {
                        !_.isEmpty(book.similar_to) && (
                            <Grid item>
                                <Typography variant={'h4'}>Similar books</Typography>
                            </Grid>
                        )
                    }

                    <Grid item container direction='row' wrap={'wrap'} spacing={4}>
                        {book.similar_to && book.similar_to.map(book => (
                            <Grid item key={book.gutenberg_id}>
                                <BookPreview book={book}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </RefreshWrapper>
    );
}

export default withRouter(View);
