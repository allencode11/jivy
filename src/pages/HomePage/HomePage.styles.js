import styled from 'styled-components';
import { Container, Input, Box, Button, Typography } from '@mui/material';

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
  color: #011638;
`;

export const SButton = styled(Button)`
  width: 175px;
  height: 35px;
  padding: 8px;
  font-size: 20px;
  margin-top: 10px !important;
  color: white !important;
  background-color: #011638 !important;
`;

export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #011638;
  border-radius: 10px;
  background-color: whitesmoke;
  boxShadow: 24px;
  min-width: 300px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled(Typography)`
  font-size: 25px !important;
  margin-top: 10px !important;
  color: #011638 !important;
`;
