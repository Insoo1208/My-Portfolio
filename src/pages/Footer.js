import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 0;
  width: 100vw;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.gray300};
  text-align: center;

  p {
    margin: 10px 0;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <p>Insoo's Portfolio</p>
      <p>이 페이지는 PC화면에 최적화되어있습니다.</p>
      <p>{`<Copyright ${new Date().getFullYear()}. Jeon Insoo. All rights reserved.>`}</p>
    </Wrapper>
  );
}

export default Footer;