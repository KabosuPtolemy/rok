import { setDoc, addDoc, getDocs, doc, getFirestore, deleteDoc, query, orderBy, collection, where, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

import { setProjects } from '../store/slices/nftProjectSlice';
export class FirebaseService {
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyBkiTO_2bZhXem1M6VmgPFWYWHaDqBTZVo",
      authDomain: "rok-finance-66b44.firebaseapp.com",
      projectId: "rok-finance-66b44",
      storageBucket: "rok-finance-66b44.appspot.com",
      messagingSenderId: "939135370960",
      appId: "1:939135370960:web:4e49b581b30297e73f40d5",
      measurementId: "G-EMZSGH0EBT"
    };

    this.firestore = null;
    this.app = null;

    this.initApp();
  }

  initApp() {
    const app = initializeApp(this.firebaseConfig);
    const firestore = getFirestore(app);
    this.firestore = firestore;
    this.app = app;
  }

  async get(collectionName) {
    const col = collection(this.firestore, collectionName);
    const q = query(col, orderBy("created", "desc"));
    return await getDocs(q);
  }

  async getAllWhere(collectionName, field, condition, value) {
    const col = collection(this.firestore, collectionName);
    const q = query(col, orderBy("created", "desc"), where(field, condition, value));
    return await getDocs(q);
  }

  async save(collectionName, uid, data) {
    const ref = uid ? doc(this.firestore, collectionName, uid) : doc(this.firestore, collectionName);
    await setDoc(ref, data);
  }

  async updateArray(collectionName, uid, arrayName, value, isAdd) {
    const ref = doc(this.firestore, collectionName, uid);
    await updateDoc(ref, {
      [arrayName]: isAdd ? arrayUnion(value) : arrayRemove(value)
    });
  }

  async add(collectionName, data) {
    await addDoc(collection(this.firestore, collectionName), data);
  }

  async delete(collectionName, uid) {
    const ref = doc(this.firestore, collectionName, uid);
    await deleteDoc(ref);
  }

  async setProjectsByChainId(chainId, dispatch) {
    const snapshot = await this.getAllWhere('projects', 'chainId', '==', chainId);
    const projects = snapshot.docs.map((value) => {
      return {
        uid: value.id,
        ...value.data()
      }
    });

    dispatch(setProjects(projects));
  }

}