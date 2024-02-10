import React from 'react'
import { Logo, Paragraph, PrimaryButton, SectionTitle } from '..'
import { ICONS } from '@/utils/ICONS'

const Footer = () => {
    return (
        <div className='p-4 pt-9'>
            <div className='flex flex-col gap-4'>
                <SectionTitle text="Get In Touch" />
                <Paragraph
                    color='text-zinc-800'
                    weight='font-medium'
                    size='text-md'
                >
                    I&apos;m now seeking full-time employment.<br />If you have any questions, don&apos;t hesitate to contact me through email.
                </Paragraph>
                <PrimaryButton bg_color='bg-cstm_black' color='text-white'>{ICONS.EMAIL} Email Me</PrimaryButton>
            </div>
            <div className='mt-[5rem]'>
                <Logo />
                <Paragraph
                    color='text-cstm_black'
                    weight='font-medium'
                >
                    © 2024 Marubi
                </Paragraph>
            </div>
        </div>
    )
}

export default Footer