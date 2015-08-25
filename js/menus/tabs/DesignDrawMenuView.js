/**
 * Created by aghassaei on 8/24/15.
 */


define(['jquery', 'underscore', 'menuParent', 'plist', 'text!menus/templates/DesignDrawMenuView.html'],
    function($, _, MenuParentView, plist, template){

    return MenuParentView.extend({

        events: {
            "click #newHinge":                              "_newHinge",
            "click #newLink":                               "_newLink"
        },

        _initialize: function(){
        },


        _newHinge: function(e){
            e.preventDefault();
            require(['menuWrapper', 'hinge'], function(wrapper, Hinge){
                wrapper.initTabWithObject(new Hinge({}), "hingeEdit", "navHinge");
            });
        },

        _newLink: function(e){
            e.preventDefault();
            require(['menuWrapper', 'link'], function(wrapper, Link){
                wrapper.initTabWithObject(new Link({}), "linkEdit", "navLink");
            });
        },


        _makeTemplateJSON: function(){
            return _.extend(this.model.toJSON(), plist);
        },

        template: _.template(template)
    });
});