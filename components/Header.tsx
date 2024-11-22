import React from 'react'

export default function Header({title, extra}: {title: string, extra?: any}) {
  return (
    <div className='flex w-full justify-between items-center mb-4'>
      <h3>{title}</h3>
      <div>
        {extra && extra}
      </div>
    </div>
  )
}
