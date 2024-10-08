import { DeckList } from "../components/pages/deck/DeckList";
import { Home } from "../components/pages/home/Home";
import { UserData } from "../components/pages/home/UserData";

export const routers = [
    {
        path: "/home", 
        element: <Home />
    },
    {
        path: "/userData",
        element: <UserData />
    },
    {
        path: "/decks", 
        element: <DeckList />
    }
];