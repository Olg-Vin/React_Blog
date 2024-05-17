import React from 'react';

import { PostList } from '../PostList';
import { Form } from '../Form';

import './styles.css'

export const Body = () => {
    return (
        <div className='body'>
            <PostList />
            <Form />
        </div>
    )
}