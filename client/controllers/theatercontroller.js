module.exports = function($scope, $http){
  var init = function(){
    $scope.theaterData={};
    $scope.cityData={};
    
    $scope.theater={};

    $http.get('api/GetCity').success(function(response){
      $scope.cityData=response;
    });

    $http.get('api/Gettheater').success(function(response){
      $scope.theaterData=response;
    });
  };
  init();

  $scope.Savetheater = function(){
    $http.post('api/Addtheater', $scope.theater)
    .success(function(response){
        console.log('theater addedd successfully');
        init();
     });
  };

  $scope.Deletetheater = function(theater){

    $http.delete('api/Deletetheater/'+theater._id).success(function(response){
    });
    console.log('theater Deleted Successfully');
    init();  
    
  };

  $scope.Edittheater = function(){
    $http.put('api/Edittheater/'+$scope.theater._id, $scope.theater).success(function(response){
    });
    console.log('theater Updated Successfully');
  };
  $scope.SetEdittheater = function(k)
  {
    $scope.theater=k;
  }

};
