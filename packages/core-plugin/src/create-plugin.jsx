import { PluginConfigProvider } from "./context/plugin-config-provider";

export default function createPlugin(
    plugin,
    config
){
    
    return (
        <PluginConfigProvider config={config}>
            {plugin}
        </PluginConfigProvider>
    );
}