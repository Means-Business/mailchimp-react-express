import request from 'request';

export async function subscribe({ email }) {
  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const listId = 'd4f27ad8cf';
  const API_KEY = 'f7549cb3fca47cdcb281575f7fc4b6d9-us19';

  await new Promise((resolve, reject) => {
    request.post(
      {
        uri: `https://us19.api.mailchimp.com/3.0/lists/${listId}/members`,
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`,
        },
        json: true,
        body: data,
      },
      (err, response, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      },
    );
  });
}
