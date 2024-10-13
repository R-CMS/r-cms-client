import React, {useEffect, useState} from 'react';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Co2Icon from '@mui/icons-material/Co2';
import CloudIcon from '@mui/icons-material/Cloud';
import AirIcon from '@mui/icons-material/Air';
import PersonIcon from '@mui/icons-material/Person';
import Modal, {BarcodeModal, LoginModal} from "../../components/modal/Modal";
import {ModalTitle} from "../../constants/ModalTitle";
import {CustomButton} from "../../components/common/CustomButton";
import {Formatter} from "../../utils/Formatter";
import {useNavigate} from 'react-router-dom';
import {Path} from "../../constants/Path";

interface Environment {
    temperature: number,
    humidity: number,
    co2: number,
    co: number,
    voc: number
}

export default function MainPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const {formatDate, formatTime} = Formatter();
    const navigate = useNavigate();

    const [environmentData] = useState<Environment>({
        temperature: 27,
        humidity: 65,
        co2: 110,
        co: 50,
        voc: 13
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 20000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const openLoginModal = () => {
        setModalTitle(ModalTitle.Login);
        setModalContent(<LoginModal setIsModalOpen={setIsModalOpen}/>);
        setIsModalOpen(true);
    };

    const openBarcodeModal = () => {
        setModalTitle(ModalTitle.Barcode);
        setModalContent(<BarcodeModal/>);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex flex-col items-center justify-center relative">
            <div className="absolute top-4 left-4 text-white flex flex-row items-center space-x-2">
                <PersonIcon className="text-white"/>
                <div>
                    <h2 className="text-lg font-semibold">키오스크 저장소C</h2>
                    <p className="text-sm">담당자: 홍길동 (031-201-0000)</p>
                </div>
            </div>

            <div className="text-white text-center mb-12">
                <h2 className="text-xl mb-2">{formatDate(currentDate)}</h2>
                <h1 className="text-6xl">{formatTime(currentDate)}</h1>
            </div>

            <div className="space-y-6 w-full max-w-4xl px-4">
                <div className="grid grid-cols-2 gap-6">
                    <CustomButton
                        icon={<DeviceThermostatIcon className="text-red-500"/>}
                        title="온도"
                        description={environmentData.temperature + '°C'}
                    />
                    <CustomButton
                        icon={<WaterDropIcon className="text-blue-500"/>}
                        title="습도"
                        description={environmentData.humidity + '%'}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <CustomButton
                        icon={<Co2Icon className="text-yellow-500"/>}
                        title="CO2"
                        description={environmentData.co2 + 'ppm'}
                    />
                    <CustomButton
                        icon={<AirIcon className="text-orange-500"/>}
                        title="CO"
                        description={environmentData.co + 'ppm'}
                    />
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <CustomButton
                        icon={<CloudIcon className="text-gray-500"/>}
                        title="VOC"
                        description={environmentData.voc + 'ppm'}
                    />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <CustomButton
                        icon={<PersonIcon className="text-cyan-500"/>}
                        title="계정 생성"
                        description="최초 회원가입"
                        onClick={openLoginModal}
                    />
                    <CustomButton
                        icon={<KeyboardIcon className="text-blue-500"/>}
                        title="직접 로그인"
                        description="아이디/패스워드 직접 입력"
                        onClick={openLoginModal}
                    />
                    <CustomButton
                        icon={<QrCodeScannerIcon className="text-green-500"/>}
                        title="바코드 로그인"
                        description="QR코드로 로그인"
                        onClick={openBarcodeModal}
                    />
                </div>

                <CustomButton
                    icon={<MenuBookIcon className="text-yellow-500"/>}
                    title="MSDS 전자책"
                    description="해당 저장소에 01건의 제품이 등록"
                    className="!w-full"
                    onClick={() => navigate(Path.MSDS)}
                />

                <div className="grid grid-cols-2 gap-6">
                    <CustomButton
                        icon={<SearchIcon className="text-red-500"/>}
                        title="검색"
                        description="분류별/저장소별 검색 및 재고 파악 기능"
                        onClick={() => navigate(Path.SEARCH)}
                    />
                    <CustomButton
                        icon={<SecurityIcon className="text-purple-500"/>}
                        title="일일 안전 점검"
                        description="간편한 안전 점검 일지 작성"
                        onClick={() => navigate(Path.DAILY)}
                    />
                </div>
            </div>
            {isModalOpen && <Modal title={modalTitle} content={modalContent} onClose={closeModal}/>}
        </div>
    );
}
