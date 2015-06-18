/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage'
    }
});

require([
    'backbone','views/main'
], function (Backbone, MainView) {
    Backbone.history.start();
    var app = new MainView();
    app.render();
});
