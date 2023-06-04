import { Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ReturnButtonProps {
  text: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ text }) => {
    const navigate = useNavigate();
  return (
    <React.Fragment>
        <Button sx={{marginTop: 1}} onClick={()=>navigate('/')}><KeyboardBackspaceIcon/>{text}</Button>
    </React.Fragment>
  );
};

export default ReturnButton;
