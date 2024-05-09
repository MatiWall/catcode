import CatDocsHomePage from "./components/page";

const CATDOCS_ANNOTATION = 'catcode.io/catdocs-build'

const isCatDocsAvailable = (entity) => {
   
    console.log(entity)
    return Boolean(entity?.metadata?.annotation?.[CATDOCS_ANNOTATION])
}


export {
    CatDocsHomePage,
    isCatDocsAvailable
};