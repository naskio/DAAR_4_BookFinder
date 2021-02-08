import React from "react";
import PropTypes from 'prop-types';
import {Box, CircularProgress} from "@material-ui/core";

class View extends React.PureComponent {
    render() {
        const {refreshing, children} = this.props;

        return (
            <>
                {
                    refreshing ?
                        (
                            <Box
                                display='flex'
                                top={0}
                                right={0}
                                left={0}
                                position='absolute'
                                alignItems='center'
                                justifyContent='center'
                                height='100vh'
                                width='100vw'
                                style={{
                                    margin: 0,
                                }}
                            >
                                <CircularProgress color='primary'/>
                            </Box>
                        ) :
                        (<>{children}</>)
                }
            </>
        );
    }
}

View.propTypes = {
    refreshing: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}
View.defaultProps = {
    refreshing: false,
};

export default View;
