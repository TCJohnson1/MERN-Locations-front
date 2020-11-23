import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

export default class Favorites extends Component {
      render() {
            return (

                  <div>
                        <Header />
                        <Link to='/newdestination' ><p className='btn blue lighten-3'>BACK</p></Link>
                        <div className="container">
                              <h3>Favorites</h3>

                              <div className='row'>
                                    {this.props.locations.map((location) => {
                                          // below checks if the location.favorite is true and displays a card if it is
                                          // and displays nothing if its false
                                          return ( location.favorite == true ? (
                                                <div key={location._id} className="col s12 m7">
                                                      <h4 id="cardheader" className="header">{location.name}</h4>
                                                      <div className="card horizontal">
                                                            <div className="card-image">
                                                                  <img id="favoriteimg" src={location.image} />
                                                            </div>
                                                            <div className="card-stacked">
                                                                  <div className="card-content">
                                                                        <p>{location.description}</p>
                                                                  </div>
                                                                  <div className="card-action">
                                                                        <a className="deep-orange-text"  href="/locations/id">view destination</a>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>) : ''
                                                
                                          )
                                    })}
                              </div>

                        </div>
                        <Footer />
                  </div>

            )
      }
}


