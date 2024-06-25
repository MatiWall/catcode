

const selectors = [
    'div[data-md-component="skip"]',
    'div[data-md-component="announce"]',
    //'input[data-md-toggle="drawer"]',
    'input[data-md-toggle="search"]',
]; 

const cleanRedundantElements = (dom) => {
    selectors.forEach(selector => {
        const elements = dom.querySelectorAll(selector);
        elements.forEach(element => {
            element.remove();
        });
    });
    return dom;
};

export default cleanRedundantElements;