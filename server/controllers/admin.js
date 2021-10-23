import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Admin from '../model/admin.js';

export const signinadmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin)
      return res.status(404).json({ message: 'User doesnt exist' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { email: existingAdmin.email, id: existingAdmin._id },
      'test',
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: existingAdmin, token });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

export const signupadmin = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingAdmin = await User.findOne({ email });

    if (existingAdmin)
      return res.status(400).json({ message: 'User already exist' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'passwords dont match' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName}${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
