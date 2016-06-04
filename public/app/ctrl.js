app
	.controller('formCtrl',['$scope','regService',function($scope,regService){
		
		$scope.formFunc = function(){
			console.log($scope.form);
		regService.update({id:$scope.form.id},$scope.form);
		}

		$scope.showReg = regService.query({},
            
                            function(response){
                                $scope.showReg = response;
                                console.log($scope.showReg);
                                
                                
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            });
		
	}]);
