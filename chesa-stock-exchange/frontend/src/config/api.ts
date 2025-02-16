export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:10000';

export const getApiUrl = (endpoint: string): string => {
  return `${API_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
};
