import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { like, goComment } from '../actions'
import { getCommentsByCourseId } from '../selectors'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state =>({
  courses: state.courses,
  commentsByCourseId: getCommentsByCourseId(state)
})
// mapDispatchToProps 的简写形式
export default connect(mapStateToProps, {
  like,
  goComment
})(HomeContainer)
