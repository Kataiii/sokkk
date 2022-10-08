import { Router } from "@remix-run/router"
import { type } from "os"
import { RouteProps } from "react-router-dom"
import { router } from "./router"

const routesTitleConfig = new Map<string, string>([
    ['home/market', 'Торговая площадка'],
    ['home/social/', 'Друзья'],
    ['home/social/chat', 'Сообщения'],
    ['home/social/find', 'Найти друга'],
    ['home/social/friendКequest', 'Заявки в друзья']
])

export default routesTitleConfig;
