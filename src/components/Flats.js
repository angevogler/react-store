import React, { Component } from 'react';

class Flats extends Component {

  buyFlats(id){
    this.props.onChangeValue({
      id: id,
    });
  }

  render() {

    const shoes = this.props.shoes.map(shoe => {
      if (shoe.category === "flats") {
        return(
          <div key={shoe.id} className="shoe-container">
            <img src={shoe.image}/>
            <div className="shoe-info">
              <h4>{shoe.name}</h4>
              <h4>{shoe.brand}</h4>
              <p>${shoe.price}</p>
              <button onClick={() => this.buyFlats(shoe.id)}>Add to Bag</button>
            </div>
          </div>
        )
      }
    })
    return(
      <div>
        <h2>Flats</h2>
        <div className="shoe-wrapper">
        {shoes}
        </div>
      </div>
    )
  }
}

export default Flats;
