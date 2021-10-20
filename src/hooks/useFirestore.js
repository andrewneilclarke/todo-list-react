import { useState, useEffect } from "react";
import { projectFirestore } from './firebase/config'

const useFirestore = (collection) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                    doc.data();
                });
                setItems(documents);
            })
        return () => {
            unsub();
        }
    }, [collection])

    return { items };
}

export default useFirestore;