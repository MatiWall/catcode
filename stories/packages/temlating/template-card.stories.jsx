import React from 'react'

import { TemplateCard } from '@catcode/templating'

export default {
    title: 'packages/templating/template-card'
}


export const TemplatesCard = () => {
    return (
        <TemplateCard 
            title={'Component Name'}
            type={'Service'}
            tags={['tag1', 'tag2']}
            description={'This is a description for the template'}

        />
    )
}

export const TemplatesCard2 = () => {
    return (
        <TemplateCard 
            name={'Component Name'}
            type={'Service'}
            tags={['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8']}
            description={'This is a description for the template with longer descrition and more tagsssssss- This is a description for the template with longer descrition and more tagsssssss- This is a description for the template with longer descrition and more tagsssssss'}

        />
    )
}