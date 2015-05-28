/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

var myTemplateConfig = {
  colors: [ "#F00", "#0F0", "#00F" ], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    spacingX: 50
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: true,
      displayHash: false,
      font: "normal 12pt Arial"
    }
  }
};
var myTemplate = new GitGraphTemplate( myTemplateConfig );

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: "blackarrow"  // could be: "blackarrow" or "metro" or myTemplate (custom Template object)
  //, mode: "compact"     // special compact mode : hide messages & compact graph
};
var gitGraph = new GitGraph( config );

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

// Create branch named "master"
var master = gitGraph.branch( "master" );

var commitCreatorRepo = {
  dotColor: "#48D1CC",
  dotSize: 10,
  dotStrokeWidth: 10,
  messageHashDisplay: true,
  messageAuthorDisplay: true,
  message: "Initial commit",
  author: "Chris Aniszczyk <caniszczyk@gmail.com>"
};

var commitCreateREADME = {
  dotColor: "#48D1CC",
  dotSize: 10,
  dotStrokeWidth: 10,
  messageHashDisplay: true,
  messageAuthorDisplay: true,
  message: "Create README.md",
  author: "Chris Aniszczyk <caniszczyk@gmail.com>"
};

// Commit on HEAD Branch which is "master"
gitGraph.commit( commitCreatorRepo );

gitGraph.commit( commitCreateREADME );

/***********************
 *    FORKS            *
 ***********************/

var fork = gitGraph.branch( "fork" );

var commitCreateJQPlugin = {
  dotColor: "#00C957",
  dotSize: 10,
  dotStrokeWidth: 10,
  messageHashDisplay: true,
  messageAuthorDisplay: true,
  message: "init jquery plugin",
  author: "Willy Aguirre <marti1125@gmail.com>"
};

fork.commit( commitCreateJQPlugin );

master.checkout();

var commitMergeMaster = {
  dotColor: "#48D1CC",
  dotSize: 10,
  dotStrokeWidth: 10,
  messageHashDisplay: true,
  messageAuthorDisplay: true,
  message: "Merge pull request #1 from marti1125/master",
  author: "Chris Aniszczyk <caniszczyk@gmail.com>"
};

fork.merge( master, commitMergeMaster );

var commitMergeMaster = {
  dotColor: "#48D1CC",
  dotSize: 10,
  dotStrokeWidth: 10,
  messageHashDisplay: true,
  messageAuthorDisplay: true,
  message: "Merge pull request #1 from marti1125/master",
  author: "Chris Aniszczyk <caniszczyk@gmail.com>"
};

fork.commit({
  dotColor: "#00C957",
  message:  "add a template directory and customs messages for plugin",
  author:   "Willy Aguirre <marti1125@gmail.com>"
});

master.checkout();

fork.merge( master, {
  dotColor: "#48D1CC",
  message:  "Merge pull request #2 from marti1125/master",
  author:   "Willy Aguirre <marti1125@gmail.com>"
} );

// Add few commits on master.
//gitGraph.commit( "My second commit" ).commit( "Add awesome feature" );

// Create a new "dev" branch from "master"
//var dev = gitGraph.branch( "dev" );
//dev.commit( "Youhou \\o/" );

// Commit again on "master"
//master.commit( "I'm the master !" );

// Advanced commit method with style and specific author (HEAD)
/*var commitConfig = {
  dotColor: "white",
  dotSize: 10,
  dotStrokeWidth: 10,
  messageHashDisplay: false,
  messageAuthorDisplay: true,
  message: "Alors c'est qui le papa ?",
  author: "Me <me@planee.fr>"
};*/
//gitGraph.commit( commitConfig );

/***********************
 *      CHECKOUT       *
 ***********************/

// Checkout on master branch for create "test" since master
//master.checkout();

/***********************
 *       DETAILS       *
 ***********************/

/*var commitWithDetailsConfig = {
  message: "test",
  detail: "detail" // Id of detail div (available in normal vertical mode only)
};
gitGraph.commit( commitWithDetailsConfig ).commit();
dev.commit().commit(); // 2 default Commit on "dev"*/

/***********************
 *    CUSTOMIZATION    *
 ***********************/

/*gitGraph.author = "marti1125 <fabien0102@planee.fr>";
master.commit();*/

/***********************
 *       MERGES        *
 ***********************/

//master.checkout();

// Merge "dev" branch into HEAD (which is "master"), with a default message
//dev.merge();

// Create a "test" branch and merge in into "master" with a custom message.
/*var test = gitGraph.branch( "test" );
test.commit( "Final commit" );
test.merge( master, "My special merge commit message" );

// Then, continue committing on the "test" branch
test.commit( "It's works !" );*/

/***********************
 *       EVENTS        *
 ***********************/

/*gitGraph.canvas.addEventListener( "commit:mouseover", function ( event ) {
  console.log( "You're over a commit.", "Here is a bunch of data ->", event.data );
} );*/
