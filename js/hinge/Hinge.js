/**
 * Created by aghassaei on 8/24/15.
 */


define(['underscore'], function(_){

    function Hinge(json){

        this._position = json.position || new THREE.Vector3(0,0,0);
    }

    Hinge.prototype.getPosition = function(){
        return this._position.clone();
    };

    Hinge.prototype.setPosition = function(position){
        this._position = position.clone();
    };

    Hinge.prototype.destroy = function(){
        this._position = null;
    };

    Hinge.prototype.toJSON = function(){
        return {
            position: this.getPosition()
        }
    };

    return Hinge;

});

