import {createMuiTheme} from "@material-ui/core";
import {blueGrey} from "@material-ui/core/colors";
import theme from "../../theme";

export default createMuiTheme({
    palette: {
        primary: {
            main: theme.COLOR_PRIMARY,
        },
        secondary: {
            // main: theme.COLOR_SECONDARY,
            main: blueGrey[500],
        },
        primaryText: {
            main: theme.COLOR_DEFAULT,
        }
    },
});
