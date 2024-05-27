import request from '@/utils/request.js'

export const MessageListService = () => {
  return request.get('/message')
}
export const AddMessageService = (messageData) => {
  return request.post('/message', messageData)
}
export const UpdataMessageService = (messageData) => {
  return request.put('/message', messageData)
}
export const DeleteMessageService = (id) => {
  return request.delete('/message?id=' + id)
}
