pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/M-Brabu/guess-the-number.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Game project loaded successfully!'
            }
        }
    }
}
