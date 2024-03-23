const addMKDocsStaticCSS = (path) => {
    return (dom) => {
        

        dom.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', `<link href="${path}" rel="stylesheet">`);
        return dom;
    };
};

export default addMKDocsStaticCSS;
