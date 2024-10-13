import React, {useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import FileIcon from "@mui/icons-material/InsertDriveFile";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useNavigate} from 'react-router-dom';
import {Path} from "../../../constants/Path";
import {BackButton} from "../../../components/common/BackButton";
import {GHSSignToImage} from "../../../constants/types/ghs.type";
import {productList} from "../../../constants/types/product.type";

export default function MSDSPage() {
    const [searchTerm, setSearchTerm] = useState("");
    // const [selectedCategory, setSelectedCategory] = useState("통합검색");
    // const [selectedFilter, setSelectedFilter] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log("검색어:", searchTerm);
        // console.log("카테고리:", selectedCategory);
        // console.log("선택된 필터:", selectedFilter);
    };

    const handleRefresh = () => {
        console.log("페이지 새로고침");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 p-4">
            <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-6">
                <button
                    className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100"
                    onClick={() => navigate(Path.MAIN)}><HomeIcon/>
                    <span>홈</span>
                </button>

                <h1 className="text-2xl text-white font-bold">MSDS 검색</h1>

                <button
                    onClick={handleRefresh}
                    className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100"
                >
                    <RefreshIcon/>
                    <span>새로고침</span>
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
                <h2 className="text-xl font-bold text-center mb-4">제품명을 검색해주세요.</h2>

                <div className="flex items-center justify-center space-x-2 mb-4">
                    {/*<select*/}
                    {/*    value={selectedCategory}*/}
                    {/*    onChange={(e) => setSelectedCategory(e.target.value)}*/}
                    {/*    className="p-2 border border-gray-300 rounded-md bg-white"*/}
                    {/*>*/}
                    {/*    <option value="통합검색">통합검색</option>*/}
                    {/*    <option value="제품명">제품명</option>*/}
                    {/*    <option value="CAS번호">CAS번호</option>*/}
                    {/*</select>*/}

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="제품명 / 제조사를 입력하세요."
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
                {/*<div className="flex justify-center space-x-4 mb-6">*/}
                {/*    {["D1", "D2", "D3", "D4", "D5", "D6"].map((filter) => (*/}
                {/*        <button*/}
                {/*            key={filter}*/}
                {/*            onClick={() => setSelectedFilter(filter)}*/}
                {/*            className={`p-2 px-4 rounded-md ${*/}
                {/*                selectedFilter === filter ? "bg-blue-500 text-white" : "bg-white text-gray-700"*/}
                {/*            } border border-gray-300 hover:bg-blue-500 hover:text-white transition`}*/}
                {/*        >*/}
                {/*            {filter}*/}
                {/*        </button>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="w-full max-w-4xl bg-white rounded-md shadow-md p-6">
                    <table className="table-auto w-full text-left">
                        <thead>
                        <tr>
                            <th className="p-2 border-b-2">번호</th>
                            <th className="p-2 border-b-2">제품명</th>
                            <th className="p-2 border-b-2">경고 표지</th>
                            <th className="p-2 border-b-2">저장소</th>
                            <th className="p-2 border-b-2">MSDS</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productList.map((item, index) => (
                            <tr key={index}>
                                <td className="p-2 border-b">{index + 1}</td>
                                <td className="p-2 border-b">{item.name}({item.company})</td>
                                <td className="p-2 border-b flex">
                                    {item.ghsSign.map((elem, index) => {
                                        return (<img key={index} className="m-1 w-10" src={GHSSignToImage(elem)}
                                                     alt="sign"/>)
                                    })
                                    }
                                </td>
                                <td className="p-2 border-b">{item.storage}</td>
                                <td className="p-2 border-b">
                                    {item.msds === "" ?
                                        <button
                                            className="flex items-center text-red-500 border border-red-500 rounded-xl px-2 py-1"
                                            onClick={() => navigate(item.msds)}>
                                            <span>MSDS추가</span>
                                            <AddCircleOutlineIcon className="text-red-500"/>
                                        </button>
                                        : <button
                                            className="flex items-center text-blue-500 border border-blue-500 rounded-xl px-2 py-1"
                                            onClick={() => navigate(item.msds)}>
                                            <span>MSDS보기</span>
                                            <FileIcon className="text-blue-500"/>
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6">
                    <button className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
                            onClick={() => navigate(-1)}
                    >
                        이전
                    </button>
                </div>
            </div>
            <BackButton/>
        </div>
    );
}
