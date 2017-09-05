// Products Table Angular App
angular.module('productsTableApp', [])

// create a controller for the table
.controller('ProductsController', function($scope){
  // initialize the array
  $scope.data=[[{"en":"test"}]
               ,[{"en":"test1"}]
               ,[{"en":"test2"}]
               ,[{"en":"test3"}]
               ,[{"en":"test4"}]];

	// add a column
  $scope.addColumn = function(){
    //you must cycle all the rows and add a column 
    //to each one
    $scope.data.forEach(function($row){
      $row.push({"en":""})
    });
  };

  // remove the selected column
  $scope.removeColumn = function (index) {
    // remove the column specified in index
    // you must cycle all the rows and remove the item
    // row by row
    $scope.data.forEach(function (row) {
      row.splice(index, 1);
		
      //if no columns left in the row push a blank array
      if (row.length === 0) {
        row.data = [];
      }
    });
  };

  // remove the selected row
  $scope.removeRow = function(index){
    // remove the row specified in index
    $scope.data.splice( index, 1);
    // if no rows left in the array create a blank array
    if ($scope.data.length() === 0){
      $scope.data = [];
    }
  };

  //add a row in the array
  $scope.addRow = function(){
    // create a blank array
    var newrow = [];
		 
      // if array is blank add a standard item
      if ($scope.data.length === 0) {
        newrow = [{'en':''}];
      } else {
        // else cycle thru the first row's columns
        // and add the same number of items
        $scope.data[0].forEach(function (row) {
          newrow.push({'en':''});
        });
      }
    // add the new row at the end of the array 
    $scope.data.push(newrow);
  };
});
