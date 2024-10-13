import React, {useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import PersonIcon from "@mui/icons-material/Person";
import {useNavigate} from "react-router-dom";
import {Path} from "../../../constants/Path";
import VolumeUp from "@mui/icons-material/VolumeUp";
import {BackButton} from "../../../components/common/BackButton";

export default function DailyInspectionPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [inspectionList, setInspectionList] = useState([
        {id: 1, label: "점검 항목 1", checked: false},
        {id: 2, label: "점검 항목 2", checked: false},
        {id: 3, label: "점검 항목 3", checked: false},
        {id: 4, label: "점검 항목 4", checked: false},
    ]);
    const navigate = useNavigate();

    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
        console.log("선택된 날짜:", newDate);
    };

    const getStartDayOfMonth = (date: Date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return firstDay.getDay();
    };

    const getDaysInMonth = (date: Date) => {
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return lastDay.getDate();
    };

    const startDay = getStartDayOfMonth(selectedDate);
    const daysInMonth = getDaysInMonth(selectedDate);

    const handleCheck = (id: number) => {
        setInspectionList(
            inspectionList.map(item =>
                item.id === id ? {...item, checked: !item.checked} : item
            )
        );
    };

    const handleSave = () => {
        console.log("저장된 데이터:", inspectionList);
    };

    const handleCancel = () => {
        console.log("취소됨");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 p-4">
            <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-6">
                <div className="flex space-x-4">
                    <button
                        className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100"
                        onClick={() => navigate(Path.MAIN)}>
                        <HomeIcon/>
                        <span>홈</span>
                    </button>

                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100"
                    >
                        <RefreshIcon/>
                        <span>새로고침</span>
                    </button>
                </div>
                <h1 className="text-2xl text-white font-bold">일일 안전 점검</h1>
                <div className="flex space-x-4">
                    <button
                        className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100">
                        <VolumeUp/>
                        <span>음성</span>
                    </button>
                    <button
                        className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100">
                        <PersonIcon/>
                        <span>사용자</span>
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-8 text-center">
                <h2 className="text-xl font-bold mb-4">
                    {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월
                </h2>
                <div className="grid grid-cols-7 gap-2 text-center">
                    {/* 요일 표시 */}
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                        <div key={day} className="font-bold text-gray-500">
                            {day}
                        </div>
                    ))}

                    {Array.from({length: startDay}).map((_, idx) => (
                        <div key={idx}></div>
                    ))}

                    {Array.from({length: daysInMonth}, (_, day) => (
                        <button
                            key={day}
                            className={`p-2 rounded-md ${
                                selectedDate.getDate() === day + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } hover:bg-blue-300`}
                            onClick={() =>
                                handleDateChange(
                                    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day + 1)
                                )
                            }
                        >
                            {day + 1}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
                <h2 className="text-xl font-bold mb-4">{selectedDate.toDateString()} 일일 점검</h2>
                <ul className="space-y-4">
                    {inspectionList.map((item) => (
                        <li key={item.id} className="flex items-center justify-between">
                            <span>{item.label}</span>
                            <button
                                className={`p-2 rounded-full ${
                                    item.checked ? "bg-green-500" : "bg-red-500"
                                }`}
                                onClick={() => handleCheck(item.id)}
                            >
                                {item.checked ? "O" : "X"}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between max-w-5xl mx-auto mt-10">
                    <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
                    >
                        취소
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                    >
                        저장
                    </button>
                </div>
            </div>
            <BackButton/>
        </div>
    );
}
