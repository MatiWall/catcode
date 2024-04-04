import { theme } from '@catcode/theme'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import appConfig from './catcode-config.json'


import { NavBar, SideBar, HomePage } from "@catcode/core-components";
import { CatalogPage, ApplicationPage } from "@catcode/catalog";
import { BACKEND_URL, DEPENDENCIES_URL } from "./apiConfig";
import { CatDocsHomePage } from "@catcode/catdocs";
import { createPlugin, CatDocsRoutes } from "@catcode/core-plugin"
import { CreateApp, AppManager } from "@catcode/core-app";

const options = {
  plugins: [
    {
      annotation: 'catcode.io/catdocs-build',
      type: 'catalogPlugin',
      path: 'docs/*',
      name: 'Docs',
      plugin: createPlugin(
        <CatDocsHomePage></CatDocsHomePage>,
        appConfig.plugins.catdocs
      )
    }
  ],
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
    //<CatDocsRoutes>
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/catalog'} element={<CatalogPage />} />
      <Route path={'/catalog/:system/:application/:deployableUnit/*'} element={<ApplicationPage />} />
    </Routes>
    //</CatDocsRoutes>
  ),
  theme: theme
};

const app = new AppManager(options);
const rootComponent = app.createRoot(appConfig); //

export default rootComponent;
