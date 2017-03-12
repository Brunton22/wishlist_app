angular.module('gamesService', []).factory('Games', ['$http', function($http) {

    return {
        getGames: function() {
            return $http.get('/api/games');
        }
    };
}]);
