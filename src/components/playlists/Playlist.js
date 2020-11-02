import React from 'react'
import ResourceThumbnail from '../resources/ResourceThumbnail'

const Playlist = props => {
  if (!props.loadStatus || props.loadStatus === "pending"){
    return(
      <div>Loading...</div>
    )
  } else if (!props.playlist){
    return(
      <div>Resource Not Found</div>
    )
  } else {
    return(
      <div>
        <h2 className="my-3">{props.playlist.name}</h2>
        {props.playlist.resources.map(resource => 
          <div key={resource.id} className="my-2">
            <ResourceThumbnail 
              resource={resource}
              inPlaylist={props.isResourceInPlaylist(resource.id)}
              playlist={props.playlist}
              removeResourceFromPlaylist={props.removeResourceFromPlaylist}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Playlist