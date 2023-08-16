import {
  collection,
  doc,
  getDoc,
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

const getProd = async (id) => {
  const db = getFirestore();

  const prodRef = doc(db, "productos", id);

  const snapshot = await getDoc(prodRef);

  // if (snapshot.exists()) {

  return { id: snapshot.id, ...snapshot.data() };

  // } else {

  //   throw new Error("No se encontró el producto");
  // }
};

export { getProds, getProd };
