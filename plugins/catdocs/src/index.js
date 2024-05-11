import CatDocsHomePage from "./components/page";

const CATDOCS_ANNOTATION = 'catcode.io/catdocs-build'

const isCatDocsAvailable = (entity) => {
   
    return Boolean(entity?.metadata?.annotations?.[CATDOCS_ANNOTATION])
}


export {
    CatDocsHomePage,
    isCatDocsAvailable
};