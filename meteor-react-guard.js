import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export const GuardUser = createContainer(
  () => {
    if (Meteor.loggingIn()) {
      return { status: 'LOADING' };
    }
    return { status: Meteor.user() ? 'LOGGEDIN' : 'LOGGEDOUT' };
  },
  ({ loadingElement, loginElement, status, bypass, children }) => {
    if (bypass) {
      return children;
    }

    if (status === 'LOADING') {
      return loadingElement;
    }
    if (status === 'LOGGEDOUT') {
      return loginElement;
    }
    return children;
  }
);

export const GuardSubscriptions = createContainer(
  ({ getSubscriptions }) => {
    const subscriptionsAreReady = getSubscriptions()
      .every((sub) => sub.ready());

    return { subscriptionsAreReady }
  },
  ({subscriptionsAreReady, loadingElement, children}) => {
    if (subscriptionsAreReady) {
      return children;
    } else {
      return loadingElement;
    }
  }
);
