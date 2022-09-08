import * as React from 'react';
import { Navbar,Container } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
    <Navbar fixed="top" bg="dark" varient="dark">
    <container>
        <Navbar.Brand>
            ReactTypeScriptBootstrap
        </Navbar.Brand>
    </container>
    </Navbar>
    );
};

export default App;
