

const removeLogo = (dom) => {
    const anchors = dom.querySelectorAll('a[data-md-component="logo"]');
    anchors.forEach((anchor) => {
        anchor.remove();
    });
    return dom;
};

export default removeLogo;