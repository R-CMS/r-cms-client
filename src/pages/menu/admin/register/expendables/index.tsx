import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import PersonIcon from "@mui/icons-material/Person";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import {BackButton} from "../../../../../components/common/BackButton";

interface Expendables{
  id: number,
  name: string,
  manufacturer: string,
  replacementCycle: string,
}

export default function ExpendablesRegisterPage() {
  // 소모품 목록
  const [expendables, setExpendables] = useState<Expendables[]>([
    {
      id: 1,
      name: "소모품1",
      manufacturer: "제조사1",
      replacementCycle: "12개월",
    },
    // 추가 소모품 데이터
  ]);

  const [isEditing, setIsEditing] = useState(false); // 수정 모드 확인
  const [currentItem, setCurrentItem] = useState<Expendables|null>(null); // 수정 중인 항목
  const [newItem, setNewItem] = useState<Expendables>({
    id: 0,
    name: "",
    manufacturer: "",
    replacementCycle: "",
  });

  // 입력 값 변경
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  // 소모품 저장
  const handleSave = () => {
    if (isEditing && currentItem) {
      setExpendables(
          expendables.map((item) =>
              item.id === currentItem.id ? { ...currentItem, ...newItem } : item
          )
      );
    } else {
      setExpendables([...expendables, { ...newItem, id: expendables.length + 1 }]);
    }
    resetForm();
  };

  // 소모품 수정
  const handleEdit = (item:Expendables) => {
    setIsEditing(true);
    setCurrentItem(item);
    setNewItem(item);
  };

  // 소모품 삭제
  const handleDelete = (id:number) => {
    setExpendables(expendables.filter((item) => item.id !== id));
  };

  // 폼 초기화
  const resetForm = () => {
    setIsEditing(false);
    setCurrentItem(null);
    setNewItem({ id: 0, name: "", manufacturer: "", replacementCycle: "" });
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 p-4">
        <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-6">
          <div className="flex space-x-4">
            <button
                className="flex items-center space-x-2 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100">
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

          <h1 className="text-2xl text-white font-bold">소모품 등록</h1>

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
          <h2 className="text-xl font-bold mb-4">등록된 소모품</h2>
          <table className="table-auto w-full text-left">
            <thead>
            <tr>
              <th className="p-2 border-b-2">소모품명</th>
              <th className="p-2 border-b-2">제조사</th>
              <th className="p-2 border-b-2">교환주기</th>
              <th className="p-2 border-b-2">수정</th>
              <th className="p-2 border-b-2">삭제</th>
            </tr>
            </thead>
            <tbody>
            {expendables.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 border-b">{item.name}</td>
                  <td className="p-2 border-b">{item.manufacturer}</td>
                  <td className="p-2 border-b">{item.replacementCycle}</td>
                  <td className="p-2 border-b">
                    <button
                        className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                        onClick={() => handleEdit(item)}
                    >
                      수정
                    </button>
                  </td>
                  <td className="p-2 border-b">
                    <button
                        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(item.id)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>

          <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              onClick={resetForm}
          >
            소모품 등록
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">{isEditing ? "소모품 정보 수정" : "소모품 정보 등록"}</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
                placeholder="소모품명"
                className="p-2 border border-gray-300 rounded-md"
            />
            <input
                type="text"
                name="manufacturer"
                value={newItem.manufacturer}
                onChange={handleInputChange}
                placeholder="제조사"
                className="p-2 border border-gray-300 rounded-md"
            />
            <input
                type="text"
                name="replacementCycle"
                value={newItem.replacementCycle}
                onChange={handleInputChange}
                placeholder="교환주기"
                className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
                className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
                onClick={resetForm}
            >
              취소
            </button>

            <button
                className={`bg-${isEditing ? "blue" : "green"}-500 text-white py-2 px-6 rounded-md hover:bg-${isEditing ? "blue" : "green"}-600`}
                onClick={handleSave}
            >
              {isEditing ? "수정" : "저장"}
            </button>
          </div>
        </div>
        <BackButton/>
      </div>
  );
}
