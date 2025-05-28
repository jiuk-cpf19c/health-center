import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddressSearchModal from '../components/AddressSearchModal';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { product, quantity } = state || {};

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    address_detail: '',
    message: '',
    payment_method: 'bank'
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8000/api/orders/', {
        ...form,
        total_price: product.price * quantity,
        items: [{
          product: product.id,
          quantity: quantity,
          price: product.price
        }]
      });
      navigate('/order-success');
    } catch (err) {
      console.error(err.response?.data || err);
      alert('주문 실패');
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleAddressSelect = (selectedAddress) => {
    setForm(prev => ({ ...prev, address: selectedAddress }));
  };

  if (!product) return <div>잘못된 접근입니다.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 font-sans bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold text-gray-800 border-b pb-4 mb-6">주문 / 결제</h2>

      {/* 배송지 입력 */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">📦 배송 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">받는 사람</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">휴대폰 번호</label>
            <input type="text" name="phone" value={form.phone} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">이메일</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">결제 방식</label>
            <select name="payment_method" value={form.payment_method} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="bank">무통장입금</option>
              <option value="card">카드결제</option>
              <option value="virtual">가상계좌</option>
            </select>
          </div>
        </div>

        {/* 주소 입력 */}
        <div className="mt-4">
          <label className="block text-sm text-gray-600 mb-1">주소</label>
          
          <div className="flex gap-2 mb-2">
            <input type="text" name="address" value={form.address} readOnly
              className="flex-1 border border-gray-300 rounded px-3 py-2 bg-gray-50" />
            <button type="button" onClick={() => setShowModal(true)}
              className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              주소 검색
            </button>
          </div>

          <input type="text" name="address_detail" value={form.address_detail} onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2" placeholder="상세 주소" />
        </div>

        {showModal && (
          <AddressSearchModal
            onComplete={handleAddressSelect}
            onClose={() => setShowModal(false)}
          />
        )}

        <div className="mt-4">
          <label className="block text-sm text-gray-600 mb-1">배송 요청사항</label>
          <input type="text" name="message" value={form.message} onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2" placeholder="예: 부재 시 문 앞에 놓아주세요" />
        </div>
      </section>

      {/* 주문 상품 요약 */}
      <section className="mb-8 border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">🛒 주문 상품</h3>
        <div className="flex justify-between text-gray-800 mb-2">
          <span>상품명</span>
          <span>{product.name}</span>
        </div>
        <div className="flex justify-between text-gray-800 mb-2">
          <span>수량</span>
          <span>{quantity}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-3">
          <span>총 결제 금액</span>
          <span>{(product.price * quantity).toLocaleString()}원</span>
        </div>
      </section>

      {/* 주문 확정 버튼 */}
      <div className="text-center">
        <button onClick={handleSubmit}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold text-lg px-8 py-3 rounded shadow transition">
          주문 확정
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
