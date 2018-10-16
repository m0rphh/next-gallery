import React from 'react';
import Router from 'next/router'
import Photo from '../components/frame';
import Layout from '../components/layout';

export default ({ url: { query: { id } } }) => (
        <Layout>
        <Photo id={id}/>
        </Layout>
)
