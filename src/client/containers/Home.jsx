import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardDeck } from 'reactstrap';
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
                            <Card>
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
                    <Col>
                        {
                            _(this.state.cards).chunk(3)
                                .map((arr, i) => {
                                    return <CardDeck>
                                        {_.map(arr, (card, j) => {
                                            <Card>
                                                <CardBody>
                                                    <CardTitle>{card.title}</CardTitle>
                                                    <CardText>{card.text}</CardText>
                                                </CardBody>
                                            </Card>

                                        })
                                        }
                                    </CardDeck>
                                }
                                )
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;