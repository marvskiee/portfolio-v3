import { featuredItemData, itemData } from '@/utils/INTERFACE'
import React from 'react'
import { Badge } from '..'
import Image from 'next/image'
import { DATA } from '@/utils/DATA'


interface FeaturedCardProps {
    data: featuredItemData
}
const FeaturedCard = (props: FeaturedCardProps) => {
    const { embed, icon, title, subcategory, description, tools } = props.data
    return (
        <div className='h-full rounded-md p-4 flex justify-between flex-col gap-2 w-full border border-cstm_lightgray'>
            <div className='flex gap-2 flex-col'>
                <iframe
                    className="w-full aspect-video"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${embed}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <div className='flex items-center justify-between mt-2'>
                    <div className='flex gap-2 items-center'>
                        <Image src={icon} alt={`icon-${title}`} height={DATA.FEATURED_ICON_SIZE} width={DATA.FEATURED_ICON_SIZE} />
                        <p className='text-ellipsis whitespace-nowrap overflow-hidden text-sm text-cstm_black font-semibold'>{title}</p>
                    </div>
                    <Badge>Freelance</Badge>
                </div>
                <p className='font-bold text-cstm_black text-lg'>{subcategory}</p>
            </div>
            <p className=' text-zinc-600 text-sm'>Tools: {tools.join(",")}</p>
        </div >
    )
}

export default FeaturedCard