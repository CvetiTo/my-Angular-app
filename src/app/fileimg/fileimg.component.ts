import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';
import { ImgUploadService } from '../services/img-upload.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-fileimg',
  templateUrl: './fileimg.component.html',
  styleUrls: ['./fileimg.component.css']
})
export class FileimgComponent implements OnInit {
  user$ = this.authService.userData
  constructor(
    public authService: AuthService,
    public imageUploadService: ImgUploadService,
    private toast: HotToastService,
  ) {
    
  }
  ngOnInit(): void {}

  uploadImage(event: any, user: User) {
    this.imageUploadService.uploadImage(event.target.files[0], 
      `images/profile/${user.uid}`).pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        }),
        concatMap((photoURL) =>
          this.authService.updateProfileData({
            photoURL,
          })
        )
      ).subscribe();
  }
}
