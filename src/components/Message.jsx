import React from 'react';
import mui from 'material-ui';

const {ListItem, Avatar} = mui;

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem className="list-item"
                leftAvatar={<Avatar src="https://lh3.googleusercontent.com/-yspSQP8zYnU/UPrxeW_3HXE/AAAAAAAAAQI/hsC0qi6jHLw7gqXOxYsSfJByvovgDjUqgCEw/ProfilePhotos" />}
            >{this.props.message}</ListItem>
        );
    }
}

export default Message;
