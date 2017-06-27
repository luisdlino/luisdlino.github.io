import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { SideComponent }  from './side.component';

@Injectable()
export class FindDevice {

    constructor(private _http: Http) { }


    getDeviceById(id): Promise<any> {

        
        let url = "https://api.us.apiconnect.ibmcloud.com/everis-iot-dev/sb/v1/devices/findAll";
        let username: string = '929ec701-5648-40b3-bb87-08fa9088c391';
        let password: string = 'K1oW8uG1nB6oT6wI1hL1rB7kM7yO7sO7cA5eR2eO7rV8sE6wI0';
        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 

        return this._http.get(url, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this._handleError);
    }

    private _handleError(error: any): Promise<any> {

        return Promise.reject(error.message || error);
    }

}


