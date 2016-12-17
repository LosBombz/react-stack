import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';
import _ from 'lodash';

const {Card, List, CircularProgress} = mui;

@connectToStores
class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        ChatStore.getChannels();
    }

    static getStores() {
        return [ChatStore];
    }

    static getPropsFromStores() {
        return ChatStore.getState();
    }

    render() {
        if (!this.props.channels) {
            return (
                    <Card style={{
                        flexGrow: 1
                    }}>
                        <CircularProgress
                            mode="indeterminate"
                            style={{
                                paddingTop: '20px',
                                paddingBottom: '20px',
                                margin: '0 auto',
                                display: 'block',
                                width: '60px'
                            }}
                            />
                    </Card>
            );
        }
        console.log(this.props.channels);
        var channelNodes = _(this.props.channels)
            .keys()
            .map((k)=> {
                console.log('key: ', k, 'this.props.channels: ', this.props.channels);
                let channel = this.props.channels[k];
                return <Channel channel={channel} />;
            })
            .value();

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
