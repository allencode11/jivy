import { Box } from '@mui/material';
import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { HomeContainer, SearchInput } from './HomePage.styles.js';
import { CartItem } from '../../components/CartItem/cart-item.component';
import { ICartItem } from '../../components/CartItem/cart-item.types';

function fetchData(setApiData: Dispatch<SetStateAction<Array<ICartItem>>>) {
  return fetch('https://retoolapi.dev/geeOvB/data')
    .then((response) => response.json())
    .then((data) => setApiData(data));
}

export function HomePage() {
  const [apiData, setApiData] = useState<Array<ICartItem>>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchData(setApiData);
  }, [apiData]);

  return (
    <HomeContainer>
      <Box>
        <SearchInput
          value={searchValue}
          onChange={(e: any) => {
            setSearchValue(e.target.value);
          }}
        />
      </Box>
      <Box>
        {
          apiData && apiData.map((item: ICartItem) => {
            console.log(item);
            return (
              <CartItem key={item.id} item={item} />
            );
          })
        }
      </Box>
    </HomeContainer>
  );
}
