import {
  Button, CardActions, CardContent,
} from '@mui/material';
import { ICartItemProps } from './cart-item.types';
import {
  CardItem, Title, SmallText, MiddleText, BoxFlex,
} from './cart-item.styles.js';

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
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            console.log(item.id);
            handleDelete(item.id);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </CardItem>
  );
}
