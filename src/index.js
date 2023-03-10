import { createElementWithParams } from "./helpers/DOMHelpers";

const body = document.querySelector('#app');

const header = createElementWithParams('h2', { textContent: 'Hello with Webpack!' });

body.append(header);