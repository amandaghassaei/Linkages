/**
 * Created by aghassaei on 8/24/15.
 */



define(['jquery', 'underscore', 'menuParent', 'plist', 'text!menus/templates/HingeEditMenuView.html', 'globalLinkage'],
    function($, _, MenuParentView, plist, template, globalLinkage){

    return MenuParentView.extend({

        events: {
        },

        _initialize: function(options){

            if (options.myObject) this.hinge = options.myObject;
            else console.warn("no hinge inited for this menu");



        },

        deleteExitMenu: function(e, callback){
            globalLinkage.removeHinge(this.hinge);
            this.hinge.destroy();
            callback();
        },

        cancelExitMenu: function(e, callback){
            callback();
        },

        saveExitMenu: function(e, callback){
            callback();
        },


        _makeTemplateJSON: function(){
            return _.extend(this.model.toJSON(), plist, {myHinge: this.hinge.toJSON()});
        },

        template: _.template(template),

        _destroy: function(){
            this.hinge = null;
        }
    });
});