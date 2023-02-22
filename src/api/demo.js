import request from '@/utils/request'

const getData = (data) => {
  return request({
    url: '/test.php',
    method: 'get',
    data
  })
}

export { getData }
