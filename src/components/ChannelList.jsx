import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

const {Card, List} = mui;

class ChannelList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channels: [
                'General',
                'Bullshit'
            ]
        };
    }

    render() {
        var channelNodes = this.state.channels.map((channel)=> {
            return <Channel channel={channel} />;
        });

        return (
            <Card className="card channel-list">
                <List className="lest">
                    {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList;
