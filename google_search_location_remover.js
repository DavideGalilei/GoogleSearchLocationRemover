// ==UserScript==
// @name         Google search location remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove google search location banner from the bottom of the results page
// @author       Davide Galilei
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let x = document.getElementById("sfooter");
    x.remove();
})();
