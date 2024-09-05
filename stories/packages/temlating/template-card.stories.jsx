import React from 'react'

import { TemplateCard } from '@catcode/templating'

export default {
    title: 'packages/templating/template-card'
}


export const TemplatesCard = () => {
    return (
        <TemplateCard 
            name={'Component Name'}
            type={'Service'}
            tags={['tag1', 'tag2']}
            description={'This is a description for the template'}

        />
    )
}

