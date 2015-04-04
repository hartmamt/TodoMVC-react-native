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
var ReactPropTypes = React.PropTypes;

var {
  View,
  TextInput,
  StyleSheet,
} = React;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({

  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  /**
   * @return {object}
   */
   /*
   <input
     className={this.props.className}
     id={this.props.id}
     placeholder={this.props.placeholder}
     onBlur={this._save}
     onChange={this._onChange}
     onKeyDown={this._onKeyDown}
     value={this.state.value}
     autoFocus={true}
     />
     */
  render: function() /*object*/ {
    return (
      <TextInput
        id={this.props.id}
        placeholder={this.props.placeholder}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onBlur={this._save}
        onChangeText={(text) => this.setState({value: text})}
        value={this.state.value}
        onKeyDown={this._onKeyDown}
      />


    );
  },

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _save: function() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  /**
   * @param  {object} event
   */
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

});

module.exports = TodoTextInput;
