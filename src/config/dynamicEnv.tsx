import {Env} from '@types';
import {CURRENT_LANGUAGE, NODE_ENV, BASE_URL, GOOGLE_CLIENT_ID} from '@env';

const env: Env = {
  BASE_URL: BASE_URL,
  CURRENT_LANGUAGE: CURRENT_LANGUAGE as Env['CURRENT_LANGUAGE'],
  NODE_ENV: NODE_ENV as Env['NODE_ENV'],
  // Can add secrets this way
  GOOGLE_CLIENT_ID,
};

export default env;
