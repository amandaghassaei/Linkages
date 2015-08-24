/**
 * Created by aghassaei on 7/17/15.
 */


/**
 * Created by aghassaei on 6/16/15.
 */


define(['jquery', 'underscore', 'menuParent', 'plist', 'text!menus/templates/DefaultMenuView.html'],
    function($, _, MenuParentView, plist, template){

    return MenuParentView.extend({

        events: {
        },

        _initialize: function(){
        },

        _makeTemplateJSON: function(){
            return _.extend(this.model.toJSON(), plist);
        },

        template: _.template(template)
    });
});