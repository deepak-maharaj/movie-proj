module.exports = function($scope, $http){
  var init = function(){
    $scope.allMovies={};
    $scope.Movie={};

    $scope.City={};

    $http.get('api/GetCity').success(function(response){
      $scope.City=response;
    });

    $http.get('api/GetMovie').success(function(response){
      $scope.allMovies=response;
    });

    // $http.get('api/GeTime').success(function(response){
    //   $scope.TimeData=response;
    // });
    
    //     $http.get('api/GetTheaters').success(function(response){
    //   $scope.theaterData=response;
    // });

  };

  init();

  $scope.SaveMovie = function(){
    $http.post('api/AddMovie', $scope.Movie).success(function(response){ });
    console.log('Movie addedd successfully');
   init();
  };

  $scope.DeleteMovie = function(Movie){
    $http.delete('api/DeleteMovie/'+Movie._id).success(function(response){
    });
    console.log('Movie Deleted Successfully');
  init();
  };

  $scope.EditMovie = function(){
    $http.put('api/EditMovie/'+$scope.Movie._id, $scope.Movie).success(function(response){
    });
    console.log('Movie Updated Successfully');
    init();
  };
  $scope.SetEditMovie = function(m)
  {
    $scope.Movie=m;
  }

  $scope.getOmdbMovie=function() {
     $http.get('http://www.omdbapi.com/?t=' + this.t + '&y='+this.y + '&plot=short&r=json')
      .then(response => {
        $scope.Movie = response.data;
      });
    init();
  }

};
