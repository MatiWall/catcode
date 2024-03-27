import { PluginConfigProvider } from "./context/plugin-config-provider";
import { usePlugins } from "./context/plugin-provider";

export default function createPlugin({
    plugin,
    config
}){
    
    return (
        <PluginConfigProvider config={config}>
            {plugin}
        </PluginConfigProvider>
    );
}