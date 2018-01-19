const initialState = [
  {
    id: '1',
    user: 'peter',
    body: '用 React 配合上 Meteor 来制作成一个单页面应用（ SPA ） 架构的聊天室',
    course: '1'
  },
  {
    id: '2',
    user: 'billie',
    body: '学完课程之后，可以自己搭建一个网站了',
    course: '1'
  },
  {
    id: '3',
    user: 'Jay',
    body: 'React 框架的最佳入门课程',
    course: '1'
  },
  {
    id: '4',
    user: 'jhon',
    body: '一个摩登 JS 开发者应该具备的知识大全',
    course: '2'
  },
  {
    id: '5',
    user: 'jake',
    body: 'nice',
    course: '2'
  }
]

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        action.comment
      ]
    case 'DELETE_COMMENT':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export default comments
