const initialState = [
   {
     id: '1',
     poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
     title: 'Meteor-React 小鸟',
     likes: 54,
     show:false
   },
   {
     id: '2',
     poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
     title: 'Happypeter 的摩登 JS 王国',
     likes: 60,
     show:false
   },
   {
    id: '3',
    poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
    title: '跟 Peter 学 HTTP',
    likes:83,
    show:false
  },
  {
    id: '4',
    poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
    title: 'Webpack-React 鼹鼠',
    likes: 72,
    show:false
  },
  {
    id: '5',
    poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
    title: 'Gulp-Flexbox 响应式网站课程',
    likes:66,
    show:false
  },
  {
    id: '6',
    poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
    title: '驾驭命令行怪兽',
    likes: 45,
    show:false
  }
  
 ]

 const courses = (state = initialState, action) => {
   switch(action.type){
     case 'LIKE':
     const {courseId}=action
    return state.map(
        t =>{
          if(t.id === courseId){
            return {
              ...t,
              likes:t.likes+1,
              show:!t.show
            }
          }
          return t
        }
      )
    default :
      return state
   }
 }


 export default courses
