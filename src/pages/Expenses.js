import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Expenses() {
    return <div>
      <h1>Expenses</h1>
    </div>
  };
  
export default withAuthenticator(Expenses);