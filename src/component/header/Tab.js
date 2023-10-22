



import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Items from './Items'
import Item from './Item'
import Content from './Content';
import { TabContext } from './tab/context';



function Tab( {children , activeTab}) {

  const [active, setActive] = useState(activeTab)
    const contents = children.filter(c => c.type === Content)
    
    const items = children.filter(c => c.type === Items)
    const content = contents.find( c => c.props.id === active)


    useEffect(() => {
      setActive(activeTab)
  }, [activeTab]);


    const data = {
      active
      , setActive
    }
    console.log("Children ", children);
  return (
    <TabContext.Provider value={data} >
      <div >
      {items}
      </div>
    </TabContext.Provider>
  )
}


Tab.Items = Items
Tab.Item = Item
Tab.Content = Content
Tab.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired
}

export default Tab