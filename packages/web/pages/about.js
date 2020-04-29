import React from 'react';
import Layout from '../src/components/layout';
import Button from '@material-ui/core/Button';

const ContainedButtons = () => {
  return (
    <Layout title="ugh">
      <div>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary">
          Link
        </Button>
      </div>
    </Layout>
  );
};

export default ContainedButtons;
