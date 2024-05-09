import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';


import ApplicationOverviewPage from './overview'

import { useApiFetch } from '@catcode/core-api';
import { useAppConfig, usePlugins } from '@catcode/core-components';



export default function ApplicationPage() {

    return (
            <ApplicationOverviewPage />
    );
}
