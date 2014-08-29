Package.describe({
  summary: "Login service for Basecamp accounts",
  name: "sivancis:accounts-basecamp",
  version: "0.0.1"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('accounts-base', ['client', 'server']);

  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('underscore', 'server');
  api.use('sivancis:basecamp@0.0.1', ['client', 'server']);

  api.add_files('basecamp_login_button.css', 'client');

  api.add_files('basecamp_common.js', ['client', 'server']);
  api.add_files('basecamp_server.js', 'server');
  api.add_files('basecamp_client.js', 'client');
});