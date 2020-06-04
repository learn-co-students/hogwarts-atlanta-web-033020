import React from "react"

class HogTile extends React.Component{

    state = {
        showInfo: false,
        hidden: false
    }

    ToggleHogInfo = () => {
        this.setState({showInfo: !this.state.showInfo})
    }

    ToggleHidden = () => this.setState({hidden: !this.state.hidden}) 

    ShowHog = () => {
        if(!this.state.hidden){
            return (
                <div className ="ui card">
                        <img src={this.props.img}/>
                    <div>{this.props.hogInfo.name}</div>
                    <button onClick={this.ToggleHogInfo}>Show Info</button>
                    {this.ShowHogInfo()}
                    <br/>
                    <button onClick={this.ToggleHidden}>Hide Hog</button>
                    <br/>
                </div>
            )
        }
    }

    ShowHogInfo = () => {
        if(this.state.showInfo){
            return (
                <div>
                    <div>{this.props.hogInfo.specialty}</div>
                    <div>{this.props.hogInfo.greased ? "true" : "false"} </div>
                    <div>{this.props.hogInfo.weight}</div>
                    <div>{this.props.hogInfo["highest medal achieved"]}</div>
                </div>
            )
        }
    }

    render(){
        return <div>{this.ShowHog()}</div>  
    }
}

export default HogTile
