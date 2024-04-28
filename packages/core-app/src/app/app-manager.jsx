import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, Box, Toolbar, ThemeProvider } from "@mui/material"
import { AppConfigProvider, PluginProvider } from '@catcode/core-components';



class AppManger {
    constructor(options){
        this.plugins = options.plugins;
        this.theme = options.theme;
        this.routes = options.routes;
        this.navbar = options.navbar;
        this.sidebar = options.sidebar;

    }


    createRoot(appConfig){
        
        const AppRoot = () => {
            return (
                <AppConfigProvider appConfig={appConfig}>
                <PluginProvider plugins={this.plugins}>
                    <ThemeProvider theme={this.theme}>
                        <Router>
                            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                                <CssBaseline />
                                {this.navbar}
                                {this.sidebar}
                                <main style={{ width: '100%', flexGrow: 1 }}>
                                    <Toolbar />
                                    {this.routes}
                                </main>
                            </Box>
                        </Router>
                    </ThemeProvider>
                </PluginProvider>
            </AppConfigProvider>
            );
        }

        return AppRoot
    }
}

export default AppManger;