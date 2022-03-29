import styled from 'styled-components';
import { Typography, Card, Box } from '@mui/material';

export const CardItem = styled(Card)`
  margin-top: 8px !important;
  margin-bottom: 10px !important;
  min-width: 275px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
  border-radius: 15px !important;
`;

export const Title = styled(Typography)`
  font-size: 30px !important;
  text-align: center;
  color: #011638 !important;
`;

export const SmallText = styled(Typography)`
  font-size: 15px !important;
`;

export const MiddleText = styled(Typography)`
  font-size: 20px !important;
`;

export const BoxFlex = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
