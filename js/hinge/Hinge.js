/**
 * Created by aghassaei on 8/24/15.
 */


define(['underscore', 'three'], function(_, THREE){

    var idNum = 0;

    function Hinge(json, parent, id){

        this._id = id || "hinge" + idNum++;
        this._position = json.position || new THREE.Vector3(0,0,0);
        this._links = [];
        this._parent = parent;

        var self = this;
        require(['hingeRender'], function(){
            self._initView(self._position);
        });
    }

    Hinge.prototype.getID = function(){
        return this._id;
    };

    Hinge.prototype.setPosition = function(position){
        this._position = position.clone();
    };

    Hinge.prototype.getPosition = function(){
        return this._position.clone();
    };

    Hinge.prototype.addLink = function(link){
        var index = this._links.indexOf(link);
        if (index > -1) console.warn("link " + link.getID() + " already added to this hinge");
        else this._links.push(link);
    };

    Hinge.prototype.removeLink = function(link){
        var index = this._links.indexOf(link);
        if (index > -1) {
            this._links.splice(index, 1);
        } else console.warn("link id  " + link.getID() + " not found for hinge");
    };

    Hinge.prototype.getLinks = function(){
        return this._links;
    };








    Hinge.prototype.destroy = function(){
        var self = this;
        this._position = null;
        if (this._remove) this._remove();//three

        if (this._parent) {
            this._parent.removeHinge(this);
            _.each(this._links, function(link){
                link.removeHinge(this);
            });
        }
        else console.warn("no parent for link");


        this._links = null;

        this._parent = null;

    };

    Hinge.prototype.toJSON = function(){
        var linkIDs = [];
        _.each(this._links, function(link){
            linkIDs.push(link.getID());
        });
        return {
            position: this.getPosition(),
            links: linkIDs
        }
    };

    return Hinge;

});

