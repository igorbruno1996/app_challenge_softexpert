import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../order';
import { OrderProcessed } from '../orderprocessed';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChallengeService {

    baseURL: string = "https://softexpert-challenge-63165b0ca72f.herokuapp.com/";
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) {
    }

    postOrder(order: Order): Observable<OrderProcessed> {

        return this.http.post<OrderProcessed>(this.baseURL + 'order', order, this.httpOptions);
    }
}