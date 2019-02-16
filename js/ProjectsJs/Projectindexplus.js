

//STEP A
let playlistListINDEXPLUS = []; //list of playlist for Project IHSAN



//STEP B

let sndX001 ="../audio/9000/9000_Drec20190203104bpm_4chords+piano+drum.m4a";
let sndX002 ="../audio/9000/9000_Drec20190203104bpm_4chords+piano+drum.m4a";



//STEP C
let tracksINDEXPLUS = []; //create tracks array for playlist



//STEP D
tracksINDEXPLUS.push(new Track("F_rec102bpm_climpsHighPitch", sndX001)); 
tracksINDEXPLUS.push(new Track("F_rec102bpm_climpsHighPitch", sndX002)); 



//STEP E
playlistListINDEXPLUS.push(new Playlist("", "#", "", tracksINDEXPLUS)); //playlist1 1 added /images/IHSANRUSTEMimg.jpg


//STEP F
let projectINDEXPLUS = new Project("", playlistListINDEXPLUS); //create project EX(name,list of playlist)




//STEP G
window.project = projectINDEXPLUS; //add in very project js file