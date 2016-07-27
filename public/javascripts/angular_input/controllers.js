var controllers = {};
controllers.input = function ($scope, $http, FileUploader, $location) {
    /**
     * Setup
     */

    $scope.setup = function () {
        $('.collapsible').collapsible({
            accordion: false
        });
        $scope.state = user_login($http, checkState);
        $scope.admin = document.getElementById('test').value;
        console.log( document.getElementById('test').value);
        if($scope.admin==true)
        alert();
            {$http({
                method: 'GET',
                url: '/input/getAllUsers'
            }).success(function (data) {
         $scope.users= data;
                console.log(data);

        });}
    };
    /**
     * Go to login
     */
    var completedEntry = function () {
        $location.path('/login');
    };
    var checkState = function (state) {
        $scope.state = state;
        if (!$scope.state) {
            $location.path('/login');

        }
        return state;
    };

};
controllers.login = function ($scope, $http, $location,FileUploader) {
    $scope.setup = function () {
        $scope.state = user_login($http, checkState);
        console.log($scope.state);
    };
    var checkState = function (state) {
        $scope.state = state;
        if ($scope.state) {
            $location.path('/input');
        }
        console.log(state);
        return state;
    };
    $scope.uploader = new FileUploader({
        url: '/upload'
    });
    $scope.addImage = function () {
        $scope.uploader.queue[0].upload();
    };

};
controllers.register = function($scope,$http){

};
app.controller(controllers);