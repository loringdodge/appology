angular.module('app.ProposalInterviewController', [])

  .controller('ProposalInterviewController', function($scope, $stateParams, ProposalFactory){

    // Function - Submit Request
    $scope.submitInterview = function(interview){
      if (interview.$valid) {
        var data = {
          id: $stateParams.proposalId,
          date: interview.date,
          time: interview.time,
          note: interview.note
        }
        ProposalFactory.postInterview(data)
          .then(function(res) {
            console.log("submitInterview: success", res);
          })
          .catch(function(err) {
            console.log(err);
          });
      } else {
        console.log("not valid");
      }
    }

  })
