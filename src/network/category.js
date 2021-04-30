import {
  request
} from './request'
// 请求分类左边数据
export function getCategory() {
  return request({
    url: '/category'
  })
}
// 分类右边数据
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

// 分类推荐数据
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
