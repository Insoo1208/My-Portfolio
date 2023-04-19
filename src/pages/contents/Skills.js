import styled from 'styled-components';

const Wrapper = styled.div`
  
  h1 {
    text-align: center;
    margin: 30px 0;
    font-size: 3rem;
  }

  .main-list {
    padding: 20px 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    font-family: 'Dovemayo_gothic', 'Pretendard-Regular', sans-serif;

    h2 {
      font-size: 1.5rem;
      margin: 15px 0;
    }
  }

  .sub-list {
    li {
      font-size: 1.25rem;
      margin: 10px 0;
    }
  }
`;

function Skills() {
  return (
    <Wrapper id='skills'>
      <h1>
        Skills
      </h1>

      <ul className='main-list'>
        <li>
          <h2>Frontend</h2>
          <ul className='sub-list'>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6)</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Axios</li>
            <li>Redux</li>
            <li>RESTful API</li>
            <li>Bootstrap</li>
            <li>Styled-Components</li>
          </ul>
        </li>

        <li>
          <h2>Backend</h2>
          <ul className='sub-list'>
            <li>FireBase</li>
          </ul>
        </li>

        <li>
          <h2>Deployment</h2>
          <ul className='sub-list'>
            <li>Netlify</li>
          </ul>
        </li>

        <li>
          <h2>Version Control</h2>
          <ul className='sub-list'>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Skills;