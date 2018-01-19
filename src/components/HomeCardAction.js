import React, { Component } from 'react'
import styled from 'styled-components'
import ThumbUp from 'material-ui-icons/ThumbUp';
import Comment from 'material-ui-icons/Comment';

 class HomeCardAction extends Component {
   render () {

     const {likes ,like ,goComment,id,comments,courses} = this.props
     console.log(this.props);
     return (
       <Wrap>
         <Button onClick = {()=>like(id)}>
           <ThumbUp />
           {likes}
         </Button>
         <Button onClick = {()=>goComment(id)}>
           <Comment />
          {comments.length}
         </Button>
       </Wrap>
     )
   }
 }

 export default HomeCardAction

 const Wrap = styled.div`
   width:100%;
   display: flex;
   justify-content: space-between;
   background-color: rgb(242, 244, 246);
 `

 const Button = styled.div`
   background-color: rgb(242, 244, 246);
   color: rgb(76, 87, 101);
   height: 36px;
   :hover {
     cursor: pointer;
   }
   line-height: 36px;
   margin-bottom:30px;
 `
