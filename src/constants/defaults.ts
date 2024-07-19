import {Env} from '@types';

const defaults: {
  currentLanguage: Env['CURRENT_LANGUAGE'];
  environment: Env['NODE_ENV'];
} = {
  currentLanguage: 'en',
  environment: 'test',
};

export default defaults;
