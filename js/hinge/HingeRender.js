/**
 * Created by aghassaei on 8/24/15.
 */


define(['underscore', 'hinge', 'three', 'threeModel'], function(_, Hinge, THREE, three){

    var defaultMaterial = new THREE.MeshBasicMaterial({color:"0xff0000"});
    var defaultGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 20);
    defaultGeometry.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI/2));


    Hinge.prototype._initView = function(position){
        this._mesh = new THREE.Mesh(defaultGeometry, defaultMaterial);
        three.sceneAdd(this._mesh);
        this.render(position);
        three.render();
    };




    Hinge.prototype.render = function(position){
        this._mesh.position.set(position.x, position.y, position.z);
    };

    Hinge.prototype._remove = function(){
        three.sceneRemove(this._mesh);
        this._mesh = null;
    };



   return Hinge;

});