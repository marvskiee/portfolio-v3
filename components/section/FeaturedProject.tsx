import React from 'react'
import { FeaturedCard, Paragraph, SectionTitle } from '..'
import { DATA } from '@/utils/DATA'

const FeaturedProject = () => {
    return (
        <div className='flex flex-col gap-4 p-4 py-[5rem] ' id='projects'>
            <SectionTitle text="Featured Projects" />
            <Paragraph
                color='text-zinc-800'
                weight='font-medium'
                size='text-md'
            >
                These are the companies that I worked on.
            </Paragraph>
            <div className='grid md:grid-cols-2 grid-cols-1  gap-4 items-center justify-around'>
                {DATA.FEATURED_PROJECTS.map((item, key) => (
                    <FeaturedCard
                        data={item}
                        key={`featured-${item?.title}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProject