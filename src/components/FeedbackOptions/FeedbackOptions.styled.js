import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const Button = styled.button`
  font-family: ${p => p.theme.fonts.monospace};
  width: 120px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
