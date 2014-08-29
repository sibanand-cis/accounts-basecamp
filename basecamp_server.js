Accounts.addAutopublishFields({
  forLoggedInUser: _.map(Basecamp.whitelistedFields,
    function(subfield) {
      return 'services.basecamp.' + subfield;
    }),
  forOtherUsers: _.map(['name'],
    function(subfield) {
      return 'services.basecamp.' + subfield;
    })
});