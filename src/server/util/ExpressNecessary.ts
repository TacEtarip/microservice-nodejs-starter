import { Application } from 'express';
import { Server } from 'http';
import Route from './Route';

/**
 * @description Necessary functions to create and serve the app
 */
export interface IExpressNecessaryFunctions {
  addBasicConfiguration(): void;
  addRoutes(route: Route): void;
  createServer(): Server;
}

/**
 *
 * @description Necessary parameters to create and serve the app
 */
export interface IExpressNecessaryParams {
  app: Application;
  server: Server;
  routes: string[];
  port: number;
}
