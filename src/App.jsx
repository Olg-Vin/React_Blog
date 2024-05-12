import React from 'react';
import { Provider } from 'react-redux';

import { PostsList } from './components/PostList';
import { Form } from './components/Form'
import { store } from './store';

export const PostApp = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <PostsList />
                <Form />
            </div>
        </Provider>
    );
};