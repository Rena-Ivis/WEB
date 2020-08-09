import React, {Component} from 'react'
import './Profile.css'

class Profile extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={'Nickname'} style={this.props.isOpen?{paddingLeft:'1em'}:{paddingLeft:'0.5em'}}>
                    <text>Saas{this.props.isOpen?' Kit':null}</text>
                </div>
                <div className={'MainProfile'}>
                    <img src={require('../../../Image/Profile.svg')} style={this.props.isOpen?{marginLeft:'1em', borderRadius: 50}:{borderRadius: 50}}/>
                    {this.props.isOpen? 
                    <div className={'InfoPadding'}>
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