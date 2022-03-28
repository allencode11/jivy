import { Box, Typography } from '@mui/material';
import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { HomeContainer, SearchInput } from './HomePage.styles.js';
import { CartItem } from '../../components/CartItem/cart-item.component';
import { ICartItem } from '../../components/CartItem/cart-item.types';

function fetchData(setApiData: Dispatch<SetStateAction<Array<ICartItem>>>, search?: string) {
  let url = 'https://retoolapi.dev/geeOvB/data';
  if (search !== '') { url += `?Name=${search}`; }
  return fetch(url)
    .then((response) => response.json())
    .then((data) => setApiData(data));
}

export function HomePage() {
  const [apiData, setApiData] = useState<Array<ICartItem>>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchData(setApiData, searchValue);
  }, [searchValue]);

  return (
    <HomeContainer>
      <Box>
        <SearchInput
          value={searchValue}
          placeholder="Search..."
          onChange={(e: any) => {
            setSearchValue(e.target.value);
          }}
        />
      </Box>
      <Box>
        {
          apiData.length ? apiData.map((item: ICartItem) => (
            <CartItem key={item.id} item={item} />
          ))
            : <Typography>No items were found!</Typography>
        }
      </Box>
    </HomeContainer>
  );
}
