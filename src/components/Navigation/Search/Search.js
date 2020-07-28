import React, {Component} from 'react'
import './Search.css'

class Search extends Component {
    render() {
        return(
            <div className={'Search'}>
                <form>
                    <i className="material-icons-outlined">search</i>
                    <input name="search" placeholder="Искать здесь..." type="search"/>
                    <button type="submit"><img src={require('../../../Image/buttonInSrc.svg')}/></button>
                </form>
            </div>
        )
    }
}                  
export default Search