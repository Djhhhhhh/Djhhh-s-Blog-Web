import request from '../utils/request.js'

export const userRegisterService = (registerData) => {
  const params = new URLSearchParams()
  for (let key in registerData) {
    params.append(key, registerData[key])
  }
  return request.post('/user/register', params)
}

export const userLoginService = (loginData) => {
  const params = new URLSearchParams()
  for (let key in loginData) {
    params.append(key, loginData[key])
  }
  return request.post('/user/login', params)
}

export const userInfoGetService = () => {
  return request.get('/user/userInfo')
}

export const userInfoUpdateService = (userInfo) => {
  return request.put('/user/update', userInfo)
}

export const userInfoUpdatePwdService = (userInfo) => {
  const params = {
    old_pwd: userInfo.value.oldpassword,
    new_pwd: userInfo.value.nowpassword,
    re_pwd: userInfo.value.Repassword
  }
  return request.patch('/user/updatePwd', params)
}

export const userAvatarUpdataService = (avatarUrl) => {
  const params = new URLSearchParams()
  params.append('photo', avatarUrl)
  return request.patch('/user/updateAvatar', params)
}
