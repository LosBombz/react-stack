import alt from '../alt';
import firebase from 'firebase';

class Actions {
    constructor() {
        this.generateActions(
            'channelsReceived',
            'channelsFailed'
        );
    }
    login(args) {
        return (dispatch)=> {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then((result) => {
                console.log('logged in as: ', result.user);
                dispatch(result.user);
            }).catch((err)=>{
                console.error(err);
            })
        }
    }
}

export default alt.createActions(Actions);
