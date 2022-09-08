import * as React from 'react';
import { Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
    <Navbar fixed="top" bg="dark" varient="dark">

    <Container>
        <Navbar.Brand>
            ReactTypeScriptBo
        </Navbar.Brand>
    </Container>
    </Navbar>
    );
};

export default App;
