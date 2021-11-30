pipeline {
    agent { dockerfile true }
    stages {
      stage("build") {
        steps {
          echo 'building the application...'
          sh 'npm install'
          sh 'npm run build'
        }
      }
        stage('Test') {
            steps {
              echo 'testing the application..'
                sh 'node --version'
            }
        }
        stage("deploy") {
      steps {
        echo 'deploying the application...'
      }
    }
    }
}
