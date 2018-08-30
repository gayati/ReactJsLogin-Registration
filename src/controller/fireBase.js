import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCtbAbl-HOZwBj-mDsJTDW-li8actws76E",
  authDomain: "fundoo-47432.firebaseapp.com",
  databaseURL: "https://fundoo-47432.firebaseio.com",
  projectId: "fundoo-47432",
  storageBucket: "fundoo-47432.appspot.com",
  messagingSenderId: "707426857807"
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
