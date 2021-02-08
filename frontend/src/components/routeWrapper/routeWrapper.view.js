import React from 'react';
import {Route} from "react-router-dom";

const routeWrapper = ({
                          component: Component, layout: Layout, ...rest
                      }) => {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        }/>
    );
}
export default routeWrapper;
