/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var TodoApp = require('./components/TodoApp.react')

var {
  AppRegistry,
} = React;

AppRegistry.registerComponent('TodoApp', () => TodoApp);
