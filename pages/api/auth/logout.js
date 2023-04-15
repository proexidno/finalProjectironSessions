import { ironOptions } from "@/ironConfig";
import { withIronSessionApiRoute } from "iron-session/next";

export async function Login(req, res) {
    req.session.destroy()
    res.json({ isLoggedIn: false })
}

export default withIronSessionApiRoute(Login, ironOptions)
