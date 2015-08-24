/**
 * Created by aghassaei on 5/25/15.
 */


define(['underscore', 'fileSaverLib'], function(_, saveAs){//

    function _saveFile(data, name, extension){
        var string = JSON.stringify(data, null, "\t");
        var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
        saveAs(blob, name + extension);
    }

    function save(name){
        if (!name || name == "" || name == undefined) name = "Output";
        var data = {};
        _saveFile(data, name, ".json");
    }

    function loadFile(data){//parsed json todo make this better - load composite
       console.log(data);
    }

    return {//return public methods
        save: save,
        loadFile: loadFile
    }
});