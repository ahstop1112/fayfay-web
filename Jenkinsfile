pipeline {
    agent any
    stages {
        stage('Build') {
//            when {
//                anyOf {
//                    branch 'test-jenkins'
//                    branch 'PR-103'
//                }
////                branch 'develop'
//            }
            steps {
                timeout(time:1, unit:'MINUTES') {
                    input message: 'Deploy to test server?', ok: 'Deploy!'
                }

                sh 'printenv'

//                sh 'sed "s/192.168.33.33/127.0.0.1/g" config.json.template > config.json'
                sh 'cp /var/lib/jenkins/apps/web/config.json ${WORKSPACE}'
                sh 'cp /var/lib/jenkins/apps/web/client/js/constants/production.js ${WORKSPACE}/client/js/constants'
                sh '/usr/bin/yarn'
                sh '/usr/bin/yarn build'
                sh '/usr/bin/yarn versioning'
                sh '/usr/bin/yarn cdn'

                // Need to start pm2 on a permanent folder (not a Jenkins workspace which might be deleted)
//                sh 'mkdir -p /var/lib/jenkins/apps/web'
                dir ('/var/lib/jenkins/apps/web') {
                    sh 'ln -sfn ${WORKSPACE} workspace'
                    sh 'cp ${WORKSPACE}/ecosystem.config.js .'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                dir ('/var/lib/jenkins/apps/web') {
                    // JENKINS_NODE_COOKIE is for running a background (server) process in pipeline job
                    sh 'JENKINS_NODE_COOKIE=do_not_kill_me /usr/local/bin/pm2 restart ecosystem.config.js --env production'
                }
            }
        }
    }
    post {
        cleanup {
            echo 'Delete project folders/files older than 3 days'
            sh 'find /var/lib/jenkins/workspace/* -ctime +3 | xargs rm -rf'
        }
    }
}
