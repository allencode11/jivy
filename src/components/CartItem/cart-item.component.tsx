import {
  Button, CardActions, CardContent, Typography,
} from '@mui/material';
import { ICartItemProps } from './cart-item.types';
import { CardItem, Title } from './cart-item.styles.js';

export function CartItem({ item }: ICartItemProps) {
  const handleDelete = (id: string | number) => {
    fetch(`https://retoolapi.dev/geeOvB/data?id=${id}`, { method: 'DELETE' });
  };

  return (
    <CardItem>
      <CardContent>
        <Title color="text.secondary" gutterBottom>
          {item?.Name}
        </Title>
        <Typography variant="h5" component="div">
          {item?.Job}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item?.City}
        </Typography>
        <Typography variant="body2">
          {item?.Email}
        </Typography>
        <Typography variant="body2">
          {item?.['Phone Number']}
        </Typography>
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
