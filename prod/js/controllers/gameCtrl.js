angular.module('gamesCtrl', []).controller('gamesController', ['$scope', 'Games', 'IGDB', function($scope, Games, IGDB) {

    $scope.gameInfo = false;

    $scope.ggame = function(searchedGame) {
        var results = IGDB.searchGames(searchedGame)
            .then(function(data) {
                return data.data
            });
        return results;
    };

    $scope.getGame = function(gameID) {
        if (gameID != undefined) {
            IGDB.getGameInfo(gameID)
                .then(function(data) {
                    console.log(data);
                    if (data.data[0].cover === undefined) {
                        $scope.no_image = 'No Image';
                    } else {
                        $scope.cover = data.data[0].cover.cloudinary_id;
                    };

                    $scope.game = data.data[0];
                    $scope.gameInfo = true;
                }, function(error) {
                    console.log('error');
                });
        };
    };

    function getGames() {
        Games.getGames()
            .then(function(data) {
                    $scope.games = data.data;
                },
                function(error) {
                    console.log('error');
                });
    };

    getGames();

}]);
