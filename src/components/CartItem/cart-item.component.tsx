import { CardContent } from '@mui/material';
import Swal from 'sweetalert2';
import { ICartItemProps } from './cart-item.types';
import {
  CardItem, Title, SmallText, MiddleText, BoxFlex,
} from './cart-item.styles.js';
import { SButton } from '../../pages/HomePage/HomePage.styles.js';

export function CartItem({ item }: ICartItemProps) {
  const handleDelete = (id: string | number) => {
    fetch(`https://retoolapi.dev/geeOvB/data?id=${id}`, { method: 'DELETE' });
  };

  return (
    <CardItem>
      <CardContent>
        <Title>
          {item?.Name}
        </Title>
        <BoxFlex>
          <div>
            <MiddleText variant="h5" component="div">
              {item?.Job}
            </MiddleText>
            <SmallText sx={{ mb: 1.5 }} color="text.secondary">
              {item?.City}
            </SmallText>
          </div>
          <div>
            <MiddleText>
              {item?.Email}
            </MiddleText>
            <SmallText>
              {item?.['Phone Number']}
            </SmallText>
          </div>
        </BoxFlex>
        <SButton
          onClick={() => {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#011638',
              cancelButtonColor: '#011638',
              confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
              try {
                console.log(item.id);
                handleDelete(item.id);
                if (result.isConfirmed) {
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item has been deleted',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              } catch (e) {
                console.log(e);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                });
              }
            });
          }}
        >
          Delete
        </SButton>
      </CardContent>
    </CardItem>
  );
}
