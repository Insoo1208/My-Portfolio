import styled from "styled-components";
import Header from "./Header";
import MyIntroduce from "./contents/MyIntroduce";
import MyProfile from "./contents/MyProfile";
import Skills from "./contents/Skills";
import Project from "./contents/Project";

const Wrapper = styled.div`
  width: 100vw;
`;

const Inner = styled.div`
  padding-top: 60px;
  width: 75%;
  margin: 0 auto;
`;

function MainPage() {

  return (
    <Wrapper>
      <Header />
      <Inner>
        <MyIntroduce />
        <MyProfile />
        <Skills />
        <Project />
      </Inner>
    </Wrapper>
  );
}

export default MainPage;