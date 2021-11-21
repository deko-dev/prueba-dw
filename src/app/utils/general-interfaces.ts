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