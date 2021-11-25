pipeline {
  agent any 
  tools {nodejs "NodeJS"}
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
        sh 'npm install'
        sh 'npm run build'
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
