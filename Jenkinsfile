pipeline{
    agent any
    tools {nodejs "jenkins-nodejs"}
    triggers {
        gitlab(triggerOnPush: true, triggerOnMergeRequest: true, branchFilterType: 'All')
    }
    options {
      gitLabConnection('gitlab-trebol')
      gitlabCommitStatus(name: 'jenkins')
      gitlabBuilds(builds: ['checkout', 'install modules', 'test', 'code quality','build','SonarQube analysis','Docker and Nexus','Deploy'])
    }
    stages {
        stage ('checkout'){
            steps{
                gitlabCommitStatus(name: 'checkout') {
                    echo 'Pulling...' + env.BRANCH_NAME
                    checkout scm
                }
            }
        }
        stage ('install modules'){
            steps{
                gitlabCommitStatus(name: 'install modules') {
                     sh 'npm install --verbose -d'
                }
            }
        }
        stage ('test'){
            steps{
                 gitlabCommitStatus(name: 'test') {
                    echo 'running tests...'
                    //sh 'npm run test'
                 }
            }
            post {
                always {
                     echo 'ejecutando fichero de pruebas unitarias'
                    //junit "**/junit-report.xml"
                }
            }
        }
        stage ('code quality'){
            steps{
                 gitlabCommitStatus(name: 'code quality') {
                      echo 'lint code...'
                      //sh '$(npm bin)/ng lint'
                 }
               
            }
        }
        stage ('build') {
            steps{
                 gitlabCommitStatus(name: 'build') {
                    //sh 'npm run-script prod'
                 }
                
            }
        }
        stage('SonarQube analysis') {
            steps {
                  gitlabCommitStatus(name: 'SonarQube analysis') {
                      script{
                        def scannerHome = tool 'sonar-scanner';
                        withSonarQubeEnv('Sonar Desarrollo') {
                            sh "${scannerHome}/bin/sonar-scanner"
                        }
                    }
                }
            }
        }
        stage ('Docker and Nexus') {
         when {
                branch 'patch-1'
            }
            steps{
                 gitlabCommitStatus(name: 'Docker and Nexus') {
                        echo "Deploying on develop environment..."
                        sh 'docker image build -t api-aranceles .'
                        sh "docker tag api-aranceles $NEXUS_REPOSITORY_URL_DEV/api-aranceles"
                        sh "docker push $NEXUS_REPOSITORY_URL_DEV/api-aranceles"
                 }
                    
            }
        }
        stage ('Deploy') {
          when {
                branch 'patch-1'
            }
            steps{
                  gitlabCommitStatus(name: 'Deploy') {
                      sh 'kubectl delete -f kubernetes-deployment.yaml  --ignore-not-found=true'
                      sh "kubectl apply -f kubernetes-deployment.yaml"
                  }
            }
        }
    }
    post {
        always { 
            cleanWs()
        }
        success {
            echo 'Finalizado con exito'
            updateGitlabCommitStatus(name: 'Jenkins', state: 'success')
            slackSend (channel: '#cca-mgss',
                    color: 'good',
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            )
        }
        unstable {
            echo 'Algun paso del pipeline ha fallado.'
            updateGitlabCommitStatus(name: 'Jenkins', state: 'failed')
            slackSend (channel: '#cca-mgss',
                    color: 'bad',
                    message: "*${currentBuild.currentResult}:*  Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            )
        }
        failure {
            echo 'El pipeline ha fallado.'
            updateGitlabCommitStatus(name: 'Jenkins', state: 'failed')
             slackSend (channel: '#cca-mgss',
                    color: 'bad',
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            )
        }
        aborted {
            echo 'Algo ha cambiado en el repositorio.'
            updateGitlabCommitStatus(name: 'Jenkins', state: 'canceled')
             slackSend (channel: '#cca-mgss',
                    color: 'bad',
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            )
        }
    }
}