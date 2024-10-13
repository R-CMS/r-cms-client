import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import {useNavigate} from 'react-router-dom';
import {Path} from "../../constants/Path";

interface ModalProps {
    title: string;
    content: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({title, content, onClose}) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
         onClick={onClose}
    >
        <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center shadow-lg w-80"
             onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl text-left font-bold mb-6 text-center whitespace-pre-wrap">{title}</h2>
            <div>{content}</div>
        </div>
    </div>
);

export const LoginModal: React.FC<{ setIsModalOpen: (value: boolean) => void }> = ({setIsModalOpen}) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="relative mb-4">
                <AccountCircleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <input
                    type="text"
                    placeholder="아이디"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="relative mb-6">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="flex justify-between">
                <button
                    className="bg-gray-500 text-white py-2 px-8 rounded-md hover:bg-gray-600"
                    onClick={() => setIsModalOpen(false)}
                >
                    취소
                </button>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                        onClick={() => navigate(Path.MENU)}>
                    로그인
                </button>
            </div>
        </div>
    )
}

export const BarcodeModal = () => {
    return (
        <div>
            <p className="text-gray-600 mb-4">QR코드를 스캔하여 로그인할 수 있습니다.</p>
            <div className="flex justify-center">
                <QrCodeScannerIcon className="text-green-500" style={{fontSize: '48px'}}/>
            </div>
        </div>
    )
}
export default Modal;
