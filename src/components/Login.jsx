import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

const {Card, CardText, RaisedButton} = mui;

class Login extends React.Component {
    onClick() {
        console.log('logging in...');
        Actions.login();
    }

    render() {
        return (
            <Card className="card">
                <CardText>
                    Login with google id
                </CardText>
                <RaisedButton onClick={this.onClick.bind(this)} label="log in with google"/>
            </Card>
        );
    }
}

export default Login;
