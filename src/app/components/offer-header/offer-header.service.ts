import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommService } from 'src/app/sharedServices/comm.service';
import { map } from 'rxjs/operators';

@Injectable()
export class OfferHeaderService {

    constructor(private commService: CommService) {}
    
    public getVersion(): Observable<any> {
        return this.commService.get('cpg').pipe(
        map((res: any) => {
            return res.data;
        }));

        // This will work
        // return this.commService.get('versions/current');
    }
}
