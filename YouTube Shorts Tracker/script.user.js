// ==UserScript==
// @name         YouTube Shorts Tracker
// @namespace    http://tampermonkey.net/
// @version      2025-01-21
// @description  Keep Brain Rot at bay by minimizing YT shorts view
// @author       Asutosh Satapathy
// @match        https://*.youtube.com/*shorts*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //not sure about what to keep for @namespace so leaving it as is.
    //v1: set the view count in localStorage. If count more than threshold then pop an alert for every view.
    let keyStr = "ytShortsViewCount";
    let viewThreshold = 10; //modify this as needed; 10 in a short run is good enough.
    let currCount = localStorage.getItem(keyStr);
    if(null != currCount){
            let countInt = Number(currCount) + 1;
            localStorage.setItem(keyStr, countInt.toString());
            if(countInt > viewThreshold) alert('You have currently watched ' + countInt + ' shorts.');
    }else{
            localStorage.setItem(keyStr, '0');
    }
})();
