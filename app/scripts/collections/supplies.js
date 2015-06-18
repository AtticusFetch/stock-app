/*global define*/

define([
    'underscore',
    'backbone',
    'models/supply',
    'backboneLocalstorage'
], function (_, Backbone, SupplyModel, Store) {
    'use strict';

    var SuppliesCollection = Backbone.Collection.extend({
        model: SupplyModel,
        localStorage: new Store('supplies-store'),

        getLast: function () {
            return this.at(this.length);
        }
    });

    return new SuppliesCollection();
});
