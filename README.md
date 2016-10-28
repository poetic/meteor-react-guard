## Example

```
import { GuardUser, GuardSubscriptions } from 'meteor/poetic:meteor-react-guard';

Meteor.startup(() => {
  const getSubscriptions = () => ([
    Meteor.subscribe('domains'),
    Meteor.subscribe('subDomains'),
    Meteor.subscribe('workflows'),
  ]);

  const guardedApp = (
    <GuardUser
      loadingElement={<h1>Trying to log in</h1>}
      loginElement={<h1>This is the login form</h1>}
    >
      <GuardSubscriptions
        getSubscriptions={getSubscriptions}
        loadingElement={<h1>Subscriptions are not ready</h1>}
      >
        <h1>Subscriptions are ready</h1>
      </GuardSubscriptions>
    </GuardUser>
  )

  render(guardedApp, document.getElementById('render-target'));
});
```
