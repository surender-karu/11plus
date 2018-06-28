import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import _ from 'lodash';

import axios from 'axios'

class Home extends Component {
    state = {
        p: null,
        cards: []
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
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Card className="card-margin">
                                <CardBody>
                                    <CardText>
                                        {this.state.p}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        _.map(this.state.cards, (card, i) => {
                            return <Col sm="4" key={i.toString()}>
                                <Card key={i.toString()} className="card-margin">
                                    <CardBody>
                                        <CardTitle>{card.title}</CardTitle>
                                        <CardText>{card.text}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        }
                        )
                    }
                </Row>
            </Container>
        )
    }
}

export default Home;