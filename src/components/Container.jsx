import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;
`;

export default Container;
