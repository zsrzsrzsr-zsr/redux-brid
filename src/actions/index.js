import history from '../utils/history'

export const like = courseId => ({
  type: 'LIKE',
  courseId
})

export const goComment = id => {
  history.push(`/c/${id}`)
  return { type: 'GO_COMMENT' }
}

export const deleteCmt = id => ({
  type: 'DELETE_COMMENT',
  id
})

export const addComment = comment => ({
  type: 'ADD_COMMENT',
  comment
})
