# Current Solution

```
/*
    Created by: Student Name - Student ID
    Created on: Today's Date
    Updated on: Today's Date
    Project: Flexbox
*/

:root {
    /* Grid */
    --grid-width: calc(100% / 6);
    --col-1: calc(var(--grid-width) * 1);
    --col-2: calc(var(--grid-width) * 2);
    --col-3: calc(var(--grid-width) * 3);
    --col-4: calc(var(--grid-width) * 4);
    --col-5: calc(var(--grid-width) * 5);
    --col-6: calc(var(--grid-width) * 6);

    /* Colors */
    --blue-1: #ebf1ff;
    --blue-2: #d4e1ff;
    --blue-3: #becffe;
    --blue-4: #a8bdfd;
    --blue-5: #93a9fd;
    --blue-6: #6c82fb;
}

* {
    box-sizing: border-box;
    position: relative;
}

body {
    padding: 0;
    margin: 0;
}

/* Images */
img {
    max-width: 100%;
}

.round-image {
    border-radius: 50%;
    overflow: hidden;
    aspect-ratio: 1;
}

.round-image img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
/* End of Images */

/* Grid System */
.container {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
}

/* sm */
@media screen and (min-width: 576px){
    .container { max-width: 576px; }
}

/* md */
@media screen and (min-width: 768px){
    .container { max-width: 768px; }
}

/* lg */
@media screen and (min-width: 992px){
    .container { max-width: 992px; }
}

/* xl */
@media screen and (min-width: 1200px){
    .container { max-width: 1200px; }
}

.row {
    flex: 0 0 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    margin-left: -1rem;
    margin-right: -1rem;
}

[class^="col-"] {
    padding: 0 1rem;
    width: 100%;
    max-width: 100%;
    border: 1px solid green;
}

.col-xs-1 {
    flex: 0 0 var(--col-1);
    max-width: var(--col-1);
    background-color: var(--blue-1);
}

.col-xs-2 {
    flex: 0 0 var(--col-2);
    max-width: var(--col-2);
    background-color: var(--blue-2);
}

.col-xs-3 {
    flex: 0 0 var(--col-3);
    max-width: var(--col-3);
    background-color: var(--blue-3);
}

.col-xs-4 {
    flex: 0 0 var(--col-4);
    max-width: var(--col-4);
    background-color: var(--blue-4);
}

.col-xs-5 {
    flex: 0 0 var(--col-5);
    max-width: var(--col-5);
    background-color: var(--blue-5);
}

.col-xs-6 {
    flex: 0 0 var(--col-6);
    max-width: var(--col-6);
    background-color: var(--blue-6);
}

/* Styles for 'col-sm-...' grid */
@media screen and (min-width: 576px){
    .col-sm-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-sm-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-sm-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-sm-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-sm-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-sm-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-md-...' grid */
@media screen and (min-width: 768px){
    .col-md-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-md-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-md-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-md-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-md-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-md-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-lg-...' grid */
@media screen and (min-width: 992px){
    .col-lg-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-lg-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-lg-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-lg-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-lg-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-lg-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-xl-...' grid */
@media screen and (min-width: 1200px){
    .col-xl-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-xl-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-xl-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-xl-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-xl-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-xl-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* End of Grid System */


/* TASK: Paste the styles for the Flexbox Assignment: In-Class Practice */
/* In class practice */
/* If there are any spaces I'm using 1.618rem as the spacing between elements */
.story {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1.618rem;
}

.story:nth-child(even) {
    flex-direction: row-reverse;
}

.story .image {
    aspect-ratio: 1;
    background-color: #dadada;
    flex: 0 0 calc(50% - 1.618rem); 
}

.story .description {
    flex: 1 0 50%;
}

@media screen and (min-width: 576px){
    .story .image {
        flex-basis: 30%;
    }
}

@media screen and (min-width: 768px){ /* No Styles here */ }

@media screen and (min-width: 992px){
    .story,
    .story:nth-child(even) {
        flex-flow: column wrap;
    }

    .story .image {
        aspect-ratio: 16/9;
        flex: 0 0 100%;
        width: 100%;
    }
}

@media screen and (min-width: 1200px){ /* No Styles here */ }
/* End of in class practice */


/*
    * Window size styles
    * Do not edit or delete this from examples
*/
#windowSize {
    padding: 0.25rem 0.5rem;
    background-color: rgba(0,0,0,0.3);
    color: white;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    user-select: none;
    z-index: 10;
}
/* End of Window size styles */
```
