import React, {Component} from 'react'
import './Tasks.css'

export default class Tasks extends Component {
    state={
        all: false,
        count: 0,
        email: true,
        company: true,
        role: true,
        forecast: true,
        recentActivity: true,
        rows: [
            {
                id: 0, 
                name: "Lindsey Stroud", 
                email:'lindsey.stroud@gmail.com', 
                company_name:'Hatchbuck', 
                role:'Manager', 
                forecast:'50 %', 
                recent_activity:'5 Minutes ago', 
                isChecked: false
            },
            {
                id: 1, 
                name: "Nicci Troiani", 
                email:'nicci.troiani@gmail.com', 
                company_name:'Slack', 
                role:'Manager', 
                forecast:'75 %', 
                recent_activity:'14 Minutes ago', 
                isChecked: false
            }
          ]
    }

    checkedElement(row)  {
        this.setState({company:true, email:true, role:true, forecast:true, recentActivity:true})
        let count = this.state
        count = 0
        this.state.rows.forEach(r => {
            if (r.id === row.id)
               r.isChecked = !r.isChecked
            if (r.isChecked)
                count++
         })
        if(count === 0)
            this.setState({all: false})
        else
            this.setState({all: true})
        this.setState({rows: this.state.rows, count})
    }

    handleAllChecked() {
        this.setState({company:true, email:true, role:true, forecast:true, recentActivity:true})
        let count = this.state
        count = 0
        this.state.rows.forEach(r => {
            r.isChecked = !this.state.all
            if(r.isChecked === true)
                count++
            else
                count--
        })
        this.setState({rows: this.state.rows, all: !this.state.all, count})
    }

    removeCompany() {
        this.setState({company: !this.state.company})
    }

    removeEmail() {
        this.setState({email: !this.state.email})
    }

    removeRole() {
        this.setState({role: !this.state.role})
    }

    removeForecast(){
        this.setState({forecast: !this.state.forecast})
    }

    removeRecentActivity(){
        this.setState({recentActivity: !this.state.recentActivity})
    }

    renderRows(){
        return(
            this.state.rows.map((row) => {
                return (
                    <React.Fragment>
                        <tr className={row.isChecked? 'ActiveTr':'Tr'} onClick={() => this.checkedElement(row)}>
                            <td>
                                <input type="checkbox" class="custom-checkbox" id="box" onClick={() => this.checkedElement(row)} checked={row.isChecked}/>
                                <label for="box"/>
                            </td>
                            <td className={'ImgTh'}><img src={require('../../Image/Profile.svg')}/></td>
                            <td><text className={'Name'}>{row.name}</text></td>
                            <td>{this.state.email?row.email:null}</td>
                            <td>{this.state.company?row.company_name:null}</td>
                            <td>{this.state.role?row.role:null}</td>
                            <td>{this.state.forecast?row.forecast:null}</td>
                            <td>{this.state.recentActivity?row.recent_activity:null}</td>
                        </tr>
                    </React.Fragment>
                )
            })
        )
    }

    render() {
        return (
            <div className={'Tasks'}>
                <div className={'panel'}>
                    <text>Company: 
                        <select>
                            <option>All</option>
                        </select>
                    </text>

                    <button disabled>Add contact</button>
                </div>

                <table className="Table">
                    <thead>
                        <tr className={'Tr'}>
                             {this.state.all?
                                <td colspan="8">
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <input type="checkbox" class="custom-checkbox-count" id="box2" onChange={()=>this.handleAllChecked()} checked={this.state.all}/>
                                        <label count={this.state.count} for="box2" style={{height: '3em'}}/>                            
                                        <text className={'countSelected'}> {this.state.count} selected</text>
                                        <i className="material-icons" style={{color: '#C2CFE0', fontSize: '1.5em'}}>delete</i>
                                    </div>
                                </td>
                            :
                            <React.Fragment>
                                <td>
                                    <input type="checkbox" class="custom-checkbox-count" id="box2" onChange={()=>this.handleAllChecked()} checked={this.state.all}/>
                                    <label for="box2" style={{height: '3em'}}/> 
                                </td>
                                <td colspan="2">Name</td>
                                <td style={{width:'20%'}}>Email
                                    <div className="material-icons" style={{color: '#C2CFE0', fontSize: '1.2em'}} onClick={()=>this.removeEmail()}>{this.state.email?'remove':'add'}</div>
                                </td>
                                <td>Compsny name
                                    <div className="material-icons" style={{color: '#C2CFE0', fontSize: '1.2em'}} onClick={()=>this.removeCompany()}>{this.state.company?'remove':'add'}</div>
                                </td>
                                <td style={{width:'10%'}}>Role
                                    <div className="material-icons" style={{color: '#C2CFE0', fontSize: '1.2em'}} onClick={()=>this.removeRole()}>{this.state.role?'remove':'add'}</div>
                                </td>
                                <td>Forecast
                                    <div className="material-icons" style={{color: '#C2CFE0', fontSize: '1.2em'}} onClick={()=>this.removeForecast()}>{this.state.forecast?'remove':'add'}</div>
                                </td>
                                <td>Recent activity
                                    <div className="material-icons" style={{color: '#C2CFE0', fontSize: '1.2em'}} onClick={()=>this.removeRecentActivity()}>{this.state.recentActivity?'remove':'add'}</div>
                                </td>
                            </React.Fragment>  
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}