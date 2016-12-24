module.exports = function($scope, $http){
  var init = function(){
    $scope.timeData={};
    $scope.time={};

    $http.get('api/Gettime').success(function(response){
      $scope.timeData=response;
    });
  };
  init();

  $scope.Savetime = function(){
    $http.post('api/Addtime', $scope.time).success(function(response){ });
    console.log('time addedd successfully');
     init();
  };

  $scope.Deletetime = function(time){
    $http.delete('api/Deletetime/'+time._id).success(function(response){
    });
    console.log('time Deleted Successfully');
  init();
  };

  $scope.Edittime = function(){
    $http.put('api/Edittime/'+$scope.time._id, $scope.time).success(function(response){
    });
    console.log('time Updated Successfully');
  };
  $scope.SetEdittime = function(m)
  {
    $scope.time=m;
  }

};
