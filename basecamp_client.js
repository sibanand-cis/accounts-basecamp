Meteor.loginWithBasecamp = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Basecamp.requestCredential(options, credentialRequestCompleteCallback);
};
