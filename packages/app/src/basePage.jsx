
import { Container, CssBaseline, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";



import {NavBar, SideBar, HomePage } from "@catcode/core-components";
import {CatalogPage, ApplicationPage} from "@catcode/catalog";
import { BACKEND_URL, DEPENDENCIES_URL } from "./apiConfig";
import {CatDocsHomePage} from "@catcode/catdocs";


const navbarHeight = 80;

function BasePage() {
  // Adjust this value based on the actual height of your NavBar

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar />
        <SideBar />
        <Container
          component="main"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: `calc(100vh - ${navbarHeight}px)`,
            paddingTop: 5 
          }}
        >
          <br />
          <br />
          <Routes>
            <Route path={'/'} element={<HomePage backend_url={BACKEND_URL} dependency_url={DEPENDENCIES_URL}/>} />
            <Route path={'/catalog'} element={<CatalogPage url={BACKEND_URL} />} />
            <Route path={'/catalog/:system/:application/:deployableUnit'} element={<ApplicationPage backend_url={BACKEND_URL} dependency_url={DEPENDENCIES_URL} />} />
            <Route path={'/docs/:system/:application/:deployableUnit/*'} element={<CatDocsHomePage/>}/>
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default BasePage;