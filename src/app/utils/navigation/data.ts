import { NavigationTypeItem } from "../general-interfaces";

// Constant for the list of modules in sidenav
export const Navigation: NavigationTypeItem[] = [
    {
        id: "roles_&_profiles",
        name: "Roles",
        path: "roles",
        icon: "engineering",
        roles: ["admin", "pilot", "passenger"]
    },
    {
        id: "aircrafts",
        name: "Aeronaves",
        path: "aircrafts",
        icon: "rocket",
        roles: ["admin", "pilot"]
    },
    {
        id: "pilots",
        name: "Pilotos",
        path: "pilots",
        icon: "perm_identity",
        roles: ["admin", "pilot"]
    },
    {
        id: "passengers",
        name: "Passengers",
        path: "passengers",
        icon: "perm_identity",
        roles: ["admin", "passenger"]
    },
]