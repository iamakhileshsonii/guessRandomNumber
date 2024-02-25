import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const docRef = collection(db, "game");

  const [gameData, setGameData] = useState([]);
  const [gameDataLoading, setGameDataLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(docRef);
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setGameData(data);
      } catch (error) {
        setError(error);
      } finally {
        setGameDataLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Perform any cleanup if needed
    };
  }, [docRef]);

  return (
    <DataContext.Provider value={{ gameData, gameDataLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export default DataProvider;
