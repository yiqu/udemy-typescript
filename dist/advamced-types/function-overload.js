"use strict";
/**
 * Function overloading.
 *
 * Give the same function different signatures that would return a specific type
 */
function getBedTime(location, time) {
    if (typeof location === "string" || typeof time === "string") {
        return location.toString() + location.toString();
    }
    return time + time;
}
getBedTime(1, 2); //  TS knows its a number
getBedTime("MD", "9:30"); // TS knows its a string
