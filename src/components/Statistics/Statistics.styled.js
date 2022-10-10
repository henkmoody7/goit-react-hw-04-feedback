import styled from 'styled-components';

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
