import { app } from './app';
import { env } from './env';

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then((host) => console.log(`🚀 HTTP server running! Acess: ${host}`));
