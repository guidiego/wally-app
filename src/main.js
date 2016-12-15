import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'containers/AppContainer';
import createRoutes from 'router';
import rootStore from 'redux/rootStore';

import "./style.sass";

const routes = createRoutes(rootStore)
const MOUNT_NODE = document.getElementById("morphine-app")

ReactDOM.render(
    <AppContainer store={rootStore} routes={routes} />,
    MOUNT_NODE
)