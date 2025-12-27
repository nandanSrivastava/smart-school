const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Mock database for now
const users = [];

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

exports.register = async (req, res) => {
    const { email, password, role } = req.body;

    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if user exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now(), email, password: hashedPassword, role: role || 'student' };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, SECRET_KEY, {
        expiresIn: '1h',
    });

    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
};
