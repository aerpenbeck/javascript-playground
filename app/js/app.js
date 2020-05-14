"use strict";

if (typeof(window.appInitialized) === 'undefined') {
    window.onerror = function( msg, url, line, col, error ) {
        var string = msg.toLowerCase();
        var substring = "script error";
        if (string.indexOf(substring) > -1 && typeof(error) === 'undefined') {
            // When an error occurs in a script, loaded from a different origin, the details of the error are not reported to prevent leaking information.
            // Instead the error reported is simply "Script error."
            console.log('Third-party JS Exception: ', msg, url);
        } else {
            console.log('Own JS Exception: ', msg, url, line, col, error);
        }

        // We want to suppress further error handling.
        return true;
    }
}

