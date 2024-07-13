import { Router } from "express"
import user from "./user"


export default () => {
    const router = Router()
    user(router)
    return router
}