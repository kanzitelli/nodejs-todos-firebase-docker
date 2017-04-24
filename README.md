# todo-list app

`todo-list app` is a RESTful web service that runs in docker container.
[Presentation link](https://docs.google.com/presentation/d/1DxLB03urxXP9DB9vwteOqBaM_5p5vGuUSDMyHv7_Fyg/edit?usp=sharing)

# Stack of technologies

NodeJS (express.js) + Docker + Firebase + React Native

# Installation

1. Type in CMD to clone this app: `git clone https://github.com/kanzitelli/nodejs-todos-firebase-docker.git`
2. Install node modules: `cd nodejs-todos-firebase-docker && npm i`
3. Build a docker image: `docker build -t nodejs-todos-firebase-docker .` (do not forget about `.` in the end of the command)
4. Check if a docker image was created: `docker images`
5. Run a docker container: `docker run -p 49160:80 -d nodejs-todos-firebase-docker`
6. Make sure that created container is running: `docker ps`
7. Check if our web-app is running: `curl -i localhost:49160/todos`

# Usage

This app was deployed to Docker Cloud in order to create a React Native app that is going to be a front-end part of this project. If you would like to check if it is running, go to [this site](http://lb.nodejsappstack.13d9f42b.svc.dockerapp.io/todos) and it will display all todos in JSON format.
![JSON result](https://www.dropbox.com/s/ul81omzp7oduic4/assignment%235_json.png?dl=1)

Code for the React Native app is located [here](https://snack.expo.io/Bysp66s0l).
![React Native app](https://www.dropbox.com/s/ae2mkpb6pcxjhkg/assignment%235_rn_pic.png?dl=1)
