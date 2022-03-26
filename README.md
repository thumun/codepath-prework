# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Neha Thumu**

Time spent: **14** hours spent in total

Link to project: https://chemical-sparkly-newsboy.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- N/A

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Full game playthrough:
![](https://i.imgur.com/XBHT2uC.gif)
![](https://i.imgur.com/BSQd6Ms.gif)
![](https://i.imgur.com/uIpll9c.gif)

Mistake counter:
![](https://i.imgur.com/Txct6BD.gif)

Timer/Countdown:
![](https://i.imgur.com/n5f2BHw.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Outside Resources: (also commented in code to show where I used the resources) 

Timer: 
https://www.w3schools.com/howto/howto_js_countdown.asp 

Audio: 
https://www.w3schools.com/jsref/met_audio_play.asp
https://stackoverflow.com/questions/14834520/html5-audio-stop-function 

Image on a button: 
https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element 

Opacity for images: 
https://stackoverflow.com/questions/12605908/change-background-image-opacity

Images: 
https://www.akc.org/expert-advice/lifestyle/8-facts-about-labrador-retrievers/ 
https://spiritdogtraining.com/breeds/types-of-shepherd-dogs/ 
https://www.allthingsdogs.com/red-husky/ 
https://www.southernliving.com/culture/pets/small-dog-breeds 
https://www.petmd.com/dog/nutrition/how-help-puppy-who-isnt-gaining-weight 
https://dogtime.com/dog-breeds/doberman-pinscher#/slide/1 

Audio: 
https://soundbible.com/tags-dog-bark.html 


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered while creating this submission was creating the timer. 
I dealt with this challenge in several ways. 
First, I drew out the process so I had a visual for how my variables linked together and how to proceed with coding. This is my typical method for assignments but was not the most useful here since I did not have a clear logical flow. 
Then, I created multiple iterations of my idea. Each time I ran into a problem, I attempted to figure out which aspect of the code was causing it to fail but ultimately decided to begin anew. This was more helpful for me since I was able to go through the whole process again and thinking through it allowed me to catch errors that I may have overlooked in previous iterations. 
I also tried coding in a different language. However, this did not help in solving this challenge since the main problem I was running into was figuring out how/when to call setInterval(). 

In the end, I was able to overcome the challenge by reading the documentation of setInterval() and looking at examples for how it worked. (I originally had setInterval() inside of a function but realized that it would only be called when the outwards function was called. However, if it was on its own/not inside another function, it could always be listening.) I also realized that if I used a boolean to trigger setInterval() then the timer would work as I imagined. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I am curious to know more about writing clean and efficient code. It seems as if the HTML file would become rather cluttered for more complex pages. As such, is there a way to divide the code into multiple files or a way to put some aspects of the HTML content into CSS or Javascript? While coding, I found that it is possible to add a ‘style’ tag to elements like buttons which seems to mimic CSS. I originally added my pictures to each button using this tag but found it difficult to work with (in that I could not lower the opacity when the button was clicked without my image quality diminishing). 
I imagine it would be possible to divide the script into multiple files since it is simply code (so as long as there is a link in the HTML file it is fine) but I find it difficult to imagine splitting the HTML or CSS files. As that may complicate matters- how would the system keep track of files and know where elements are? 

I am also curious to learn more about the back-end of sites. I had a little bit of experience with using Django in a previous job but I was not able to truly understand it/use it properly. (It was rather messy code.) I would be very interested in learning how to create the back-end and efficiently link it with the front end. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

One feature I think would be fun is for the user to select themes. Each theme would change the images on the game along with the audio files. The theme could be changed through either a drop-down menu or buttons. Or, I would like to implement an option for the user to upload their own pictures and audio files. I am not sure how to store these files would be stored, however. 

I would also like to make my code more efficient. I realized that instead of adding audio attributes to each of my buttons, I could simply put the paths in Javascript and create a dictionary to access each respective path. (Similar to the given code for the tones.) However, I believe I would somehow need to integrate an id for each path. Perhaps the id could be the key? (I need to id since I was using each audio’s id to play, pause, loop, and reset.) 

Another feature I would like to add is making my timer have different displays. I currently have a seconds timer (so it counts down based on the number of seconds). I think a minutes and seconds timer (similar to a traditional digital clock) could look nice as well. I was initially going to implement this version but had a bit of trouble converting my number into minutes and seconds. I found a tutorial from w3schools but did not quite understand how the conversion worked. 




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Neha Thumu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
