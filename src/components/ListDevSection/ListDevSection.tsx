import { Grid, Box } from '@mui/material';
import React, { useMemo } from 'react';
import { devs } from '../../database/devs';
import MediaCard from '../Card/Card';
import SubTitle1 from '../SubTitle1/SubTitle1';
import Title4 from '../Title4/Title4';
import { useNavigate } from 'react-router-dom';

interface ListDevSectionProps {
  title?: string;
  subTitle?: string;
}

const ListDevSection: React.FC<ListDevSectionProps> = ({ title, subTitle }) => {
  const navigate = useNavigate();

  const listDevs = useMemo(() => {
    return devs.map(d => {
        return (
          <React.Fragment key={d.id}>
            <MediaCard title={d.name} description={d.description} image={d.foto} altImage={d.name} btnTitle='Ver Perfil' onClickFunction={() => navigate(`/perfil-${d.name}`)}/>        
          </React.Fragment>
        );
      });
  },[]);

  return (
    <React.Fragment>
      <Grid container spacing={2} py={10} alignItems={'center'}>
      <Grid  item xs={12}>
        {/* <Title4 text={title}/>
        <SubTitle1 text={subTitle}/> */}
        <Box sx={{marginTop: 5, display: 'flex', flexDirection: 'row' }}>
          {listDevs}
        </Box>
      </Grid>
    </Grid>
    </React.Fragment>
  );
};

export default ListDevSection;
