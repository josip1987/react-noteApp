import firebase from '../node_modules/firebase';

try {
    var config = {
        apiKey: "AIzaSyDLHDNyFnoIzBd_OklgG4he5sktZPpf6I8",
        authDomain: "noteapp-af628.firebaseapp.com",
        databaseURL: "https://noteapp-af628.firebaseio.com",
        projectId: "noteapp-af628",
        storageBucket: "noteapp-af628.appspot.com",
        messagingSenderId: "1081463218364"
    };
    
    firebase.initializeApp(config);   
    
} catch (e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;