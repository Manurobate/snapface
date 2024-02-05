import { Component, Input, OnInit, input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private service: FaceSnapsService) { }

  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = 'Oh Snap !';
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
