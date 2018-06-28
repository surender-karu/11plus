import React, {Component } from 'react'
import PropTypes from 'prop-types'

const Card = props => {
    const {h3, body} = props;
    return (
        <div>
            <h3>{h3}</h3>
            <body>{body}</body>
        </div>
    )
}