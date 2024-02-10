import React from 'react'

interface ParagraphProps {
    children: React.ReactNode,
    size?: string,
    color?: string,
    weight?: string
}
const Paragraph = (props: ParagraphProps) => {
    const { children, weight, size = "text-sm", color = "text-cstm_black" } = props
    return (
        <p className={`${size} ${weight} ${color}`}>
            {children}
        </p>
    )
}

export default Paragraph