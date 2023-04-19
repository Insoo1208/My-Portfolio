import { Link } from "react-scroll";
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

    li {
      cursor: pointer;
    }
  }
`;

function Header() {
  return (
    <Wrapper>
      <ul>
        <li><Link to="home" spy={true} smooth={true}>Home</Link></li>
        <li><Link to="introduction" spy={true} smooth={true} offset={-70}>Introduction</Link></li>
        <li><Link to="skills" spy={true} smooth={true} offset={-70}>Skills</Link></li>
        <li><Link to="project" spy={true} smooth={true} offset={-70}>Project</Link></li>
      </ul>
    </Wrapper>
  );
}

export default Header;