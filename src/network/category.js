import {
  request
} from './request'
// 请求分类数据
export function getCategory() {
  return request({
    url: '/category'
  })
}
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
