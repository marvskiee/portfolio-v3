import React from 'react'

interface LightButtonProps {
    children: React.ReactNode,
    color?: string,
    weight?: string,
    size?: string,
    handler: React.Dispatch<React.SetStateAction<any>>;
}

const LightButton = (props: LightButtonProps) => {

    const {
        children,
        color = "text-cstm_black",
        weight = "font-medium",
    } = props

    return (
        <div>
            <button onClick={props.handler} className={`hover:bg-cstm_lightgray transition-colors capitalize rounded-full p-4 py-2 ${color} ${weight}`}>{children}</button>
        </div>
    )
}

export default LightButton