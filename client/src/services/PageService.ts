import { Console } from 'console'
import react from 'react'
import {IPage} from '../models/IPage'
import Globals from './Global'
import { ServiceBase } from './ServiceBase'

export default class PageService extends ServiceBase {

    public static async searchPages (keyword: string) : Promise<IPage[] | null> {
        console.log('page service');
        //debugger
        var result = await this.JsonRequest<IPage[]>({
            url : Globals.hostName + "api/search/" + keyword.toLowerCase(),
            method : "GET"
        });

        try {
            if (result) {
                return result;
            }
        } catch (error) {
                console.log('error in page service: ', error)
        }
        return null
    }
}