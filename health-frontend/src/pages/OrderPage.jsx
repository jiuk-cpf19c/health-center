import React, { useState } from 'react';
import axios from 'axios';

function OrderPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    address_detail: '',
    message: '',
    payment_method: 'bank',
  });

  const cartItems = [
    { product: 1, name: '양파즙', quantity: 1, price: 25000 },
    { product: 2, name: '흑마늘즙', quantity: 1, price: 3000 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/orders/', {
        ...form,
        total_price: totalPrice,
        items: cartItems.map(item => ({
          product: item.product,
          quantity: item.quantity,
          price: item.price,
        }))
      });
      alert('주문이 완료되었습니다!');
    } catch (err) {
      console.error(err.response?.data || err);
      alert('주문에 실패했습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">배송 정보</h2>
      <input name="name" placeholder="받는사람" value={form.name} onChange={handleChange} className="border p-2 w-full" />
      <input name="phone" placeholder="연락처" value={form.phone} onChange={handleChange} className="border p-2 w-full" />
      <input name="email" placeholder="이메일" value={form.email} onChange={handleChange} className="border p-2 w-full" />
      <input name="address" placeholder="주소" value={form.address} onChange={handleChange} className="border p-2 w-full" />
      <input name="address_detail" placeholder="상세 주소" value={form.address_detail} onChange={handleChange} className="border p-2 w-full" />
      <input name="message" placeholder="배송 메시지" value={form.message} onChange={handleChange} className="border p-2 w-full" />

      <h2 className="text-xl font-bold">결제 수단</h2>
      <select name="payment_method" value={form.payment_method} onChange={handleChange} className="border p-2 w-full">
        <option value="bank">무통장입금</option>
        <option value="card">카드결제</option>
        <option value="virtual">가상계좌</option>
      </select>

      <h2 className="text-xl font-bold">주문 상품</h2>
      <ul className="border p-4">
        {cartItems.map((item, idx) => (
          <li key={idx}>{item.name} x {item.quantity} = {item.price * item.quantity}원</li>
        ))}
      </ul>
      <div className="font-bold text-right">총 결제 금액: {totalPrice}원</div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">주문하기</button>
    </form>
  );
}

export default OrderPage;
