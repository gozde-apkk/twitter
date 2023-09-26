


import { Popover, Transition } from '@headlessui/react'
import React from 'react'
import { useAccount } from '../../store/hooks/hooks'
import MoreAccount from './moreaccount/MoreAccount';

function Account() {

   const  account = useAccount()
  return (
    <div className='mt-auto'>
        <Popover className="relative">
            <Popover.Button  className='my-3 p-3 rounded-full w-full transition-colors flex text-left items-center outline-none hover:bg-[#eff3f41a]
            w-full flex '>
       <img src= {account.avatar} className='w-10 h-10 rounded-full'  alt='username_photo'/>
       <div className='mx-3 text-[15px] '>
        <h6 className='font-bold leading-[20px] '>{account.fullname}</h6>
        <div className='text-[#71767b] '>
            @{account.username}
        </div>
       </div>
       <svg viewBox="0 0 24 24" className="text-[#e7e9ea] ml-auto" width={18.75}>
							<path
								fill="currentColor"
								d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
							/>
					</svg>
            </Popover.Button>
            <Transition
					enter="transition duration-200 ease-out"
					enterFrom="transform opacity-0"
					enterTo="transform opacity-100"
					leave="transition duration-200 ease-out"
					leaveFrom="transform opacity-100"
					leaveTo="transform opacity-0"
				>
					<Popover.Panel
						className="absolute bottom-[80px] -translate-y-2 py-3 w-[300px] z-[1] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl">
						{({ close }) => (
							<MoreAccount close={close}/>
						)}
					</Popover.Panel>
				</Transition>
        </Popover>
    </div>
  )
}

export default Account