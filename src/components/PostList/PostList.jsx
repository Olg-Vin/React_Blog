import React from 'react';
import { useSelector } from 'react-redux';

import { Post } from '../Post';
import { hashObject } from '../../hashObject';

import './styles.css';

export const PostList = () => {
    const posts = useSelector(state => state.posts);

    return (
        <div className="list">
            <span id='textSpan'>
                Записи
            </span>
            <div>
                { posts.map(post => <Post key={hashObject(post)} {...post}/>) }
            </div>
        </div>
    );
};