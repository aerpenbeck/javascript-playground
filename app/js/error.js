"use strict";

const JSTest = (function () {
    const version="0.0.1";
    return {
        getVersion: function () {
            return version;
        },
        produceError: function () {
            return foo.length;
        }
    };
})();

(function (root) {
  root.exports = JSTest;
})((typeof module === "object" && module) || {});
