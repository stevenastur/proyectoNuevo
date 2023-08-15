import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const getProds = async (nombreFiltrado) => {
  const db = getFirestore();

  const colleccionRef = collection(db, "productos");

  const q = nombreFiltrado
    ? query(colleccionRef, where("nombre", "==", nombreFiltrado))
    : colleccionRef;

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export { getProds };
