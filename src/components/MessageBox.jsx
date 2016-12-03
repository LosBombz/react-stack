import React from 'react';
import mui from 'material-ui';

const {Card} = mui;

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="card message-box">
                <textarea />
            </Card>
        );
    }
}

export default MessageBox;
