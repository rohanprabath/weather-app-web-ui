/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:24.11.1-alpine3.23' } }
    stages {
        stage('check node ver') {
            steps {
                sh 'node --version'
            }
        }
        stage('Intall') {
            steps {
                sh 'npm install'
            }
        }
        stage('run') {
            steps {
				sh 'npm run dev'
            }
        }
    }
}