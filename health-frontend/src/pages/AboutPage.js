import React from 'react';

const AboutPage = () => (
  <div
    style={{
      padding: '4rem 2rem',
      minHeight: '100vh',
      backgroundImage: 'url("/images/imo.gif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      textShadow: '0 0 4px rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: '2rem',
      borderRadius: '10px',
      maxWidth: '600px'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>이모의 건강원 이야기</h2>
      <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
        안녕하세요. 이모의 건강원을 운영하고 있는 1인 운영자입니다.<br /><br />
        제가 직접 땅을 일구고, 작물을 키우고, 정성스럽게 손질해서<br />
        하루하루 수작업으로 제품을 만들어내고 있습니다.<br /><br />
        화학첨가물 없이, 자연 그대로의 건강함을 담아내고 싶었습니다.<br />
        작지만 진심이 담긴 건강원. 믿고 드실 수 있는 제품만을 드리겠습니다.<br /><br />
        감사합니다.
      </p>
    </div>
  </div>
);

export default AboutPage;
