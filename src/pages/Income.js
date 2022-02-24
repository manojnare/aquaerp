import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Income() {
    return <div>
      <h1>Income</h1>
    </div>
  };
  
export default withAuthenticator(Income);