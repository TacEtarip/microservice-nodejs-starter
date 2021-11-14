import { createRouteExample } from '../../src/server/routes/exampleRoute';
import request from 'supertest';
import Route from '../../src/server/util/Route';
import ServerInitialization from '../../src/server/ServerInitialization';

const baseRoute = '/example';

describe('Ejemplo de test para la creacion correcta de una ruta', () => {
  let serverInitialization: ServerInitialization;
  let createdRoute: Route;

  beforeAll(() => {
    serverInitialization = new ServerInitialization(8082);
    createdRoute = createRouteExample();
    serverInitialization.app.use(createdRoute.route, createdRoute.router);
    serverInitialization.createServer();
  });

  it('La ruta base es la adecuada', () => {
    expect(createdRoute.route).toBe(baseRoute);
  });

  it('The route / is correct', async () => {
    const response = await request(serverInitialization.app).get(baseRoute);
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toBe(
      'application/json; charset=utf-8',
    );
  });

  afterAll(() => {
    serverInitialization.server.close();
  });
});
