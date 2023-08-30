import useNoticias from "../hooks/useNoticiasProvider"
import { Card,
  Box,
  CardActions,
  CardContent, 
  CardMedia, 
  Link, 
  Typography,
  Grid, 
  Button} 
from "@mui/material"
import { determinarImgCategoria } from "../helpers"


const Noticia = ({noticia}) => {
    const { categoria } =  useNoticias()
    const imgUrl = determinarImgCategoria(categoria)
    const { url, title, description, author } = noticia
    return (
      <Grid item md={6} lg={4}>
          <Box>
              <Card 
                variant="outlined"
              >
                  <CardMedia
                    sx={{ width:"250px",
                          margin:"auto"}}
                    image={imgUrl}
                    component="img"
                  />
                  <CardContent>
                      <Typography
                        variant="body1"
                        color={"secondary"}
                      >
                        {author}
                      </Typography>

                      <Typography
                        variant="h5"
                        component={"div"}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component={"div"}
                      >
                        {description}
                      </Typography>
                  <CardActions
                    sx={{
                      display:"flex",
                      alignItems:"center",
                      marginTop:"auto"
                    }}
                  >
                    <Button 
                      target="_blank"
                      variant="outlined"
                      color="secondary"
                      href={url}
                      fullWidth
                      
                    >
                      Leer Noticia
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>     
      </Grid>
    )
}

export default Noticia