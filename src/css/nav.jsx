import styled from 'styled-components';

export const NavDiv = styled.header`
  .header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 0;
    margin-bottom: 0;
    background-color: #00001a;
  }
  .header h2 {
    font-size: 22px;
  }
  .headerMenu ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  .tlink {
    text-decoration: none;
    color: yellow;
    font-size: 20px;
    text-transform: uppercase;
  }
  .tlink:hover {
    color: white;
  }
`;
