require('./assets/main.scss');

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import NotFound from './components/NotFound';
import UserList from './components/UserList';
import UserInfo from './components/UserInfo';

import { config, run } from './app.config';

angular
  .module('app', [uirouter])
  .config(config)
  .component('cNotFound', NotFound)
  .component('cUserList', UserList)
  .component('cUserInfo', UserInfo)
  .run(run);
