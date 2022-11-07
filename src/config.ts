import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    MONGODB_URL: process.env.MONGODB_URL,
  };
});
