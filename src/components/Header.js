import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <Wrap>
        <Link to='/'>Haoqicat</Link>
      </Wrap>
    )
  }
}

export default Header

const Wrap = styled.div`
  background: #00bcd4;
  text-align: center;
  a {
    display: inline-block;
    color: white;
    font-size:2rem;
    padding:20px 0;
  }
`
