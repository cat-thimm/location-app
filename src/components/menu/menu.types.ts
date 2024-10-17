import {ReactNode} from "react";


export interface MenuProps {
    headline?: string
    paragraphText?: string
    disabled: boolean;
    buttonText?: string | null;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    onDismiss?: () => void;
}

