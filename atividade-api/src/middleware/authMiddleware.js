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

    try {
        req.user = jwt.verify(token, "maça-do-amor");
        // caso o token seja válido
        return next();
    } catch (error) {
        return res.status(401).json({
            msg: "Token inválido ou expirado"
        })
    }
}