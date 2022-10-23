import React, { Component, PropTypes } from 'react'

export default class TodoList extends Component {
   render() {
      return (
         <div className="numberdisplay" >
           <h1 className="number-text">{this.props.todos} </h1>
         </div>
      )
   }
}