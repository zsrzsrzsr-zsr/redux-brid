import React, { Component } from 'react'
import styled from 'styled-components'
import CommentList from './CommentList'
import Card from 'material-ui/Card'
import CommentForm from './CommentForm'

class Course extends Component {
  render () {
    const {
      commentsByCourseId,
      deleteCmt,
      match,
      addComment,
      coursesById
    } = this.props
    const { id } = match.params
    const comments = commentsByCourseId[id] || []
    const course = coursesById[id] || {}
    return (
      <Wrap>
        <Upper>
          <Poster>
            <img src={course.poster} alt=''/>
          </Poster>
        </Upper>
        <Lower>
          <CommentWrap>
            <CommentList comments={comments} deleteCmt={deleteCmt} />
            <CommentForm id={id} addComment={addComment} />
          </CommentWrap>
        </Lower>
      </Wrap>
    )
  }
}

export default Course

const Wrap = styled.div`
`

const Upper = styled.div`
  min-height: 30vh;
  background: #00bcd4;
  display: flex;
`

const Lower = styled.div`
  min-height: 60vh;
  background-color: #eeeeee;
  padding-top: 20px;
`

const CommentWrap = styled.div`
  background: #fff;
  min-height: 10vh;
  width: 600px;
  margin: 0 auto;
`

const Poster = styled(Card)`
  margin: 30px auto;
  width: 300px;
  img {
    width: 100%;
    display: block;
  }
`
