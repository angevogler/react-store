import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {

    console.log(this.props.id)

    const shoes = this.props.shoes.map( shoe => {
      return(
          <div key={shoe.id} className="shoe-container">
            <img src={shoe.image}/>
            <div className="shoe-info">
              <h4>{shoe.name}</h4>
              <h4>{shoe.brand}</h4>
              <button>
                <Link to={'/shoes/' + shoe.id}>View Details</Link>
              </button>
            </div>
          </div>
        )
      })
      return(
        <div>
          <h2>View All ({this.props.shoes.length})</h2>
          <div className="shoe-wrapper">
          {shoes}
          </div>
        </div>
      )
    }
}

export default Home;
