export const home = {
  name: 'home',
  url: '/',
  redirectTo: 'userList'
};

export const userList = {
  name: 'userList',
  url: '/users',
  component: 'cUserList'
};

export const userInfo = {
  name: 'userInfo',
  url: '/users/:userId',
  component: 'cUserInfo',
  params: {
    userId: {
      type: 'int'
    }
  }
};

export const notFound = {
  name: 'notFound',
  url: '/notFound',
  component: 'cNotFound'
};

export default [home, userList, userInfo, notFound];
