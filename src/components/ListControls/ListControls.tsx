import React from 'react'
import {FormControlLabel, Grid, ListItem, Radio, Typography} from "@material-ui/core";

interface Props {
    filter: string
    setFilter: Function
    count: number
}

const ListControls = (props: Props): JSX.Element => {

    const {filter, setFilter, count} = props;

    return (
        <ListItem>
            <Typography color='textSecondary' >
                Items:{count}
            </Typography>
            <Grid container justify='center' alignContent='center' alignItems='flex-start'>
                <Grid item>
                    <FormControlLabel onClick={() => {setFilter('all')}} control={<Radio checked={filter === 'all'}/>} label="All"/>
                    <FormControlLabel onClick={() => {setFilter('active')}} control={<Radio checked={filter === 'active'}/>} label='Active'/>
                    <FormControlLabel onClick={() => {setFilter('completed')}} control={<Radio checked={filter === 'completed'}/>} label='Completed'/>
                </Grid>
            </Grid>
        </ListItem>
    )
};

export default ListControls