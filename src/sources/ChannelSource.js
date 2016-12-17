import Actions from '../actions';
import firebase from 'firebase';

window.firebaseApp = window.firebaseApp || firebase.initializeApp({
    apiKey: 'AIzaSyCf4wSQwi3kmU1SM7r0BLjzHo2FpXHF5iQ',
    authDomain: 'react-stack-17023.firebaseapp.com',
    databaseURL: 'https://react-stack-17023.firebaseio.com',
    storageBucket: 'react-stack-17023.appspot.com',
    messagingSenderId: '686541059449'
});

const firebaseRef = window.firebaseApp;

console.log(firebaseRef);
const ChannelSource = {
    getChannels: {
        remote(state) {
            return new Promise((resolve, reject)=> {
                firebaseRef.database().ref('channels/').once('value', (childSnapshot)=> {
                    var channels = childSnapshot.val();
                    resolve(channels);
                });
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed
    }
};

export default ChannelSource;
