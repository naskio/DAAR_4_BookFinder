import {connect} from "react-redux";
import View from "./results.view";
import {
    setTitle,
} from "../../redux/logics/global";

const mapStateToProps = state => ({
    global: state.global,
    search: state.search,
});

const mapDispatchToProps = dispatch => ({
    setTitle: (title) => dispatch(setTitle(title)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);
