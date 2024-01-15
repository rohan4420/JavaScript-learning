JavaScript is single threaded synchronys language which means it executes one line at a time
![Screenshot from 2024-01-15 13-41-40](https://github.com/rohan4420/JavaScript-learning/assets/155799282/03401b66-82a1-4ed8-8348-9205ae171529)
Blocking code => blocks the flow of program 
Non-Blocking code => Does not block the execution (when it goes to execute following code till that time other code will be executed)
![Screenshot from 2024-01-15 13-42-09](https://github.com/rohan4420/JavaScript-learning/assets/155799282/9b3a2641-90de-4250-9dbc-5cec0cf6ad65)
cb => callback
consider we have set timeout method with 0 sec then too it will execute last as it will follow whole process of web api once the execution of cb gets over it will go in task Queue and then 
adds in call stack
fetch()=>here concept of promises will occure which has high prioity of execution and then it will store in queue and then in call stack
![Screenshot from 2024-01-15 13-42-47](https://github.com/rohan4420/JavaScript-learning/assets/155799282/68a233fe-d15c-406a-a862-d2be03792639)
