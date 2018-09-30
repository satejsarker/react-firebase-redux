import {createStore,combineReducers,compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase,firebaseReducer } from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer } from 'redux-firestore';
//todo 

//custom reducer for firebase setup 


const firebaseConfig = {
    apiKey: "AIzaSyDD12Ai1GpNi7Bz1NZXfotByegPIVOQvJc",
    authDomain: "reactclint.firebaseapp.com",
    databaseURL: "https://reactclint.firebaseio.com",
    projectId: "reactclint",
    storageBucket: "reactclint.appspot.com",
    messagingSenderId: "647958128221"

};

// react-redux-firbase   config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }


  //initial firebase instance 

  firebase.initializeApp(firebaseConfig);

  //initial firestore


  const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);

  // Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore)


  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  });

//crate  initial state 
  const initialState = {}

  //create store 
const store = createStoreWithFirebase(rootReducer, initialState,compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


export default store;


  


