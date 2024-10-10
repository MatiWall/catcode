import React from 'react'
import {GitHub, Description} from '@mui/icons-material';
import { LinkBar} from "@catcode/core-components"


export default {
    title: 'packages/core-components/bars/LinkBar'
}

const links = [
    {'icon':  <GitHub/>, 'url': 'example.com'}
]


export const Link = () => {
    return (
        <LinkBar links={links}></LinkBar>
    )
}