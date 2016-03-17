import fetch from '../utils/fetch'

export function login() {
  // return fetch('/example/user/getUserInfo');

  // Mock code
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({username: 'zhining'})
    }, 1000)
  })

}


export function fetchUser() {
  // Mock code
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject({username: 'zhining'})
    }, 1000)
  })
}
