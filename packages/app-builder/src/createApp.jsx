
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { AppConfigProvider } from "./context/appContext";
import { CssBaseline, Box, Toolbar, ThemeProvider } from "@mui/material"

export default function CreateApp({ options }) {

    return (
        <>
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
        </>
    )
};