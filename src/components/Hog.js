import React from 'react'

class Hog extends React.Component {
  state = {
    pigDetailsEnabled: false
  }

  togglePigDetails = () => {
    this.setState({
      pigDetailsEnabled: !this.state.pigDetailsEnabled
    })
  }

  string_to_slug = str => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '_') // collapse whitespace and replace by -
      .replace(/-+/g, '_'); // collapse dashes

    return str;
  }

  getDetails = () => {
    if (this.state.pigDetailsEnabled) {
      return (
        <div>
          <h4>Details:</h4>
          <h5>Specialty: {this.props.specialty}</h5>
          <h5>Greased: {this.props.greased ? 'Greased' : 'Ungreased'}</h5>
          <h5>Weigth: {this.props.weight}</h5>
          <h5>Highest Medal Achieved: {this.props.highestMedalAchieved}</h5>
        </div>
      );
    }
  }

  render() {
    let pigImage = require(`../hog-imgs/${this.string_to_slug(this.props.name)}.jpg`)
    return (
      <div className='pigTile' onClick={this.togglePigDetails}>
        <img src={pigImage} alt='piggy' />
        <h3>{this.props.name}</h3>
        {this.getDetails()}
      </div>
    )
  }
}

export default Hog;