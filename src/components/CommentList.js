import React, { Component } from 'react'
import styled from 'styled-components'
import Delete from 'material-ui-icons/Delete'

class CommentList extends Component {
  render () {
    const { comments } = this.props
    const list = comments.map(
      t => (
        <Comment key={t.id}>
          <User>
            {t.user}:
          </User>
          <Body>
            {t.body}
          </Body>
          <Action onClick={() => this.props.deleteCmt(t.id)}>
            <Delete />
          </Action>
        </Comment>
      )
    )
    return (
      <Wrap>
        {list}
      </Wrap>
    )
  }
}

export default CommentList

const Wrap = styled.div`
  * {
    padding: 10px;
  }
`

const Comment = styled.div`
  display: flex;
`

const User = styled.div`
  font-weight: 600;
`

const Body = styled.div`
  flex-grow: 1;
`

const Action = styled.div`
  cursor: pointer;
  padding-top: 0;
  svg {
    padding: 10px;
  }
`
