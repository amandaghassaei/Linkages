/**
 * Created by aghassaei on 8/24/15.
 */


define(['underscore', 'three'], function(_, THREE){

    function Hinge(json){

        this._position = json.position || new THREE.Vector3(0,0,0);

        var self = this;
        require(['hingeRender'], function(){
            self._initView(self._position);
        });
    }

    Hinge.prototype.getPosition = function(){
        return this._position.clone();
    };

    Hinge.prototype.setPosition = function(position){
        this._position = position.clone();
    };

    Hinge.prototype.destroy = function(){
        this._position = null;
        if (this._remove) this._remove();
    };

    Hinge.prototype.toJSON = function(){
        return {
            position: this.getPosition()
        }
    };

    return Hinge;

});

