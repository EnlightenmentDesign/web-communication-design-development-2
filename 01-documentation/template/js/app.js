// Screen size snippet
const reportWindowSize = () => {
    // Get the width of the browser window
    const width = window.innerWidth;

    // Get the height of the browser window
    const height = window.innerHeight;

    // Write the values gathered above inside the div with an id of "windowSize"
    document.getElementById('windowSize').innerHTML = `${width}px by ${height}px`;
}

/* 
    * Ensure that the DOM is loaded before running
    * the functions inside
*/
document.addEventListener('DOMContentLoaded', () => {
    // Call the reportWindowSize upon page load
    reportWindowSize();

    // Call teh reportWindowSize if the browser window is resized
    window.onresize = reportWindowSize;
});