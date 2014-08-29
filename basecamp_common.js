Accounts.oauth.registerService('basecamp');

if (!Accounts.basecamp) {
  Accounts.basecamp = {};
}

Accounts.basecamp.config = function(options) {
  Accounts.basecamp._options = options;
};