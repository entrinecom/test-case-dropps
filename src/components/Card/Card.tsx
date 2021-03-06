import { FC } from 'react';
import { default as MuiCard } from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '../Link';
import { DataTypeProps } from '../../types';

type CardTypeProps = {
  heading: string;
  data: DataTypeProps;
};

export const Card: FC<CardTypeProps> = ({ heading, data }) => {
  const { title = '', image = null, summary = '' } = data;
  return (
    <MuiCard sx={{ border: 0, boxShadow: 'none' }}>
      <Box sx={{ paddingTop: '1.3rem', marginBottom: '2.2rem' }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: '1.4rem',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          {heading}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {image && (
          <CardMedia
            component="img"
            sx={{
              width: 72,
              height: 72,
              flex: '0 1 72',
            }}
            image={image}
            alt=""
          />
        )}
        <Box
          sx={{
            paddingLeft: '1.6rem',
            flex: '1 1 auto',
          }}
        >
          {summary}
        </Box>
      </Box>

      <Box sx={{ paddingTop: '1.3rem' }}>
        <Link styles={{ textDecoration: 'none' }} href="/">
          {title}
        </Link>
      </Box>
    </MuiCard>
  );
};
