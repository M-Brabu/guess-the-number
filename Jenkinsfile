pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/M-Brabu/guess-the-number.git'
            }
        }

        stage('Done') {
            steps {
                echo 'Build successful!'
            }
        }
    }
}
