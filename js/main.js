/**
 * Created by aghassaei on 7/9/15.
 */

require.config({

    baseUrl: 'js',

    paths: {
        text: '../dependencies/require/text',
        bin: '../dependencies/require/bin',

        jquery: '../dependencies/jquery-2.1.3.min',
        underscore: '../dependencies/underscore',
        backbone: '../dependencies/backbone',
        flatUI: '../dependencies/flatUI/js/flat-ui',
        bootstrapSlider: '../dependencies/bootstrap-slider/bootstrap-slider',
        fileSaverLib: '../dependencies/loaders/FileSaver.min',

        //three
        three: '../dependencies/three',
        orbitControls: '../dependencies/OrbitControls',
        threeModel: 'three/ThreeModel',
        threeView: 'three/ThreeView',

        //plists
        plist: 'plists/PList',

        //models
        appState: 'models/AppState',
        fileSaver: 'models/FileSaver',

        //UI
        navbar: 'menus/Navbar',
        navViewMenu: 'menus/NavViewMenu',//view dropdown
        ribbon: 'menus/Ribbon',
        modalView: 'menus/ModalView',
        menuWrapper: 'menus/MenuWrapperView',
        menuParent: 'menus/MenuParentView',

        //Submenus
        defaultMenu: 'menus/DefaultMenuView'
    },

    shim: {
        three: {
            exports: 'THREE'
        },
        orbitControls: {
            deps: ['three'],
            exports: 'THREE'
        },
        fileSaverLib: {
            exports: 'saveAs'
        },
        flatUI: {
            deps: ['jquery']
        },
        bootstrapSlider:{
            deps: ['jquery'],
            exports: '$'
        }
    }

});

//require.onError = function (err) {
//    console.log(err.requireType);
//    console.log(err.requireModules);
//    throw err;
//};

//init stuff
require(['appState', 'navbar', 'ribbon', 'menuWrapper', 'threeModel', 'threeView', 'flatUI', 'bootstrapSlider'],
    function(appState, Navbar, Ribbon, MenuWrapper, three, ThreeView){

    new MenuWrapper({model:appState});
    new Navbar({model:appState});
    new Ribbon({model:appState});
    new ThreeView({model:three});
});

