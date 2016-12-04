import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import firebase from 'firebase';
import _ from 'lodash';

const {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.firebaseRef = firebase.initializeApp({
            apiKey: 'AIzaSyCf4wSQwi3kmU1SM7r0BLjzHo2FpXHF5iQ',
            authDomain: 'react-stack-17023.firebaseapp.com',
            databaseURL: 'https://react-stack-17023.firebaseio.com',
            storageBucket: 'react-stack-17023.appspot.com',
            messagingSenderId: '686541059449'
        });

        // this.firebaseRef.once('value', (dataSnapshot)=> {
        //     let messages = dataSnapshot.val();
        //     console.log(messages);
        //     this.setState({
        //         messages: messages
        //     });
        // });

        this.database = this.firebaseRef.database();

        this.database.ref('/messages').once('value').then((snapshot)=>{
            snapshot.forEach((childSnapshot)=> {
                let key = childSnapshot.key;
                let val = childSnapshot.val().message;

                this.state.messages.push(val);

                console.log(key, val);
            });
            // console.log(snapshot.val());
        });
    }

    render() {
        var messageNodes = this.state.messages.map((message)=> {
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
