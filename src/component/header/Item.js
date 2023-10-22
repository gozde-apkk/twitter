

import React from 'react'
import PropTypes from 'prop-types'
import { useTab } from './tab/context'
import classNames from 'classnames';

function Item({children ,id} ) {

  const {active, setActive} = useTab();


  return (
    <button type='button' 
    onClick={() => {
      setActive(id)
    }} className='flex-auto text-center' >
      <div className={classNames("h-[3.313px] relative inline-flex items-center",{
        "font-bold": active === id,
        "text-[color:var(--color-base-secondary)] font-bold" : active != id
      }
      )}>
      {children} 
      {active === id && (
         <div className='h-[4px] w-[65px] absolute bottom-0 left-0 rounded-full bg-[color:var(--color-primary)] top-6'/> 
      )}
     
      </div>
      </button>
  )
}

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string]),
  id : PropTypes.string
}
export default Item 