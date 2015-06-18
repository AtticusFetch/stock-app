/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var StockView = Backbone.View.extend({
        template: JST['app/scripts/templates/stock.ejs'],

        tagName: 'div',

        id: '',

        className: 'organize',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this
        }
    });

    return StockView;
});
