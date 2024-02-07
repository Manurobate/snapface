import { Component, Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {

  constructor(
    private service: FaceSnapsService,
    private route: ActivatedRoute
  ) { }

  buttonText!: string;
  faceSnap!: FaceSnap;

  ngOnInit(): void {
    this.buttonText = 'Oh Snap !';

    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.service.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !') {
      this.service.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap !';
    } else {
      this.service.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap !';
    }
  }
}
