import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Home() {
    return <div>
      <h1>Home</h1>
    </div>
  };
  
  export default withAuthenticator(Home);
  