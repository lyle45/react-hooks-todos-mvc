import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider, CssBaseline} from "@material-ui/core";

import Toolbar from'./components/Toolbar/Toolbar'
import Main from './components/Main/Main'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
})

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Toolbar/>
                    <Main/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
