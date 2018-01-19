import React, { Component } from 'react'
import HomeCardAction from './HomeCardAction'
import styled from 'styled-components'
import bgImg from '../assets/bg-png'
import heart from '../assets/heart.png'
import {CSSTransition} from 'react-transition-group'

class Home extends Component {
  render () {
    const {courses,like,goComment,commentsByCourseId} = this.props
    console.log('xxxxx',this.props);
    const list = courses.map(
      t=>(
        <CourseCard key={t.id}>
          {/*<img src={t.poster} alt="poster"/>*/ }
          <CSSTransition in={t.show} timeout = {2000} classNames = 'like' >
            <div className='like-heart'>{t.likes}</div>
          </CSSTransition>
          <Title key={t.id}>{t.title}</Title>
            <HomeCardAction likes = {t.likes} like={like} goComment={goComment} id={t.id} comments={commentsByCourseId[t.id]||[]}/> 
        </CourseCard>
        
      )
    )
    return (
      <Wrap>
        {list}
      </Wrap>
    )
  }
}

export default Home


 const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
 `
 const CourseCard = styled.div`
   width:40%;
   height:200px;
   background:url(${bgImg}) no-repeat center center;
   ${'' /* background-size:contain; */}
   position:relative;
   margin-left:30px;
   margin-top:50px;
   

   .like-heart{
    background:url(${heart}) center no-repeat;
    background-size:contain;
    font-size:30px;
    padding:30px;
    position:absolute;
    top:50%;
    left:50%;
    color:#ff4081;
    transform:translateX(-50%) translateY(-50%) scale(1);
    opacity:0;
    transition:all 0.5s;
  }

  .like-enter.like-heart{
    opacity:1;
    transform:translateX(-50%) translateY(-50%) scale(2);
  }

  .like-exit.like-heart{
    opacity:1;
    transform:translateX(-50%) translateY(-50%) scale(2);
  }
`
const Title = styled.div`
  width:100%;
  margin-top:200px;
  font-size:1em;
  color:#666;
  background-color: rgb(242, 244, 246);
`