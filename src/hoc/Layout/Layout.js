import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Layout.css'

const links = [
    {to: '/', label: 'Dashboard', exact: true},
    {to: '/tasks', label: 'Tasks', exact: true},
    {to: '/email', label: 'Email', exact: true},
    {to: '/contacts', label: 'Contacts', exact: true},
    {to: '/chat', label: 'Chat', exact: true},
    {to: '/deals', label: 'Deals', exact: true},
]

class Layout extends Component {

    state = {
        menu: true,
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
                        <img src={require(`../../Image/${this.state.pathImg}.svg`)}/>
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
                                        <img src={require(`../../Image/Settings.svg`)}/>
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
                            <img src={require('../../Image/src.svg')}/>
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