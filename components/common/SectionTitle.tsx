import React from 'react'

interface SectionTitleProps {
    text: string,
}

const SectionTitle = (props: SectionTitleProps) => {
    const { text } = props
    return (
        <div className='flex items-center gap-4 text-cstm_black'>
            <p className='font-extrabold text-2xl'>{text}</p>
            <div className='bg-cstm_black h-[1px] w-[5rem]' />
        </div>
    )
}

export default SectionTitle