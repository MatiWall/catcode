import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the Context
const AppConfigContext = createContext();

// Step 2: Create a Provider Component
export const AppConfigProvider = ({ children, appConfig }) => {
  // Define the initial configuration state
  const [config, setConfig] = useState(appConfig);

  return (
    <AppConfigContext.Provider value={config}>
      {children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfig = () => useContext(AppConfigContext);