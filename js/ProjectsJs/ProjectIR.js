

//STEP A
let playlistListIHSAN = []; //list of playlist for Project IHSAN
//STEP B
/*
let snd9000xA ="../audio/9000/9000_A20190129_MidiPluginsTry.m4a";
let snd9000xB ="../audio/9000/9000_B20190129_MidiPluginsTry.m4a";
*/
let snd9000xD ="../audio/9000/9000_Drec20190203104bpm_4chords+piano+drum.m4a";
let snd9000xC ="../audio/9000/9000_Crec20190203104bpm_drum.m4a";
let snd9000xE ="../audio/9000/9000_E20190203rec102bpm_4chords+piano+drum.m4a";
let snd9000xF ="../audio/9000/9000_F_rec102bpm_climpsHighPitch.m4a";
//STEP C
let tracksIHSAN90x1 = []; //create tracks array for playlist
//STEP D
tracksIHSAN90x1.push(new Track("F_rec102bpm_climpsHighPitch", snd9000xF)); 
tracksIHSAN90x1.push(new Track("Claude Pascal beginning", snd2401)); 

tracksIHSAN90x1.push(new Track("Claude Pascal ending", snd2402)); 

tracksIHSAN90x1.push(new Track("9000_E20190203rec102bpm_4chords+piano+drum.", snd9000xE)); 

tracksIHSAN90x1.push(new Track("9000_Drec20190203104bpm_4chords+piano+drum", snd9000xD)); 
tracksIHSAN90x1.push(new Track("9000_Erec20190203104bpm_drum", snd9000xC)); 
/*
tracksIHSAN90x1.push(new Track("9000_B20190129_MidiPluginsTry", snd9000xB)); 
tracksIHSAN90x1.push(new Track("9000_A20190129_MidiPluginsTry", snd9000xA)); 
*/

//STEP E
playlistListIHSAN.push(new Playlist("for Ihsan Rustem Page", "#", "", tracksIHSAN90x1)); //playlist1 1 added /images/IHSANRUSTEMimg.jpg


//STEP F
let projectIR = new Project("Project IHSAN", playlistListIHSAN); //create project EX(name,list of playlist)
//STEP G
// projects.push(projectIR); //push the project in projects array



window.project = projectIR; //add in very project js file