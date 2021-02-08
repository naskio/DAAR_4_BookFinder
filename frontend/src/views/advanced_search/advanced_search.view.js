import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {useFormik} from "formik";
import _ from 'lodash';
import {formikApiErrorsCatcher} from "../../utils/catcher";
import {withRouter} from 'react-router-dom';
import {CircularProgress, Box, Grid, IconButton, InputAdornment, TextField, Tooltip, Button} from "@material-ui/core";
import {SearchOutlined as SearchIcon, ArrowForwardIosOutlined as GoIcon} from "@material-ui/icons";
import LOGO from "../../assets/images/logo_text.svg";
import * as Yup from "yup";
import {useSnackbar} from "notistack";
import {TITLE} from "../../config";

const initialValues = {
    keyword: '',
    advanced: true,
};


const validationSchema = Yup.object({
    keyword: Yup.string("Enter a regular expression").required("Regex is required"),
    advanced: Yup.boolean("Enter is advanced").required("Advanced is required"),
});

const View = ({setTitle, fetchSearch, resetSearch, history}) => {
    const {enqueueSnackbar} = useSnackbar();
    useEffect(() => {
        setTitle(TITLE('Advanced Search'));
        resetSearch();
    }, [setTitle, resetSearch]);
    // formik
    const myOnSubmit = () => {
        fetchSearch({...formik.values}).then(res => {
            formik.setSubmitting(false);
            if (!res || _.isEmpty(res) || (typeof res == "string")) {
                enqueueSnackbar(`Your regex search - ${formik.values.keyword} - did not match any books.`, {variant: 'info'});
            } else {
                history.push('/results');
            }
        }).catch((err) => {
            const errorMessage = formikApiErrorsCatcher(err, null, enqueueSnackbar);
            formik.setFieldError('keyword', errorMessage);
            formik.setSubmitting(false);
        });
    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: myOnSubmit,
    });

    return (
        <form noValidate>
            <Box mt={4}>
                <Grid
                    container
                    justify='center'
                    direction='column'
                    alignItems='center'
                >
                    <Grid item style={{width: '100%'}} xs={9} sm={8} md={7} lg={6} xl={5}>
                        <img src={LOGO} alt='Book Finder' style={{
                            objectFit: 'contain',
                        }}/>
                    </Grid>

                    <Grid item style={{width: '100%'}}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            autoFocus
                            name="keyword"
                            // type="search"
                            placeholder="Search by RegEx ..."
                            // helperText={formik.touched.keyword ? formik.errors.keyword : ""}
                            helperText={""}
                            error={formik.touched.keyword && Boolean(formik.errors.keyword)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.keyword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Tooltip title='Search'>
                                            <span>
                                                <IconButton
                                                    color="primary"
                                                    onClick={formik.handleSubmit}
                                                    type="submit"
                                                    variant="contained"
                                                    disabled={!formik.isValid || formik.isSubmitting}
                                                >
                                                    {
                                                        formik.isSubmitting ? (
                                                            <CircularProgress size={24}/>
                                                        ) : (

                                                            <GoIcon/>
                                                        )
                                                    }
                                                </IconButton>
                                            </span>
                                        </Tooltip>
                                    </InputAdornment>
                                ),
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon color={"secondary"} fontSize="large"/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <Box mt={10}>
                            <Button
                                component={Link}
                                to={'/search'}
                                color='primary'
                                variant="contained"
                                size='large'
                            >
                                Search by Keyword
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
}

export default withRouter(View);
