import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Jumbotron } from 'reactstrap'
import _ from 'lodash';

import axios from 'axios'

class MockExams extends Component {
    state = {
        h3: null,
        content: null,
        links: []
    };

    componentDidMount() {
        axios.get('/api/mock_exam')
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
                <Jumbotron className="transparent-bg">
                    <h3 className="display-4">
                        {this.state.h3}
                    </h3>
                    <p className="lead">{this.state.content}
                    </p>
                </Jumbotron>
                <ListGroup flush>
                    {
                        _.map(this.state.links, (link, i) => {
                            return (<ListGroupItem key={i.toString()} tag="a" href={link.href}>{link.name}</ListGroupItem>)
                        }
                        )
                    }
                </ListGroup>
            </div>
        );
    }
}

export default MockExams