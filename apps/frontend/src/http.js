export function sendPost(url, body) {
  return send({ method: 'POST', url, body });
}

export function sendGet(url) {
  return send({ method: 'GET', url });
}

async function send({ method, url, body }) {
  const response = await fetch(import.meta.env.VITE_PUBLIC_API_URL + url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (response.status > 299) {
    throw new Error(await response.text());
  }

  return response.json();
}
