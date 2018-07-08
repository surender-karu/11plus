import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CardContainer from './CardContainer';


import {
    Row, Col
} from 'reactstrap';


const GridContainer = ({ cards, colSize }) => {
    return (
        <Row>
            {
                _.map(cards, (card, j) => {
                    return <Col {...colSize} key={j.toString()}>
                        <CardContainer card={card} key={j} />
                    </Col>
                }
                )
            }
        </Row>
    )
}

GridContainer.propTypes = {
    cards: PropTypes.array.isRequired,
    colSize: PropTypes.object
}

export default GridContainer;