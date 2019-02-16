
//Below steps show creating a new Project


//STEP A
let playlistListBL = []; //list of playlist for Project BL
//STEP B
let snd0701 ="../audio/0701_ParadoxInTheHouse.m4a";
let snd0703 ="../audio/0703_ParadoxInTheSharpHouse.m4a"	;	
let snd0901 ="../audio/0901_SharpEdgedKnife.m4a";		
let snd0902 ="../audio/0902_SharpEdgedKnife.m4a";		
let snd0903 ="../audio/0903_SharpEdgedKnife.m4a";	
let snd0904 ="../audio/0904_SharpEdgedKnife.m4a";	
let snd1201 ="../audio/1201_Amai.m4a";		
let snd1202 ="../audio/1202_Amai.m4a";
let snd1301 ="../audio/1301_In_Transit.m4a";
let snd1302 ="../audio/1302_In_Transit.m4a";
let snd4601 ="../audio/4601_AnatomicObliteration.m4a";
let snd4602 ="../audio/4602_AnatomicObliteration.m4a";
//STEP C
let tracksBLMixed = []; //create tracks array for playlist
//STEP D
tracksBLMixed.push(new Track("0701 ParadoxInTheHouse", snd0701)); //add a track to tracks list new, Track(name of track,url to track)
tracksBLMixed.push(new Track("0703_ParadoxInTheSharpHouse", snd0703)); 
tracksBLMixed.push(new Track("0901_SharpEdgedKnife", snd0901)); 
tracksBLMixed.push(new Track("0902_SharpEdgedKnife", snd0902)); 
tracksBLMixed.push(new Track("0903_SharpEdgedKnife", snd0903)); 
tracksBLMixed.push(new Track("0904_SharpEdgedKnife", snd0904)); 
tracksBLMixed.push(new Track("1201_Amai", snd1201)); 
tracksBLMixed.push(new Track("1202_Amai", snd1202)); 
tracksBLMixed.push(new Track("1301 In Transit", snd1301)); 
tracksBLMixed.push(new Track("4601_AnatomicObliteration", snd4601)); 
tracksBLMixed.push(new Track("4602_AnatomicObliteration", snd4602)); 

//STEP E
playlistListBL.push(new Playlist("Mixed works, composed for collaborations with Bruno Listopad and others", "#", "The music has different dates, 2001-2004 ", tracksBLMixed)); //playlist1 1 added
//STEP F
let projectBL = new Project("Project BL", playlistListBL); //create project EX(name,list of playlist)
//STEP G
// projects.push(projectBL); //push the project in projects array






window.project = projectBL; //add in very project js file