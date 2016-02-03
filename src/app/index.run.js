(function() {
  'use strict';

  angular
    .module('firstTask')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
