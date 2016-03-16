import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
main();

function main() {
    ReactDOM.render(<Main/>, document.getElementById("app-container"));
}