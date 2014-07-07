App.Helpers.validate = function (viewModel, form, constraints, onValid, onInvalid) {
  App.Helpers.cleanUpValidation(form);

  var result = validate(viewModel.model, constraints);

  if (!result) {
    onValid();
  } else {
    var errors = [];
    for (var fieldName in result) {
      var field = form[fieldName];
      field.$setValidity('custom', false);
      errors = errors.concat(result[fieldName]);
    }

    if (onInvalid) {
      onInvalid(errors);
    } else {
      viewModel.errors = errors;
    }
  }
};

App.Helpers.cleanUpValidation = function (form) {
  for (var property in form) {
    var field = form[property];
    if (field.$setValidity) {
      field.$setValidity('custom', true);
    }
  }
};