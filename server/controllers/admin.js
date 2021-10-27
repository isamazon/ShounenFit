import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Admin from '../model/admin.js';

export const signinadmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin)
      return res.status(404).json({ message: 'Admin doesnt exist' });

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
  const { email, password, confirmPassword, username } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin)
      return res.status(400).json({ message: 'Admin already exist' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'passwords dont match' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await Admin.create({
      email,
      password: hashedPassword,
      username: username,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update admin
export const updateAdmin = async (req, res) => {
  const { id: _id } = req.params;
  const admin = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No admin with that id');

  const updatedAdmin = await Admin.findByIdAndUpdate(_id, admin, { new: true });

  res.json(updatedAdmin);
};
