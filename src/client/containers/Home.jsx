import React, { Component } from 'react';

import axios from 'axios'

class Home extends Component {
    state = {
        p:null,
        cards:[]
    };

    componentDidMount() {
        axios.get('/api/home')
            .then(response => {
                const data = response.data;

                this.setState(data);
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
            <div className="container">
                <p>
                    {this.state.p}
                </p>                
                {
                    this.state.cards.map(card => {
                        return (<div>
                            <h3>{card.h3}</h3>
                            <p>{card.p}</p>
                        </div>)
                    })
                }
            </div>
        )
    }
}

export default Home;