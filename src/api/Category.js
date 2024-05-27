import request from '@/utils/request.js'

export const CategoryListService = () => {
  return request.get('/category')
}
export const AddCategoryService = (categoryData) => {
  return request.post('/category', categoryData)
}
export const UpdataCategoryService = (categoryData) => {
  return request.put('/category', categoryData)
}
export const DeleteCategoryService = (id) => {
  return request.delete('/category?id=' + id)
}
