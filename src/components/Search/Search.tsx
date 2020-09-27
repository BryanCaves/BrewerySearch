import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import BreweryRequest from '../../api/OpenBreweryDB/interfaces/BreweryRequest';

import styles from './Search.module.css';

interface SearchProps {
    handleSearchParams: (searchRequest: BreweryRequest) => void;
}

const Name = "Name";
const City = "City";
const State = "State";
const PostalCode = "PostalCode";

const Search= (props: SearchProps) => {
    const [name, setName] = useState<String>('');
    const [city, setCity] = useState<String>('');
    const [state, setState] = useState<String>('');
    const [postalCode, setPostalCode] = useState<String>('');


    const handleSetSearchParam = (e: any) => {
        switch(e.target.name) {
            case Name:
                setName(e.target.value);
                break;
            case City:
                setCity(e.target.value);
                break;
            case State:
                setState(e.target.value);
                break;
            case PostalCode:
                setPostalCode(e.target.value);
                break;
        }
    };

    const createSearchRequest =() => {
        var request = {
            by_city: city,
            by_name: name,
            by_state: state,
            by_postal: postalCode
        } as BreweryRequest;

        props.handleSearchParams(request);
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <TextField id="outlined-basic" name={Name} label="Name" variant="outlined" onChange={e => handleSetSearchParam(e)}/>
            </Grid>
            <Grid item xs={2}>
                <TextField id="outlined-basic" name={City} label="City" variant="outlined" onChange={e => handleSetSearchParam(e)}/>
            </Grid>
            <Grid item xs={2}>
                <TextField id="outlined-basic" name={State} label="State" variant="outlined" onChange={e => handleSetSearchParam(e)}/>
            </Grid>
            <Grid item xs={2}>
                <TextField id="outlined-basic" name={PostalCode} label="Postal Code" variant="outlined" onChange={e => handleSetSearchParam(e)}/>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={createSearchRequest}>
                    Search
                </Button>
            </Grid>
        </Grid>
    );
}

export default Search;