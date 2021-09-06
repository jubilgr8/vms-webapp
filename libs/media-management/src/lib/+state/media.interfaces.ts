import { ValidatorFn } from '@angular/forms';
import { UserMaster } from '../../../../user-management/src/lib/+state/user.interfaces';

export type FieldType = 'INPUT' | 'TEXTAREA';

export interface Errors {
  [key: string]: string;
}

export interface MediaManagement {
  newPlaylist: any;
  medias: MediaMaster[];
  errors: Errors;
}

export interface UploadMediaCounts {
  UploadSetId: number;
  UploadedDate: number;
  UserMaster: UserMaster[];
}

export interface MediaMaster {
  Id: number;
  UserMasterId: number;
  MediaId: string;
  uploadSetId: number;
  FileType: string;
  Extension: string;
  FileName: string;
  FileSize: number;
  UploadedBy: string;
  UploadedDate: any;
  AuditedBy: string;
  AuditedDate: number;
  AuditedStatus: number;
  FontName: string;
  FontSize: number;
  FontStyle: number;
  Blink: number;
  ForeGroundColor: string;
  BackGroundColor: string;
  CharacterPitch: string;
  ArrangementMode: string;
  ScrollingDirection: string;
  IsDeleted: boolean;
  DeletedDate: number;
  DeletedBy: string;
  mstUser: UserMaster[];
}

export class MediaTextMaster {
  Id: number;
  UserMasterId: number;
  MediaId: string;
  uploadSetId: number;
  UploadedBy: string;
  UploadedDate: number;
  AuditedBy: string;
  AuditedDate: number;
  AuditedStatus: number;
  FontName: string;
  FontSize: number;
  FontStyle: number;
  Blink: number;
  ForeGroundColor: string;
  BackGroundColor: string;
  CharacterPitch: string;
  ArrangementMode: string;
  ScrollingDirection: string;
  Message:string;
  IsDeleted: boolean;
  DeletedDate: number;
  DeletedBy: string;
  mstUser: UserMaster[];
}

export interface tarrifMaster {
  unitOfMeasurementId: number;
  tarrifName: string;
  amount: number;
  gst: number;
  totalAmount: number;
  remarks: string;
  tarrifType: string;
  fromDate: Date;
  toDate: Date;
  id: number;
  unit: Unit;
}
export interface Unit {
  id: number;
  uomName: string;
}
export interface mediaUpload {
  uploadSetId: number;
  mediaCount: number;
  user: string;
  dateOfRequest: Date;
  status: string;
}
