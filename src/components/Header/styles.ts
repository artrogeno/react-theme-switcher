import styled from "styled-components";

// 95985f
// 8A8059
// 5A895F
// 444B43

// 143109
// AAAE7F
// D0D6B3
// F7F7F7
// EFEFEF

export const Container = styled.div`
  height: 4rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;
