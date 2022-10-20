import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './Nav/navigation/menu';
import Content from './Nav/content/content';

const App = () => {
    return (
        <>
            <Router>
                <Menu />
                <Content />
            </Router>
        </>
    )
}

export default App;