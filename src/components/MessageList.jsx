import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import firebase from 'firebase';
import _ from 'lodash';

window.firebaseApp = window.firebaseApp || firebase.initializeApp({
    apiKey: 'AIzaSyCf4wSQwi3kmU1SM7r0BLjzHo2FpXHF5iQ',
    authDomain: 'react-stack-17023.firebaseapp.com',
    databaseURL: 'https://react-stack-17023.firebaseio.com',
    storageBucket: 'react-stack-17023.appspot.com',
    messagingSenderId: '686541059449'
});

const firebaseRef = window.firebaseApp;

const {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: {}
        };

        this.database = firebaseRef.database();

        this.database.ref('/messages').on('child_added', (msg)=> {
            let messageData = msg.val();
            messageData.key = msg.key;

            if (this.state.messages[messageData.key]) {
                return;
            }

            this.state.messages[messageData.key] = messageData.message;

            this.setState({
                messages: this.state.messages
            });
        });

        this.database.ref('/messages').on('child_removed', (msg)=> {
            var key = msg.key;
            delete this.state.messages[key];
            this.setState({
                messages: this.state.messages
            });
        });
    }

    render() {
        var messageNodes = _.values(this.state.messages).map((message)=> {
            return <Message message={message} />;
        });

        return (
            <Card className="card message-list">
                <List className="list">
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;
