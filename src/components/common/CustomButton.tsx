import {Button} from '@mui/material';

interface CustomButtonProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({icon, title, description, className = '', onClick}) => {
    return (
        <Button
            variant="contained"
            className={`!bg-white !text-black !py-8 !px-6 !flex !flex-col !justify-between !h-36 !shadow-md !rounded-lg ${className}`}
            onClick={onClick}
        >
            <div className="w-full flex justify-end items-start">
                {icon}
            </div>

            <div className="w-full text-left">
                <span className="text-2xl font-bold">{title}</span>
            </div>

            <div className="w-full text-left">
                <span className="text-sm text-gray-600">{description}</span>
            </div>
        </Button>
    )
}