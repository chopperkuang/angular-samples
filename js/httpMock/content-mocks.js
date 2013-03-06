/**
 * This module is used to simulate backend server for this demo application.
 */
angular.module('app-mocks', ['ngMockE2E'])
    .run(function($httpBackend) {
        phones = ["1", "2", "3"];

        $httpBackend.whenGET('/photos').respond(200, phones);

        $httpBackend.whenPOST('/photos').respond(function(method, url, data) {
            phones.push(data);
            return [200, phones];
        });

        $httpBackend.whenGET(/.*/).passThrough();

    });