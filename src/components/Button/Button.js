import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { InlineButton, RegularButton, RegularButtonColor } from './Button.css';

function Button({ variant, children, ...props }) {
    const { to } = props;
    const Component = useMemo(() => {
        switch (variant) {
            case 'inline':
                return InlineButton
            case 'regular':
                return RegularButton
            case 'regular-color':
                return RegularButtonColor

            default:
                return RegularButton
        }
    }, [variant]);

    const content = useMemo(() => (
        <Component {...props}>
            {children}
        </Component>
    ), [props, children]);

    return to ? (
        <Link {...props}>
            {content}
        </Link>
    ) : (
            <Fragment>
                {content}
            </Fragment>
        )
}

Button.propTypes = {
    variant: PropTypes.oneOf(['inline', 'regular', 'regular-color'])
}

export default Button;