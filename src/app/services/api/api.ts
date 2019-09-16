import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static API_URL = '/api/cod4.py';

  constructor(private http: HttpClient) {
  }


  public mapRestart() {
    this.doPost({
      action: 'mapRestart'
    });
  }

  public fastRestart() {
    this.doPost({
      action: 'fastRestart'
    });
  }

  public changeMap(gametype: string, mapTag: string) {
    this.doPost({
      action: 'changeMap',
      gametype,
      mapTag,
    });
  }

  public sendMessage(message: string) {
    this.doPost({
      action: 'sendMessage',
      message
    });
  }

  private doPost(requestBody) {
    this.http.post(ApiService.API_URL, requestBody).subscribe(value => {
    }, error => {
      console.log(error);
    });
  }
}
