import { Route } from "./Route";
import { Block } from "./Block";

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

  start(): void {
    this._onRoute();
  }

  getRoute(hash: string): Route {
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

  use(pathname: string, block: new () => Block, props?: Record<string, unknown>): Router {
    const route = new Route(pathname, block, {
      rootQuery: this._rootQuery,
      ...props,
    });
    this.routes.push(route);
    return this;
  }

  go(hash: string): void {
    window.location.hash = hash;
  }

  back(): void {
    window.history.back();
  }

  forward(): void {
    window.history.forward();
  }
}
