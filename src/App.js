var React = require('react'),
    Slides = require('./Slides.js').default,
    SphereScene = require('./scenes/Spheres.js').default,
    BasicScene = require('./scenes/basic.js').default,
    SceneContainer = require('./SceneContainer.js').default,
    RouterMixin = require('react-mini-router').RouterMixin;  
   
var App = React.createClass({

    mixins: [RouterMixin],

    routes: {
        '/': 'home',
        '/message/:text': 'message',
        '/basic_aframe': 'basic_aframe'
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
    }

});

module.exports = App;