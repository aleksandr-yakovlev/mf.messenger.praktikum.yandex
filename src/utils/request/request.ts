import { METHODS } from "./const";
import { queryStringify } from "./queryStringify";

interface transportFunc {
  (url: string, body: Record<string, unknown>): Promise<XMLHttpRequest>;
}

interface reqFunc {
  (url: string, options: { body: Record<string, unknown>; method?: METHODS }): Promise<
    XMLHttpRequest
  >;
}

export class HTTP {
  get: transportFunc = (url, body) => {
    return this.request(`${url}?${queryStringify(body)}`, {
      body,
      method: METHODS.GET,
    });
  };

  put: transportFunc = (url, body) => {
    return this.request(url, { body, method: METHODS.PUT });
  };

  post: transportFunc = (url, body) => {
    return this.request(url, { body, method: METHODS.POST });
  };

  delete: transportFunc = (url, body) => {
    return this.request(url, { body, method: METHODS.DELETE });
  };

  private request: reqFunc = (url, options) => {
    const { method, body } = options;

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !body) {
        xhr.send();
      } else {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(body));
      }
    });
  };
}
