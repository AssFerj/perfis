import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
    title: string
    description: string
    btnTitle: string
    image: string
    altImage: string
    onClickFunction?: ()=> void;
}

const MediaCard: React.FC<MediaCardProps> = ({title, description, btnTitle, image, altImage, onClickFunction}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={altImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClickFunction}>{btnTitle}</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export default MediaCard;