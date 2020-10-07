import React from 'react'
import ResourceThumbnail from './ResourceThumbnail'

const Resources = props => {
  return (
    <div>
      {props.resources.map(resource => <ResourceThumbnail 
        key={resource.id} 
        resource={resource}
        displayGrade={props.displayGrade}
        />
      )}
    </div>
  )
}

export default Resources