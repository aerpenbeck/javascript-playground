"use strict";

const JSLocal = (function () {
    const version="0.0.2";
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
  root.exports = JSLocal;
})((typeof module === "object" && module) || {});
