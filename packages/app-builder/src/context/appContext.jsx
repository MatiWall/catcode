import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the Context
const ConfigContext = createContext();

// Step 2: Create a Provider Component
export const AppConfigProvider = ({ children, appConfig }) => {
  // Define the initial configuration state
  const [config, setConfig] = useState(appConfig);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useAppConfig = () => useContext(AppConfigContext);