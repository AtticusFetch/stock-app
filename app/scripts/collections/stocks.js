/*global define*/

define([
    'underscore',
    'backbone',
    'models/stock',
    'backboneLocalstorage'
], function (_, Backbone, StockModel, Store) {
    'use strict';

    var StocksCollection = Backbone.Collection.extend({
        model: StockModel,
        localStorage: new Store('stocks-store'),

        findById: function(id) {
            return this.get({id: id})
        }
    });

    return new StocksCollection();
});
