import React, { Component } from 'react';

import PageComponent from '../components/common/PageComponent'

import axios from 'axios'

class Home extends Component {
    state = {
        sections: []
    };

    componentDidMount() {
        axios.get('/api/home')
            .then(response => {
                const data = response.data;

                this.setState({ sections: data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <PageComponent sections={this.state.sections} />
        )
    }
}

export default Home;