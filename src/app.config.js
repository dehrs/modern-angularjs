import { Visualizer } from '@uirouter/visualizer';

import states from './app.states';

export function config($logProvider, $stateProvider, $urlServiceProvider) {
  'ngInject';

  $logProvider.debugEnabled(true);

  states.forEach(state => $stateProvider.state(state));

  $urlServiceProvider.rules.otherwise({ state: 'notFound' });
}

export function run($uiRouter) {
  'ngInject';
  //$uiRouter.plugin(Visualizer);
}
