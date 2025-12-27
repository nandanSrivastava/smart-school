
const authService = require('./auth.service');

exports.register = async (req, res, next) => {
    try {
        const { email, password, role, name } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({ message: 'Name, Email and password are required' });
        }
        await authService.registerUser(email, password, role, name);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);
        res.json(result);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
