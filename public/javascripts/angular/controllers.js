/**
 * Created by Shivam Mathur on 17-02-2016.
 */
var controllers = {};
controllers.header =  function($scope){};
controllers.main = function($scope){};
controllers.register = function($scope){
    $scope.Indian = [
        {
        "cat" : "Students (BRSI Members)",
            "fee1" : 4000,
            "fee2": 4500
        },
        {
            "cat" : "Students (Non BRSI Members)",
            "fee1" : 5000,
            "fee2": 5500
        },
        {
            "cat" : "Full Delegates (BRSI Members)",
            "fee1" : 	6000,
            "fee2": 6500
        },
        {
            "cat" : "Full Deledates (Non BRSI Members)	",
            "fee1" : 7000,
            "fee2": 7500
        },
        {
            "cat" : "Accompanying Person",
            "fee1" : 4000,
            "fee2": 4500
        }
    ];
$scope.Over = [
    {
        "cat" : "Students",
        "fee1" : 100,
        "fee2": 125
    },
    {
        "cat" : "Full Deledates",
        "fee1" : 150	,
        "fee2": 175
    },
    {
        "cat" : "Accompanying Person",
        "fee1" : 100,
        "fee2": 125
    }
];
};
app.controller(controllers);
