import styled from 'styled-components';

const Wrapper = styled.div`
  & * {
    display: block;
  }
  
  h1 {
    text-align: center;
    margin: 30px 0;
    font-size: 3rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.25rem;
  }
`;

const DetailWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-evenly;
  padding: 20px 0;

  li {
    width: 30%;
    padding: 15px 0;
    background-color: ${props => props.theme.white};
    border-radius: 16px;

    & * {
      font-family: 'Dovemayo_gothic', 'Pretendard-Regular', sans-serif;
      margin: 10px;
    }
  }
`;

function MyProfile() {
  return (
    <Wrapper>
      <h1>
        Introduction
      </h1>

      <DetailWrapper>
        <li>
          <h2>이름</h2>
          <h3>전인수 (Jeon Insoo)</h3>
        </li>

        <li>
          <h2>생년월일</h2>
          <h3>1997. 12. 08</h3>
        </li>

        <li>
          <h2>연락처</h2>
          <h3>010 9289 4206</h3>
        </li>

        <li>
          <h2>이메일</h2>
          <h3>jincupia@gmail.com</h3>
        </li>

        <li>
          <h2>학력</h2>
          <h3>인천대학교 정보통신공학과 (졸업예정)</h3>
        </li>

        <li>
          <h2>기술 스택</h2>
          <h3>React.js, Axios, Redux, etc.</h3>
        </li>
      </DetailWrapper>
    </Wrapper>
  );
}

export default MyProfile;