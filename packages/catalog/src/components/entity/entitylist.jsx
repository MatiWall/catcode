import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const EntityList = ({
    title
}) => {

    return (
        <Paper>
            <Typography variant="h1">
                {title}
            </Typography>
            {entities}
        </Paper>
    )

}

export default EntityList;