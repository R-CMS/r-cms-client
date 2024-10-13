import React from "react";
import {Button} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import HistoryIcon from "@mui/icons-material/History";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import OutboxIcon from "@mui/icons-material/Outbox";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import {CustomButton} from "../../components/common/CustomButton";
import {useNavigate} from 'react-router-dom';
import {Path} from "../../constants/Path";
import {BackButton} from "../../components/common/BackButton";

const UserInfo = {
    name: "최성원",
    history: "개발중",
    section: "-",
    isAdmin: true
}

export const MenuPage = () => {
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
                    {/* 조건부 렌더링으로 관리자가 아닌 경우 특정 버튼만 표시 */}
                    <CustomButton
                        icon={<OutboxIcon className="text-blue-500"/>}
                        title="반출"
                        description="완료한 작업물 반출"
                    />
                    <CustomButton
                        icon={<KeyboardReturnIcon className="text-blue-500"/>}
                        title="반납"
                        description="사용된 도구 및 작업 반납 기능"
                    />
                    <CustomButton
                        icon={<DeleteIcon className="text-blue-500"/>}
                        title="폐기"
                        description="사용된 폐기물의 관리"
                    />
                    <CustomButton
                        icon={<SearchIcon className="text-blue-500"/>}
                        title="검색"
                        description="등록 제품 검색 및 조회"
                    />

                    {/* 관리자인 경우에만 추가로 보이는 버튼들 */}
                    {UserInfo.isAdmin && (
                        <>
                            <CustomButton
                                icon={<DescriptionIcon className="text-blue-500"/>}
                                title="보고서"
                                description="업데이트 보고서 작성 및 확인"
                            />
                            <CustomButton
                                icon={<HistoryIcon className="text-blue-500"/>}
                                title="이력"
                                description="사용한 도구 및 작업 이력"
                            />
                            <CustomButton
                                icon={<AssignmentIcon className="text-blue-500"/>}
                                title="등록"
                                description="제품 등록"
                                onClick={() => navigate(Path.REGISTER)}
                            />
                            <CustomButton
                                icon={<MoveToInboxIcon className="text-blue-500"/>}
                                title="입고"
                                description="제품 입고 / 입고처리 확인"
                            />
                            <CustomButton
                                icon={<SettingsIcon className="text-blue-500"/>}
                                title="관리"
                                description="설정 관리"
                            />
                        </>
                    )}
                </div>
            </div>
            <BackButton/>
        </div>
    );
};