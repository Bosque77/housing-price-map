export interface House {
    home_id?: number;
    street: string;
    zip: string;
    sq_ft: number;
    num_of_bed: number;
    num_of_bath: number;
    year_built: number;
    lat: number;
    lng: number;
    city: string;
}

export interface City {
    city_id?: number;
    city_name: string;
    state: string;
}

export interface Region {
    region_id?: number,
    region_name: string,
    region_description: string
}