"use strict";

if (typeof(window.appInitialized) === 'undefined') {
    window.onerror = function( msg, url, line, col, error ) {
        var string = msg.toLowerCase();
        var substring = "script error";
        if (string.indexOf(substring) > -1 && (typeof(error) === 'undefined' || error === null)) {
            // When an error occurs in a script, loaded from a different origin, the details of the error are not reported to prevent leaking information.
            // Instead the error reported is simply "Script error."
            console.log('Third-party JS Exception: ', msg, url);
        } else {
            console.log('Own JS Exception: ', msg, url, line, col, error);
            var errorObject = {
                message: msg,
                url: url,
                line: line,
                col: col,
                error: error
            };
            errorhandler(errorObject);
        }

        // We want to suppress further error handling.
        return true;
    }

    function errorhandler(errorobj) {
        console.log("Error Handler: ", JSON.stringify(errorobj));
        alert("Something bad happened");
        window.parent.location.href=window.parent.location.href;
    }
}

