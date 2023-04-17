import styled from 'styled-components';
import { GiCheckMark } from "react-icons/gi";

const Wrapper = styled.div`
  
  h1 {
    text-align: center;
    margin: 30px 0;
    font-size: 3rem;
  }
`;

const ProjectWrapper = styled.div`
  margin: 10px;
  padding: 20px 10px;
  background-color: ${props => props.theme.white};
  border-radius: 16px;
  font-family: 'Dovemayo_gothic', 'Pretendard-Regular', sans-serif;
  text-align: center;

  h2 {
    margin: 10px 0;
    font-size: 1.75rem;
  }

  p {
    margin: 5px 0;
    font-size: 1.25rem;
  }

  hr {
    width: 80%;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  padding: 15px;

  & > * {
    flex: 1;
  }
`;

const TextWrapper = styled.div`
  
`;

const Script = styled.div`
  
`;

const Detail = styled.div`
  
`;

function Project() {
  return (
    <Wrapper>
      <h1>
        Project
      </h1>

      <ul>
        <li>
          <ProjectWrapper>
            <h2>우리 어디서 만나?(Where do we meet?)</h2>
            <ContentsWrapper>
              <img src='' alt='contents-image' />
              <TextWrapper>
                <Script>

                </Script>
                <Detail>

                </Detail>
              </TextWrapper>
            </ContentsWrapper>
          </ProjectWrapper>
        </li>
        <li>
          <ProjectWrapper>
            <h2>Insoo's TODO App</h2>
            <ContentsWrapper>
              <img src='' alt='contents-image' />
              <TextWrapper>
                <Script>

                </Script>
                <Detail>

                </Detail>
              </TextWrapper>
            </ContentsWrapper>
          </ProjectWrapper>
        </li>
        <li>
          <ProjectWrapper>
            <h2>Bessel</h2>
            <ContentsWrapper>
              <img src='' alt='contents-image' />
              <TextWrapper>
                <Script>

                </Script>
                <Detail>

                </Detail>
              </TextWrapper>
            </ContentsWrapper>
          </ProjectWrapper>
        </li>
        <li>
          <ProjectWrapper>
            <h2>Programers Coding Test Practice</h2>
            <ContentsWrapper>
              <img src='' alt='contents-image' />
              <TextWrapper>
                <Script>
                  <p>프로그래머스의 코딩테스트 문제를 풀고 그 해답을 기록하였습니다.</p>
                  <p>알고리즘, 컴퓨팅 사고력 및 문제해결 능력을 키우기 위함.</p>
                </Script>
                <Detail>
                  <ul>
                    <li><GiCheckMark />주요 기능</li>
                    <li><GiCheckMark />Git Hub</li>
                    <li><GiCheckMark />URL</li>
                    <li><GiCheckMark />Skill Usage</li>
                  </ul>
                </Detail>
              </TextWrapper>
            </ContentsWrapper>

          </ProjectWrapper>
        </li>
        <li>
          <ProjectWrapper>
            <h2>Insoo's Portfolio</h2>
            <ContentsWrapper>
              <img src='' alt='contents-image' />
              <TextWrapper>
                <Script>
                  <p>포트폴리오 용도로 제작한 웹앱입니다.</p>
                  <p>React와 Styled-Component를 사용하였습니다.</p>
                  <p>Netlify를 사용해 배포하였습니다.</p>
                </Script>
                <Detail>

                </Detail>
              </TextWrapper>
            </ContentsWrapper>
          </ProjectWrapper>
        </li>
      </ul>

    </Wrapper>
  );
}

export default Project;