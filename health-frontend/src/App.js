// ✅ src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OrderPage from './pages/OrderPage';

// ✅ 불필요한 import 제거
// import HeaderBanner from './components/HeaderBanner'; ← 이 줄 삭제!

// ✅ 헤더 배너 컴포넌트
const navStyle = {
  margin: '0 0.8rem',
  color: '#00704a',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem'
};

const HeaderBanner = () => (
  <div style={{
    backgroundColor: '#fdf3e7',
    padding: '2rem 1rem',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Noto Sans KR, sans-serif'
  }}>
    <h1 style={{ fontSize: '2.5rem', margin: '0', color: '#2c2c2c' }}>이모의 건강원</h1>
    <p style={{ fontSize: '1.1rem', color: '#555', marginTop: '0.5rem' }}>
      직접 재배한 작물로 정성껏 달이는 건강즙, 믿을 수 있는 1인 건강원
    </p>
    <nav style={{ marginTop: '1rem' }}>
      <Link to="/" style={navStyle}>홈</Link>
      <Link to="/about" style={navStyle}>이모의 이야기</Link>
    </nav>
  </div>
);

const FeaturedProducts = () => {
  const featured = [
    {
      id: 1,
      name: '양파즙',
      image: '/images/onion.png',
    },
    {
      id: 2,
      name: '배즙',
      image: '/images/pear.png',
    },
    {
      id: 3,
      name: '흑염소 엑기스',
      image: '/images/goat.png',
    }
  ];

  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#fff9f3' }}>
      <h2 style={{ marginBottom: '2rem', color: '#333' }}>대표 제품</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {featured.map(product => (
          <a key={product.id} href={`/products/${product.id}`} style={{
            display: 'block',
            width: '160px',
            textDecoration: 'none',
            color: '#222',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 0 6px rgba(0,0,0,0.05)',
            padding: '1rem'
          }}>
            <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '120px', // ✅ 고정된 높이
              objectFit: 'cover', // ✅ 이미지 비율 유지하면서 잘림
              borderRadius: '6px'
            }}
          />

            <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{product.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

// ✅ 브랜드 소개 컴포넌트
const BrandIntro = () => (
  <div
    style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundImage: 'url("/images/imofarm.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      textShadow: '0 0 5px rgba(0,0,0,0.7)'
    }}
  >
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>한 사람의 손끝에서 시작된 정성</h2>
    <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
      직접 땀 흘려 키운 작물들을,<br />
      정성껏 손질하고,<br />
      하루하루 마음을 담아 수작업으로 달여냅니다.<br /><br />
      작지만 진심이 담긴 건강원.<br />
      당신의 하루에 자연을 선물하고 싶습니다.
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <HeaderBanner /> {/* ✅ 중복 아님! */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <BrandIntro />
                <FeaturedProducts />
                <ProductListPage />
              </>
            }
          />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
