<img src="https://cclos-assets.s3.us-east-1.amazonaws.com/images/Logo%20credit.png" alt="CCLOS Logo" width="200"/>

# cclosTestBackend

## Table of contents
* [General info](#general-info)
* [How Run the Proyect](#how-run-the-proyect)
* [Get endpoint](#get-endpoint)
* [Post endpoint](#post-endpoint)

## General info
This project is an Rest Api that save, return and update jobs given by one post and one get request, i used NodeJS with Express framework and a database in MongoDB
	
## How Run the Proyect?
* Install the latest version of NodeJS: https://nodejs.org/en/download/
* Install the project dependencies with “npm install” 
* Run the project with “npm start
```
$ npm install
$ npm start
```

## How Test the Proyect?
* The project should be running in localhost:3000 
* Use postman (or similar) to test the 2 available endpoints

## Post endpoint
The endpoint http://localhost:3000/createJob accepts a JSON with an array of objects that should be structure as following: :
```json
[
	{
	  "name" : "String"
	  "age": "Number"
	},
]
```
The response contains a “jobId” that can be used in the GET endpoint to get the job status. 
	
## Get endpoint
The endpoint http://localhost:3000/getJob?jobId=[YOUR_JOB_ID] uses the jobId to get the current status of the job: running, failed or finished, and returns it in the response. 

Note: There’s a 10 seconds delay when a job is created to be able to test the “running” status.




