import { Grid, Typography, Pagination, Stack } from "@mui/material"
import useNoticias from "../hooks/useNoticiasProvider"
import Noticia from "./Noticia"

const ListadoNoticias = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20)
    return (
        <>
            <Typography
                textAlign={'center'}
                margin={5}
                variant="h3"
                component={'h2'}
                color={'secondary'}
            >
                Últimas Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>
            <Stack spacing={2}>
                <Pagination
                    count={totalPaginas} 
                    color="secondary" 
                    onChange={handleChangePagina}
                    page={pagina}
                    sx={{
                        alignSelf:"center"
                    }}
                />
            </Stack>

        </>
    )
}

export default ListadoNoticias