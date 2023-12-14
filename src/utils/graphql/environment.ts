import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { RequestParameters } from 'relay-runtime/lib/util/RelayConcreteNode';
import { Variables } from 'relay-runtime/lib/util/RelayRuntimeTypes';

async function fetchGraphQL(params: RequestParameters, variables: Variables) {
  const apiKey = localStorage.getItem('apiKey') || '';
  try {
    const response = await fetch('/api/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'FLEXHIRE-API-KEY': apiKey,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        mode: 'no-cors',
      },
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
    });

    return response.json();
  } catch (error) {
    return error;
  }
}

export default new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
