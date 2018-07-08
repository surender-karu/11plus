import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    childrens: PropTypes.oneOfType([PropTypes.func, PropTypes.array, PropTypes.string])
};


const defaultProps = {
    tag: 'div'
}

class HtmlTag extends Component {
    render() {
        const {
            className,
            tag: Tag,
            text,
            childrens,
            ...attributes

        } = this.props
        return (
            <Tag {...attributes} className={className}>{childrens}</Tag>
        )
    }
}

HtmlTag.propTypes = propTypes;
HtmlTag.defaultProps = defaultProps

export default HtmlTag