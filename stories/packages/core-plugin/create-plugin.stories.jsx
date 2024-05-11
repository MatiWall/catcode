import { createPlugin, usePluginConfig } from '@catcode/core-plugin'
import { Dependencies } from '@catcode/dependencies'
import React from 'react'
import { DependenciesPlugin } from '../../../packages/app/src/app'


export default {
    title: 'packages/core-plugin',
}

const MockPlugin = () => {
    const config = usePluginConfig();

    return (
        <div>{JSON.stringify(config)}</div>
    )
}

const mockConfig = {
    url: 'test',
    second: 'value'
}


const Plugin = createPlugin(
    <Dependencies/>,
    mockConfig
)

export const CreatePlugin = () => {
    return (
        <DependenciesPlugin/>
    )
}