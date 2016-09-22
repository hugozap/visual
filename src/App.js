var React = require('react'),
    Slides = require('./Slides.js').default,
    SphereScene = require('./scenes/Spheres.js').default,
    BasicScene = require('./scenes/basic.js').default,
    SceneContainer = require('./SceneContainer.js').default,
    GridScene1 = require('./scenes/gridscene.js').default,
    GridScene2 = require('./scenes/gridscene2.js').default,
    RouterMixin = require('react-mini-router').RouterMixin;  
   
var App = React.createClass({

    mixins: [RouterMixin],

    routes: {
        '/': 'home',
        '/message/:text': 'message',
        '/basic_aframe': 'basic_aframe',
        '/grid1':'grid1',
        '/grid2':'grid2',
    },

    render: function() {
        return this.renderCurrentRoute();
    },

    

    message: function(text) {
        return <div>{text}</div>;
    },

    notFound: function(path) {
        return <div class="not-found">Page Not Found: {path}</div>;
    },

    home: function() {
        return <Slides/>;
    },

    basic_aframe: function() {
        return <BasicScene/>
    },
    grid1: function() {
              
       return <GridScene1/>
    },

    grid2: function() {
              
       return <GridScene2/>
    }

});

module.exports = App;