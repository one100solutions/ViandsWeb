var displayimage = angular.module('displayimage', []);

displayimage.controller('imageListCtrl', function ($scope, $http) {
  $http.get('components/json/images.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});