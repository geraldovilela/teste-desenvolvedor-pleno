import {v4 as uuidV4} from "uuid";
 
class Question {
  id?: string;
  description: string;
  theme: string;
  created_at: Date;
  updated_at?: Date;

  constructor() {
    if(!this.id)
    this.id = uuidV4();
  }

}

export { Question }