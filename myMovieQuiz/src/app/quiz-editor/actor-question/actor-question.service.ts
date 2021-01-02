import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn:"root"
})

export class SearchActor {
  private endpoint = "https://api.bing.microsoft.com/v7.0/images/search";
  private token = "9dc015a3a15c45abb05f88bcea641c2d";

  constructor(private httpClient: HttpClient) {}

  getActorImage(actor: string) {
    const httpParams = new HttpParams({ fromObject: { q: actor,
                                                      count: "10"}});

    const httpHeaders = new HttpHeaders({ "Ocp-Apim-Subscription-Key": this.token });

    httpHeaders.set("Ocp-Apim-Subscription-Key", this.token);

    return this.httpClient.get(this.endpoint, { params: httpParams,
                                                headers: httpHeaders });
  }
}
