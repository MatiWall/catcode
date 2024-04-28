import { useRef, useEffect, Children, useCallback} from "react";
import ReactDOM from "react-dom";

const ShadowDom = ({ children }) => {

    const ref = useCallback((shadowHost) => {
        if (!shadowHost) return;
        let shadowRoot = shadowHost.shadowRoot;

        if (!shadowRoot) {
            shadowRoot = shadowHost.attachShadow({ mode: 'open' });
        }

        // Append the container's child nodes to the shadow root
        //shadowRoot.replaceChildren(children);
        shadowRoot.replaceChildren(children);
    })


    return (<div ref={ref}></div>);
};

export default ShadowDom;