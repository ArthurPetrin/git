import { createGlobalStyle } from 'styled-components';
//é uma função para aplicar estilos globais em toda a aplicação, sem as restrições de escopo
const globalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
`;
export default globalStyle;
