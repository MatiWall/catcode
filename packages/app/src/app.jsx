import { Routes, Route } from "react-router-dom";
import { theme } from '@catcode/theme'


import { NavBar, SideBar, HomePage } from "@catcode/core-components";

import { CatalogPage, ApplicationPage } from "@catcode/catalog";
import { BACKEND_URL, DEPENDENCIES_URL } from "./apiConfig";

import { CatDocsHomePage } from "@catcode/catdocs";


import { CreateApp } from "@catcode/app-builder";

/*
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
      <Route path={'/'} element={<HomePage backend_url={BACKEND_URL} dependency_url={DEPENDENCIES_URL} />} />
      <Route path={'/catalog'} element={<CatalogPage url={BACKEND_URL} />} />
      <Route path={'/catalog/:system/:application/:deployableUnit/*'} element={<ApplicationPage backend_url={BACKEND_URL} dependency_url={DEPENDENCIES_URL} />} />
      <Route path={'/docs/:system/:application/:deployableUnit/*'} element={<CatDocsHomePage />} />
    </Routes>
  ),
  theme: theme
};
*/

export default function App() {
 //console.log(options)
  // <CreateApp options={options}/>;
  return <div>Test</div>
}
