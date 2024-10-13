import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import PersonIcon from "@mui/icons-material/Person";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import {BackButton} from "../../../../../components/common/BackButton";

interface Product {
  id: number,
  name: string,
  manufacturer: string,
  casNumber: string
  quantity: string
  concentration: string,
  msds: string
}

export default function ChemicalsRegisterPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Hexamethyleneimine",
      manufacturer: "aldirch",
      casNumber: "123-45-6",
      quantity: "500g",
      concentration: "99%",
      msds: "MSDS",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product|null>(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    manufacturer: "",
    casNumber: "",
    quantity: "",
    concentration: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // 제품 등록
  const handleSave = () => {
    if (isEditing && currentProduct) {
      setProducts(
          products.map((product) =>
              product.id === currentProduct.id ? { ...currentProduct, ...newProduct } : product
          )
      );
    } else {
      setProducts([...products, { ...newProduct, id: products.length + 1, msds: "MSDS" }]);
    }
    setNewProduct({ name: "", manufacturer: "", casNumber: "", quantity: "", concentration: "" });
    setIsEditing(false);
    setCurrentProduct(null);
  };

  // 제품 수정
  const handleEdit = (product:any) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setNewProduct(product);
  };

  // 제품 삭제
  const handleDelete = (id:any) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 p-4">
        {/* 상단 바 */}
        <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-6">
          {/* 왼쪽: 홈 & 새로고침 버튼 */}
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

          <h1 className="text-2xl text-white font-bold">화학제품 등록</h1>

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
          <h2 className="text-xl font-bold mb-4">등록된 제품</h2>
          <table className="table-auto w-full text-left">
            <thead>
            <tr>
              <th className="p-2 border-b-2">제품명</th>
              <th className="p-2 border-b-2">제조사</th>
              <th className="p-2 border-b-2">CAS번호</th>
              <th className="p-2 border-b-2">양</th>
              <th className="p-2 border-b-2">농도</th>
              <th className="p-2 border-b-2">MSDS</th>
              <th className="p-2 border-b-2">수정</th>
              <th className="p-2 border-b-2">삭제</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                  <td className="p-2 border-b">{product.name}</td>
                  <td className="p-2 border-b">{product.manufacturer}</td>
                  <td className="p-2 border-b">{product.casNumber}</td>
                  <td className="p-2 border-b">{product.quantity}</td>
                  <td className="p-2 border-b">{product.concentration}</td>
                  <td className="p-2 border-b">
                    <button className="text-blue-500 hover:underline">{product.msds}</button>
                  </td>
                  <td className="p-2 border-b">
                    <button
                        className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                        onClick={() => handleEdit(product)}
                    >
                      수정
                    </button>
                  </td>
                  <td className="p-2 border-b">
                    <button
                        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(product.id)}
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
              onClick={() => setIsEditing(false)}
          >
            신규 제품 등록
          </button>
        </div>

        {/* 제품 등록/수정 폼 */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">{isEditing ? "제품 정보 수정" : "제품 정보 등록"}</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder="제품명"
                className="p-2 border border-gray-300 rounded-md"
            />
            <input
                type="text"
                name="manufacturer"
                value={newProduct.manufacturer}
                onChange={handleInputChange}
                placeholder="제조사"
                className="p-2 border border-gray-300 rounded-md"
            />
            <input
                type="text"
                name="casNumber"
                value={newProduct.casNumber}
                onChange={handleInputChange}
                placeholder="CAS 번호"
                className="p-2 border border-gray-300 rounded-md"
            />
            <input
                type="text"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                placeholder="양"
                className="p-2 border border-gray-300 rounded-md"
            />
            <input
                type="text"
                name="concentration"
                value={newProduct.concentration}
                onChange={handleInputChange}
                placeholder="농도"
                className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* 하단 버튼 */}
          <div className="flex justify-between mt-4">
            <button
                className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
                onClick={() => {
                  setIsEditing(false);
                  setNewProduct({name: "", manufacturer: "", casNumber: "", quantity: "", concentration: ""});
                }}
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
