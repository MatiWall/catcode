import React from 'react'
import { RoutingSwitch, SwitchItem } from "@catcode/core-components/src/components/layout/switch"
import {Route, Routes, Outlet, useLocation } from 'react-router-dom'

export default {
    title: 'packages/core-components/layout/RoutingSwitch'
}

export const Item = () => (
    <SwitchItem key={'/test'} label={'Test'} path={'/'} active={true}></SwitchItem>
)


export const Switch = () => {
    const location = useLocation();
    return (<>
    <RoutingSwitch>
        <SwitchItem key={'/'} label={'Test'} value={'/'}></SwitchItem>
        <SwitchItem key={'/test2'} label={'Test2'} value={'/test2'}></SwitchItem>
        <SwitchItem key={'/test3'} label={'False'} value={'/test3'} active={false}></SwitchItem>
        <SwitchItem key={'/test4'} label={'Test 4'} value={'/test4'} active={true}></SwitchItem>
    </RoutingSwitch>
    </>
    )
}