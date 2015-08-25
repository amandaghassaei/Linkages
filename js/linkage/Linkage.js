/**
 * Created by aghassaei on 8/25/15.
 */


define(['underscore', 'hinge', 'link'], function(_, Hinge, Link){

    function Linkage(json){

        this._links = {};
        this._hinges = {};

        var self = this;
        if (json.hinges){
            _.each(json.hinges, function(hingeJSON, id){
                self._hinges[id] = new Hinge(hingeJSON);
            });
        }

        if (json.links){
            _.each(json.links, function(linkJSON, id){
                self._links[id] = new Link(linkJSON);
            });
        }

    }


    Linkage.prototype.addHinge = function(){

    };

    Linkage.prototype.getHingeByID = function(id){
        return this._hinges[id];
    };

    Linkage.prototype.removeHinge = function(hinge){

    };

    Linkage.prototype.removeHingeByID = function(id){
        this.removeHinge(this.getHingeByID(id));

    };


    Linkage.prototype.toJSON = function(){
        var linkIDs = [];
        _.each(this._links, function(link){
            linkIDs.push(link.getID());
        });
        var hingeIDs = [];
        _.each(this._hinges, function(hinge){
            hingeIDs.push(hinge.getID());
        });
        return {
            hinges: hingeIDs,
            links: linkIDs
        }
    };

    return Linkage;
});