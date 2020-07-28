import React, {Component} from 'react'
import './Profile.css'

class Profile extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={'Nickname'}>
                    <text>Saas{this.props.isOpen?' Kit':null}</text>
                </div>
                <div className={'MainProfile'}>
                    <img src={require('../../../Image/Profile.svg')} style={{borderRadius: 50}}/>
                    {this.props.isOpen? 
                    <div>
                        <text className={'ProfileName'}>Sierra Ferguson</text>
                        <br/>
                        <text className={'EmailAdr'}>s.ferguson@gmail.com</text>
                    </div>:null}
                </div>
            </React.Fragment>
        )
    }
}                  
export default Profile