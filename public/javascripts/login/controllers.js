var controllers = {};
controllers.input = function ($scope, $http, FileUploader, $location) {
    /**
     * Setup
     */

    $scope.hide=function(d){
        return d.data;
    };
    $scope.setup = function () {
        $('.collapsible').collapsible({
            accordion: false
        });
       // console.log($scope.state);
        $scope.admin = document.getElementById('test').value;
      //  console.log( document.getElementById('test').value);
        $http({
            method: 'GET',
            url: '/input/getAllUsers'
        }).success(function (data) {
            $scope.users= data;
            checkUserAbs();

        });


        if($scope.admin==true)
            {
            }else{
         //   checkSingle();
        }
    };
    var checkUserAbs = function(){
      for(var i=0;i<$scope.users.length;i++){
            if($scope.checkAbs($scope.users[i].abstract)){
                $scope.users[i].hidden = false;
            }else{
                $scope.users[i].hidden = true;
            }
        }
    };/*
    var checkSingle = function(){
        var abs = document.getElementById('abs').value;
        console.log(abs);
        var text = '';
        if(!$scope.checkAbs(abs)){
            text= "Please re-upload the abstract";
        }
        document.getElementById('reupload').innerHTML = text;
    };*/
    $scope.checkAbs = function(abs){
        var params = {
            abstract:abs
        };
       // console.log(params);
        $http({
            method: 'GET',
            params:params,
            url: '/checkAbs'
        }).success(function (data) {
           return data;
        });
    };

};
app.controller(controllers);