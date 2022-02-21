import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Home({ signOut, user }) {
    return <div><h1>Home</h1>;
    <button onClick={signOut}>Sign out</button>
    </div>
  };
  
  export default withAuthenticator(Home);
  