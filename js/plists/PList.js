//all property lists for the app, these are "static" variables


define(['three'], function(THREE){

    return {

        allMenus: {
            navDesign:{
                name: "Design",
                tabs: {
                    designDraw: "Draw",
                    designConstraints: "Constraints"
                }
            },
            navSimulate:{
                name: "Simulate",
                tabs: {
                    simAnimate: "Animate"
                }
            },
            navOptimize: {
                name: "Optimize",
                tabs: {
                    optConstraints: "Constraints",
                    optRun: "Run"
                }
            },
            navFab: {
                name: "Make",
                tabs:{
                    makeFlatStock: "Flat Stock"
                }
            },
            navHinge: {
                name: "Hinge",
                parent: "navDesign",
                tabs:{
                    hingeEdit: "Edit"
                }
            },
            navLink: {
                name: "Link",
                parent: "navDesign",
                tabs:{
                    linkEdit: "Edit"
                }
            }
        }

    }
});