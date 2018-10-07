import React from 'react';
import Photo from '../components/frame';

export default ({ url: { query: { id } } }) => (
        <Photo id={id} />
)
