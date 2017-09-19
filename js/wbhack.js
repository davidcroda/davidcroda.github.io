var app = angular.module('myApp', ['ui.bootstrap', 'chart.js', 'angularjs-gauge']);

app.controller('MainController', function($scope) {
    var obj = {
      labels: ['9/7', '9/14', '9/21', '9/28'],
      options: {
        elements: {
          line: {
            fill: false
          }
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Millions'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Week'
            }
          }]
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

    $scope.showImpressionGeo = false;
    $scope.showEngagementGeo = false;
    $scope.impression = angular.copy(obj);
    $scope.engagement = angular.copy(obj);
    $scope.chatter = angular.copy(obj);
    $scope.shareRate = angular.copy(obj);

    $scope.impression.data = [345, 450, 550, 753];
    $scope.engagement.data = [50, 65, 95, 100];
    $scope.chatter.data = [30, 50, 63, 60];
    $scope.shareRate.data = [12, 19, 26, 37.5];
});
