/**
 * Created by aghassaei on 1/16/15.
 */

define(['underscore', 'backbone', 'three', 'appState', 'orbitControls'],
    function(_, Backbone, THREE, appState){

    return Backbone.View.extend({

        events: {
            "mousemove":                            "_mouseMoved",
            "mouseup":                              "_mouseUp",
            "mousedown":                            "_mouseDown",
            "mouseout":                             "_mouseOut"
        },

        mouseIsDown: false,//store state of mouse click inside this el

        //intersections/object highlighting
//        mouseProjection: new THREE.Raycaster(),
//        currentIntersectedPart: null,

        el: "#threeContainer",

        controls: null,

        initialize: function(){

            _.bindAll(this, "_mouseMoved", "_animate");

            this.controls = new THREE.OrbitControls(this.model.camera, this.$el.get(0));
            this.controls.addEventListener('change', this.model.render);

            this.$el.append(this.model.domElement);//render only once

            this.model.render();
    //        this._animate();
        },

        ////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////CONTROLS/////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

        _animate: function(){
    //        requestAnimationFrame(this._animate);
    //        this.controls.update();
        },

        _setControlsEnabled: function(state){
            this.controls.noRotate = state;
        },

        ////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////MOUSE EVENTS/////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

        _mouseOut: function(){
        },

        _mouseUp: function(){
            this.mouseIsDown = false;
        },

        _mouseDown: function(){
            this.mouseIsDown = true;
        },

        _mouseMoved: function(e){

            if (this.mouseIsDown && !this.controls.noRotate) {//in the middle of a camera move
               //set nothing highlighted
//                return;
            }

            //make projection vector
//            var vector = new THREE.Vector2(2*(e.pageX-this.$el.offset().left)/this.$el.width()-1, 1-2*(e.pageY-this.$el.offset().top)/this.$el.height());
//            this.mouseProjection.setFromCamera(vector, this.model.camera);

//            var objsToIntersect =
//            var intersections = this.mouseProjection.intersectObjects(objsToIntersect, false);
//            if (intersections.length == 0) {//no intersections
//                //set nothing highlighted
//                return;
//            }

//            globals.highlighter.highlight(intersections[0]);
        }
    });
});