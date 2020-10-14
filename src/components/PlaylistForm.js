import React from 'react'
import { handleInputChange } from '../utilities'
import PlaylistContext from './PlaylistContext'

class PlaylistForm extends React.Component{
  state ={
    name: ""
  }
  render(){
    return (
      <div>
        <form>
          <label>Add New Playlist: </label>
          <input type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
          <label>Select Playlist: </label>
          <select></select>
        </form>
        <PlaylistContext 
          context={this.props.location.context}
          displayGrade={this.props.displayGrade}
          resources={this.props.resources}   
        />
      </div>
    )
  }
}

export default PlaylistForm