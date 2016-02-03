(function() {
  'use strict';

  angular
    .module('firstTask')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1454481713606;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }


    $scope.cats = [
      {name: "Test", image: "http://www.planwallpaper.com/static/images/kitty-cat.jpg"},
      {name: "Test2", image: "http://img0.liveinternet.ru/images/attach/c/1//55/896/55896604_42946458_36889942_1229630540_Alexey20Bushuev259345.jpg"},
      {name: "Test3", image: "http://dreamatico.com/data_images/cat/cat-6.jpg"},
      {name: "Test3", image: "http://cdn.sheknows.com/articles/2012/10/isolated-cat.jpg"}
    ];
  }
})();
