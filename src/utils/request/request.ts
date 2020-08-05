import { METHODS } from "./const";
import { queryStringify } from "./queryStringify";

interface transportFunc {
  (url: string, options: Record<string, unknown>): Promise<
    Record<string, unknown> | XMLHttpRequest
  >;
}

export class HTTP {
  get: transportFunc = (url, options) => {
    return this.request(`${url}?${queryStringify(options)}`, {
      data: {},
      method: METHODS.GET,
    });
  };

  put: transportFunc = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  post: transportFunc = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  delete: transportFunc = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (
    url: string,
    options: { [key: string]: any; method: METHODS }
  ): Promise<Record<string, unknown> | XMLHttpRequest> => {
    const { method, data } = options;

    return new Promise<Record<string, unknown> | XMLHttpRequest>(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = () => {
          resolve(xhr);
        };

        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;

        if (method === METHODS.GET || !data) {
          xhr.send();
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    );
  };
}
