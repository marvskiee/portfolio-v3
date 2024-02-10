import React from 'react'


interface PrimaryButtonProps {
    children: React.ReactNode,
    color?: string,
    weight?: string,
    size?: string,
    bg_color?: string
}
const PrimaryButton = (props: PrimaryButtonProps) => {
    const { 
        children, 
        color = "text-cstm_black", 
        weight = "font-medium", 
        bg_color = "text-white"
    } = props
    return (
        <div>
            <button className={`rounded-full p-4 py-2 ${color} ${weight} ${bg_color}`}>{children}</button>
        </div>
    )
}

export default PrimaryButton