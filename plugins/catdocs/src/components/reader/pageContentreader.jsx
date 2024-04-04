import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


import ShadowDom from "./shadowdom";
import transform from "./transformers/transformer"
import { catdocsApiUrl } from './../../config';

import { 
    removeMKDocsHeader, 
    removeLogo, 
    cleanRedundantElements, 
    removeMKDocsFooter, 
    addStyles,
    addMKDocsStaticCSS
} from './transformers/tasks';



function PageContentReader(){
    const { system, application, deployableUnit} = useParams();
    const wildcard = useParams()["*"]
    
    const path = (wildcard ? `/${wildcard}` : '') 
    
    const [htmlContent, setHTMLContent] = useState('');
    const baseUrl = `/docs/${system}/${application}/${deployableUnit}`;
    console.log(catdocsApiUrl + baseUrl + path);
    useEffect(() => {
        fetch(catdocsApiUrl + baseUrl + path)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // assuming the response is text/html
            })
            .then(html => {
                // Do something with the HTML content, for example, insert it into a div
                
                const content = transform(
                    html, 
                    [
                        removeMKDocsHeader,
                        removeLogo,
                        cleanRedundantElements,
                        removeMKDocsFooter,
                        addStyles,
                        addMKDocsStaticCSS(catdocsApiUrl  + `/docs/static/${system}/${application}/${deployableUnit}`)
                    ]
                    );
                
                setHTMLContent(content);
            })
            .catch(error => {
                console.error('There was a problem fetching the HTML:', error);
            });
    }, [system, application, deployableUnit]);
    
    

    return (
        <ShadowDom>
            {htmlContent}
        </ShadowDom>
    )

}


export default PageContentReader;