import {connect} from "react-redux";
import View from "./search.view";
import {
    fetchSearch,
    resetSearch,
} from "../../redux/logics/search";
import {
    setTitle,
    setGlobal,
} from "../../redux/logics/global";

const mapStateToProps = state => ({
    global: state.global,
    search: state.search,
});

const mapDispatchToProps = dispatch => ({
    setGlobal: (data) => dispatch(setGlobal(data)),
    setTitle: (title) => dispatch(setTitle(title)),
    fetchSearch: (data) => dispatch(fetchSearch(data)),
    resetSearch: () => dispatch(resetSearch()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);
