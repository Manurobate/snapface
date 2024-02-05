import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        {
            title: "Archibald",
            description: "Mon meilleur ami depuis tout petit",
            imageUrl: "https://m.media-amazon.com/images/I/71GPmk+2X4L.jpg",
            createdDate: new Date(),
            snaps: 50
        },
        {
            title: "Steven",
            description: "Mon idole",
            imageUrl: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/31/thumb_30605_default_news_size_5.jpeg",
            createdDate: new Date(),
            snaps: 194,
            location: "Liverpool"
        },
        {
            title: "Paziols",
            description: "Lieu de rêve",
            imageUrl: "https://www.hit-occitanie.com/media/hit/ois/ASCLAR011V50L3KA/images/PETROLHEAD3.jpg",
            createdDate: new Date(),
            snaps: 141,
            location: "Paziols"
        }
    ]

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }
}