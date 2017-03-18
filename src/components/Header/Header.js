import React, {Component, PropTypes} from 'react';
import {Form, FormControl, FormGroup, Navbar} from 'react-bootstrap';
import {observer} from 'mobx-react';

@observer
export default class Header extends Component {
  static propTypes = {
    keys: PropTypes.shape({
      public: PropTypes.string,
      secret: PropTypes.string
    }).isRequired
  };

  render() {
    const keys = this.props;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Marvel Universe</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <Form inline>
            <FormG
          </Form>
        </Nav>
      </Navbar>
    );
  }
}