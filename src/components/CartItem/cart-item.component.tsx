import {
  Button, CardActions, Card, CardContent, Typography,
} from '@mui/material';
import { ICartItemProps } from './cart-item.types';
import { CardItem, Title } from './cart-item.styles.js';

export function CartItem({ item }: ICartItemProps) {
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
        <Button size="small">Delete</Button>
      </CardActions>
    </CardItem>
  );
}
