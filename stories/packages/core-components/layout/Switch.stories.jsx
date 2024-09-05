import React from 'react'
import { RoutingSwitch} from "@catcode/core-components"
import {Route, Routes, Outlet, useLocation } from 'react-router-dom'

export default {
    title: 'packages/core-components/layout/RoutingSwitch'
}

export const Item = () => (
    <RoutingSwitch.Item key={'/test'} label={'Test'} path={'/'} active={true}></RoutingSwitch.Item>
)


export const Switch = () => {
    const location = useLocation();
    return (<>
    <RoutingSwitch>
        <RoutingSwitch.Item key={'/'} label={'Test'} value={'/'}></RoutingSwitch.Item >
        <RoutingSwitch.Item  key={'/test2'} label={'Test2'} value={'/test2'}></RoutingSwitch.Item >
        <RoutingSwitch.Item  key={'/test3'} label={'False'} value={'/test3'} active={false}></RoutingSwitch.Item >
        <RoutingSwitch.Item  key={'/test4'} label={'Test 4'} value={'/test4'} active={true}></RoutingSwitch.Item >
    </RoutingSwitch>
    </>
    )
}