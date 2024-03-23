

const transform = (html, transformers = []) => {
    let dom;
    if (typeof html === 'string') {
        dom = new DOMParser().parseFromString(html, 'text/html').documentElement;
      } else if (html instanceof Element) {
        dom = html;
      } else {
        throw new Error('dom is not a recognized type');
      }

      for (const transformer of transformers) {

        dom = transformer(dom);
      }
      
    return dom;
    
}

export default transform;