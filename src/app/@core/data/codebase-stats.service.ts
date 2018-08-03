import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IElectricity } from './electicity';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json' }),
};

@Injectable()
export class CodebaseStatsService {

  private _url: string = 'http://10.210.202.164:8000/test';

   private data = [
    {
      title: 'IDC 1RIP',

      products: [
        { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
        { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
        { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
      ],
    },
    {
      title: 'FM 1RIP',
      active : true,
      products: [
        { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
        { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
        { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
      ],
    },
    {
      title: 'FM 2RIP',
      products: [
        { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
        { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
        { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
        { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
      ],
    },
  ];

  constructor() {
  }

  // TODO: observables
  // getData(): Observable<IElectricity[]> {
    getData() {
     return this.data;
    /*return this.http.get<IElectricity[]>(this._url, httpOptions)
                                  .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }*/
}
}
