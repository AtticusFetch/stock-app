/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var StockModel = Backbone.Model.extend({

        defaults: {
            id: '1',
            owner: 'user'
        }
    });

    return StockModel;
});
