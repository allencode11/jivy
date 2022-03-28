import {
  Button, Input, Modal, Typography,
} from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { ModalBox } from '../../HomePage/HomePage.styles.js';
import { ICartItem } from '../../../components/CartItem/cart-item.types';

interface IAddRecordProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export function AddRecord({ setOpen, open }: IAddRecordProps) {
  const [Name, setName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [City, setCity] = useState<string>('');
  const [Job, setJob] = useState<string>('');
  const [Phone, setPhone] = useState<string>('');

  const handleSubmit = async (user: Omit<ICartItem, 'id' | 'DateCreated'>) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      ...user,
      DateCreated: Date(),
    });

    fetch('https://retoolapi.dev/geeOvB/data', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    });
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox>
        <Typography>Add new record!</Typography>
        <Input
          value={Name}
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          value={Email}
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          value={City}
          placeholder="city"
          onChange={(event) => setCity(event.target.value)}
        />
        <Input
          value={Job}
          placeholder="job"
          onChange={(event) => setJob(event.target.value)}
        />
        <Input
          value={Phone}
          placeholder="phone"
          onChange={(event) => setPhone(event.target.value)}
        />
        <Button onClick={() => {
          handleSubmit({
            Name,
            Email,
            City,
            Job,
            'Phone Number': Phone,
          });
          setOpen(!open);
        }}
        >
          Submit
        </Button>
      </ModalBox>
    </Modal>
  );
}
