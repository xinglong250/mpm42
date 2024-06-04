import React, {Component} from 'react';
import './App.css';
import Mpm from "./component/mpm";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: false
        }
        this.tz = this.tz.bind(this)
    }
    tz () {
        var {route} = this.state
        this.setState({route : true})
    }

    render() {

        var login = (
            <div className='login' >
            <div>
                <img src={require('./img/LOGO.png')} />
            </div>
            <div className='login_div' onClick={this.tz}>
                <img style={{ maxWidth:'70%', maxHeight:'40%'}} src={require('./img/staking.png')} />
            </div>
            <div className='login_div'>
                <img style={{ maxWidth:'50%', maxHeight:'30%'}} src={require('./img/dao.png')} />
            </div>
            <div className='login_div'>
                <img style={{ maxWidth:'70%', maxHeight:'40%'}} src={require('./img/staking.png')} />
            </div>
        </div>
        )
        var index = <Mpm/>
        return (
            <div style={{mixHeight: document.documentElement.clientHeight}} >
                {this.state.route ? index : login}
            </div>
            // <div style={{mixHeight: document.documentElement.clientHeight}}>
            //
            //     <Mpm/>
            // </div>
        );
    }
}

export default App;
