import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersCollection: AngularFirestoreCollection<any>;
  orders: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.ordersCollection = afs.collection<any>('orders');
    this.orders = this.ordersCollection.snapshotChanges().pipe(map(
      actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
  }

  myForm = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    order: new FormControl(''),
    completed: new FormControl(false)
  });


  getOrders() {
    return this.orders;
  }
  updateOrder(order: any) {
    return this.ordersCollection.doc(order.id).update(order);
  }
  deleteOrder(id: string) {
    return this.ordersCollection.doc(id).delete();
  }
  createOrder(order: any) {
    return this.ordersCollection.add(order);
  }
}
