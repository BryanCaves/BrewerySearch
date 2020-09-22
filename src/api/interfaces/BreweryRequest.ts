export default interface BreweryRequest {
    by_city?: string;
    by_name?: string;
    by_state?: string;
    by_postal?: string
    by_type?: string;
    page?: number;
    per_page?: number,
}