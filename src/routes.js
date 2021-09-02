import Chat from "./components/Chat";
import LoginForm from "./components/LoginForm";
import { LOGIN_ROUTE, CHAT_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginForm
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]