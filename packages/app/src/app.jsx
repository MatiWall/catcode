import { BrowserRouter as Router } from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import BasePage from "./basePage"
import {theme} from '@catcode/theme'


export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <BasePage></BasePage>
      </ThemeProvider>
    </Router>
  );
}
