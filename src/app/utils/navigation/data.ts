import { NavigationTypeItem } from "../general-interfaces";

// Constant for the list of modules in sidenav
export const Navigation: NavigationTypeItem[] = [
    {
        id: "account",
        name: "Account",
        path: "account",
        icon: "account_circle",
        roles: ["admin", "user"]
    },
    {
        id: "roles_&_profiles",
        name: "Roles",
        path: "roles",
        icon: "engineering",
        roles: ["admin"]
    },
    {
        id: "aircrafts",
        name: "Aeronaves",
        path: "aircrafts",
        icon: "rocket",
        roles: ["admin"]
    },
]