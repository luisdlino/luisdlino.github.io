import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { SideComponent }  from './side.component';

@Injectable()
export class GetAdressService {

    constructor(private _http: Http) { }


    getAdress(latitude, longitude): Promise<any> {

        let lat: string = latitude;
        let lon: string = longitude;
        let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&sensor=true";

        return this._http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this._handleError);
    }

    private _handleError(error: any): Promise<any> {

        return Promise.reject(error.message || error);
    }

}


