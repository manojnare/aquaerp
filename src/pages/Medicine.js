import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Medicine({ signOut, user }) {
    return <div><h1>Medicine</h1>;
    <button onClick={signOut}>Sign out</button>
    </div>
  };
  
  export default withAuthenticator(Medicine);
  