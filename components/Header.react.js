/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @jsx React.DOM
 */

var React = require('react-native');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');
var {
  View,
  Text,
  StyleSheet,
} = React;

var Header = React.createClass({

  /**
   * @return {object}
   */
   /*
   <header id="header">
     <h1>todos</h1>





   </header>
   */
  render: function() {
    return (
      <View>
      <Text style={styles.titleText}>Header</Text>
      <TodoTextInput
        id="new-todo"
        placeholder="What needs to be done?"
        onSave={this._onSave}
      />
      </View>

    );
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  _onSave: function(text) {
    console.log('text--->',text);
    if (text.trim()){
      TodoActions.create(text);
    }

  }

});

var styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

module.exports = Header;
