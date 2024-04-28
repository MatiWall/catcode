import React, { createContext, useContext } from 'react';

// Define the PluginContext
const PluginContext = createContext();

// Define a PluginProvider component to wrap your application
export function PluginConfigProvider({ config, children }) {
  return (
    <PluginContext.Provider value={{ config }}>
      {children}
    </PluginContext.Provider>
  );
}

// Custom hook to access the PluginContext
export function usePluginConfig() {
  const context = useContext(PluginContext);
  if (!context) {
    throw new Error('usePluginConfig must be used within a PluginConfigProvider');
  }
  return context.config;
}