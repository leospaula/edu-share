import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { authorizeUser } from '../actions/userActions'
import { addComment, fetchComments } from '../actions/commentActions'
import CommentForm from '../components/CommentForm'
import Comments from '../components/Comments'

class CommentContainer extends React.Component{
  componentDidMount(){
    this.props.authorizeUser()
  }

  render(){
    return(
      <div>
        <Route exact path={`${this.props.relativePath}/comments/new`}>
          {this.props.user.valid ? 
            <CommentForm 
              resourceId={this.props.resourceId} 
              userId={this.props.user.current.id}
              addComment={this.props.addComment}
            /> : 
            <Redirect to="/login" />}
        </Route>
        <Comments resourceId={this.props.resourceId}/>
      </div>
    )
  }
}

export default connect(state => ({user: state.user}), { authorizeUser, addComment, fetchComments })(CommentContainer)