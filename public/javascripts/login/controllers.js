var controllers = {};
var dates={
    abstracts:'25th September 2016',
    notification:'30th September 2016',
    normalrate:'10th October 2016',
    accommodations:'10th October 2016'
};
controllers.input = function ($scope, $http, FileUploader, $location) {
    /**
     * Setup
     */
    $scope.dates = dates;
    $scope.hide=function(d){
        return d.data;
    };
    $scope.setup = function () {
        $('.collapsible').collapsible({
            accordion: false
        });
       // console.log($scope.state);
        $scope.admin = document.getElementById('test').value;
        console.log( document.getElementById('test').value);



        if($scope.admin=='true')
            {
                $http({
                    method: 'GET',
                    url: '/input/getAllUsers'
                }).success(function (data) {
                    $scope.users= data;
                    checkUserAbs();

                });
            }else{
           checkSingle();
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
        console.log($scope.users);
    };
    var checkSingle = function(){
        var abs = document.getElementById('abs').value;
        var status;
        var text = '';
        console.log(abs);
        if(abs==''){
            text="Please upload new abstract.";
        }else{
            status=$scope.checkAbs(abs,1);
            if(!status){
                text= "Please re-upload the abstract";
            }else{
                text = "Current uploaded abstract is " +abs;
            }
        }


        document.getElementById('reupload').innerHTML = text;
    };
    $scope.checkAbs = function(abs,c){
        var params = {
            abstract:""
        };
        params.abstract = abs;
       console.log(params);
        $http({
            method: 'GET',
            params:params,
            url: '/checkAbs'
        }).success(function (data) {
            console.log(data);
            if(c==1){
                var text = "";
                if(!data){
                    text= "Please re-upload the abstract";
                }else{
                    text = "Current uploaded abstract is " +abs;
                    document.getElementById('reupload').style.color = 'green';
                }
                document.getElementById('reupload').innerHTML = text;
            }
           return data;
        });
    };

};
app.controller(controllers);