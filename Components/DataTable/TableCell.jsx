import React from 'react'
import {PencilIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import _ from 'lodash';

function TableCell(type,args){

	const _renderIcons = (iconName) =>{
		switch (iconName) {
			case 'edit':
				return <PencilIcon className='h-5'/>
			default:
				break;
		}
		}

    switch (type) {
      case 'action':
        return <Link href={_.get(args,'url','#')}><span className="inline-flex items-center p-1 mr-2 text-sm font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
          {_renderIcons(_.get(args,'icon','#'))}
          </span></Link>
      default:
        return args
    }
}

export default TableCell
