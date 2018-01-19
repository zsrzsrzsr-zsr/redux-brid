export const getCommentsByCourseId = state => {
  return state.comments.reduce(
    (obj, t) => {
      obj[t.course] = obj[t.course] || []
      obj[t.course].push(t)
      return obj
    },
    {}
  )
}

export const getCoursesById = state => {
  return state.courses.reduce(
    (obj, t) => {
      obj[t.id] = t
      return obj
    },
    {}
  )
}
