/**
 * the polyfills must be the first thing imported
 */
import './polyfills.ts';
import './__2.1.1.workaround.ts'; // temporary until 2.1.1 things are patched in Core
import * as path from 'path';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';
import { createEngine } from 'angular2-express-engine';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.node.module';
import { environment } from './environments/environment';
import { routes } from './server.routes';
import authenticate from './server/middleware/authenticate';
import auth from './server/routes/auth';
import post from './server/routes/post';
import serverConfig from './server/config';

// App

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

/**
 * enable prod mode for production environments
 */
if (environment.production) {
    enableProdMode();
}

/**
 * Express View
 */
app.engine('.html', createEngine({}));
app.set('views', path.join(ROOT, 'client'));
app.set('view engine', 'html');

// Set native promises as mongoose promise
// mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
});

/**
 * Middlewares
 */
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(morgan('dev'));
app.use('/', express.static(path.join(ROOT, 'client'), { index: false }));

/**
 * place your api routes here
 */
app.use(authenticate);
app.use('/api', auth);
app.use('/api', post);

/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req: any, res: any) {
    res.render('index', {
        req,
        res,
        ngModule: AppModule,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}

/**
 * use universal for specific routes
 */
app.get('/', ngApp);
routes.forEach(route => {
    app.get(`/${route}`, ngApp);
    app.get(`/${route}/*`, ngApp);
});

/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */

app.get('*', function (req: any, res: any) {
    res.setHeader('Content-Type', 'application/json');
    const pojo = { status: 404, message: 'No Content' };
    const json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});

app.listen(serverConfig.port, () => {
    console.log(`Listening on port ${serverConfig.port}`);
});
