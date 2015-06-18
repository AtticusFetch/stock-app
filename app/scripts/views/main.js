/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/supply',
    'views/stock',
    'collections/supplies',
    'collections/stocks'
], function ($, _, Backbone, JST, SupplyView, StockView, SuppliesCollection, StocksCollection) {
    'use strict';

    var MainView = Backbone.View.extend({
        el: '#stock-app',
        template: JST['app/scripts/templates/main.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #add-supply': 'addSupply'
        },

        initialize: function () {
            SuppliesCollection.fetch();
        },
        addSupply: function(){
            var stockID = $('#stockID').val() || '1';
            console.log(stockID);
            if(!StocksCollection.findById(stockID)) {
                var stockView = new StockView({id: 'stock_id_' + stockID, model: StocksCollection.create({id: stockID})});
                this.$el.append(stockView.render().el);
            }
            var view = new SupplyView({model: SuppliesCollection.create({stockID: stockID})});
            console.log('#stock_id_' + stockID + ' #supply-container');
            $('#stock_id_' + stockID + ' #supply-container').append(view.render().el);
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return MainView;
});
