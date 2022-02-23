import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Medicine() {
    return <div>
      <h1>Medicine</h1>
    </div>
  };
  
export default withAuthenticator(Medicine);
  