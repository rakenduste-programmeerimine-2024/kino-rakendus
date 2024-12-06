import { createContext, useContext, useState } from 'react';

// Initialize with a default value (optional)
const GlobalDataContext = createContext(null);

export const GlobalDataProvider = ({ children, initialData }) => {
  const [globalData, setGlobalData] = useState(initialData);

  return (
    <GlobalDataContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error('useGlobalData must be used within a GlobalDataProvider');
  }
  return context;
};
