import React from 'react'
import About from '@catcode/catalog/src/components/application/about'
import { PluginConfigProvider } from '@catcode/core-plugin'
import mockConfig from '../mockData'

export default {
    title: 'packages/catalog/application/about',
    component: About,
    decorators: [
        (Story) => (
            <PluginConfigProvider config={mockConfig}>
                <Story/>
            </PluginConfigProvider>
        )

    ]
}


export const AboutComponent = () => <About/>