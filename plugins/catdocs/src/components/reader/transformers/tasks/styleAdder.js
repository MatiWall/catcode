import styles from './styles';
import {theme} from '@catcode/theme'
const addStyles = (dom) => {

    dom.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', `<style>${styles(theme)}</style>`);
    return dom

}

export default addStyles; 