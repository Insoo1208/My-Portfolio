import styled from 'styled-components';
import { GiCheckMark } from "react-icons/gi";
import { FiLink } from "react-icons/fi";

import besselMain from "../../images/BesselMain.png";
import Programmers from "../../images/Programmers.png";
import wheredowemeet from "../../images/Wheredowemeet.jpg";
import mytodo from "../../images/mytodo.jpg";
import portfolio from "../../images/portfolio.jpg";

const Wrapper = styled.div`
  
  h1 {
    text-align: center;
    margin: 30px 0;
    font-size: 3rem;
  }
`;

const ProjectWrapper = styled.div`
  margin: 30px 10px;
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

const ImgWrapper = styled.div`
  padding: 15px;
  
  img {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Script = styled.div`
  padding: 15px;

  p {
    margin: 10px 0;
  }
`;

const Detail = styled.div`
  
  li {
    display: flex;
    margin: 8px 0;

    & > * {
      text-align: left;
      padding-left: 15px;

      &:first-child {
        width: 30%;
      }

      &:last-child {
        flex: 1;
      }
    }
  }

  svg {
    font-size: .8rem;
    margin-right: 5px;
  }
`;

function Project() {
  return (
    <Wrapper id='project'>
      <h1>
        Project
      </h1>

      <ul>
        <li>
          <ProjectWrapper>
            <h2>우리 어디서 만나?(Where do we meet?)</h2>
            <ContentsWrapper>
              <ImgWrapper>
                <img src={wheredowemeet} alt='contents-image' />
              </ImgWrapper>
              <TextWrapper>
                <Script>
                  <p>친구와 약속장소를 쉽고 간편하게 정하기 위해 만든 웹앱입니다.</p>
                  <p>기획부터 제작, 배포까지 모두 참여한 최초의 팀 프로젝트입니다. 이 프로젝트에서 팀장 역할을 맡았습니다.</p>
                  <p>팀원들과 작업을 하면서, 의견을 조율하고 기술들을 서로 공유하며 작업했습니다.</p>
                  <p>기본적으로 Kakao API를 사용하였으며, api를 그대로 사용하지 않고 구조를 재구성하였습니다. 이 과정에서 비동기작업, rest api 사용 등 많은 기술들을 사용하고 배웠습니다.</p>
                  <p>현재는 프론트엔드 부분만 작업했지만, 스터디 활동으로 FireBase와 연동해서 백엔드 작업까지 배우며 작업중입니다.</p>
                </Script>
                <Detail>
                  <ul>
                    <li>
                      <div><GiCheckMark />주요 기능</div>
                      <div>본인과 상대방의 중간 거리를 계산하여 주변 카페를 지도에 출력,<br />로그인 및 회원가입,<br />게시판 기능 등</div>
                    </li>
                    <li>
                      <div><GiCheckMark />Git Hub</div>
                      <div><a href='https://github.com/Insoo1208/where_do_we_meet' target='_blank'><FiLink />github.com/Insoo1208/where_do_we_meet</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Page URL</div>
                      <div><a href='https://wheredowemeet.netlify.app' target='_blank'><FiLink />wheredowemeet.netlify.app</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Skills</div>
                      <div>React, Redux, Styled-Components, Axios, Kakao map API, DAUM 주소 API, Restful API, </div>
                    </li>
                  </ul>
                </Detail>
              </TextWrapper>
            </ContentsWrapper>
          </ProjectWrapper>
        </li>
        <li>
          <ProjectWrapper>
            <h2>Insoo's TODO App</h2>
            <ContentsWrapper>
              <ImgWrapper>
                <img src={mytodo} alt='contents-image' />
              </ImgWrapper>
              <TextWrapper>
                <Script>
                  <p>기본적인 CRUD기능을 익히기 위한 Todo APP입니다.</p>
                  <p>React를 활용하여 만들어졌으며, Styled-Compoenets로 스타일링 되었습니다.</p>
                  <p>Web Storage를 사용하여 Local Storage에 일정들을 저장하게 하였습니다.</p>
                </Script>
                <Detail>
                  <ul>
                    <li>
                      <div><GiCheckMark />주요 기능</div>
                      <div>CRUD기능을 갖춘 기본적인 TODO APP입니다.</div>
                    </li>
                    <li>
                      <div><GiCheckMark />Git Hub</div>
                      <div><a href='https://github.com/Insoo1208/where_do_we_meet' target='_blank'><FiLink />github.com/Insoo1208/My_React_Todo_APP</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Page URL</div>
                      <div><a href='https://insoo-todo.netlify.app' target='_blank'><FiLink />insoo-todo.netlify.app</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Skills</div>
                      <div>React, Framer Motion</div>
                    </li>
                  </ul>
                </Detail>
              </TextWrapper>
            </ContentsWrapper>
          </ProjectWrapper>
        </li>
        <li>
          <ProjectWrapper>
            <h2>Bessel</h2>
            <ContentsWrapper>
              <ImgWrapper>
                <img src={besselMain} alt='contents-image' />
              </ImgWrapper>
              <TextWrapper>
                <Script>
                  <p>HTML, CSS, JavaScript만을 이용한 웹앱입니다.</p>
                  <p>베스트셀러 정보들을 쉽게 파악하기 위해 만들어졌습니다. 카카오 도서 API를 이용해 간단한 검색기능을 추가하였습니다.</p>
                  <p>저의 첫 개인 프로젝트이자, 퍼블리싱 프로젝트입니다.</p>
                </Script>
                <Detail>
                  <ul>
                    <li>
                      <div><GiCheckMark />주요 기능</div>
                      <div>카카오 API를 이용한 도서 검색</div>
                    </li>
                    <li>
                      <div><GiCheckMark />Git Hub</div>
                      <div><a href='https://github.com/Insoo1208/Bessel' target='_blank'><FiLink />github.com/Insoo1208/Bessel</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Page URL</div>
                      <div><a href='https://bessel.netlify.app' target='_blank'><FiLink />bessel.netlify.app</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Skills</div>
                      <div>HTML, CSS, JavaScript, Rest API</div>
                    </li>
                  </ul>
                </Detail>
              </TextWrapper>
            </ContentsWrapper>
          </ProjectWrapper>
        </li>
        <li>
          <ProjectWrapper>
            <h2>Programmers Coding Test Practice</h2>
            <ContentsWrapper>
              <ImgWrapper>
                <img src={Programmers} alt='contents-image' />
              </ImgWrapper>
              <TextWrapper>
                <Script>
                  <p>프로그래머스의 코딩테스트 문제를 풀고 저의 해답을 기록하였습니다.</p>
                  <p>알고리즘, 컴퓨팅 사고력 및 문제해결 능력을 키우기 위함.</p>
                </Script>
                <Detail>
                  <ul>
                    <li>
                      <div><GiCheckMark />주요 기능</div>
                      <div>코딩테스트 문제들을 풀어보고 분석합니다.</div>
                    </li>
                    <li>
                      <div><GiCheckMark />Git Hub</div>
                      <div className='text-ellipsis'><a href='https://github.com/Insoo1208/ProgrammersSchool_Coding_Test_Practice' target='_blank'><FiLink />github.com/Insoo1208/ProgrammersSchool_Coding_Test_Practice</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Page URL</div>
                      <div>-</div>
                    </li>
                    <li>
                      <div><GiCheckMark />Skills</div>
                      <div>JavaScript</div>
                    </li>
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
              <ImgWrapper>
                <img src={portfolio} alt='contents-image' />
              </ImgWrapper>
              <TextWrapper>
                <Script>
                  <p>포트폴리오 용도로 제작한 웹앱입니다.</p>
                  <p>React와 Styled-Component를 사용하였습니다.</p>
                  <p>Netlify를 사용해 배포하였습니다.</p>
                </Script>
                <Detail>
                  <ul>
                    <li>
                      <div><GiCheckMark />주요 기능</div>
                      <div>간단한 자기소개 및 기술스택 정리,<br /> 프로젝트 모아보기</div>
                    </li>
                    <li>
                      <div><GiCheckMark />Git Hub</div>
                      <div><a href='https://github.com/Insoo1208/My-Portfolio' target='_blank'><FiLink />github.com/Insoo1208/My-Portfolio</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Page URL</div>
                      <div><a href='https://insoo-portfolio.netlify.app' target='_blank'><FiLink />insoo-portfolio.netlify.app</a></div>
                    </li>
                    <li>
                      <div><GiCheckMark />Skills</div>
                      <div>React, Styled-Components</div>
                    </li>
                  </ul>
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