const template = require('./UserInfo.html');

const controller = [
  '$http',
  function Controller($http) {
    const $ctrl = this;

    $ctrl.userInfo = [];

    $http.get('https://reqres.in/api/users/2').then(response => {
      $ctrl.userInfo = response.data;
      console.log(response);
    });
  }
];

export default {
  template,
  controller
};
