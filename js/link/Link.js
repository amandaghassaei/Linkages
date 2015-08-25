/**
 * Created by aghassaei on 8/24/15.
 */



define(['underscore'], function(_){

    var idNum = 0;

    function Link(json, parent, id){

        this._id = id || "link" + idNum++;
        this._hinges = [];
        this._parent = parent;
    }

    Link.prototype.getID = function(){
        return this._id;
    };

    Link.prototype.addHinge = function(hinge){
        var index = this._hinges.indexOf(hinge);
        if (index > -1) console.warn("hinge " + hinge.getID() + " already added to this hinge");
        else this._hinges.push(hinge);
    };

    Link.prototype.removeHinge = function(hinge){
        var index = this._hinges.indexOf(hinge);
        if (index > -1) {
            this._hinges.splice(index, 1);
        } else console.warn("hinge id  " + hinge.getID() + " not found for hinge");
    };

    Link.prototype.getHinges = function(){
        return this._hinges;
    };










    Link.prototype.destroy = function(){

    };

    Link.prototype.toJSON = function(){
        var hingeIDs = [];
        _.each(this._hinges, function(hinge){
            hingeIDs.push(hinge.getID());
        });
        return {
            hinges: hingeIDs
        }
    };

    return Link;

});

