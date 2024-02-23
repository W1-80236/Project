// services/bill.js
import axios from 'axios';
import { createUrl } from './utils';

export async function getBill() {
  try {
    const url = createUrl('bill_tb');
    const response = await axios.get(url);
    console.log(response); // Log the response
    return response.data;
  } catch (error) {
    console.error('Error fetching bill data:', error);
    throw error;
  }
}
