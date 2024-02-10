import React, { useState } from 'react'
import { FilterButton, LightButton, Paragraph, ProjectCard, SectionTitle } from '..'
import { DATA } from '@/utils/DATA'
import { itemData, selectedItemData } from '@/utils/INTERFACE'


const SelectedProject = () => {
    const [selected, setSelected] = useState<string>("all")
    const items = DATA.SELECTED_PROJECTS.LIST
    const items_result: selectedItemData[] = items.filter((item) => item.type == selected)
    const final_items: selectedItemData[] = items_result.length > 0 ? items_result : items

    return (
        <div className='flex flex-col gap-4 p-4 py-10'>
            <SectionTitle text="Selected Projects" />
            <Paragraph
                color='text-zinc-800'
                weight='font-medium'
                size='text-md'
            >
                Here are the freelance and personal projects that I developed.
            </Paragraph>
            {/* Filter  */}
            <div className='flex gap-4 items-center flex-wrap mt-4'>
                {DATA.SELECTED_PROJECTS.FILTER.map(item => (
                    <FilterButton
                        key={`selected-${item?.name}`}
                        handler={() => setSelected(item.name)}
                        active={item.name == selected}
                    >
                        {item.icon} {item.name}
                    </FilterButton>
                ))}
            </div>
            {/* List  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4'>
                {final_items.map(item => (
                    <ProjectCard data={item} key={`project-${item?.title}`} />
                ))}
            </div>


        </div>
    )
}

export default SelectedProject