import React from 'react'
import { PluginConfigProvider, usePluginConfig } from "@catcode/core-plugin";


export default {
    title: 'packages/core-plugin/context',
    component: PluginConfigProvider,
}

const mockConfig = {
    'test': 'test'
}

export const AboutComponent = () => {
    return (
        <PluginConfigProvider config={mockConfig}>
            <div>{JSON.stringify(usePluginConfig())}</div>
        </PluginConfigProvider>
    )
}