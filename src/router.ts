import { Router } from 'express';
import { CreateQuestionController } from './controllers/CreateQuestionController';

const createQuestionController = new CreateQuestionController();
const router = Router();

router.post("/questions", createQuestionController.handle )

export { router };