import {HttpMethods} from '@types';
const createRoute = (path: string, method: HttpMethods) => ({
  path,
  method,
});

export default createRoute;
