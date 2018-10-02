
import locationHelper from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import Loader from 'react-loader-spinner';

const userIsAuthenticated = connectedRouterRedirect({
    // The url to redirect user to if they fail
   redirectPath: '/login',
    // If selector is true, wrapper will not redirect
    // For example let's check that state contains user data
   authenticatedSelector: state => state.user.data !== null,
   // A nice display name for this check
   wrapperDisplayName: 'UserIsAuthenticated'
 })  