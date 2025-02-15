import { FormSchema } from "./typings";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

const fetchTradeLogs = async (userEmail: string) => {
  try {
    const tradesCollectionRef = collection(db, "users", userEmail, "trades");
    const querySnapshot = await getDocs(tradesCollectionRef);

    const queryData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as FormSchema),
    }));

    return queryData; // Returns FormSchema[]
  } catch (err) {
    console.error("Error fetching trades:", err);
    return [];
  }
};

export default fetchTradeLogs;
