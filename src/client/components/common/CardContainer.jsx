import React from 'react';
import PropTypes from 'prop-types';

import {
    Card, CardBody, CardTitle, CardText

} from 'reactstrap';


const CardContainer = ({ card }) => {
    return (
        <Card className="card-margin">
            <CardBody>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
            </CardBody>
        </Card>
    )
}

CardContainer.propTypes = {
    card: PropTypes.object.isRequired
}

export default CardContainer;