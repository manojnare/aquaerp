import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listPonds } from './graphql/queries';
import { createPonds as createPondsMutation, deletePonds as deletePondsMutation } from './graphql/mutations';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const initialFormState = { name: '', description: '', capacity: '' }

function App({ signOut, user }) {
  const [ponds, setPonds] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchPonds();
  }, []);

  async function fetchPonds() {
    const apiData = await API.graphql({ query: listPonds });
    setPonds(apiData.data.listPonds.items);
  }

  async function createPonds() {
    if (!formData.name || !formData.description || !formData.capacity) return;
    await API.graphql({ query: createPondsMutation, variables: { input: formData } });
    setPonds([ ...ponds, formData ]);
    setFormData(initialFormState);
  }

  async function deletePonds({ id }) {
    const newPondsArray = ponds.filter(ponds => ponds.id !== id);
    setPonds(newPondsArray);
    await API.graphql({ query: deletePondsMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Ponds App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Ponds name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Ponds description"
        value={formData.description}
      />
      <input
        onChange={e => setFormData({ ...formData, 'capacity': e.target.value})}
        placeholder="Ponds Capacity"
        value={formData.capacity}
      />
      <button onClick={createPonds}>Create Ponds</button>
      <div style={{marginBottom: 30}}>
        {
          ponds.map(ponds => (
            <div key={ponds.id || ponds.name}>
              <h2>{ponds.name}</h2>
              <p>{ponds.description}</p>
              <p>{ponds.capacity}</p>
              <button onClick={() => deletePonds(ponds)}>Delete Ponds</button>
            </div>
          ))
        }
      </div>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);