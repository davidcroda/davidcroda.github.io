var app = angular.module('myApp', ['chart.js', 'angularjs-gauge']);

// app.config(configApp);

// configApp.$inject = ['ngGaugeProvider'];

app.controller('MainController', function($scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    var obj = {
      labels: ['9/18', '9/20', '9/22', '9/24'],
      options: {
        elements: {
          line: {
            fill: false
          }
        }
      },
      datasetOverride: [
        {
          label: 'Line Chart',
          borderWidth: 3,
          type: 'line'
        }
      ]
    };

    $scope.clickThrough = angular.copy(obj);
    $scope.shareRate = angular.copy(obj);
    $scope.activations = angular.copy(obj);
    $scope.engagement = angular.copy(obj);

    $scope.clickThrough.title = 'Click Through';
    $scope.clickThrough.data = [100, 290, 320, 450];
    $scope.shareRate.data = [100, 300, 350, 270];
    $scope.activations.data = [100, 300, 350, 270];
    $scope.engagement.data = [100, 300, 350, 270];
});
