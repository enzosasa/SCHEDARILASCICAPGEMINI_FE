angular.module('csv', [])
.controller('controllerCsv', function($scope, $http) {	
	$http.get('http://localhost:8080/SchedaRilasci/csvForIdPolarion?idPolarion=AGORA-6564').
	then(function(response) {
		$scope.csv= response.data;
		$scope.dataEstrazione= csv[0].fileDate;
		
		
	});
});




