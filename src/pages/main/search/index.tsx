import React, {useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import PersonIcon from "@mui/icons-material/Person";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate} from "react-router-dom";
import {Path} from "../../../constants/Path";
import {BackButton} from "../../../components/common/BackButton";

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("통합검색");
    const [selectedFilter, setSelectedFilter] = useState("");
    const [manufacturer, setManufacturer] = useState("전체");
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log("검색어:", searchTerm);
        console.log("카테고리:", selectedCategory);
        console.log("선택된 필터:", selectedFilter);
        console.log("제조사:", manufacturer);
    };

    const handleRefresh = () => {
        console.log("페이지 새로고침");
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
                        onClick={handleRefresh}
                        className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100"
                    >
                        <RefreshIcon/>
                        <span>새로고침</span>
                    </button>
                </div>
                <h1 className="text-2xl text-white font-bold">검색</h1>

                <div className="flex space-x-4">
                    <button
                        className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100">
                        <VolumeOffIcon/>
                        <span>음소거</span>
                    </button>

                    <button
                        className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100">
                        <PersonIcon/>
                        <span>사용자</span>
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
                <h2 className="text-xl font-bold text-center mb-4">제품명 / CAS번호를 검색해주세요.</h2>

                <div className="flex items-center justify-center space-x-2 mb-4">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md bg-white"
                    >
                        <option value="통합검색">통합검색</option>
                        <option value="제품명">제품명</option>
                        <option value="CAS번호">CAS번호</option>
                    </select>

                    <select
                        value={manufacturer}
                        onChange={(e) => setManufacturer(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md bg-white"
                    >
                        <option value="전체">전체</option>
                        <option value="제조사1">제조사1</option>
                        <option value="제조사2">제조사2</option>
                    </select>

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="CAS번호 / 제품명 / 제조사를 입력하세요."
                        className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white flex items-center py-2 px-6 rounded-md hover:bg-blue-600 transition-all"
                    >
                        <SearchIcon className="mr-2"/>
                        <span>검색</span>
                    </button>
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                    {["D1", "D2", "D3", "D4", "D5", "D6"].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`p-2 px-4 rounded-md ${
                                selectedFilter === filter ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                            } border border-gray-300 hover:bg-blue-500 hover:text-white transition`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-4xl bg-white rounded-md shadow-md p-6 mx-auto">
                <table className="table-auto w-full text-left">
                    <thead>
                    <tr>
                        <th className="p-2 border-b-2">제품명</th>
                        <th className="p-2 border-b-2">제조사</th>
                        <th className="p-2 border-b-2">CAS번호</th>
                        <th className="p-2 border-b-2">저장소</th>
                        <th className="p-2 border-b-2">재고</th>
                        <th className="p-2 border-b-2">위험계수</th>
                        <th className="p-2 border-b-2">MSDS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[
                        {
                            name: "Hexane",
                            manufacturer: "junsel",
                            cas: "110-54-3",
                            filter: "D1",
                            num: "2개",
                            msds: "MSDS"
                        },
                        {
                            name: "Diphenyl ether",
                            manufacturer: "aldirch",
                            cas: "101-84-8",
                            filter: "D2",
                            num: "1개",
                            msds: "MSDS"
                        },
                    ].map((item, index) => (
                        <tr key={index}>
                            <td className="p-2 border-b">{item.name}</td>
                            <td className="p-2 border-b">{item.manufacturer}</td>
                            <td className="p-2 border-b">{item.cas}</td>
                            <td className="p-2 border-b">{item.filter}</td>
                            <td className="p-2 border-b">{item.num}</td>
                            <td className="p-2 border-b">{item.num}</td>
                            <td className="p-2 border-b">
                                <button className="text-blue-500 hover:underline">{item.msds}</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="mt-6 flex"
                     onClick={() => navigate(-1)}>
                    <button className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600">이전</button>
                </div>
            </div>
            <BackButton/>
        </div>
    );
}
