import { theme } from '@catcode/theme'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { NavBar, SideBar, HomePage } from "@catcode/core-components";
import { CatalogPage, ApplicationPage } from "@catcode/catalog";
import { CatDocsHomePage } from "@catcode/catdocs";
import { createPlugin, CatDocsRoutes } from "@catcode/core-plugin"
import { CreateApp, AppManager } from "@catcode/core-app";
import { Dependencies } from '@catcode/dependencies';
import CatalogIndecPage from './components/catalog/page';

const appConfig = {
  coreApi: import.meta.env.VITE_CORE_API_URL
}

const DependenciesPlugin = createPlugin(
  <Dependencies/>,
{url: import.meta.env.VITE_DEPENDENCIES}
)

const CatDocsPlugin = createPlugin(
        <CatDocsHomePage/>,
        {url: import.meta.env.VITE_CATDOCS_URL}
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
    //<CatDocsRoutes>
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/catalog'} element={<CatalogPage />} />
      <Route path={'/catalog/:system/:application/:deployableUnit/'} element={<CatalogIndecPage />}>
        <Route path={''} element={<ApplicationPage/>} />
        <Route path={'docs/*'} element={<CatDocsPlugin/>} />
        <Route path={'dependencies'} element={<DependenciesPlugin/>} />
      </Route>
    </Routes>
    //</CatDocsRoutes>
  ),
  theme: theme
};

const app = new AppManager(options);
const rootComponent = app.createRoot(appConfig); //

export default rootComponent;
