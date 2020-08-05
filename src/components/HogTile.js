import React from 'react'

class HogTile extends React.Component {
    state = {
        seeDetails: true
    }
    getDetails = () => {
        <div>
            <p>Name: {this.props.hogObj.name}</p>
            <p>Specialty: {this.props.hogObj.specialty}</p>
            <p>{this.props.hogObj.greased ? "Greased" : "Not greased"}</p>
            <p>Weight: {this.props.hogObj.weight}</p>
            <p>Highest medal achieved: {this.props.hogObj['highest medal achieved']}</p>
        </div>
    }

    string_to_slug (str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
      
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
    
        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '_') // collapse whitespace and replace by -
            .replace(/-+/g, '_'); // collapse dashes
    
        return str;
    }
    render(){
        let pigImage = require(`../hog-imgs/${this.string_to_slug(this.props.hogObj.name)}.jpg`)
        return (
            <div class="ui card">
                <div class="image">
                    <img src={pigImage} />
                </div>
                <div class="content">
                    <a class="header">{this.props.hogObj.name}</a>
                </div>
          </div>
    )}
}
export default HogTile