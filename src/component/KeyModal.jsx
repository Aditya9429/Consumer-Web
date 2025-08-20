import React from "react";
import { IoClose } from "react-icons/io5";

export default function KeyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#ede3e3] z-50">
      <div className="bg-white rounded-xl w-[500px] p-6 relative shadow-lg">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <img
            src="/images/Dash.png"
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Agnim Gupta</p>
            <select className="text-sm border rounded p-1">
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Add Question *</label>
          <textarea
            placeholder="Ask your question here..."
            maxLength="200"
            className="w-full border rounded-lg p-2 mt-1 resize-none"
          />
          <p className="text-xs text-gray-400">max 50 words</p>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Add Description</label>
          <textarea
            placeholder="Add your description here..."
            maxLength="300"
            className="w-full border rounded-lg p-2 mt-1 resize-none"
          />
          <p className="text-xs text-gray-400">max 70 words</p>
        </div>

        <div className="flex items-center gap-3 border rounded p-2 text-gray-500">
          <span>📎</span>
          <p className="text-sm">Add attachments</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}
