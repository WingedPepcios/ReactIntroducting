const httpRequest = async (endpoint, method, data) => {
  const res = await fetch(endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  });
  return res.json();
};

export default httpRequest;

export const http = {
  get: (endpoint) => httpRequest(endpoint, 'GET', null),
  post: async (endpoint, data) => await httpRequest(endpoint, 'POST', data),
  put: async (endpoint, data) => await httpRequest(endpoint, 'PUT', data),
  delete: async (endpoint, data) => await httpRequest(endpoint, 'DELETE', data),
  insert: async (endpoint, data) => await httpRequest(endpoint, 'INSERT', data),
};
