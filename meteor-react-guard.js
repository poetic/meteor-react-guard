import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

export const GuardUser = createContainer(
  () => {
    if (Meteor.loggingIn()) {
      return { status: 'LOADING' }
    }
    return { status: Meteor.user() ? 'LOGGEDIN' : 'LOGGEDOUT' }
  },
  ({ loadingElement, loginElement, status, bypass, children }) => {
    if (bypass) {
      return children
    }

    if (status === 'LOADING') {
      return loadingElement
    }
    if (status === 'LOGGEDOUT') {
      return loginElement
    }
    return children
  }
)

export const GuardReady = createContainer(
  ({ getReady }) => ({ ready: getReady() }),
  ({ ready, children, loadingElement }) => {
    return ready ? children : loadingElement
  }
)
