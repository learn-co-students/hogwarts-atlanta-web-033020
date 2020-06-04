import React from "react"
import HogTile from "./HogTile"

class HogContainer extends React.Component {

    state = {
        filterGreased: false,
        sortByName: false,
        sortByWeight: false
    }

    HogMap = hogs => {
        let sortedHogs = [...hogs]

        if(this.state.sortByName){
            sortedHogs = sortedHogs.sort(this.sortHogsByName)
        } else if (this.state.sortByWeight){
            sortedHogs = sortedHogs.sort(this.sortHogsByWeight)
        }

        if(!this.state.filterGreased){
            return sortedHogs.map( hog => this.drawHog(hog) )
        } else {
            let greasedHogs = sortedHogs.filter(hog => hog.greased === true)
            return greasedHogs.map( hog => this.drawHog(hog) )
        }
    }

    drawHog = (hog) => {
        let imgUrl = hog.name.split(" ").join("_").toLowerCase()
        let hogPic = require(`../hog-imgs/${imgUrl}.jpg`)
        return (<div><HogTile hogInfo={hog} key={hog.name} img={hogPic}/><br/></div>)
    }

    toggleGreaseFilter = () => this.setState({filterGreased: !this.state.filterGreased})

    sortHogsByName = (a,b) => b.name < a.name ? 1 : -1

    sortHogsByWeight = (a,b) => b.weight - a.weight

    toggleSort = () => {
        if(!this.state.sortByName && !this.state.sortByWeight){
            this.setState({sortByName: true})
        } else if (this.state.sortByName && !this.state.sortByWeight){
            this.setState({sortByName: false, sortByWeight: true})
        } else {
            this.setState({sortByName: false, sortByWeight: false})
        }

    }

    sortButton = () => {
        if(!this.state.sortByName && !this.state.sortByWeight){
            return <button onClick={this.toggleSort}>No Sort</button>
        } else if (this.state.sortByName){
            return <button onClick={this.toggleSort}>Sort by Name</button>
        } else {
            return <button onClick={this.toggleSort}>Sort by Weight</button>
        }
    }

    render(){
        
        return (
            <div>
                <button onClick={this.toggleGreaseFilter}>Filter Greased</button>
                {this.sortButton()}
                {this.HogMap(this.props.hogs)}
            </div>
        )
    }
}

export default HogContainer