import React, {useEffect, useState} from "react";
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
import {Autocomplete} from "@material-ui/lab";
import {fetchAutocomplete} from "../../redux/logics/autocomplete";

const initialValues = {
    keyword: '',
    advanced: false,
};


const validationSchema = Yup.object({
    keyword: Yup.string("Enter a keyword").required("Keyword is required"),
    advanced: Yup.boolean("Enter is advanced").required("Advanced is required"),
});


const getLabel = (value) => {
    if (typeof value === 'string') {
        return value || "";
    } else {
        if (value && value.description) {
            return value.description || '';
        } else {
            return "";
        }
    }
}

const getValue = (value) => {
    if (typeof value === 'string') {
        return value || "";
    } else {
        if (value && value.value) {
            return value.value;
        } else {
            return "";
        }
    }
}

const View = ({setTitle, fetchSearch, resetSearch, history}) => {
    const {enqueueSnackbar} = useSnackbar();
    // state
    const [autoCorrect, setAutoCorrect] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    // on mount
    useEffect(() => {
        setTitle(TITLE('Search by Keyword'));
        resetSearch();
    }, [setTitle, resetSearch]);
    // formik
    const myOnSubmit = () => {
        setAutoCorrect("");
        fetchSearch({...formik.values}).then(res => {
            formik.setSubmitting(false);
            if (!res || _.isEmpty(res)) {
                enqueueSnackbar(`Your search - ${formik.values.keyword} - did not match any books.`, {variant: 'info'});
            } else if (typeof res == "string") {
                enqueueSnackbar(`Your search - ${formik.values.keyword} - did not match any books. Search instead for: ${res}`, {variant: 'info'});
                setAutoCorrect(`Search instead for: ${res}`);
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

                        <Autocomplete
                            freeSolo
                            disableClearable
                            fullWidth
                            name="keyword"
                            options={suggestions}
                            getOptionLabel={getLabel}
                            // disabled={}
                            onBlur={formik.handleBlur}
                            value={formik.values.keyword}
                            loading={loading}
                            onChange={(_, newValue) => {
                                formik.setFieldValue('keyword', getValue(newValue), true);
                            }}
                            onInputChange={(_, inputValue) => {
                                formik.setFieldTouched('keyword', true, false);
                                if (!inputValue) {
                                    formik.setFieldValue('keyword', "", true);
                                    setSuggestions([]);
                                } else {
                                    setLoading(true);
                                    fetchAutocomplete({q: inputValue})
                                        .then(s => {
                                            setSuggestions(s);
                                        }).catch(err => {
                                        const message = formikApiErrorsCatcher(err);
                                        formik.setFieldError('keyword', message);
                                        enqueueSnackbar(message, {
                                            variant: "error",
                                        });
                                    }).finally(() => {
                                        setLoading(false);
                                    });
                                }
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    // label='Search by keyword ...'
                                    placeholder='Search by keyword ...'
                                    // size='medium'
                                    fullWidth
                                    autoFocus
                                    variant="outlined"
                                    error={formik.touched.keyword && Boolean(formik.errors.keyword)}
                                    helperText={autoCorrect || ""}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Tooltip title='Search'>
                                            <span>
                                                <IconButton
                                                    color="primary"
                                                    onClick={formik.handleSubmit}
                                                    type="submit"
                                                    variant="contained"
                                                    disabled={!formik.isValid || loading || formik.isSubmitting}
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
                                        // type: 'search', // add clear
                                    }}
                                />)
                            }
                        />

                    </Grid>
                    <Grid item>
                        <Box mt={10}>
                            <Button
                                component={Link}
                                to={'/advanced-search'}
                                color='primary'
                                variant="contained"
                                size='large'
                            >
                                Advanced Search
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
}

export default withRouter(View);
