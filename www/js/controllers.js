angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,api) {

   $scope.currency1 = {};
   $scope.currency2 = {};

   api.getCurrencies().then(function(data){
      $scope.currencies =data.data;
   });

   $scope.convert = function(){
    console.log($scope.currency1.selected);
    console.log($scope.currency2.selected);
   };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
