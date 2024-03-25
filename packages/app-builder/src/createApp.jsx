
import { CssBaseline, ThemeProvider, Box, Toolbar } from "@mui/material"

import { AppConfigProvider } from "./context/appContext";
import {BrowserRouter as Router} from 'react-router-dom';

const CreateApp = ({ options }) => {
  
    return (
        <>
            {/*
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
                */}
        </>
    )
}

export default CreateApp;