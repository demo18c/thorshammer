import React from "react";
//from MUI
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { mainListItems } from "./listItems";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        height: "100vh",
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

const SideBar = (props) => {
    const { classes } = props;
    const theme = createMuiTheme({
        palette: {
            type: "dark",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div>
                <div className={classes.root}>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {/* <div className={classes.toolbar} /> */}
                        <List>{mainListItems}</List>
                    </Drawer>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default withStyles(styles)(SideBar);
