// node {
//    def commit_id
//    stage('Preparation') {
//      checkout scm
//      sh "git rev-parse --short HEAD > .git/commit-id"                        
//      commit_id = readFile('.git/commit-id').trim()
//    }
//    stage('test') {
//      nodejs(nodeJSInstallationName: 'NodeJS') {
//        sh 'npm install --only=dev'
//        echo 'Testing..'
//      }
//    }
// }
pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}