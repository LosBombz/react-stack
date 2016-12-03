import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

const {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                'yo dawg, how are you?',
                'I am fine, and you?'
            ]
        };
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
