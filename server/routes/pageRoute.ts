import express, { NextFunction, response, Router } from 'express'
import { PageController } from '../controllers/PageController';
import { BaseRouter } from './BaseRoute';

export class PageRoute extends BaseRouter {
    registerRouter() : void {
        const controller = new PageController();

        this.router.get('/api/search/:keyword', (req: Request) => {
            console.log(req)
            controller.searchPages(req);
            console.log('page router');
        });
    }
}