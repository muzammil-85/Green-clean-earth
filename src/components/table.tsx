'use client'
import React, { useState } from 'react'

interface TableProps {
  headings: string[];
  data: Array<{ [key: string]: any }>;
}

const Table: React.FC<TableProps> = ({ headings, data }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const nbPerPage = 5
    const lastIndex = currentPage * nbPerPage
    const startIndex = lastIndex - nbPerPage 
    const numberOfPages = Math.ceil(data.length / nbPerPage)
    const records = data.slice(startIndex, lastIndex)
    // console.log(headings)
    // console.log(data)
  return (
    <div className='overflow-scroll'>
        <table className='table-auto md:w-full md:table-fixed'>
            <thead>
              <tr className='border-b-2 border-green-300'>
                {headings.map((h, i) => (
                    <th key={i} className='bg-green-200 capitalize py-3 px-2 text-sm font-normal'>{h}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {records.map((d,i) => (
                    <tr className={`${i % 2 !== 0 && 'bg-gray-200'} text-center capitalize`}>
                        <td className=''>{d.id}</td>
                        <td className='p-4'>{d.social}</td>
                        <td>{d.participant_details}</td>
                        <td>{d.description}</td>
                        <td>{d.description}</td>
                        <td>{d.thumbnail}</td>
                        <td>{d.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='w-full flex flex-row items-center p-5'>
                <div className='flex flex-row items-center gap-4'>
                    <span className='cursor-pointer font-semibold' onClick={() => prevPage()}>prev</span>
                    <div className='flex flex-row items-center'>
                        <span>{currentPage}</span>
                        <span>/</span>
                        <span>{numberOfPages}</span>
                    </div>
                    <span className='cursor-pointer font-semibold' onClick={() => nextPage()}>next</span>
                </div>
            </div>
    </div>
  )

  function nextPage(){
    if (currentPage != numberOfPages){
        setCurrentPage(prev => prev + 1)
    }
}

function prevPage(){
    if (currentPage != 1){
        setCurrentPage(prev => prev - 1)
    }
}


}

export default Table