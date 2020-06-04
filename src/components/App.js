import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import HogContainer from '../containers/HogContainer'

class App extends Component {
  state = {
    greasedFitler: 'All',
    sortType: 'Name'
  }

  setGreasedFilter = () => {
    // Toggle between all => greased => ungreased
    if (this.state.greasedFitler === 'All') {
      this.setState({ greasedFitler: 'Greased' })
    } else if (this.state.greasedFitler === 'Greased') {
      this.setState({ greasedFitler: 'Ungreased' })
    } else if (this.state.greasedFitler === 'Ungreased') {
      this.setState({ greasedFitler: 'All' })
    }
  }

  setSortType = () => {
    if (this.state.sortType === 'Name') {
      this.setState({ sortType: 'Weight' })
    } else if (this.state.sortType === 'Weight') {
      this.setState({ sortType: 'Name' })
    }
  }

  getFilteredHogs = () => {
    let filteredHogs = []
    if (this.state.greasedFitler === 'All') {
      filteredHogs = hogs;
    } else if (this.state.greasedFitler === 'Greased') {
      filteredHogs = hogs.filter(hog => hog.greased === true)
    } else if (this.state.greasedFitler === 'Ungreased') {
      filteredHogs = hogs.filter(hog => hog.greased === false)
    }

    return this.sortHogs(filteredHogs);
  }

  sortHogs = hogs => {
    if (this.state.sortType === 'Name') {
      return hogs.sort((a, b) => a.name.localeCompare(b.name))
    } else if (this.state.sortType === 'Weight') {
      return hogs.sort((a, b) => a.weight - b.weight)
    }
  }

  render() {
    return (
      <div className="App">
        <Nav greasedFilter={this.state.greasedFitler} setGreasedFilter={this.setGreasedFilter} sortType={this.state.sortType} setSortType={this.setSortType} />
        <HogContainer hogs={this.getFilteredHogs()} />
      </div>
    );
  }
}

export default App;
