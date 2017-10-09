Working query in graphiql

mutation addQuestion($text: String, $correctAnswers: [String]!, $answers: [String]!) {
  addQuestion(text: $text, correctAnswers: $correctAnswers , answers: $answers ) {
    text
  }
}


query variables

{
  "text": "What was the first AWS Service?",
  "correctAnswers": ["SQS"],
  "answers": ["EC2", "S3", "SQS", "Lambda"]
}
