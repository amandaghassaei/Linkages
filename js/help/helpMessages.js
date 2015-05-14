/**
 * Created by aghassaei on 4/29/15.
 */

//all help massages have text, may have img as well

function buildHelpMessages(){
    return {
        ga:{
            title: "Genetic Algorithm",
            text: '<a href="http://en.wikipedia.org/wiki/Genetic_algorithm" target="_blank">Genetic algorithms</a> (GAs) are a type of optimization strategy based on the principals of darwinian evolution, ie "survival of the fittest".  In general a GA works by creating a "population" of "individuals" that are all slightly different from each other.  Individuals in a population are selected based on their "fitness" to mate and pass their traits onto the next generation.  During the mating process, traits of the parent individuals may be mutated or crossed with each other to introduce variance into the next generation.<br/><br/>'+
                    'In the context of this app, an "individual" is a linkage design, and the traits it carries are the relative lengths of the links that make up the linkage.  Its fitness is evaluated based on the fitness function you define; for example, it may be more fit if its motion follows a desired trajectory.'
        },
        hillClimbing:{
            title: "Hill Climbing",
            text: '<a href="http://en.wikipedia.org/wiki/Hill_climbing" target="_blank">Hill Climbing</a> is an optimization strategy that works by making small changes to an initial guess and incrementally moving towards better and better solutions.  In each generation the current best guess is mutated slightly and evaluated for fitness; if the mutant is more fit than the parent, the parent is thrown out the mutant becomes the current best guess.  This process continues until no further improvements in fitness can be made.'
        },
        nelderMead:{
            title:"Nelder-Mead",
            text:'<a href="http://en.wikipedia.org/wiki/Nelder%E2%80%93Mead_method" target="_blank">Nelder-Mead</a> is an optimization strategy that performs well in high dimensional space.  It works by constructing a <a href="http://en.wikipedia.org/wiki/Polytope" target="_blank">polytope</a> whose vertices correspond to possible solutions to an optimization problem.  In each iteration of the algorithm, the parameter space is explored by reflecting, shrinking, or expanding the polytope across many possible parameter dimensions.  In the context of this app, each linkage length and the angle that a leg joins the body of a walker is a dimension of parameter space.',
            img:"http://upload.wikimedia.org/wikipedia/commons/9/96/Nelder_Mead2.gif"
        },
        conjugateGrad:{
            title: "Conjugate Gradient",
            text: '<a href="http://en.wikipedia.org/wiki/Conjugate_gradient_method" target="_blank">Conjugate Gradient</a> is an optimization strategy that seeks to move in the direction of increasing fitness across parameter space.'
        },
        populationSize:{
            title: "Population Size",
            text: 'This sets the number of individuals in your genetic algorithm.  Larger populations will run slower, but have more genetic diversity.  See Genetic Algorithm help for more information.'
        },
        walkingMetric: {
            title: "Walking Fitness Metric",
            text:'This fitness metric measures the ability of a walking machine made from an assembly of leg linkages to locomote across a simulated physics terrain.  A walker assembly with six legs is shown above, with one leg linkage highlighted.',
            img: "/assets/imgs/legAssembly.jpg"
        },
        numLegPairs: {
            title: "Number of Leg Pairs",
            text: 'This sets the number of legs to use when constructing a walking machine from a leg linkage design.   A pair of legs is constructed by reflecting one leg linkage of phase <i>theta</i> across the y-axis to create a complimentary leg of phase <i>pi - theta</i>.  Then n pairs of legs are added to the central drive crank, each pair out of phase by <i>2pi/n</i> radians.<br/><br/>A walker assembly with three legs pairs (six legs in total) is shown above, with one leg linkage highlighted.',
            img: "/assets/imgs/legAssembly.jpg"
        },
        terrainType: {
            title: "Terrain",
            text:'Choose the type of terrain for the fitness evaluation.  For example, a terrain with inclines and declines might evolve walkers with more asymmetric gaits.  A terrain will many small obstacles may evolve walkers with higher step heights.  Some sample terrain types are shown above: flat (A), incline/decline (B), and small obstacles (C).',
            img: "/assets/imgs/courses.jpg"
        },
        evalPeriod: {
            title: "Evaluation Period",
            text:'The number of ticks of the physics simulator to evaluate the current designs.  Higher evaluation durations will take longer to compute, but will allow the walker to settle into regular motion.'
        },
        friction: {
            title: "Friction",
            text:'Between 0 and 1, this number sets the amount of friction in the physics simulation.  No friction will make walking impossible.'
        },
        targetPathMetric: {
            title: "Target Path Fitness Metric",
            text:'This fitness metric lets you optimize a planar linkage to fit a given target path.'
        },
        outputHinge: {
            title: "Output Hinge Index",
            text:'The index of the hinge whose motion you are trying to optimize.'
        },
        simulatedAnnealing: {
            title: "Simulated Annealing",
            text:'<a href="http://en.wikipedia.org/wiki/Simulated_annealing" target="_blank">Simulated Annealing</a> is a technique inspired by metallurgy that allows you to control the way your optimization technique introduces variance and avoid local optima.',
            img: "http://upload.wikimedia.org/wikipedia/commons/d/d5/Hill_Climbing_with_Simulated_Annealing.gif"
        },
        mutationRate: {
            title: "Mutation Rate",
            text:'<a href="http://en.wikipedia.org/wiki/Mutation_rate" target="_blank">Mutation Rate</a> sets the probability that any design parameter might spontaneously mutate as it passes from parent to child generations.'
        },
        maxLengthChange: {
            title: "Maximum Length Change",
            text:'Set the maximum percent change that any link in a linkage may spontaneously mutate by.  Links are allowed to lengthen or contract.'
        },
        minLinkLength: {
            title: "Minimum Link Length",
            text:'Set the minimum allowed link length.  This ensures that the <a href="http://en.wikipedia.org/wiki/Torque" target="_blank">lever arm</a> of all links in the linkage are sufficiently long to not require excess torque to rotate.'
        },
        mutateTopology: {
            title: "Mutate Topology",
            text:'Currently, optimization of the walkers is only being performed on the leg linkage parameters - the relative lengths of links in the mechanisms.  However, it would be interesting to also be able to mutate the linkage topology - the connectivity and number of links and hinges that for a linkage.<br/><br/>The mutation of linkage topology requires a set of rules that governs the possible topology changes.  One constraint that should be held throughout this process is that the mutation should not alter the combined degrees of freedom of a linkage (combined degrees of freedom always equals 1).  Some example mutation rules could be:<br/><br/>A single link mutates into a rigid three-bar linkage<br/>A three bar linkage mutates into a four-bar linkage (check that the total combined degrees of freedom of the linkage do not increase)<br/>A three bar linkage mutates into a four-bar linkage (check that the total combined degrees of freedom of the linkage do not decrease)<br/><br/>These mutation processes are illustrated above.',
            img: "/assets/imgs/topMutationRules.jpg"
        }
    }
};