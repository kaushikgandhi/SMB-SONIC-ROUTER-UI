
angular.module('DashboardApp', [])
.controller('homePageController',['$scope','$timeout', function($scope,$timeout) {  //$scope of dashboard main page

		// Panels in the top
		$scope.dragabble_panels = ['Policies','App Flow','Threats','System','Analytics','Network','Log','Public Server','Wireless','App Rules','SSL'];
		$scope.panels = ['Threats','System Info','Network','Logs Info','Support','Help','VPN Info','SSL','App Flow'];
		$timeout(function(){
			$( "#draggable li" ).draggable({
                  connectToSortable: "#sortable",
                  helper: "clone",
                  revert: "invalid"
            });
            // Jquery initilizations() 
			jquery_inits();

		},50);
		
}]).controller('searchController',['$scope',function($scope){  // Search form Controller
	  //search - keypress
	$scope.handle_keyup = function(){
	        var me = $scope.search_box,
	              data = [];
	              //searchTxt = this.value;
	      data.push(me);

	      //---create a jquery object of the rows - left shortcut nav
	      var rowSelector = ".wgt", //$(this).attr("filter-target-rows"),
	          jo = $(rowSelector);

	      if (me == "") {
	          jo.show();
	          return;
	      }
	      //-----left shortcut filter ------------------------------------------//
	          //hide all the rows
	          jo.hide();
	          //Recusively filter the jquery object to get results.
	          jo.filter(function (i, v) {
	              var $t = $(this);
	              for (var d = 0; d < data.length; ++d) {
	                  var $targetEl = $t;
	                  if($targetEl.text().toUpperCase().indexOf(data[d].toUpperCase()) >= 0) {
	                      return true;
	                  }
	              }
	              return false;
	          })
	          //show the rows that match.
	          .show();
	};

}]).controller('modalController',['$scope','$timeout',function($scope,$timeout){  //modal controller

	$scope.step = "step1.html";
	$scope.progress1 = 10;
	$scope.progress2 = 0;
	$scope.progress3 = 0;
	$scope.active_state = 'get_started';
	$scope.get_started_completed = false;
	$scope.register_completed = false;
	$scope.services_completed = false;
	

	$scope.stepValidator = function(){  
		
		//once validation is done 

		//code for transition of steps load different html files 
		if ($scope.step == "step1.html"){
			$scope.step = "step2.html";
			$scope.progress1 = 66;
		}
		else if ($scope.step == "step2.html"){
			$scope.step = "step3.html";
			$scope.progress1 = 100;
			$scope.progress2 = 50;
			$scope.active_state = 'register';
			$scope.get_started_completed = true;
		}else if ($scope.step == "step3.html"){
			$scope.step = "step4.html";
			$scope.progress1 = 100;
			$scope.progress2 = 90;
			$scope.active_state = 'register';
		}else if ($scope.step == "step4.html"){
			$scope.step = "step5.html";
			$scope.progress1 = 100;
			$scope.progress2 = 100;
			$scope.progress3 = 40;
			$scope.active_state = 'services';
			$scope.register_completed = true;
		}else if ($scope.step == "step5.html"){
			$scope.step = "step6.html";
			$scope.progress1 = 100;
			$scope.progress2 = 100;
			$scope.progress3 = 80;
			$scope.active_state = 'services';
			$timeout(function(){
			$(".my-checkbox").bootstrapSwitch();
			},10);
		}else if ($scope.step == "step6.html"){
			$scope.step = "step7.html";
			$scope.progress1 = 100;
			$scope.progress2 = 100;
			$scope.progress3 = 100;
			$scope.active_state = 'summary';
			$scope.services_completed = true;
			
		}
		console.log('Validation cannot be skipped'+$scope.step);
	};
	$scope.goBack = function(){
		if ($scope.step == "step2.html"){
			$scope.step = "step1.html";
			$scope.progress1 = 10;
			$scope.progress2 = 0;
		}
		else if ($scope.step == "step3.html"){
			$scope.get_started_completed = false;
			$scope.step = "step2.html";
			$scope.progress1 = 66;
			$scope.progress2 = 0;
			$scope.active_state = 'get_started';
		}else if ($scope.step == "step4.html"){
			$scope.step = "step3.html";
			$scope.progress1 = 100;
			$scope.progress2 = 50;
			$scope.progress3 = 0;
			$scope.active_state = 'register';
		}else if ($scope.step == "step5.html"){
			$scope.register_completed = false;
			$scope.step = "step4.html";
			$scope.progress1 = 100;
			$scope.progress2 = 90;
			$scope.progress3 = 0;
			$scope.active_state = 'register';
		}else if ($scope.step == "step6.html"){
			$scope.step = "step5.html";
			$scope.progress1 = 100;
			$scope.progress2 = 100;
			$scope.progress3 = 40;
			$scope.active_state = 'services';
		}else if ($scope.step == "step7.html"){
			$scope.step = "step6.html";
			$scope.progress1 = 100;
			$scope.progress2 = 100;
			$scope.progress3 = 80;
			$scope.active_state = 'services';
			$timeout(function(){
			$(".my-checkbox").bootstrapSwitch();
			},10);
			$scope.services_completed = false;
		}
	};
}]);


