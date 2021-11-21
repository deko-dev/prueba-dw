import { Profile, Role } from "../general-interfaces"

// Constant for the list of Profiles
export const ProfilesList: Profile[] = [
    {
        id: "admin",
        name: "Administrador",
        description: "Administrador del sistema",
        modules: ["roles", "passenger", "aircrafts", "astronaut", 'pilots', 'account']
    },
    {
        id: "user",
        name: "Usuario",
        description: "Usuario del sistema",
        modules: ["passenger", "aircrafts", "astronaut", 'pilots', 'account']
    }
]

// Constant for the list of Roles
export const RolesList: Role[] = [
    {
        id: 'pilot',
        name: "Piloto",
        description: "Piloto de una aeronave",
        profile: ProfilesList[1]
    },
    {
        id: 'passenger',
        name: "Pasajero",
        description: "Pasajero de una aeronave",
        profile: ProfilesList[1]
    },
    {
        id: 'astronaut',
        name: "Astronauta",
        description: "Astronauta de una aeronave",
        profile: ProfilesList[1]
    },
    {
        id: 'admin',
        name: "Administrador",
        description: "Administrador del sistema",
        profile: ProfilesList[0]
    }
]