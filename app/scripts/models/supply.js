/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var SupplyModel = Backbone.Model.extend({

        defaults: {
            name: 'rat tails',
            quantity: '13',
            stockID: '1'
        }
    });

    return SupplyModel;
});
