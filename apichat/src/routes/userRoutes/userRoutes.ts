import { Router } from 'express'
import { saveUser } from '../../controllers';

export const userRouter = Router();

userRouter.post('/save',saveUser)