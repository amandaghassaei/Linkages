/**
 * Created by fab on 3/18/15.
 */

define(['jquery', 'underscore', 'backbone', 'plist', 'text!menus/templates/Ribbon.html'], function($, _, Backbone, plist, template){

    return Backbone.View.extend({

        el: "#navRibbon",

        events: {
        },

        initialize: function(){

            _.bindAll(this, "render");

            this.render();
        },

        render: function(){
            this.$el.html(this.template(_.extend(this.model.toJSON(), plist)));
        },

        template: _.template(template)

    });
});

