// position
const selectorOptions = {
    'first-child': {
        description: 'first-child',
        element: 'li'
    },
    'last-child': {
        description: 'last-child',
        element: 'li'
    },
    'only-of-type': {
        description: 'only-of-type',
        element: 'ul'
    },
    'nth-child-0': {
        description: 'nth-child(2)',
        element: 'li'
    },
    'nth-child-1': {
        description: 'nth-child(2n)',
        element: 'li'
    },
    'nth-child-2': {
        description: 'nth-child(4n-1)',
        element: 'li'
    },
    'nth-child-3': {
        description: 'nth-child(odd)',
        element: 'li'
    },
    'first-of-type': {
        description: 'first-of-type',
        element: 'div'
    },
    'last-of-type': {
        description: 'last-of-type',
        element: 'p'
    }
}

let previous = '';

const clearPrevious = (previousElements) => {
    if(previousElements.length >= 1){
        previousElements.forEach(item => {
            item.style.cssText = ''
        })
    }
}

const declareCss = (element) => {
    element.forEach(item => {
        item.style.cssText = 'border: 1px solid red; color: red;'
    })
}

const selector = (value) => {
    const styleOptions = selectorOptions[value];
    const selection = `${styleOptions.element}:${styleOptions.description}`;
    const element = document.querySelectorAll(`.selectionValues ${selection}`);

    document.getElementById('selection').innerHTML = selection;

    clearPrevious(previous);
    declareCss(element);
    
    previous = element;
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