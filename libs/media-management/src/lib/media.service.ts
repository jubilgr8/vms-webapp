import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaMaster } from './+state/media.interfaces';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class MediaService {
  constructor(private apiService: ApiService) {}

  getMedias(): Observable<MediaMaster[]> {
    return this.apiService.get<MediaMaster[]>('Media_API/api/MediaMaster/GetMediaMaster');
  }
}
