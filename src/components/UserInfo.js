const template = require('./UserInfo.html');

const bindings = {
  $transition$: '<'
};

const controller = [
  '$http',
  '$state',
  function Controller($http, $state) {
    const $ctrl = this;

    $ctrl.$onInit = () => {
      const params = $ctrl.$transition$.params();
      $http
        .get('https://reqres.in/api/users/' + params.userId)
        .then(response => {
          $ctrl.userInfo = response.data.data;
        });
    };

    $ctrl.updateUser = () => {
      $http
        .put('https://reqres.in/api/users/' + $ctrl.userInfo.id, $ctrl.userInfo)
        .then(response => {
          $state.go('userList');
        });
    };
    $ctrl.userInfo = {};
  }
];

export default {
  template,
  controller,
  bindings
};
