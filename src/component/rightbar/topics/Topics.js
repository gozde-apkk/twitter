import React from 'react';
import { topics } from '../../sidebar/utils/Menu';
import Topic from './topic/Topic';

import SidebarSection from '../../sidebar-seciton/SidebarSection';

const Topics = () => {
    return (
        <SidebarSection>
            {topics.map((topic , index) => <Topic item={topic} key={index} />)}
        </SidebarSection>
    );
}

export default Topics;
