"use strict";

const Tp = require('thingpedia');

module.exports = class MyFirstDevice extends Tp.BaseDevice {
    // A simple query function called "greeting"
    // Query functions must be in the form "get_<something>",
    // where <something> matches the query name in manifest.tt
    get_greeting({ name }) { // `name`` is an optional parameter (see manifest.tt)
        // All queries should return an array of objects
        // The object has properties corresponding to the outputs
        // declared in manifest.tt
        if (name) return [{ reply: name }];
        else return [{ reply: 'world! Check out http://localhost:8080/ '}];
    }

    get_email({name}){

        if (name) return [{ reply: name }];
        else return [ {reply: 'The notification details can be found here: ',
                        link: 'http://localhost:8080/'}];
    }
};