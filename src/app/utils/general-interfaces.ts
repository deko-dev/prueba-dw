// Interface for items in the list of modules in sidenav
export interface NavigationTypeItem {
    id: string;
    name: string;
    path: string;
    icon: string;
    roles: string[];
}

// Interface for roles and permissions 
export interface Profile {
    id: string;
    name: string;
    description: string;
    modules: string[];
}

// Interface for profiles of users
export interface Role {
    id: string;
    name: string;
    description: string;
    profile: Profile
}

// Interface for Aircrafts
export interface Aircraft {
    _id: string;
    code_ref: string;
    name: string;
    cant_passagers: string;
    is_available: string;
    pilot_id: Object;
}

// Interface of Response with data from API
export interface ResponseData<T> {
    status: number;
    message: string;
    data: T;
}

// Interface users of the application
export interface User {
    _id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    rol: string;
    createdAt: Date;
    updatedAt: Date;
}

// Interface for Rentals
export interface Rental {
    _id: string;
    location: string;
    arrival_date: Date;
    departure_date: Date;
    aircraft_id: string;
    pilot_id: string;
    passenger_ids: string[];
}