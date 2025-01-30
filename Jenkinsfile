pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/wwwser11/cypress-e2e-automationexercise.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'export PATH=$PATH:/usr/local/bin/npm && npm install'
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --browser chrome'
            }
        }
        stage('Publish Reports') {
            steps {
                junit 'cypress/reports/junit/*.xml'
                archiveArtifacts artifacts: 'cypress/screenshots/**/*', fingerprint: true
            }
        }
    }
}