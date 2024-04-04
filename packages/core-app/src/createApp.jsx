
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, Box, Toolbar, ThemeProvider } from "@mui/material"
import { AppConfigProvider, PluginProvider } from '@catcode/core-components';

export default function CreateApp({ options, appConfig }) {
    return (
        <AppConfigProvider appConfig={appConfig}>
            <PluginProvider plugins={options.plugins}>
                <ThemeProvider theme={options.theme}>
                    <Router>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <CssBaseline />
                            {options.navbar}
                            {options.sidebar}
                            <main style={{ width: '100%', flexGrow: 1 }}>
                                <Toolbar />
                                {options.baseRoutes}
                            </main>
                        </Box>
                    </Router>
                </ThemeProvider>
            </PluginProvider>
        </AppConfigProvider>
    )
};