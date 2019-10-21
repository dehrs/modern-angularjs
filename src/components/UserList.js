const template = require('./UserList.html');

const controller = [
  '$http',
  '$state',
  function Controller($http, $state) {
    const $ctrl = this;

    const getUsers = (n = 1) => {
      $http.get('https://reqres.in/api/users?page=' + n).then(response => {
        totalPages = response.data.total_pages;
        $ctrl.usuarios = response.data.data;
      });
    };

    let totalPages = 0;

    $ctrl.usuarios = [];

    $ctrl.getTotalPages = () => new Array(totalPages);

    $ctrl.pageClick = n => getUsers(n);

    $ctrl.showUsers = id => $state.go('userInfo', { userId: id });

    getUsers();
  }
];

export default {
  template,
  controller
};
