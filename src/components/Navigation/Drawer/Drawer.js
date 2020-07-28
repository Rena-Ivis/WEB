import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Drawer.css'

const links = [
    {to: '/', label: 'Dashboard', exact: true, icon: 'dashboard'},
    {to: '/tasks', label: 'Tasks', exact: true, icon: 'view_agenda'},
    {to: '/email', label: 'Email', exact: true, icon: 'email'},
    {to: '/contacts', label: 'Contacts', exact: true, icon: 'person_outline'},
    {to: '/chat', label: 'Chat', exact: true, icon: 'chat_bubble_outline'},
    {to: '/deals', label: 'Deals', exact: true, icon: 'view_week'},
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
                    exact={true}
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