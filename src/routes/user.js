import { Router } from 'express';

import { index, create, destroy, show, update } from '../controllers/user';

const User = Router();

User.route('/').get(index);
User.route('/').post(create);
User.route('/:id').get(show);
User.route('/:id').put(update);
User.route('/:id').delete(destroy);

export default User;
