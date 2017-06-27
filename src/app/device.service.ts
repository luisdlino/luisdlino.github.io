import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { SideComponent }  from './side.component';

@Injectable()
export class DeviceService {

    private headers = new Headers({

        'Content-Type': 'application/json',
        'JsonStub-User-Key': '88d930ae-dcb8-4a6e-939f-b53d6c6dc9e6',
        'JsonStub-Project-Key': '4eca9611-de90-4967-a475-2f6cdfdd973e',
        'Access-Control-Allow-Origin': '*'
    });

    constructor(private _http: Http) { }

    getDevice(): Promise<any> {

        let url = "http://jsonstub.com/teste/3";
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this._handleError);
    }

    private _handleError(error: any): Promise<any> {

        return Promise.reject(error.message || error);
    }

}

