import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  z-index: 10;
  background-color: ${props => props.theme.white};
  display: flex;
  align-items: center;

  ul {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

function Header() {
  return (
    <Wrapper>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </Wrapper>
  );
}

export default Header;