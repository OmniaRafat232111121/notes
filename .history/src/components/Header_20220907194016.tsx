import * as React from 'react';
import { Navbar,Container } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
    <Navbar fixed="top" bg="dark" varien>
    <Container>
        <Navbar.Brand>
            ReactTypeScriptBootstrap
        </Navbar.Brand>
    </Container>
    </Navbar>
    );
};

export default App;
