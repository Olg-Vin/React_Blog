import React from 'react';
import { Provider } from 'react-redux';

import { Body } from './components/Body'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { store } from './store';

export const PostApp = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <Body />
                <Footer />
            </div>
        </Provider>
    );
};