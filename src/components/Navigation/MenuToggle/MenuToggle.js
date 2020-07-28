import React, {Component} from 'react'
import './MenuToggle.css'

class MenuToggle extends Component {
    render() {
        return(
        <div className={'MenuToggle'}>
            {this.props.isOpen? 
                <img src={require('../../../Image/Toggle.svg')} alt='Toggle slidebar' onClick={this.props.toggleMenuHandler}/>: 
                <img src={require('../../../Image/ToggleActive.svg')} alt='Toggle slidebar' onClick={this.props.toggleMenuHandler}/>}
            {this.props.isOpen?
                <text className={'open'} onClick={this.props.toggleMenuHandler}>Toggle slidebar</text> :
                <text/>}
        </div>
        )
    }
}
                
export default MenuToggle