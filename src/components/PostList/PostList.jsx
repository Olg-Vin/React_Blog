import React from 'react';
import { Post } from '../Post';
import { hashObject } from '../../hashObject';

import './styles.css';
import { useSelector } from 'react-redux';

export const PostsList = () => {
    const posts = useSelector(state => state.posts);

    return (
        <div className="list">
            { posts.map(post => <Post key={hashObject(post)} {...post}/>) }
        </div>
    );
};