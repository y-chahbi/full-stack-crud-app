import { createClient, RedisClientType } from 'redis';

let client: RedisClientType;

async function getClient(): Promise<RedisClientType> {
  if (!client) {
    client = createClient({
      url: 'redis://:pass@redis:6379', // Use your Redis container URL here
    });

    client.on('error', (err) => console.error('Redis Client Error', err));
    await client.connect();
  }

  return client;
}

export default getClient;