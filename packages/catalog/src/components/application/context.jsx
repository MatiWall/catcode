import React, { createContext, useContext, useState, useEffect } from 'react';

// Step 1: Create the Context
const ApplicationContext = createContext();

// Step 2: Create a Provider Component
export const ApplicationProvider = ({ children, application }) => {
  // Define the initial configuration state
  const [config, setConfig] = useState(application);
    // Update config whenever application changes
  useEffect(() => {
      setConfig(application);
    }, [application]);
  
    return (
    <ApplicationContext.Provider value={config}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => useContext(ApplicationContext);