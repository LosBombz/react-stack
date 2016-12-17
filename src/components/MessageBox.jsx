import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import firebase from 'firebase';

window.firebaseApp = window.firebaseApp || firebase.initializeApp({
    apiKey: 'AIzaSyCf4wSQwi3kmU1SM7r0BLjzHo2FpXHF5iQ',
    authDomain: 'react-stack-17023.firebaseapp.com',
    databaseURL: 'https://react-stack-17023.firebaseio.com',
    storageBucket: 'react-stack-17023.appspot.com',
    messagingSenderId: '686541059449'
});

const firebaseRef = window.firebaseApp;
const {Card} = mui;

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };

        this.database = firebaseRef.database();
    }

    onChange(event) {
        this.setState({
            message: event.target.value
        })
    }

    onKeyUp(event) {
        if (event.keyCode === 13 && trim(event.target.value) !== '') {
            event.preventDefault();
            let postData = {
                message: this.state.message
            };
            let postKey = this.database.ref().child('messages').push().key;

            console.log(postKey);

            this.setState({
                message: ''
            });

            let updates = {};

            updates[postKey] = postData;

            console.log(updates);

            this.database.ref('messages/').update(updates);

            console.log('sent a new message: ', event.target.value);
        }
    }

    render() {
        return (
            <Card className="card message-box">
                <textarea
                    value={this.state.message}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)} />
            </Card>
        );
    }
}

export default MessageBox;
