import React from 'react';
import { PluginConfigProvider } from "./context/plugin-config-provider";

export default function createPlugin(
    plugin,
    config
) {


    const Plugin = () => {

        return (
            <PluginConfigProvider config={config}>
                {plugin}
            </PluginConfigProvider>
        )
    }

    return Plugin;
}