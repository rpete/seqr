import React from 'react';
import ReactDOM from 'react-dom';

import BaseLayout from '../../components/base-layout'
import BreadCrumbs from './components/bread-crumbs';
import ProjectsTable from './components/projects-table';

ReactDOM.render(
    <BaseLayout>
        <div className="ui grid">
            <div className="row">
                <div className="sixteen wide column">
                    <BreadCrumbs />
                </div>
            </div>
            <div className="row">
                <ProjectsTable />
            </div>
        </div>
    </BaseLayout>,
    document.getElementById('react-node')
)
