import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function FeedTime() {
    return <div>
      <h1>FeedTime</h1>
    </div>
  };
  
export default withAuthenticator(FeedTime);