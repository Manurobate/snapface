import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: "Archibald",
            description: "Mon meilleur ami depuis tout petit",
            imageUrl: "https://m.media-amazon.com/images/I/71GPmk+2X4L.jpg",
            createdDate: new Date(),
            snaps: 50
        },
        {
            id: 2,
            title: "Steven",
            description: "Mon idole",
            imageUrl: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/31/thumb_30605_default_news_size_5.jpeg",
            createdDate: new Date(),
            snaps: 194,
            location: "Liverpool"
        },
        {
            id: 3,
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

    getFaceSnapById(id: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);

        if (faceSnap)
            return faceSnap;
        else
            throw new Error("FaceSnap not found");

    }

    snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(id);

        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}