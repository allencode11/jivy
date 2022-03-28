import styled from 'styled-components';
import { Container, Input } from '@mui/material';

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const SearchInput = styled(Input)`
  width: 100%;
  padding: 8px;
  font-size: 20px;
  margin: 20px auto;
`;
