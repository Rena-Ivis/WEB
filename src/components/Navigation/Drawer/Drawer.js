import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Drawer.css'

const links = [
    {to: '/WEB/', label: 'Dashboard', exact: true, icon: 'dashboard'},
    {to: '/WEB/tasks', label: 'Tasks', exact: false, icon: 'view_agenda'},
    {to: '/WEB/email', label: 'Email', exact: false, icon: 'email'},
    {to: '/WEB/contacts', label: 'Contacts', exact: false, icon: 'person_outline'},
    {to: '/WEB/chat', label: 'Chat', exact: false, icon: 'chat_bubble_outline'},
    {to: '/WEB/deals', label: 'Deals', exact: false, icon: 'view_week'},
]


class Drawer extends Component {
    state={
        pathImg: ''
    }

    renderLinks() {
        return links.map((link, index)=> {
            this.state.pathImg = link.label
            return(
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={'act'}
                    > 
                        <i className="material-icons-outlined">{link.icon}</i>
                        {this.props.isOpen?<text className={'MenuText'}>{link.label}</text>:null}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
    return(
        <React.Fragment>
            <nav className={'Drawer'}>
                <ul>
                    {this.renderLinks()}
                </ul>
                <div className='line'/>
                <NavLink
                    to={'/settings'}
                    exact={false}
                    activeClassName={'act'}
                    style={{paddingLeft: '1em', paddingTop: '1em'}}
                >                        
                    <i className="material-icons-outlined">more_horiz</i>
                    {this.props.isOpen?<text className={'MenuText'}>Settings</text>:null}
                </NavLink>
            </nav>
        </React.Fragment>
        )
    }
}

export default Drawer