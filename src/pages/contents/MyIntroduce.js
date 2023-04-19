import styled from 'styled-components';

import profile from "../../images/profile.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: 'Dovemayo_gothic', 'Pretendard-Regular', sans-serif;

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    margin: 7px 0;
  }
`;

const Profile = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  font-weight: 500;

  .text-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const Contents = styled.div`
  padding: 30px 0;
  text-align: center;
`;

function MyIntroduce() {
  return (
    <Wrapper id='introduction'>
      <Profile>
        <img src={profile} alt='Profile-Img'/>
        <div className='text-area'>
          <h1>프론트엔드 개발자</h1>
          <h2>전인수 (Insoo Jeon)</h2>
        </div>
      </Profile>

      <Contents>
        <h3>개발자와 사용자 모두 편리한 코드를 위해서</h3>
        <h3>새로운 기술을 찾아 헤매는..</h3>
      </Contents>
    </Wrapper>
  );
}

export default MyIntroduce;