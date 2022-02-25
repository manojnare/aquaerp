import React, { useState, useEffect } from 'react';
import '../App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listFeedTimes } from '../graphql/queries';
import { createFeedTime as createFeedTimeMutation, deleteFeedTime as deleteFeedTimeMutation} 
  from '../graphql/mutations';

import { Amplify } from 'aws-amplify';
import { API } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

let today = new Date();
let fdate = moment(today).format('YYYY-MM-DD')

const initialFormState = { pond_no: '', feed_date: fdate, feed_time: 'selecttime', feed_type: '' , feed_quantity: '' }

function FeedTime() {

  const [feedtime, setFeedTime] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  const [ftdate, setFTDate] = useState(new Date());

  const set_Date = (date) => {
      setFTDate(date);
      setFormData({ ...formData, 'feed_date': moment(date).format('YYYY-MM-DD')});
      fFeedTime(date);
  }

  useEffect(() => {
    fetchFeedTime();
  }, []);

  async function fFeedTime(datef) {
    const apiData = await API.graphql({ query: listFeedTimes });
    const nApiData = apiData.data.listFeedTimes.items;
    datef = moment(datef).format('YYYY-MM-DD')
    setFeedTime(nApiData.filter(item => item.feed_date === datef));
  }

  async function fetchFeedTime() {
    const apiData = await API.graphql({ query: listFeedTimes });
    const nApiData = apiData.data.listFeedTimes.items;
    setFeedTime(nApiData.filter(item => item.feed_date === fdate));
  }

  async function createFeedTime() {
    if (formData.feed_time === "selecttime") alert("Please Select Time");
    if (!formData.pond_no || !formData.feed_date || !formData.feed_time) return;
    await API.graphql({ query: createFeedTimeMutation, variables: { input: formData } });
    setFeedTime([ ...feedtime, formData ]);
    setFormData(initialFormState);
  }

  async function deleteFeedTime({ id }) {
    const newFeedTimeArray = feedtime.filter(feedtime => feedtime.id !== id);
    setFeedTime(newFeedTimeArray);
    await API.graphql({ query: deleteFeedTimeMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Feed Time Details</h1>
      <table className="table table-striped">
      <tbody>
        <tr>
        <td>
            <input
              onChange={e => setFormData({ ...formData, 'pond_no': e.target.value})}
              placeholder="Pond No"
              value={formData.pond_no}
            />
          </td>          
          <td>
            <DatePicker
              dateFormat="dd/MMM/yyyy"
              selected={ftdate}
              onChange={(date) => {set_Date(date)}}
              value={ftdate}
            />
          </td>
          <td>
            <select onChange={e => setFormData({ ...formData, 'feed_time': e.target.value})}>
              <option value="selecttime">Select Time</option>
              <option value="06:45">6:45am</option>
              <option value="10:15">10:15am</option>
              <option value="13:00">1pm</option>
              <option value="16:00">4pm</option>
            </select>
          </td>
          <td>
            <input
              onChange={e => setFormData({ ...formData, 'feed_type': e.target.value})}
              placeholder="Feed Type"
              value={formData.feed_type}
            />
          </td>
          <td>
            <input
              onChange={e => setFormData({ ...formData, 'feed_quantity': e.target.value})}
              placeholder="Feed Quantity"
              value={formData.feed_quantity}
            />
          </td>
          <td><button onClick={createFeedTime}>Add Feed Time</button></td>      
        </tr>

      </tbody>
    </table>

      <table className="table table-striped">
          <thead>
            <tr>
              <th width="15%">Pond No</th>
              <th width="15%">Feed Date</th>
              <th width="15%">Feed Time</th>
              <th width="20%">Feed Type</th>
              <th width="15%">Feed Quantity</th>
              <th width="20%">Action</th>
            </tr>
          </thead>
      </table>

      <div style={{marginBottom: 30}}>
        {
          feedtime.map(feedtime => (
            <div key={feedtime.id || feedtime.pond_no}>
              <table className="table table-striped">
              <tbody>
                <tr>
                  <td width="15%">{feedtime.pond_no}</td>
                  <td width="15%">{moment(feedtime.feed_date).format("DD-MMM-YYYY")}</td>
                  <td width="15%">{feedtime.feed_time}</td>
                  <td width="20%">{feedtime.feed_type}</td>
                  <td width="15%">{feedtime.feed_quantity}</td>
                  <td width="20%">
                    <button onClick={() => deleteFeedTime(feedtime)}>Delete</button></td>
                </tr>
              </tbody>
              </table>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default withAuthenticator(FeedTime);