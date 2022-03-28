import styled from 'styled-components';
import { Container, Input, Box } from '@mui/material';

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const SearchInput = styled(Input)`
  width: 50%;
  padding: 8px;
  font-size: 20px;
  margin: 20px auto;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  boxShadow: 24px;
  min-width: 300px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
