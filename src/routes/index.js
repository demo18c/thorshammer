import React from "react";

import { Switch, Route } from "wouter";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import SideBar from "./SideBar";

import Home from "../pages/Home";
import Cards from "../pages/Cards";
import Forms from "../pages/Forms";
import Lists from "../pages/Lists";
import Tables from "../pages/Tables";
import AdvancedTables from "../pages/AdvancedTables";
import Tabs from "../pages/Tabs";
// import Themes from "../pages/MajorComp";
import Navigation from "../pages/Navigation";
import GridList from "../pages/GridList.js";
import AdvancedGridList from "../pages/AdvancedGridList.js";
import Modal from "../pages/Modal.js";
import Whole from "../pages/Whole.js";
import MajorComp from "../pages/MajorComp";

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
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

const Routes = (props) => {
    const { classes } = props;

    return (
        <div>
            <div className={classes.root}>
                <SideBar />
                <Switch>
                    <Route path="/majorcomp" component={MajorComp} />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Route exact path="/" component={Home} />
                        <Route path="/cards" component={Cards} />
                        <Route path="/navigation" component={Navigation} />
                        <Route path="/gridlist" component={GridList} />
                        <Route
                            path="/advancedgridlist"
                            component={AdvancedGridList}
                        />
                        <Route path="/forms" component={Forms} />
                        <Route path="/lists" component={Lists} />
                        <Route path="/modal" component={Modal} />
                        <Route path="/tables" component={Tables} />
                        <Route
                            path="/advancedtables"
                            component={AdvancedTables}
                        />
                        <Route path="/tabs" component={Tabs} />

                        <Route path="/whole" component={Whole} />
                    </main>
                </Switch>
            </div>
        </div>
    );
};

Route.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Routes);

{
    /* <div className={classes.toolbar} /> */
}
