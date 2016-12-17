import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
import firebase from 'firebase';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;

window.firebaseApp = window.firebaseApp || firebase.initializeApp({
    apiKey: 'AIzaSyCf4wSQwi3kmU1SM7r0BLjzHo2FpXHF5iQ',
    authDomain: 'react-stack-17023.firebaseapp.com',
    databaseURL: 'https://react-stack-17023.firebaseio.com',
    storageBucket: 'react-stack-17023.appspot.com',
    messagingSenderId: '686541059449'
});

@connectToStores
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

    static getStores() {
        return [ChatStore];
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    static getPropsFromStores() {
        return ChatStore.getState();
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        let view = <Login />;

        if (this.props.user) {
            view = (
                <div>
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
        return (
            <div className="app-wrapper">
                <AppBar title="chatballs" />
                {{view}}
            </div>
        );
    }
}

export default App;
