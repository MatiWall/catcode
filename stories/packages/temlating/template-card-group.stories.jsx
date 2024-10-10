import React from 'react'
import {TemplateCardGroup, TemplateCard} from '@catcode/templating'

export default {
    title: 'packages/templating/template-card-group'
}


export const TemplateCardGroupTest= () => {

    // Mock data for the cards
    const cardData = [
        {
            name: 'Web Server',
            type: 'Service',
            tags: ['nginx', 'web'],
            description: 'Deploy a web server to your home cluster',
        },
        {
            name: 'Database',
            type: 'Service',
            tags: ['mysql', 'db'],
            description: 'Deploy a MySQL database on your cluster',
        },
        {
            name: 'Monitoring',
            type: 'Tool',
            tags: ['prometheus', 'monitoring'],
            description: 'Set up monitoring with Prometheus',
        },
        {
            name: 'CI/CD Pipeline',
            type: 'Service',
            tags: ['jenkins', 'ci/cd'],
            description: 'Create a CI/CD pipeline using Jenkins',
        },
        {
            name: 'Web Server',
            type: 'Service',
            tags: ['nginx', 'web'],
            description: 'Deploy a web server to your home cluster',
        },
        {
            name: 'Database',
            type: 'Service',
            tags: ['mysql', 'db'],
            description: 'Deploy a MySQL database on your cluster',
        },
        {
            name: 'Monitoring',
            type: 'Tool',
            tags: ['prometheus', 'monitoring'],
            description: 'Set up monitoring with Prometheus',
        },
        {
            name: 'CI/CD Pipeline',
            type: 'Service',
            tags: ['jenkins', 'ci/cd'],
            description: 'Create a CI/CD pipeline using Jenkins',
        },
    ];

    return (
    <TemplateCardGroup
        title={'Homelab'}
        warning={'Only for homelab'}
        description={'Tempaltes used to deploy application on home cluster'}
        cards={cardData.map((d)=> <TemplateCard title={d.name} type={d.type} tags={d.tags} description={d.description}/>)}
    >

    </TemplateCardGroup>
    )
}