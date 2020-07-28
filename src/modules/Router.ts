import { Route } from "./Route";

interface IBlock {
  hide: () => void;
  show: () => void;
  getContent: () => HTMLElement;
}

export class Router {
  routes: Route[];
  private _currentRoute: Route;
  private _rootQuery: string;
  private _prev: Route;
  private static __instance: Router;
  private constructor(rootQuery: string) {
    window.addEventListener("hashchange", () => this._onRoute());
    this.routes = [];
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._prev = null;
    Router.__instance = this;
  }

  public static getInstance(rootQuery: string): Router {
    if (!Router.__instance) {
      Router.__instance = new Router(rootQuery);
    }

    return Router.__instance;
  }

  start() {
    this._onRoute();
  }

  getRoute(hash: string) {
    return (
      this.routes.find((route) => route.match(hash)) ||
      this.routes.find((route) => route.match("/"))
    );
  }

  private _onRoute(hash = window.location.hash) {
    const route = this.getRoute(hash);
    if (this._currentRoute) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route.render();
  }

  use(pathname: string, block: new () => IBlock, props?: {}) {
    const route = new Route(pathname, block, {
      rootQuery: this._rootQuery,
      ...props,
    });
    this.routes.push(route);
    return this;
  }

  go(hash: string) {
    window.location.hash = hash;
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }
}
