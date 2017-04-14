(function () {
    "use strict";
    angular.module("Polyadmin")

        .config(function config($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'HomeCtrl as vm',
                    templateUrl: 'app/home/home.html',
                    data: {pageTitle: 'Dashboard'}
                })
        })

        .controller('HomeCtrl', function () {

            var vm = this, c = console;

            //////////////////////////////////////////////////////////////////////////
        })

}());