import axios from 'axios';
import BreweryInfo from './interfaces/BreweryInfo';
import BreweryRequest from './interfaces/BreweryRequest';

const url = 'https://api.openbrewerydb.org/breweries?';

export const fetchBreweries = async (request?: BreweryRequest): Promise<BreweryInfo[]> => {
    let changeableUrl = url;

    if(request) {
        const params = buildQueryParams(request);
        changeableUrl = `${changeableUrl}${params}`;
    }

    try {
        const response = await axios.get<BreweryInfo[]>(changeableUrl);
        return response.data;
    } catch(error) {
        throw new Error(error);
    }
}

const buildQueryParams = (request: any): string => {
    let params = new URLSearchParams();
    Object.keys(request).forEach(key => params.append(key, request[key]));
    return params.toString();
}