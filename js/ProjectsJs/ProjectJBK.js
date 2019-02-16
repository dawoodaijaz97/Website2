


//STEP A
let playlistListJBK = []; //list of playlist for Project JBK
//STEP B
let snd3901 ="../audio/3901_Sleepless_Approach.m4a";
let snd2300 ="../audio/2300_MiguelMix.m4a";
let snd2401 ="../audio/2401_Claude Pascal Beginning.m4a";
let snd2402 ="../audio/2402_ClaudePascal_Ending.m4a";
//STEP C
let tracksJBK39 = []; //create tracks array for playlist
//STEP D
tracksJBK39.push(new Track("3901_Sleepless_Approach", snd3901)); //add a track to tracks list new, Track(name of track,url to track)
tracksJBK39.push(new Track("27'52 Miguel Mix", snd2300)); //add a track to tracks list new, Track(name of track,url to track)
tracksJBK39.push(new Track("2401_Claude Pascal Beginning", snd2401)); //add a track to tracks list new, Track(name of track,url to track)
tracksJBK39.push(new Track("2402_ClaudePascal_Ending", snd2402)); //add a track to tracks list new, Track(name of track,url to track)
//STEP E
playlistListJBK.push(new Playlist("Sleepless, a work composed for one of the collaborations with Jiri Kylian", "https://i1.sndcdn.com/avatars-000010991573-yxedrc-t200x200.jpg", "Premiered 2004 November 11 ", tracksJBK39)); //playlist1 1 added
//STEP F
let projectJBK = new Project("Project JBK", playlistListJBK); //create project EX(name,list of playlist)



window.project = projectJBK; //add in very project js file