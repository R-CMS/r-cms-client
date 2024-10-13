import React from "react";
import {useNavigate} from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    return (
      <button
          className="fixed bottom-4 left-4 m-20 bg-gray-700 text-white py-3 px-6 rounded-md shadow-lg hover:bg-gray-600 z-50"
          onClick={() => navigate(-1)}
      >
          뒤로가기
      </button>
  )
}