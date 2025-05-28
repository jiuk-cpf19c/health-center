import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}/`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleOrder = () => {
    navigate('/checkout', { state: { product, quantity } });
  };

  if (!product) return <div>로딩 중...</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Noto Sans KR' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '360px',
          objectFit: 'cover',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}
      />

      <h2 style={{ marginTop: '2rem', fontSize: '2rem' }}>{product.name}</h2>

      {/* ✅ 상세 설명 분할 */}
      <section style={{ lineHeight: '1.8', marginTop: '1.5rem', color: '#333' }}>
        <h3>✔ 제품 특징</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{product.description}</p>

        <h3 style={{ marginTop: '1rem' }}>✔ 원재료 및 성분</h3>
        <p>국내산 100% 양파 원액<br />무첨가 · 무방부제 · 무색소</p>

        <h3 style={{ marginTop: '1rem' }}>✔ 섭취 방법</h3>
        <p>하루 1~2포. 공복 또는 아침 섭취 추천</p>

        <h3 style={{ marginTop: '1rem' }}>✔ 배송 안내</h3>
        <p>스탠딩 팩 포장 / 아이스박스 발송</p>
      </section>

      {/* ✅ 가격 + 수량 + 주문 */}
      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          가격: {product.price.toLocaleString()}원
        </p>

        <label style={{ marginRight: '1rem' }}>
          수량:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            style={{ marginLeft: '0.5rem', width: '60px' }}
          />
        </label>

        <button
          onClick={handleOrder}
          style={{
            padding: '0.6rem 1.5rem',
            backgroundColor: '#00704a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            marginLeft: '1rem',
            cursor: 'pointer'
          }}
        >
          주문하기
        </button>
      </section>
    </div>
  );
};

export default ProductDetailPage;
