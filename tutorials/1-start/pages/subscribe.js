import React from 'react';
import Head from 'next/head';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { styleTextField } from '../components/SharedStyles';
import withLayout from '../lib/withLayout';

class Subscribe extends React.Component {
  onSubmit = (e) => {
    // some code
  };
  render() {
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Subscribe</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <br />
        <form onSubmit={this.onSubmit}>
          <p>We will email you when a new tutorial is released:</p>
          <TextField
            inputRef={(elm) => {
              this.emailInput = elm;
            }}
            type="email"
            label="Your email"
            style={styleTextField}
            required
          />
          <p />
          <Button variant="raised" color="primary" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    );
  }
}
export default withLayout(Subscribe);
