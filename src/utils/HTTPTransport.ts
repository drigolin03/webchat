type Methods = "GET" | "POST" | "PUT" | "DELETE";

type TRequestData = Record<string, string | number>;

export type TRequestOptions = {
  method?: Methods;
  headers?: Record<string, string>;
  timeout?: number;
  data?: unknown;
};

function queryStringify(data: TRequestData) {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }

  const entries = Object.entries(data);

  return "?" + entries.map(([key, value]) => `${key}=${value}`).join("&");
}

export class HTTPTransport {
  public get = (
    url: string,
    options: TRequestOptions = {}
  ): Promise<XMLHttpRequest> => {
    if (options.data) {
      url = `${url}${queryStringify(options.data as TRequestData)}`;
    }

    return this.request(url, { ...options, method: "GET" });
  };

  public post = (url: string, options = {}): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: "POST" });

  public put = (url: string, options = {}): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: "PUT" });

  public delete = (url: string, options = {}): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: "DELETE" });

  request = (url: string, options: TRequestOptions = {}): Promise<unknown> => {
    const { headers = {}, method = "GET", data, timeout = 5000 } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(data as any);
      }
    });
  };
}
