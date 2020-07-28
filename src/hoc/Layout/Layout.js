import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Layout.css'

const links = [
    {to: '/', label: 'Dashboard', exact: true, icon: 'dashboard'},
    {to: '/tasks', label: 'Tasks', exact: true, icon: 'view_agenda'},
    {to: '/email', label: 'Email', exact: true, icon: 'email'},
    {to: '/contacts', label: 'Contacts', exact: true, icon: 'person_outline'},
    {to: '/chat', label: 'Chat', exact: true, icon: 'chat_bubble_outline'},
    {to: '/deals', label: 'Deals', exact: true, icon: 'view_week'},
]

class Layout extends Component {

    state = {
        menu: true,
        pathImg: '',
        indexMenu: 0
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
                        {this.state.menu?<text className={'MenuText'}>{link.label}</text>:null}
                    </NavLink>
                </li>
            )
        })
    }

    toggleMenuHandler = () => {
        this.setState({menu: !this.state.menu})
    }

    render() {
        const classes = []
        if(!this.state.menu)
            classes.push('closeMenu')
        else
            classes.push('MenuOpen')
        return (
            <div className={'Layout'}>
                <div className={classes.join(' ')}>
                    <div className={'Nickname'}>
                        <text>Saas{this.state.menu?' Kit':null}</text>
                    </div>
                    <div className={'MainProfile'}>
                        <img src={require('../../Image/Profile.svg')} style={{borderRadius: 50}}/>
                        {this.state.menu? 
                        <div>
                            <text className={'ProfileName'}>Sierra Ferguson</text>
                            <br/>
                            <text className={'EmailAdr'}>s.ferguson@gmail.com</text>
                        </div>:null}
                    </div>
                    <div>
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
                                        {this.state.menu?<text className={'MenuText'}>Settings</text>:null}
                                    </NavLink>
                        </nav>
                    </div>
                    <div className={'MenuToggle'}>
                        {this.state.menu? 
                            <img src={require('../../Image/Toggle.svg')} alt='Toggle slidebar' onClick={this.toggleMenuHandler}/>: 
                            <img src={require('../../Image/ToggleActive.svg')} alt='Toggle slidebar' onClick={this.toggleMenuHandler}/>}
                        {this.state.menu?
                            <text className={'open'} onClick={this.toggleMenuHandler}>Toggle slidebar</text> :
                            <text/>}
                    </div>
                </div>

                <div className={'WithoutMenu'}>
                    <div className={'Search'}>
                        <form>
                            <i className="material-icons-outlined">search</i>
                            <input name="search" placeholder="Искать здесь..." type="search"/>
                            <button type="submit"><img src={require('../../Image/buttonInSrc.svg')}/></button>
                        </form>
                    </div>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}

export default Layout