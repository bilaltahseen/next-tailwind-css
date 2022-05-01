import React from 'react'
import _ from 'lodash';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import TableCell from './TableCell';
import InputGroup from '../Inputs/index';


function index({dataColumns,dataRows}) {

	const _constructRows = (cols,rows) =>(
		rows.map((row,rowIndex)=>(
			<tr className='bg-white border-b'>
				<td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-x'>{rowIndex+1}</td>
				{cols.map((col,colIndex)=>(
					<td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r'>{
						TableCell(col['type'],row[col['key']])
					}</td>
				))}
			</tr>
			))
	)

	const _constructHeader = (cols) =>(
		<thead className='bg-amber-600'>
		<tr>
			<th scope='col' className="text-sm font-medium text-white px-2 py-2 border-x">#</th>
		{cols.map((col,colIndex)=>(
			<th scope='col' className="text-sm font-medium text-white px-2 py-2 border-r">{col}</th>
				))}
			</tr>
		</thead>
		)

	const _constructPagination = ()=>(
		<div className="bg-white px-4 py-3 flex items-center justify-between border border-gray-200 sm:px-6">
			<div className="flex-1 flex justify-between sm:hidden">
				<a
					href="#"
					className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Previous
				</a>
				<a
					href="#"
					className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Next
				</a>
			</div>
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
						<span className="font-medium">97</span> results
					</p>
				</div>
				<div>
					<nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
						<a
							href="#"
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<span className="sr-only">Previous</span>
							<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
						</a>
						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
						<a
							href="#"
							aria-current="page"
							className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							1
						</a>
						<a
							href="#"
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							2
						</a>
						<a
							href="#"
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
						>
							3
						</a>
						<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
							...
						</span>
						<a
							href="#"
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
						>
							8
						</a>
						<a
							href="#"
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							9
						</a>
						<a
							href="#"
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							10
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<span className="sr-only">Next</span>
							<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
						</a>
					</nav>
				</div>
			</div>
		</div>
		)


			return (
				<div class="flex flex-col">
			<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
					<div class="overflow-hidden">
            <InputGroup/>
            <br/>
						<table class="min-w-full text-center">
						{_constructHeader(dataColumns.map(({alias})=>alias))}
							<tbody>
							{_constructRows(dataColumns,dataRows)}
							</tbody>
						</table>
					</div>
				<br/>
			{_constructPagination()}
				</div>
			</div>
			</div>
				)

}

export default index;
