import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Mude para o endereço real da API

export const getInstitutions = () => axios.get(`${API_BASE_URL}/institutions`);
export const getDonations = () => axios.get(`${API_BASE_URL}/donations`);
export const getVolunteers = () => axios.get(`${API_BASE_URL}/volunteers`);
