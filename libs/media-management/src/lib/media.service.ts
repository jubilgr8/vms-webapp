import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaMaster, tarrifMaster } from './+state/media.interfaces';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class MediaService {
  constructor(private apiService: ApiService) {}

  getMedias(): Observable<MediaMaster[]> {
    return this.apiService.get<MediaMaster[]>(
      'Media_API/api/MediaMaster/GetMediaMaster'
    );
  }
  getMediaTarrif(): Observable<MediaMaster[]> {
    return this.apiService.get<MediaMaster[]>(
      'Media_API/api/MediaMaster/GetMediaMaster'
    );
  }
  postTarrif(tarrif): Observable<any> {
    return this.apiService.post<any, tarrifMaster>(
      'Media_API​/api​/TarrifMaster​/PostTarrifMaster',
      tarrif
    );
  }
}
