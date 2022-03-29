import { Box } from '@mui/material';
import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import {
  HomeContainer, SearchInput, BoxContainer, SButton, Message,
} from './home-page.styles.js';
import { CartItem } from '../../components/CartItem/cart-item.component';
import { ICartItem } from '../../components/CartItem/cart-item.types';
import { AddRecord } from '../ModalPages/AddRecord/add-record';
import './Loader.css';

function fetchData(setApiData: Dispatch<SetStateAction<Array<ICartItem>>>, search?: string) {
  let url = 'https://retoolapi.dev/geeOvB/data';
  if (search !== '') { url += `?Name=${search}`; }
  return fetch(url)
    .then((response) => response.json())
    .then((data) => setApiData(data));
}

export function HomePage() {
  const [apiData, setApiData] = useState<Array<ICartItem>>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchData(setApiData, searchValue);
  }, [searchValue]);

  return (
    <HomeContainer>
      <BoxContainer>
        <SearchInput
          value={searchValue}
          placeholder="Search..."
          onChange={(e: any) => {
            setSearchValue(e.target.value);
          }}
        />
        <SButton onClick={() => setOpen(!open)}>Add data</SButton>
      </BoxContainer>
      <Box>
        {
          // eslint-disable-next-line no-nested-ternary
          apiData.length ? apiData.map((item: ICartItem) => (
            <CartItem key={item.id} item={item} />
          ))
            : searchValue === ''
              ? (
                <div className="lds-roller">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              )
              : (<Message>No items were found!</Message>)
        }
      </Box>
      <AddRecord
        open={open}
        setOpen={setOpen}
      />
    </HomeContainer>
  );
}
