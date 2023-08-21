// position
const positionStyles = {
    'static': {
        position: 'static'
    },
    'relative': {
        position: 'relative',
        left: '30px'
    },
    'fixed': {
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: 300
    },
    'absolute': {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    'sticky': {
        position: 'sticky',
        top: 0
    }
}

const declareCss = (element, style) => {
    for(const property in style)
        element.style[property] = style[property]
}

const position = (value) => {
    document.getElementById('selection').innerHTML = value;
    const element = document.querySelector('.styledElement');
    const styles = positionStyles[value];

    element.style.cssText = '';
    declareCss(element, styles);
    element.innerHTML = JSON.stringify(styles);
}


// Screen size snippet
const reportWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('windowSize').innerHTML = `${width}px by ${height}px`;
}


/* 
    * Ensure that the DOM is loaded before running
    * the functions inside
*/
document.addEventListener('DOMContentLoaded', () => {
    reportWindowSize();
    window.onresize = reportWindowSize;
});