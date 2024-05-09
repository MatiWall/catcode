import React from 'react'
import Links from '@catcode/catalog/src/components/application/links'
import { PluginConfigProvider } from '@catcode/core-plugin'
import mockConfig from '../mockData'

export default {
    title: 'packages/catalog/application/links',
    component: Links,
    decorators: [
        (Story) => (
            <PluginConfigProvider config={mockConfig}>
                <Story/>
            </PluginConfigProvider>
        )

    ]
}


export const LinksComponent = () => <Links/>