import { Route } from "./Route";

interface IBlock {
  hide: () => void;
  show: () => void;
  getContent: () => HTMLElement;
}

export class Router {
  static __instance: Router;
  routes: Route[];
  _currentRoute: Route;
  _rootQuery: string;
  _prev: Route;
  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    window.addEventListener("hashchange", () => this._onRoute());
    this.routes = [];
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._prev = null;
    Router.__instance = this;
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
