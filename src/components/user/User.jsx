import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'

import * as TEXT from '../../constants/text'
import './User.css'

export const User = ({ user }) => (
    <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
        <Card>
            <CardMedia
                component="img"
                image={user.avatar_url}
                height='200'
                alt={user.login}
            />
            <CardContent>
                <Typography variant='h5' align='center'>{user.login}</Typography>
                <Typography variant='body2' align='center'>{user.html_url}</Typography>
            </CardContent>
            <CardActions >
                <Button className='button-link' target="_blank" href={user.html_url}> {TEXT.VIEW_PROFILE} <FontAwesomeIcon icon={faExternalLinkAlt} /></Button>
            </CardActions>
        </Card>

    </Grid2>
)

