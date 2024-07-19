import {HttpMethods} from '@types';

export default (path: string, method: HttpMethods) => ({
  path,
  method,
});
