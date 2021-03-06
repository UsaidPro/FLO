
window.gStudentId = 0;
window.index = '<!DOCTYPE HTML> <html> <title> Fab Lab </title> <script src="require.js"></script> <script data-main="js/charts.js" src="require.js"></script> <script data-client="js/client.js" src="require.js"></script> <script data-collections="js/collections.js" src="require.js"></script> <script data-devices="js/devices.js" src="require.js"></script> <script data-distributions="js/distributions.js" src="require.js"></script> <script data-helpers="js/helpers.js" src="require.js"></script> <script data-jobs="js/jobs.js" src="require.js"></script> <script data-keys="js/keys.js" src="require.js"></script> <script data-response="js/response.js" src="require.js"></script> <script data-stuff="m2x.js" src="require.js"></script> <body background="images/background.jpg"> <style> #header { outline: white solid 0.5px; padding: 4vh 2vw; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.8); font-family: helvetica, arial, sans-serif; font-size: 4vw; position: absolute; margin-left: 30vw; margin-right: 25vw; text-align: center; height: 10vh; line-height: 10vh; } #top { outline: white solid 0.5px; padding: 3vw 4vh; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.6); font-family: helvetica, arial, sans-serif; font-size: 6vw; position: absolute; margin-top: 25vh; margin-left: 14vw; margin-right: 14vw; text-align: center; } #top:hover { background: rgba(10,10,10,0.8); color:rgba(100,100,100,0.8); } #top:link { text-decoration: none; } #bleft { outline: white solid 0.5px; padding: 6vh 5vw; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.6); font-family: helvetica, arial, sans-serif; font-size: 4vw; position: absolute; BOTTOM: 10vh; LEFT: 10vw; display: inline-block; } #bleft:hover { background: rgba(0,0,0,0.8); color:rgba(100,100,100,0.8); } #bleft:link { text-decoration: none; } #bright { outline: white solid 0.5px; padding: 6vh 5vw; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.6); font-family: helvetica, arial, sans-serif; font-size: 4vw; position: absolute; BOTTOM: 10vh; RIGHT: 10vw; display: inline-block; } #bright:hover { background: rgba(0,0,0,0.8); color:rgba(100,100,100,0.8); } #bright:link { text-decoration: none; } </style> <script> var gAgentName; </script> <script src="index.js"></script> <h1 id="header">Fab Lab Oversight</h1> <!-- <a href="skills.html" id="top">Student Skills Reviews</a> <a href="students.html" id="bleft">Edit<br>Student List</a> <a href="skillsreviews.html" id="bright">Edit<br>Skills Reviews</a> --> <button id="top">Student Skills Reviews</button> <button id="bleft">Edit<br>Student List</button> <button id="bright">Edit<br>Skills Reviews</button> </body> </html>';
window.skills =  '<!DOCTYPE HTML> <html> <title> Fab Lab </title> <body background="images/background.jpg"> <style> #id { outline: white solid 0.5px; padding: 6vh 4vw; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 4.5vmax; position: absolute; TOP: 35vh; LEFT: 8vw; width: 75vw; } #idinput { outline: white solid 0.5px; padding: 5px 30px; border-radius: 3px; color: rgba(125,125,125,0.3); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 5vmax; position: absolute; TOP: 40vh; LEFT: 45vw; width: 25vw; } #submitid{ outline: white solid 0.5px; padding: 2.5vh 1vw; border-radius: 3px; color: rgba(125,125,125,0.8); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.7); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 40vh; LEFT: 75vw; width: 15vw; vertical-align: middle; } #home { outline: white solid 0.5px; padding: 20px 100px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 4vmax; position: absolute; TOP: 7vh; RIGHT: 9vw; } #home:hover { background: rgba(0,0,0,0.4); color:rgba(140,140,140,0.8); </style> <button id="home"> Home </button> <p id="id">Student ID: </p> <input id="idinput" type="text" placeholder="ID"/> <input id="submitid" type="BUTTON" value="SUBMIT"/> <script src="skills.js"></script> </body> </html>';
window.students = '<!DOCTYPE html> <html> <style> #body { outline: white solid 0.5px; padding: 40px 75px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 45pt; position: absolute; TOP: 25px; RIGHT: 10vw; LEFT: 10vw; BOTTOM: 3vh; } #list { outline: white solid 0.5px; padding: 40px 75px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 2.5vmax; position: absolute; TOP: 25vh; RIGHT: 12vw; LEFT: 12vw; BOTTOM: 15vh; } #id { outline: white solid 0.5px; padding: 15px 150px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 8vh; LEFT: 12.5vw; } .addremove { outline: white solid 0.5px; padding: 10px 10px; border-radius: 3px; color: rgba(200,200,200,0.9); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.7); font-family: helvetica, arial, sans-serif; font-size: 2.5vmax; position: absolute; TOP: 86vh; } #layouthome { outline: white solid 0.5px; padding: 20px 100px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 7vh; RIGHT: 15vw; } #layouthome:hover { background: rgba(0,0,0,0.4); color:rgba(140,140,140,0.8); </style> <body background="images/background.jpg"> <div id="body"> </div> <div id="id"> ID </div> <button id="layouthome"> Home </button> <ul id="list"> </ul> <button class="addremove" id="add" style="LEFT: 13vw; TOP: 86vh;">Add</button> <input class="addremove" id="addinput" type="text" style="LEFT: 20.5vw;width: 25vw;"><br> <button class="addremove" id="remove" style="RIGHT: 13vw;TOP: 86vh;">Remove</button> <input class="addremove" id="removeinput" type="text" style="RIGHT: 25vw;width: 25vw;"> <script src="students.js"></script> </body> </html>';
window.skillsreviews = '<!DOCTYPE html> <html> <style> #add { outline: white solid 0.5px; padding: 20px 20px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 37vh; LEFT: 5vw; width: 80vw; } #remove { outline: white solid 0.5px; padding: 20px 20px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 50vh; LEFT: 5vw; width: 80%; } #top { outline: white solid 0.5px; padding: 7px 20px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.8); font-family: helvetica, arial, sans-serif; font-size: 3.5vmax; position: absolute; TOP: 7vh; LEFT: 5vw; } select { outline: white solid 0.5px; padding: 1vw 12vh; border-radius: 3px; color: rgba(200,200,200,0.9); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.7); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 51vh; RIGHT: 13vw; text-align: center; } select:hover { background: rgba(0,0,0,0.8); color:rgba(200,200,200,0.5); } #textadd { outline: white solid 0.5px; padding: 10px 10px; border-radius: 3px; color: rgba(200,200,200,0.9); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.7); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 1.5vh; RIGHT: 1vw; width: 50%; vertical-align: middle; } #submit { outline: white solid 0.5px; padding: 10px 50px; border-radius: 3px; color: rgba(200,200,200,0.9); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.7); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 80vh; LEFT: 5vw; } #submit:hover { background: rgba(0,0,0,0.8); color:rgba(200,200,200,0.5); } #home { outline: white solid 0.5px; padding: 20px 100px; border-radius: 3px; color: rgba(200,200,200,0.9); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.8); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; BOTTOM: 10vh; RIGHT: 5vw; } #home:hover { background: rgba(0,0,0,0.8); color:rgba(200,200,200,0.5); } #home:link { text-decoration: none; } </style> <body background="images/background.jpg"> <p id="top" style="text-align: center"> Here you can add and remove skills reviews. <br>But be warned: <br>If you delete a skills review, all data inside will be lost </p> <div id="add"> Add a skills review here: <input type="text" id="textadd"> </div> <div id="remove"> Select a skills review to remove: </div> <select id="removeList"> <option value="select">Select</option> </select> <button id="submit">Submit</button> <button id="home">Home</button> <script src="skillsreviews.js"></script> </body> </html>';
window.studentlayout = '<!DOCTYPE html> <html> <style> #body { outline: white solid 0.5px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 45pt; position: absolute; TOP: 3vh; RIGHT: 10vw; LEFT: 10vw; BOTTOM: 7vh; } #id { outline: white solid 0.5px; padding: 15px 13vw; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 7vh; LEFT: 15vw; } #main { outline: white solid 0.5px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 4vmax; position: absolute; TOP: 25vh; RIGHT: 13vw; LEFT: 13vw; BOTTOM: 10vh; } #home { outline: white solid 0.5px; padding: 2vh 10vw; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 4vmax; position: absolute; TOP: 7vh; RIGHT: 15vw; height: 13vh; vertical-align: middle; } #home:hover { background: rgba(0,0,0,0.4); color:rgba(140,140,140,0.8); } #skills { outline: white solid 0.5px; padding: 15px 20px; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.6); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; LEFT: 13.5vw; width: 69%; } #add { outline: white solid 0.5px; padding: 20px 7vw; border-radius: 3px; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.6); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 70vh; LEFT: 15vw; text-align: center; } #remove { outline: white solid 0.5px; padding: 20px 7vw; color: rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.6); font-family: helvetica, arial, sans-serif; font-size: 3vmax; position: absolute; TOP: 70vh; RIGHT: 15vw; text-align: center; } </style> <body background="images/background.jpg"> <div id="body"> </div> <div id="id"> ID </div> <div id="main"> </div> <ul id="skills" style="TOP:165px;"> </ul> <button id="home">Home</button> <select id="add"> <option id="addselect" >Add</option> </select> <select id="remove"> <option id="removeselect">Remove</option> </select> <!-- <button id="remove"> Remove </button> --> <script src="studentlayout.js"></script> </body> </html>';
console.log("Hello and welcome to Fab Lab Skill Checker by Pseudonymous!");
console.log(window.gStudentId);

//console.log(window.gStudentId);
require(['m2x.js'], function(result)
{
  if(window.M2X)
  {
    console.log("I already have a M2X!");
    console.log(window.M2X);
  }
  else
  {
    console.log("I am creating a M2X!");
    console.log(result);
    if(typeof M2X !== 'undefined')
    {
      console.log("Why isn't it being found?");
    }
    else
    {
      console.log(typeof M2X + "In require")
    }
  
  
    var apiKey = "e4e45f5f3c7351dda32c361fb3e36266";
    var deviceId = "855ca95fcaffd8add08e27e8cce59b0d";
    
    var m2x = result;
    console.log(m2x);
    var m2x = new m2x(apiKey);
    
    window.M2X = m2x;
    window.apiKey = apiKey;
    window.deviceId = deviceId;
  }
  window.M2X.status(function(result)
  {
    console.log("result is " + result);
  });
  
  window.M2X.devices.view(window.deviceId, function(device) 
  {
      console.log(device.streams.url);
  }, function(error) { console.log(error);});
  
  window.M2X.devices.streams(window.deviceId, function(streamlist)
  {
    console.log(streamlist);
  });
  
  var studentReviews = document.getElementById('top');
  studentReviews.addEventListener('click', function()
  {
    //document.write('<!DOCTYPE HTML> <html> <title> Fab Lab </title> <!-- <script src="require.js"></script> <script data-main="js/charts.js" src="require.js"></script> <script data-client="js/client.js" src="require.js"></script> <script data-collections="js/collections.js" src="require.js"></script> <script data-devices="js/devices.js" src="require.js"></script> <script data-distributions="js/distributions.js" src="require.js"></script> <script data-helpers="js/helpers.js" src="require.js"></script> <script data-jobs="js/jobs.js" src="require.js"></script> <script data-keys="js/keys.js" src="require.js"></script> <script data-response="js/response.js" src="require.js"></script> <script data-stuff="m2x.js" src="require.js"></script> --> <body background="images/background.jpg"> <style> #id { outline:white solid 0.5px; padding: 40px 75px; border-radius: 3px; color:rgba(200,200,200,0.7); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 45pt; position:absolute; TOP:225px; LEFT:100px; width: 70%; } ::-webkit-input-placeholder { color:rgba(200, 200, 200, 0.2); } #idinput { outline:white solid 0.5px; padding: 5px 30px; border-radius: 3px; color:rgba(125,125,125,0.3); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.4); font-family: helvetica, arial, sans-serif; font-size: 45pt; position:absolute; TOP:260px; LEFT:500px; width: 25%; } #submitid{ outline:white solid 0.5px; padding: 5px 30px; border-radius: 3px; color:rgba(125,125,125,0.8); font-weight: bold; border: none; margin: 0; background: rgba(0,0,0,0.7); font-family: helvetica, arial, sans-serif; font-size: 45pt; position:absolute; TOP:260px; LEFT:900px; width: 20%; } </style> <!--<script src="index.js"></script>--> <p id="id">Student ID: </p> <input id="idinput" type="text" placeholder="ID"/> <input id="submitid" type="BUTTON" value="SUBMIT"/> <script src="skills.js"></script> </body> </html>');
    document.body.innerHTML = "";
    console.log("CLICKED SKILLS");
    document.write(window.skills);
  });
  
  var editLists = document.getElementById('bleft');
  editLists.addEventListener('click', function()
  {
    document.body.innerHTML = "";
    document.write(window.students);
  });
  
  var editSkills = document.getElementById('bright');
  editSkills.addEventListener('click', function()
  {
    document.body.innerHTML = "";
    document.write(window.skillsreviews);
  })
  
});