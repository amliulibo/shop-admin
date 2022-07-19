import axios from 'axios'
const login = (formdata) => axios.post('/api/admin/login', formdata)

const register = (formdata) => axios.post('/api/admin/register', formdata)

const getUserInfo = (formdata) =>
  axios.get('/api/admin/info', { params: formdata })

const list = (formdata) => axios.get('/api/admin/list', { params: formdata })

const updateUserInfo = (formdata) =>
  axios.post('/api/admin/info/update', formdata)

export default {
  login,
  register,
  getUserInfo,
  list,
  updateUserInfo,
}
