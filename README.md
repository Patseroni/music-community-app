This is a music-sharing application where anyone can upload their own music and listen to other artists.  
It is focused on the genres Retrowave, Synthwave, Outrun, Futurewave and similar styles.  
Persistent storage is missing at the moment. 

--------------------

**How to run the app:**  
Clone the application.  
Open two terminal windows.  

1. From the root-folder in one terminal-window: Run "npm install".    
2. From the server-folder in the other terminal-window(be inside the root-folder, then type 'cd server'): Run "npm install".  

3. From the root-folder: Run "npm run dev".  
4. From the server-folder: Run "node index.js".   

The app should run on port 5173.

To access the profile page, type /profile after 5173 (you can´t access the profile page by navigation or via google login at the moment).      
Hopefully, you can now upload an audiofile(.mp3, .wav or .flac) and a profile-image.  
The audiofile should start playing by clicking on it.



-------------------

**Technologies & Tools**  
MongoDB  
Express.js  
React  
Node.js  

**Status**  
In progress...
