/**
 * Created by aghassaei on 8/24/15.
 */




define(['jquery', 'underscore', 'menuParent', 'plist', 'text!menus/templates/DefaultMenuView.html'],
    function($, _, MenuParentView, plist, template){

    return MenuParentView.extend({

        events: {
        },

        _initialize: function(options){

            if (options.myObject) this.link = options.myObject;
            else console.warn("no link inited for this menu");

        },

        _makeTemplateJSON: function(){
            return _.extend(this.model.toJSON(), plist, this.link.toJSON());
        },

        template: _.template(template)
    });
});