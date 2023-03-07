import request from '@/utils/request'

const createArticle = (data) => {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export { createArticle }
