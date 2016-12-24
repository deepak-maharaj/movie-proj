module.exports = function($scope, $http){
  var init = function(){
    $scope.cityData={};
    $scope.City={};

    $http.get('api/GetCity').success(function(response){
      $scope.cityData=response;
    });
  };
  init();

  $scope.SaveCity = function(){

    
    $http.post('api/AddCity', $scope.City).success(function(response){ });
    console.log('City addedd successfully');
     init();
  };

  $scope.DeleteCity = function(City){
    $http.delete('api/DeleteCity/'+City._id).success(function(response){
    });
    console.log('City Deleted Successfully');
  init();
  };

  $scope.EditCity = function(){
    $http.put('api/EditCity/'+$scope.City._id, $scope.City).success(function(response){
    });
    console.log('City Updated Successfully');
  };
  $scope.SetEditCity = function(m)
  {
    $scope.City=m;
  }

};
