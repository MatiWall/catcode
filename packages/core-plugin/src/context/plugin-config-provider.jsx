import React, {createContext, useContext} from 'react';

// Define the PluginContext
const PluginContext = createContext();

// Define a PluginProvider component to wrap your application
export const PluginConfigProvider = ({ children, config }) => {

  return (
    <PluginContext.Provider value={config}>
      {children}
    </PluginContext.Provider>
  );
}


export const usePluginConfig = () => useContext(PluginContext);