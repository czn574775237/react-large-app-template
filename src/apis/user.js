import http from '../utils/http';

export function login() {
  // return http('/example/user/getUserInfo');

  // Mock code
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({username: 'zhining'});
    }, 1000);
  });
  
}