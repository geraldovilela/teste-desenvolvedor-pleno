import { Request, Response } from "express"
class CreateQuestionController {
  async handle(request: Request, response: Response) {
    const { description, theme } = request.body;
    console.log(description, theme);
    return response.status(201).send();

  }
}

export { CreateQuestionController }