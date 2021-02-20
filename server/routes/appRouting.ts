import express, {Router} from 'express'
import { PageRoute } from './pageRoute';

export function AppRouting () : Router {
    let router : Router;
    router = express.Router();

    let pageRouter: PageRoute = new PageRoute(router);
    pageRouter.registerRouter();
    
    return router;
} 