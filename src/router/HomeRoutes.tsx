import { DeckList } from "../components/pages/deck/DeckList"
import { Home } from "../components/pages/home/Home"
import { UserData } from "../components/pages/home/UserData"

export const homeRoutes = 
[
    {
        path: "/",
        exact: true,
        children: <Home />
    },
    {
        path: "/userData",
        exact: false,
        children: <UserData />
    },
    {
        path: "/decks",
        exact: false,
        children: <DeckList />
    },
];