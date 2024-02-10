interface BadgeProps {
    children: React.ReactNode
}

import React from 'react'

const Badge = (props: BadgeProps) => {
    return <p className='font-bold transition-colors uppercase text-cstm_black cursor-pointer tracking-widest bg-cstm_lightgray text-xxs px-2 py-1 rounded-md'>{props?.children}</p>
}

export default Badge