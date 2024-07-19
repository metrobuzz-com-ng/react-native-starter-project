import {createRoute} from '@utils';

const urls = {
  health: {
    entry: () => createRoute('health'),
    check: () => createRoute('check'),
  },
};

export default urls;
