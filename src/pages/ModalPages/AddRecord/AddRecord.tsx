import { Modal } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import Swal from 'sweetalert2';
import { ICartItem } from '../../../components/CartItem/cart-item.types';
import { InputData, ModalBox } from './add-record.styles.js';
import { SButton } from '../../HomePage/HomePage.styles.js';
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
          title: 'Item has been deleted',
          showConfirmButton: false,
          timer: 1500,
        });
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
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => {
            setName(event.target.value);
          }}
        />
        <InputData
          value={Email}
          placeholder="email"
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => {
            setEmail(event.target.value);
          }}
        />
        <InputData
          value={City}
          placeholder="city"
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => {
            setCity(event.target.value);
          }}
        />
        <InputData
          value={Job}
          placeholder="job"
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => {
            setJob(event.target.value);
          }}
        />
        <InputData
          value={Phone}
          placeholder="phone"
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => {
            setPhone(event.target.value);
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
