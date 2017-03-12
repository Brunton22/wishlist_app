angular.module('igdbService', []).factory('IGDB', ['$http', function($http) {
        //insert IGDB api key here
    var key = '________________';

    return {
        searchGames: function(searchedGame) {
            var config = {
                params: {
                    search: searchedGame,
                    fields: 'name',
                },
                headers: {
                    'X-Mashape-Key': key,
                }
            }

            return $http.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?', config);
        },

        getGameInfo: function(gameID) {
            var config = {
                params: {
                    fields: 'name,first_release_date,cover',
                },
                headers: {
                    'X-Mashape-Key': key,
                }
            }
            return $http.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/' + gameID + '?', config);
        }
    };
}])
