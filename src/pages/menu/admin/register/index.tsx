import {useNavigate} from "react-router-dom";
import {Path} from "../../../../constants/Path";
import PersonIcon from "@mui/icons-material/Person";
import {Button} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {CustomButton} from "../../../../components/common/CustomButton";
import ScienceIcon from "@mui/icons-material/Science";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import React from "react";
import {BackButton} from "../../../../components/common/BackButton";

const UserInfo = {
    name: "최성원",
    history: "개발중",
    section: "-",
    isAdmin: true
}

export const RegisterPage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 p-4">
            <div className="flex justify-between items-center w-full max-w-4xl mb-8">
                <div className="flex items-center space-x-2"
                     onClick={() => navigate(Path.MAIN)}>
                    <PersonIcon className="text-white"/>
                    <div className="text-white">
                        <div className="text-lg font-bold">{UserInfo.name}</div>
                        <div className="text-sm">{UserInfo.history} / {UserInfo.section}</div>
                    </div>
                </div>

                <Button
                    variant="contained"
                    className="!bg-blue-500 !text-white !rounded-full !py-3 !px-6 flex items-center shadow-md hover:shadow-lg transition-all duration-200"
                    style={{position: 'absolute', top: '16px', right: '16px'}}
                >
                    <LogoutIcon className="!text-white"/>
                    <span className="ml-2 font-semibold">로그아웃</span>
                </Button>
            </div>

            <div className="flex flex-col justify-center items-center min-h-[70vh]">
                <div className="grid grid-cols-2 gap-4 w-full max-w-4xl px-4">
                    <CustomButton
                        icon={<ScienceIcon className="text-blue-500"/>}
                        title="화학제품"
                        description="화학제품 등록 페이지 이동"
                        onClick={() => navigate(Path.REGISTER_CHEMICALS)}
                    />
                    <CustomButton
                        icon={<BatteryFullIcon className="text-blue-500"/>}
                        title="소모품"
                        description="소모품 등록 페이지 이동"
                        onClick={() => navigate(Path.REGISTER_EXPENDABLES)}
                    />
                </div>
            </div>
            <BackButton/>
        </div>
    );
}