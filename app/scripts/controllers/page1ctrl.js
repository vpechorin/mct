'use strict';

module.exports = function ($scope) {
  $scope.page = {content : 'Hello Maria!'};
  $scope.comment = 'Click +1 to change value or edit in the fields on the right';
  $scope.i = 0;

  $scope.inc = function () {
    $scope.i++;
  };

  $scope.dec = function () {
    $scope.i--;
  };
};
