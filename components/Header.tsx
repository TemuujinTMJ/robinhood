import React from 'react'

export default function Header({title, extra}: {title: string, extra: string}) {
  return (
    <div className='flex w-full justify-between items-center'>
      <h3>{title}</h3>
      <div>
        {extra}
      </div>
    </div>
  )
}
