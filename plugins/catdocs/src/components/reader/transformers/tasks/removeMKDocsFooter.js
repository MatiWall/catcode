

const removeMKDocsFooter = (dom) => {

    // Remove the header
    dom.querySelector('.md-footer')?.remove();

    return dom;

}

export default removeMKDocsFooter;