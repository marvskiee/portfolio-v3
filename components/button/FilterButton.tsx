import React from 'react'

interface LightButtonProps {
    children: React.ReactNode,
    color?: string,
    weight?: string,
    size?: string,
    handler: React.Dispatch<React.SetStateAction<any>>;
    active: boolean
}

const FilterButton = (props: LightButtonProps) => {

    const {
        children,
        color = "text-cstm_black",
        weight = "font-medium",
        active
    } = props

    return (
        <div>
            <button onClick={props.handler} className={`${active ? "bg-cstm_lightgray" : ""} hover:bg-cstm_lightgray transition-colors capitalize rounded-full p-4 py-2 ${color} ${weight}`}>{children}</button>
        </div>
    )
}

export default FilterButton