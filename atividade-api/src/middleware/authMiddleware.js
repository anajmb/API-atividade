const jwt = require("jsonwebtoken");

export function authenticate(req, res, next) {
    // capturando o token da requisição
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startWith("Bearer ")) {
        return res.status(401).json({
            msg: "Token não encontrado"
        });
    }

    const [bearer, token]= authHeader.split(" ");

}