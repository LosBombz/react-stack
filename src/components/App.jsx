import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;

class App extends React.Component {
    constructor() {
        super();

        ThemeManager.setPalette({
            primary1Color: Colors.purple500,
            primary2Color: Colors.purple700,
            primary3Color: Colors.purple100,
            accent1Color: Colors.pink400
        });
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <div className="app-wrapper">
                <AppBar title="chatballs" />
                <div className="page-container">
                    <div className="container">
                        <ChannelList />
                        <MessageList />
                    </div>
                    <MessageBox />
                </div>
            </div>
        );
    }
}

export default App;
