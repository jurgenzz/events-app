angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
	//we'll just leave this controller for later
	//maybe won't use it at all
	//i don't know yet
	//use this controller if you want to add something for your side menu. 
})

.controller('eventsCtrl', function ($http, $scope) {
	//just in case, there are no events in our db
	$scope.events = [
			{
				"name": "No events added",
				"desc": "sad face",
				"img": ""
		}
	]
		//$http.get lets get our event information
	$http.get('https://api.mongolab.com/api/1/databases/events/collections/event?apiKey=4MmcxwAO0pGJo22EHw8wYjeq-V5zO28a')
		.success(function (data) {
			//saving data to $scope.events
			$scope.events = data;
			//lets still log that in console to see how what we can get in our views
			console.log(data);
		});
})

.controller('singleCtrl', function ($http, $scope, $stateParams) {
	//fall back is there is no info in our event
	$scope.event = "";
	//getting event id from $stateParams (/events/:eventId, where eventId IS the $stateParams)
	$scope.eventId = $stateParams.eventId;
	$http.get('https://api.mongolab.com/api/1/databases/events/collections/event/' + $scope.eventId + '?apiKey=4MmcxwAO0pGJo22EHw8wYjeq-V5zO28a')
		.success(function (data) {
		$scope.event = data;
			console.log(data);
		});
});