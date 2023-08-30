import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography
            marginY={3}
            align='center'
            variant='h3'
            component='h1'
            color="secondary"
            sx={{
              fontWeight:'bold'
            }}
          >
            Buscador de Noticias
          </Typography>
        </header>
        <Grid 
          marginY={3}
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item md={6} xs={10}>
            <Formulario/>
          </Grid>
        </Grid>
      </Container>
      
      <ListadoNoticias/>

    </NoticiasProvider>
  )
}

export default App
