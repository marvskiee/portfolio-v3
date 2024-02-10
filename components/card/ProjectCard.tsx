import { itemData, selectedItemData } from '@/utils/INTERFACE'
import { projectTypeHelper } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import { Badge } from '..'


interface ProjectCardProps {
    data: selectedItemData,
}


const ProjectCard = (props: ProjectCardProps) => {
    const { cover, type, work, title } = props.data

    return (
        <div>
            <div>
                <Image alt={`cover-${title}`} src={cover} className='border border-cstm_lightgray object-cover w-full aspect-card_ratio rounded-md' />
            </div>
            <div className='flex items-center justify-between py-2'>
                <div className='flex gap-1 items-center'>
                    <p className=' text-sm'>{projectTypeHelper(type)}</p>
                    <p className='text-ellipsis whitespace-nowrap overflow-hidden text-sm lg:max-w-[9rem] max-w-min font-semibold text-cstm_black'>{title}</p>
                </div>
                <Badge>{work}</Badge>
            </div>
        </div>
    )
}

export default ProjectCard