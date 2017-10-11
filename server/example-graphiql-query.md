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

mutation

mutation addQuestion($text: String, $correctAnswers: [String]!, $answers: [String]!, $service: Service, $developerAssociate: Boolean, $solutionsArchitectAssociate: Boolean, $sysOpsAssociate: Boolean) {
  addQuestion(text: $text, correctAnswers: $correctAnswers , answers: $answers, service: $service, developerAssociate: $developerAssociate, solutionsArchitectAssociate: $solutionsArchitectAssociate, sysOpsAssociate: $sysOpsAssociate ) {
    text
    answers
    correctAnswers
    service
  	developerAssociate
  	solutionsArchitectAssociate
    sysOpsAssociate
  }
}


{
  "text": "True or False: SQS was the first AWS Service",
  "correctAnswers": [
    "True"
  ],
  "answers": [
    "True",
    "False"
  ],
  "service": "SQS",
  "developerAssociate": true,
  "solutionsArchitectAssociate": true,
  "sysOpsAssociate": true
}





{
  questions {
    text
    answers
    correctAnswers
  }
}


{
  questions(service: "SQS", test: "developerAssociate") {
    text
    answers
    correctAnswers
    service
  	developerAssociate
  	solutionsArchitectAssociate
    sysOpsAssociate
  }
}
