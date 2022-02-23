import React, { useState, useEffect } from 'react';
import '../App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listPonds } from '../graphql/queries';
import { createPonds as createPondsMutation, deletePonds as deletePondsMutation } from '../graphql/mutations';

import { Amplify } from 'aws-amplify';
import { API, Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const initialFormState = { name: '', description: '', capacity: '' }

function Ponds() {

  const [ponds, setPonds] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchPonds();
  }, []);

  async function fetchPonds() {
    const apiData = await API.graphql({ query: listPonds });
    const pondsFromAPI = apiData.data.listPonds.items;
    await Promise.all(pondsFromAPI.map(async pond => {
      if (pond.image) {
        const image = await Storage.get(pond.image);
        pond.image = image;
      }
      return pond;
    }))
    setPonds(apiData.data.listPonds.items);
  }

  async function createPonds() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createPondsMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setPonds([ ...ponds, formData ]);
    setFormData(initialFormState);
  }

  async function deletePonds({ id }) {
    const newPondsArray = ponds.filter(ponds => ponds.id !== id);
    setPonds(newPondsArray);
    await API.graphql({ query: deletePondsMutation, variables: { input: { id } }});
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchPonds();
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
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createPonds}>Create Ponds</button>
      <div style={{marginBottom: 30}}>
        {
          ponds.map(ponds => (
            <div key={ponds.id || ponds.name}>
              <h2>{ponds.name}</h2>
              <p>{ponds.description}</p>
              <p>{ponds.capacity}</p>
              <button onClick={() => deletePonds(ponds)}>Delete Pond</button>
              {
                ponds.image && <img src={ponds.image} style={{width: 400}} alt="Pond"/>
              }   
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default withAuthenticator(Ponds);