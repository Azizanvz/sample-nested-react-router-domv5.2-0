pipeline {
  agent any 
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
        npm install
        npm run build
      }
    }
    stage("test") {
      steps {
        echo 'testing the application...'
      }
    }
    stage("deploy") {
      steps {
        echo 'deploying the application...'
      }
    }
  }
}