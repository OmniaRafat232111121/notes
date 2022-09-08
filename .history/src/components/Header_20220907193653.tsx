import * as React from 'react';
import { Navbar,Container } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
    <Navbar fixed="top" bg="dark" varient="dark">
    <ontainer>
        <Navbar.Brand>
            ReactTypeScriptBootstrap
        </Navbar.Brand>
    </ontainer>
    </Navbar>
    );
};

export default App;
