import { ironOptions } from "@/ironConfig";
import { withIronSessionApiRoute } from "iron-session/next";


export async function Login(req, res) {
    const { email, login, password } = typeof req.body === "string" ? JSON.parse(req.body) : req.body
    console.log(email, login, password);

    // db 

    const user = { isLoggedIn: true, login }
    req.session.user = user
    await req.session.save();

    res.json(user)
}

export default withIronSessionApiRoute(Login, ironOptions)
