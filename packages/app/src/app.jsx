import { theme } from '@catcode/theme'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import appConfig from './catcode-config.json'


import {NavBar, SideBar, HomePage } from "@catcode/core-components";
import {CatalogPage, ApplicationPage} from "@catcode/catalog";
import { BACKEND_URL, DEPENDENCIES_URL } from "./apiConfig";
import {CatDocsHomePage} from "@catcode/catdocs";

import { CreateApp } from "@catcode/app-builder";

const options = {
  plugins: ['catdocs'],
  sidebar: (<SideBar
    links={
      [
        { text: 'Home', path: '/' },
        { text: 'Catalog', path: '/catalog' },
      ]
    }
  />)
  ,
  navbar: <NavBar />,
  baseRoutes: (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/catalog'} element={<CatalogPage/>} />
      <Route path={'/catalog/:system/:application/:deployableUnit/*'} element={<ApplicationPage />} />
      <Route path={'/docs/:system/:application/:deployableUnit/*'} element={<CatDocsHomePage />} />
    </Routes>
  ),
  theme: theme
};


export default function App() {
  return <CreateApp options={options} appConfig={appConfig}/>;
}
