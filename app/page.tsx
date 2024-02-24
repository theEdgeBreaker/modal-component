"use client";

import React from "react";
import ModalBox from "./ModalBox";
import { useState } from "react";

export default function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="relative">
      <button
        className=" bg-green-600 hover:bg-green-500 transition duration-150
      text-white px-5 py-2 rounded-md absolute top-4 left-8 transform"
        onClick={handleShowModal}
      >
        Show Modal
      </button>
      {isModalVisible && <ModalBox onClose={() => setIsModalVisible(false)} />}
    </div>
  );
}
