import mongoose from 'mongoose';
import random from 'mongoose-simple-random';

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  text: {
    type: String,
  },
  correct: {
    type: [String],
  },
  incorrect: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
QuestionSchema.plugin(random);

const Question = mongoose.model('Question', QuestionSchema);

export default Question;