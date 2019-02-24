import React from 'react'
import {AppBar, Toolbar, WithStyles, withStyles, createStyles, Typography} from "@material-ui/core";

const styles = createStyles({
    root: {
        flexGrow: 1
    }
});


const AppToolbar = ({classes}: WithStyles): JSX.Element => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color='inherit'>
                        Todo's!
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default withStyles(styles)(AppToolbar)