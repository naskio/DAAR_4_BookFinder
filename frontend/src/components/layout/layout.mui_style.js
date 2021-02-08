import TH from "../../theme";

const drawerWidth = 240;
const styles = theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(4),
        // backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    },
    // appBar
    appBarSpacer: {
        ...theme.mixins.toolbar,
        marginBottom: theme.spacing(2),
    },
    appBar: {
        // zIndex: 1,
        // width: `calc(100% - ${drawerWidth}px)`,
        zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
        // ...theme.mixins.toolbar,
        paddingRight: 48,
    },
    flexGrow: {
        flexGrow: 1,
    },
    // drawer
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // list
    list: {
        width: '100%',
        maxWidth: drawerWidth,
        backgroundColor: theme.palette.background.paper,
    },
    nestedItem: {
        paddingLeft: theme.spacing(4),
    },
    // responsive layout
    pageContainer: {
        position: 'relative',
        minHeight: '100vh',
    },
    contentWrap: {
        paddingBottom: theme.spacing(8), /* Footer height */
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: theme.spacing(8), /* Footer height */
    },
    // others
    link: {
        margin: theme.spacing(1, 1.5),
    },
    avatar: {
        color: TH.COLOR_WHITE,
        backgroundColor: TH.COLOR_PRIMARY,
    },
    avatarLarge: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    hide: {
        display: 'none',
    },
});

export default styles;
