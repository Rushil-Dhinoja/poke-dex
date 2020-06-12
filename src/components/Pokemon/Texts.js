import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Texts = ({ species }) => {
    return (
        <Fragment>
            {species.flavor_text_entries
                .map((text, index) => {
                    return text.language.name === 'en' && index <= 5
                        ? text.flavor_text
                              .replace(/é/g, 'E')
                              .replace(/'/g, '')
                              .replace(/[^a-zA-Z]/g, ' ')
                        : '';
                })
                .join()
                .replace(/ ,/g, '. ')
                .replace(/,/g, '')
                .replace(/POKEMON s/g, "POKEMON's")}
        </Fragment>
    );
};

Texts.propTypes = {
    species: PropTypes.object,
};

export default Texts;
