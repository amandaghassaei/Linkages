/**
 * Created by aghassaei on 1/29/15.
 */

//a class to store global app state, model for navbar and menu wrapper
//never deallocated

define(['underscore', 'backbone', 'threeModel', 'three', 'plist', 'fileSaver'], function(_, Backbone, three, THREE, plist, fileSaver){

    var AppState = Backbone.Model.extend({

        defaults: {//menu and view/render/interaction states

            currentNav:"navDesign",// design, sim, assemble
            currentTab:"default",

            lastNavTab: {},//last tab that one open in each of the main menus

            menuIsVisible: true,
            ribbonIsVisible: true,
            axesAreVisible: false
        },

        initialize: function(){

             _.bindAll(this, "_handleKeyStroke", "_handleScroll");

            //bind events
            $(document).bind('keydown', {state:true}, this._handleKeyStroke);
            $(document).bind('keyup', {state:false}, this._handleKeyStroke);
            $(document).bind('mousewheel', {}, this._handleScroll);//disable browser back scroll

            this.listenTo(this, "change:currentTab", this._tabChanged);
            this.listenTo(this, "change:currentNav", this._navChanged);

            this.downKeys = {};//track keypresses to prevent repeat keystrokeson hold

            if (this.isMobile()) this.set("menuIsVisible", false);
        },

        isMobile: function() {
            return (window.innerWidth <= 700);
        },


        ///////////////////////////////////////////////////////////////////////////////
        /////////////////////EVENTS////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////


        _tabChanged: function(){
            var currentTab = this.get("currentTab");
            this.get("lastNavTab")[this.get("currentNav")] = currentTab;//store tab
        },

        _navChanged: function(){
            //update to last tab open in that section
            var navSelection = this.get("currentNav");
            var nextTab = this.get("lastNavTab")[navSelection] || _.keys(plist.allMenuTabs[navSelection])[0];
            this.set("currentTab", nextTab, {silent:true});
        },

        ///////////////////////////////////////////////////////////////////////////////
        /////////////////////KEY BINDINGS//////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////

        _handleKeyStroke: function(e){//receives keyup and keydown

            if ($("input").is(':focus')) return;//we are typing in an input
            if ($("textarea").is(':focus')) return;//we are typing in an input

            var state = e.data.state;
            var currentTab = this.get("currentTab");

            if (e.ctrlKey || e.metaKey){
            } else if (state) {
                if (this.downKeys[e.keyCode]) return;
                this.downKeys[e.keyCode] = true;
            } else this.downKeys[e.keyCode] = false;

    //        console.log(e);
//            console.log(e.keyCode);
            switch(e.keyCode){
                case 8://delete key - causes back nav in chrome, super annoying
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                case 83://s save
                    if (e.ctrlKey || e.metaKey){//command
                        e.preventDefault();
                        if (e.shiftKey){
                            this.set("shift", false);
                            $("#saveAsModel").modal("show");
                        } else {
                            fileSaver.save();
                        }
                    }
                    break;
                case 79://o open
                    if (e.ctrlKey || e.metaKey){//command
                        e.preventDefault();
                        $("#jsonInput").click();
                    }
                    break;
                default:
                    break;
            }
        },

        _handleScroll: function(e){//disable two finger swipe back
            if (Math.abs(e.originalEvent.deltaX) > Math.abs(e.originalEvent.deltaY)) e.preventDefault();
        }

    });

    return new AppState();//return singleton

});