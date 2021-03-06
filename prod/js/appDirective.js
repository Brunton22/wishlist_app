angular.module('gameApp').directive('gameInput', function(){
        return {
                template: '<md-autocomplete md-selected-item="selectedGame" '+
                			'md-selected-item-change="getGame(selectedGame.id)" '+
                			'md-search-text="searchedGame" '+
                			'md-min-length=2 '+
                			'md-items="item in ggame(searchedGame)" '+
                			'md-item-text="item.name" '+
                                        'md-dropdown-position=bottom>' +
                	'<md-item-template>' +
                		'<span md-highlight-text="searchText">{{ item.name }}</span>'+
                	'</md-item-template>'+

                '</md-autocomplete>'
        };
});

angular.module('gameApp').directive('gameInfo', ['$compile', function($compile){
        return {
                template: '<div class="row game-info">' +
                        '<div class="row game-img-container">' +
                        '<img src="https://images.igdb.com/igdb/image/upload/t_cover_small/{{cover}}.jpg" alt={{no_image}}>' +
                        '</div>' +
                        '<div class="row game-info-container">' +
                        '<div class="col-md-3">{{game.name}}</div>' +
                	'<button class="btn btn-default col-md-2 col-xs-10 col-xs-offset-1 wishlist game_info_btn">Add Game to Wishlist</button>' +
                	'<button class="btn btn-default col-md-2 col-xs-10 col-xs-offset-1 own_game game_info_btn">Add to Owned Games</button>' +
                        '</div>'+
                '</div>'
        };
}]);
