import User from '../models/user';

const index = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const create = async (req, res) => {
  try {
    const data = await new User(req.body).save();
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const show = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const update = async (req, res) => {
  try {
    const data = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const destroy = async (req, res) => {
  try {
    const data = await User.deleteOne({ _id: req.params.id });
    res.status(204).json(data);
  } catch (err) {
    console.error(err);
  }
};

export { index, create, show, update, destroy };
