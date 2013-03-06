'use strict';

app.factory('Person', function($rootScope) {

    var LOCAL_STORAGE_ID = 'PersonLocal',
        personString = window.localStorage[LOCAL_STORAGE_ID];

    var person = personString ? JSON.parse(personString) : {
        username: undefined
    };

    $rootScope.$watch(
        function() {
            return person;
        },
        function() {
            window.localStorage[LOCAL_STORAGE_ID] = JSON.stringify(person);
        },
        true);

    return person;
});