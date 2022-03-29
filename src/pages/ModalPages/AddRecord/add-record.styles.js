import { Box, Input } from '@mui/material';
import styled from 'styled-components';

export const InputData = styled(Input)`
  min-width: 300px;
  margin-bottom: 15px;
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
