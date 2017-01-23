import React from 'react';
import Head from 'next/head';
import store from '../../redux/rootStore';

import { Provider } from 'react-redux';

export default ({children, title}) => (
    <Provider store={store}>
        {children}
    </Provider>
)
