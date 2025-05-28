import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; // heroicons 설치 필요

const OrderSuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">주문이 완료되었습니다!</h2>
        <p className="text-gray-600 mb-6">
          소중한 주문 감사합니다. 이모의 건강원이 정성껏 준비해드릴게요. 😊
        </p>

        <div className="border-t pt-4 text-sm text-gray-500">
          * 결제 및 배송 정보는 입력하신 연락처로 안내됩니다.
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Link to="/" className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">
            홈으로 돌아가기
          </Link>
          <Link to="/products/1" className="text-blue-600 hover:underline">
            다른 상품 더 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
