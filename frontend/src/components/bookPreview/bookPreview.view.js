import React from "react";
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {
    Card,
    CardActionArea,
    // CardActions,
    // Button,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";
import useStyles from './bookPreview.view.mui_style';

export const getLanguage = (lang) => {
    const d = {
        'en': "English",
        'fr': "French",
    }
    if (lang in d) {
        return d[lang];
    } else {
        return lang;
    }
}

const View = ({book}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={`/book/${book.gutenberg_id}/`}>
                <CardMedia
                    component="img"
                    alt={book.title}
                    title={book.title}
                    image={book.cover_url}
                    className={classes.media}
                />
                <CardContent>
                    <Typography variant="h5">
                        {book.title}
                    </Typography>
                    <Typography variant="caption" color="secondary" gutterBottom>
                        {getLanguage(book.language)}
                    </Typography>
                    {!_.isEmpty(book.authors) && <Typography variant="subtitle1" color="textSecondary">
                        By {book.authors.map(a => a.full_name).join(', ')}
                    </Typography>}
                </CardContent>
            </CardActionArea>
            {/*<CardActions>*/}
            {/*    <Button size="small" color="primary" component={Link} to={`/book/${book.gutenberg_id}/`}>*/}
            {/*        More*/}
            {/*    </Button>*/}
            {/*</CardActions>*/}
        </Card>);
}

export default View;
