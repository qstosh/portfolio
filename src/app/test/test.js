angular.module( 'ngBoilerplate.test', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'test', {
    url: '/test',
    views: {
      "main": {
        controller: 'TestCtrl',
        templateUrl: 'test/test.tpl.html'
      }
    },
    data:{ pageTitle: 'fsfsdff?' }
  });
})

.controller( 'TestCtrl', function testCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  
})

;
