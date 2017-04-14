(function () {
    angular.module('Polyadmin', [
        'ngAnimate',
        'ui.router',
        'angular-loading-bar'
    ])
        .config(function appConfig($logProvider, $compileProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
            $urlRouterProvider.otherwise('/');
            $logProvider.debugEnabled(false);
            $locationProvider.html5Mode(true);
            cfpLoadingBarProvider.includeSpinner = false;
            $compileProvider.debugInfoEnabled(false);
        })


        .controller('AppCtrl', function AppCtrl($scope, $state) {
            $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                if (angular.isDefined(toState.data.pageTitle)) {
                    $scope.pageTitle = toState.data.pageTitle + " | My app";
                }
            })
        })
})();
