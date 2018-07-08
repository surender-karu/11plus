import React from 'react';
import PropTypes from 'prop-types';
import GridContainer from './GridContainer';

import _ from 'lodash'

import {
    Container
} from 'reactstrap';

const PageComponent = ({ sections }) => {
    return (
        <Container>
            {
                _.map(sections, (item, i) => {
                    const colSize = item.section.cols !== undefined ? { "sm": 12 / item.section.cols } : {};
                    return (
                        <GridContainer key={i} cards={item.section.cards} colSize={colSize} />
                    )
                }
                )
            }
        </Container>
    )
};

PageComponent.propTypes = {
    sections: PropTypes.array.isRequired
}

export default PageComponent