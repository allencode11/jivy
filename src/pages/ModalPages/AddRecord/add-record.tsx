import { Modal } from '@mui/material';
import {
  Dispatch, SetStateAction, useState, FormEvent,
} from 'react';
import Swal from 'sweetalert2';
import { ICartItem } from '../../../components/CartItem/cart-item.types';
import { InputData, ModalBox } from './add-record.styles.js';
import { SButton } from '../../HomePage/home-page.styles.js';
import { MiddleText } from '../../../components/CartItem/cart-item.styles.js';

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
    }).then((result) => {
      if (result) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Item has been added',
          showConfirmButton: false,
          timer: 1500,
        });
        setOpen(!open);
      }
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
        <MiddleText>Add new record!</MiddleText>
        <InputData
          value={Name}
          placeholder="name"
          onChange={(event: FormEvent<HTMLInputElement>) => {
            setName(event.currentTarget.value);
          }}
        />
        <InputData
          value={Email}
          placeholder="email"
          onChange={(event: FormEvent<HTMLInputElement>) => {
            setEmail(event.currentTarget.value);
          }}
        />
        <InputData
          value={City}
          placeholder="city"
          onChange={(event: FormEvent<HTMLInputElement>) => {
            setCity(event.currentTarget.value);
          }}
        />
        <InputData
          value={Job}
          placeholder="job"
          onChange={(event: FormEvent<HTMLInputElement>) => {
            setJob(event.currentTarget.value);
          }}
        />
        <InputData
          value={Phone}
          placeholder="phone"
          onChange={(event: FormEvent<HTMLInputElement>) => {
            setPhone(event.currentTarget.value);
          }}
        />
        <SButton onClick={() => {
          try {
            handleSubmit({
              Name,
              Email,
              City,
              Job,
              'Phone Number': Phone,
            });
          } catch (e) {
            console.error();
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        }}
        >
          Submit
        </SButton>
      </ModalBox>
    </Modal>
  );
}
