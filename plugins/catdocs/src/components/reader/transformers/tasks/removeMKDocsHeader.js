

const removeMKDocsHeader = (dom) => {

     // Remove the header
     dom.querySelector('.md-header')?.remove();

     return dom;

}

export default removeMKDocsHeader;