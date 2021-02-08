import {connect} from "react-redux";
import View from "./routing.view";
import _ from 'lodash';

const mapStateToProps = state => ({
    title: state.global.title,
    empty: !state.search.res || _.isEmpty(state.search.res),
});

export default connect(
    mapStateToProps,
)(View);
