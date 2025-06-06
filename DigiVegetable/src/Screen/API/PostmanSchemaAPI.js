// This file fetches data from the Postman schema API and exports a function to get the data.
import axios from 'axios';

const POSTMAN_SCHEMA_URL = 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json';

export const fetchPostmanSchema = async () => {
  try {
    const response = await axios.get(POSTMAN_SCHEMA_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Postman schema:', error);
    throw error;
  }
};
