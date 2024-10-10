import {ReactNode} from "react";


export interface MenuProps {
    headline: string
    paragraphText: string
    disabled: boolean
    buttonText: string
    onClick: () => void
    children: ReactNode
}

