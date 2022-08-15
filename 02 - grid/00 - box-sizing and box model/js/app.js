// Element for Box Sizing
const elementSize = () => {
    const box = document.querySelector('#element');
    const cs = getComputedStyle(box);
    const contentWidth = cs.boxSizing === 'border-box' ? parseFloat(cs.width) - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) : parseFloat(cs.width);
    const borderWidth = box.offsetWidth;
    const paddingWidth = box.clientWidth;
    const marginWidth = parseFloat(cs.marginLeft) + parseFloat(cs.marginRight) + borderWidth;

    document.getElementById('contentWidth').innerHTML = `${contentWidth}px`;

    document.getElementById('paddingWidth').innerHTML = `${paddingWidth}px<br />padding: ${parseFloat(cs.paddingTop)}px (top), ${parseFloat(cs.paddingRight)}px (right), ${parseFloat(cs.paddingBottom)}px (bottom), ${parseFloat(cs.paddingLeft)}px (left)`;

    document.getElementById('borderWidth').innerHTML = `${borderWidth}px<br />border: ${parseFloat(cs.borderTop)}px (top), ${parseFloat(cs.borderRight)}px (right), ${parseFloat(cs.borderBottom)}px(bottom), ${parseFloat(cs.borderLeft)}px (left)`;

    document.getElementById('marginWidth').innerHTML = `${marginWidth}px<br />margin: ${parseFloat(cs.marginTop)}px (top), ${parseFloat(cs.marginRight)}px (right), ${parseFloat(cs.marginBottom)}px(bottom), ${parseFloat(cs.marginLeft)}px (left)`;
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

    elementSize();
});