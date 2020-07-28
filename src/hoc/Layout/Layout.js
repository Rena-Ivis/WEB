import React, {Component} from 'react';
import './Layout.css'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Profile from '../../components/Navigation/Profile/Profile';
import Search from '../../components/Navigation/Search/Search';


class Layout extends Component {

    state = {
        menu: true
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
                    <Profile
                        isOpen={this.state.menu}
                    />
                    <Drawer 
                        isOpen={this.state.menu}
                    />
                    <MenuToggle
                        isOpen={this.state.menu}
                        toggleMenuHandler={this.toggleMenuHandler}
                    />
                </div>

                <div className={'WithoutMenu'}>
                    <Search/>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}

export default Layout