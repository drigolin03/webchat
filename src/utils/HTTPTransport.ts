<<<<<<< HEAD
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
=======
export enum Method {
  Get = "Get",
  Post = "Post",
  Put = "Put",
  Patch = "Patch",
  Delete = "Delete",
}

type Options = {
  method: Method;
  data?: any;
};

export default class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(path = "/"): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(
    path: string,
    data?: unknown
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Post,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Put,
      data,
    });
  }

  public patch<Response = void>(
    path: string,
    data: unknown
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Patch,
      data,
    });
  }

  public delete<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Delete,
      data,
    });
  }

  private request<Response>(
    url: string,
    options: Options = { method: Method.Get }
  ): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onreadystatechange = (e) => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      xhr.ontimeout = () => reject({ reason: "timeout" });

      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === Method.Get || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
>>>>>>> origin/sprint_3
}
