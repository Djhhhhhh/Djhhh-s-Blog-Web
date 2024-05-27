import request from '@/utils/request.js'

export const EssayList = (params) => {
  return request.get('/essay', { params: params })
}
export const EssayAdd = (essay) => {
  console.log(essay.value)
  return request.post('/essay', essay.value)
}
export const EssayDelete = (id) => {
  return request.delete('/essay?id=' + id)
}
export const EssayUpdate = (essay) => {
  return request.put('/essay/update', essay.value)
}
export const EssayFind = (id) => {
  return request.get('/essay/id?id=' + id)
}
