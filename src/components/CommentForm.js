import React, { Component } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'

class CommentForm extends Component {
  state = {
    text: '',
    user: ''
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

  handleUserChange = e => {
    e.preventDefault()
    this.setState({
      user: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
    const { text, user } = this.state
    const id = shortid()
    const comment = {
      body: text,
      id,
      user,
      course: this.props.id
    }
    this.props.addComment(comment)
    this.setState({
      text: '',
      user: ''
    })
  }

  render () {
    const { text, user } = this.state
    return (
      <Wrap>
        <StyledInput
          placeholder='名字'
          value={user}
          onChange={this.handleUserChange} />
        <StyledInput
          placeholder='评论'
          value={text}
          onChange={this.handleChange} />
        <StyledButton onClick={this.handleClick}
          raised color="accent" >
          评论
        </StyledButton>
      </Wrap>
    )
  }
}

export default CommentForm

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const StyledInput = styled(Input)`
  width:100%;
  text-align:left;
  flex-grow: 1;
  margin-bottom:20px;
`

const StyledButton = styled(Button)`
  width:20%;
  text-align:left;
  color: white;
`
