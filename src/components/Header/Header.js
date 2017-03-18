import React, {Component, PropTypes} from 'react';
import {FormControl, FormGroup, Nav, Navbar} from 'react-bootstrap';
import {action} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class Header extends Component {
  static propTypes = {
    keys: PropTypes.shape({
      publicKey: PropTypes.string,
      privateKey: PropTypes.string,
    }).isRequired,
  };

  @action onChange(field, event) {
    this.props.keys[field] = event.target.value;
  }

  render() {
    const {keys: {publicKey, privateKey}} = this.props;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Marvel Universe</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <Navbar.Form inline>
            <FormGroup controlId="pubKey">
              <FormControl
                type="text"
                placeholder="Public key"
                value={publicKey}
                onChange={this.onChange.bind(this, 'publicKey')}
              />
            </FormGroup>
            <FormGroup controlId="privKey">
              <FormControl
                type="text"
                placeholder="Secret key"
                value={privateKey}
                onChange={this.onChange.bind(this, 'privateKey')}
              />
            </FormGroup>
          </Navbar.Form>
        </Nav>
      </Navbar>
    );
  }
}