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
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    row-gap: 1.618rem;
}

.row {
    flex: 0 0 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
}

[class^="col"] {
    
}

.col-1 {
    flex: 0 0 var(--col-1);
    max-width: var(--col-1);
    background-color: var(--blue-1);
}

.col-2 {
    flex: 0 0 var(--col-2);
    max-width: var(--col-2);
    background-color: var(--blue-2);
}

.col-3 {
    flex: 0 0 var(--col-3);
    max-width: var(--col-3);
    background-color: var(--blue-3);
}

.col-4 {
    flex: 0 0 var(--col-4);
    max-width: var(--col-4);
    background-color: var(--blue-4);
}

.col-5 {
    flex: 0 0 var(--col-5);
    max-width: var(--col-5);
    background-color: var(--blue-5);
}

.col-6 {
    flex: 0 0 var(--col-6);
    max-width: var(--col-6);
    background-color: var(--blue-6);
}

/* Styles for 'col-sm-...' grid */
@media screen and (min-width: 576px){
}

/* Styles for 'col-md-...' grid */
@media screen and (min-width: 768px){
}

/* Styles for 'col-lg-...' grid */
@media screen and (min-width: 992px){
}

/* Styles for 'col-xl-...' grid */
@media screen and (min-width: 1200px){
}

/* End of Grid System */


/* TASK: Paste the styles for the Flexbox Assignment: In-Class Practice */



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
