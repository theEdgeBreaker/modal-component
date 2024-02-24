import React from "react";

type Props = {
  onClose: () => void;
};

export default function ModalBox({ onClose }: Props) {
  return (
    <div className="fixed w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-65">
      <div
        className="bg-white rounded-md overflow-hidden"
        style={{ width: "30rem" }}
      >
        <nav className="bg-black text-white flex justify-between px-4 py-2">
          <span className=" text-lg">Modal</span>
          <button
            className=" bg-red-300 bg-opacity-50 py-1 px-2 hover:bg-red-500
          hover:bg-opacity-70 transition-all rounded-full text-sm"
            onClick={onClose}
          >
            &#10005;
          </button>
        </nav>
        <div className="text-3xl font-bold py-8 pl-4">Hello Modal!</div>
      </div>
    </div>
  );
}
