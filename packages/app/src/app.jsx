import React from 'react'
import { theme } from '@catcode/theme'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { NavBar, SideBar, HomePage } from "@catcode/core-components";
import { EntityPage, ApplicationPage } from "@catcode/catalog";
import { CatDocsHomePage } from "@catcode/catdocs";
import { createPlugin } from "@catcode/core-plugin"
import { AppManager } from "@catcode/core-app";
import { Dependencies } from '@catcode/dependencies';
import CatalogIndecPage from './components/catalog/page';


const coreApiUrl = import.meta.env.VITE_CORE_API_URL;
console.log(coreApiUrl)
const appConfig = {
  coreApi: coreApiUrl
}

const dependenciesUrl = import.meta.env.VITE_DEPENDENCIES;

const dep_config = { url: dependenciesUrl };
const DependenciesPlugin = createPlugin(
  <Dependencies/>,
  dep_config
)

export {DependenciesPlugin};

const catdocsConfig = { url: import.meta.env.VITE_CATDOCS_URL };
const CatDocsPlugin = createPlugin(
  <CatDocsHomePage />,
  catdocsConfig
)

const options = {
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
  routes: (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/catalog'} element={<EntityPage />} />
      <Route path={'/catalog/:system/:application/:deployableUnit/'} element={<CatalogIndecPage />}>
        <Route path={''} element={<ApplicationPage />} />
        <Route path={'docs/*'} element={<CatDocsPlugin />} />
        <Route path={'dependencies/'} element={<DependenciesPlugin />} />
      </Route>
    </Routes>
  ),
  theme: theme
};

const app = new AppManager(options);
const rootComponent = app.createRoot(appConfig); //

export default rootComponent;
