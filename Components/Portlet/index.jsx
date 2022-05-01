import React from 'react'
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
const index = ({title,subtitle,children}) => {
	return (
		<div className='bg-gray-50 p-4 shadow-md rounded-sm'>
			<div className="mb-5">
			<div className="max-w-7xl mx-auto py-3">
				<div className="flex items-center justify-between flex-wrap">
					<div className="w-0 flex-1 flex ">

						<p className="font-bold text-lg text-dark truncate">
							<span className="inline">{title}</span>
                            <br/>
                            <span className="inline text-sm font-medium text-gray-500">{subtitle}</span>
						</p>
                       


					</div>
					<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
					</div>
					<div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
						<button
							type="button"
							className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
						>
							<span className="sr-only">Dismiss</span>

						</button>
					</div>
				</div>
			</div>
				</div>
				{children}
		</div>
	)
}

export default index
