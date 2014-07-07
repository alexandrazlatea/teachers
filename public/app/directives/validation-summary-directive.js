'use strict';
App.Directives.validationSummary = [function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      errors: '=',
    },
    templateUrl: 'directives/validation-summary.html',
  };
}];