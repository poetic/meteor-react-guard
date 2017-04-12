Package.describe({
  name: 'poetic:meteor-react-guard',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: 'Guard your react app against unlogged in users and on-going subscriptions',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:poetic/meteor-react-guard.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript');
  api.use('react-meteor-data@0.2.9')
  api.mainModule('meteor-react-guard.js', 'client');
});
