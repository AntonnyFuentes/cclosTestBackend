<img src="https://cclos-assets.s3.us-east-1.amazonaws.com/images/Logo%20credit.png" alt="CCLOS Logo" width="200"/>

# cclosTestBackend

## Table of contents
* [General info](#general-info)
* [How Run the Proyect](#how-run-the-proyect)
* [Get endpoint](#get-endpoint)
* [Post endpoint](#post-endpoint)

## General info
This project is an Rest Api that save, return and update jobs given by one post and one get request, the proyect use JavaScript helped by NodeJs and Express as 
Framework, and MongoDb as the Data Base
	
## How Run the Proyect
* First is needed to install the last version of nodeJs, you can intall it from this link: https://nodejs.org/en/download/
* Then, the proyecto is gone to be thestes in Postman, so you need to install one of the most recent versions, you can intall it from this 
link: https://www.postman.com/downloads/
* Next Download the Proyect and exceute them
* Then with the Proyect excecuted, in the terminal you run the line code "npm install", this will install all the dependecis that the proyect needs to run correctly
* Once finish to install all the dependencies, you need to run the proyect, it'll star with the line code "npm start"
```
$ npm install
$ npm start
```
* The last step is open Postman, because this is where our program will be tested
* And thats everityng that you need to know about how run the proyect correctly
	
## Get endpoint
In the Api we consider 3 status: running, failed, finished, every status will depend on the data you enter in the post request.
The url to get a correctly response is: http://localhost:3000/getJob?jobId=[parameter], notice tyat parameter is on brackets, you need to replace this value with
the jobId that we gave you on the Post request, in the code we use an sleep() of 10 seconds to test the "running" status

## Post endpoint
The post endpoint only accept and array of object, the object should be structure on this way:
```json
{
  "name" : "String"
  "age": "Number"
}
```
in Postman you can config your Post request, so is necessary that the body be written in raw and sent as JSON, The url to get a correctly response is:
http://localhost:3000/createJob, it will return as response and jobId that is your jobId, so is important to save this id to get the job later.


