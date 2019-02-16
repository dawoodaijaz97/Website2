
let autoplay = false;
//
let container = $(".playerCont");

let sticky = container.get(0).offsetTop;

function positioning() {
    console.log("scrolling");
    if (window.pageYOffset > sticky) {
        container.addClass("sticky");
    } else {
        container.removeClass("sticky");
    }
}

let createWave = function () {
    let waveSurfer = WaveSurfer.create({
        container: ".playerCont .wave", //the container in which the waveform is drawn
        hideScrollbar: true,//hide the scroll bar for the wave
        autoCenter: true,
        fillParent: true,
        height: 80,//height for the wave
        progressColor: "#F5F5DC",//color of progress
        cursorColor: "#007066",//cursor color
        waveColor: "#b3b3b3",
       backend: 'MediaElement',
        responsive: true,

    });
    waveSurfer.on('ready', function () {
        console.log("ready");
            if (autoplay === false) {
        autoplay = true;
        } else {

            waveSurfer.play();
        }
    });

    waveSurfer.on("finish", function () {
        console.log("finish");
        waveSurfer.seekTo(0);
    });
    waveSurfer.on("seek", function (seek) {
        console.log("seek" + seek);
    });
    waveSurfer.on("audioprocess", function () {

        let progressPart="";
        let totalPart = "";
        let tDuration = wave.getDuration();
        let tMin = Math.floor(tDuration / 60);
        let tSec = Math.floor(tDuration % 60);
        let progress = wave.getCurrentTime();
        let durationP = $(".playerCont").find(".duration");
        let min;
        if (progress / 60 < 0) {
            min = 0;
        } else {
            min = Math.floor(progress / 60);
        }
        let sec = Math.floor(progress % 60);
        if (sec < 10) {
            progressPart = min+":0"+sec+"|";

        }
        else{
            progressPart = min+":"+sec+"|";

        }
        if(tSec<10){
            totalPart = tMin+":0"+tSec;

        }else {
            totalPart = tMin+":"+tSec;
        }

        durationP.text(progressPart+totalPart);

    });
    waveSurfer.on("stop", function () {
        console.log("stop");
    });


    return waveSurfer;
};

var setPlayer = function (track) {

    let playerCont = $(".playerCont");
    playerCont.find(".title").text(track.name);


};


var wave;




$("document").ready(function () {

    $(window).on("scroll",positioning);

    $("#slider").slider({
        range: "min",
        min: 0,
        max: 1,
        value: 0.5,
        step:0.01,
        slide: function( event, ui ) {
            console.log(ui.value);
            wave.setVolume(ui.value);
            if (!$("#mute").hasClass("soundOff")) {
                $("#mute").addClass("sound").removeClass("soundOff").find("i").addClass("fa-volume-up").removeClass("fa-volume-mute");
                wave.setMute(true);
            }
        },

    });


    let path = $(location).attr("pathname");
    let x = path.lastIndexOf("/");
    let y = path.indexOf(".");
    console.log("x= " + x + "y" + y);
    let projectName = path.substring(x + 1, y);
    projectName = decodeURI(projectName);
    console.log(path);
    console.log("name=" + projectName);


    console.log("project" + project);


    for (let i = 0; i < project.playlistList.length; i++) {
        let playlist = project.playlistList[i];
        createPlaylistCard(playlist, i); //create playlist card for the playlist

    }
    if (!wave) {
        wave = createWave();
    }


    $(".container:eq(0)").css({
        "margin-top": "170px"
    });

    $("#forward").on("click", function () {

        let nextBtn = $(".playing").next().find(".btn");
        console.log(nextBtn.attr("class"));
        if (nextBtn.attr("class")) {
            nextBtn.trigger("click");
        }
        else {
            console.log("going to else");
            let nextPlaylist = $(".playing").parents(".container").next(".container").find(".playlist").attr("id");
            console.log(nextPlaylist);
            for (let x = 0; x < project.playlistList.length; x++) {
                if (project.playlistList[x].name2 === nextPlaylist) {
                    let nextSong = project.playlistList[x].tracks[0].name2;
                    console.log("next song =" + nextSong);
                    $("#" + nextSong).trigger("click");
                }
            }
        }
    });

    $("#backward").on("click", function () {
        let prevBtn = $(".playing").prev().find(".btn");
        console.log("prev song" + prevBtn.attr("id"));
        if (prevBtn.attr("id")) {
            prevBtn.trigger("click");
        } else {
            console.log("playing else");

            let prevPlaylist = $(".playing").parents(".container").prev(".container").find(".playlist").attr("id");
            console.log("prev playlist= " + prevPlaylist);
            for (let x = 0; x < project.playlistList.length; x++) {
                if (project.playlistList[x].name2 === prevPlaylist) {
                    let nextSong = project.playlistList[x].tracks[project.playlistList[x].tracks.length - 1].name2;
                    console.log("next song =" + nextSong);
                    $("#" + nextSong).trigger("click");
                }
            }

        }
    });
    $("#play").on("click", function (e, data) {
        if ($(this).hasClass("play")) {
            $(this).find("i").removeClass("fa-play").addClass("fa-pause");
            $(this).removeClass("play").addClass("stop");
            let playingSong = $(".playing").find(".btn").attr("id");
            console.log(playingSong);
            wave.play();
        } else {
            $(this).find("i").removeClass("fa-pause").addClass("fa-play");
            $(this).removeClass("stop").addClass("play");
            wave.pause();
        }
    });

    $("#mute").on("click", function (event, data) {
        console.log(data);
        console.log(event);
        let btn = $(this);
        if (data) {
            btn.addClass("soundOff").removeClass("sound").find("i").addClass("fa-volume-up").removeClass("fa-volume-mute");
            wave.setMute(false);
        }
        else {
            if (btn.hasClass("sound")) {
                btn.addClass("soundOff").removeClass("sound").find("i").addClass("fa-volume-up").removeClass("fa-volume-mute");
                wave.setMute(false);
            } else {
                btn.addClass("sound").removeClass("soundOff").find("i").addClass("fa-volume-mute").removeClass("fa-volume-up");
                wave.setMute(true);
            }
        }
    });

    $(".songCard:first").find(".btn").trigger("click");
    $("#play").trigger("click");


});

//creates the playlist card
var createPlaylistCard = function (playlist, i) {

    let card = $("<div class=\"playlistCard\">\n" +
        "    <h3 class=\"playlistName\">Playlist1</h3>\n" +
        "    <div class=\"meta\">\n" +
        "        <img src=\"https://i1.sndcdn.com/artworks-000021056062-hj3gdo-t500x500.jpg\" class=\"playlistImg\">\n" +
        "        <p class=\"playlistDesc\">Lorem ipsum dolor\n" +
        "            sit amet, consectetur adipisicing elit.\n" +
        "            Commodi cumque necessitatibus neque nostrum\n" +
        "            quod vitae.\n" +
        "        </p>\n" +
        "    </div>\n" +
        "    <ul class=\"songList\">\n" +
        "    </ul>\n" +
        "</div>");
    card.find(".playlistName").text(playlist.name); //set title to playlist name
    card.find(".playlistImg").attr("src", playlist.imgUrl); //set the playlist image url
    if(playlist.imgUrl === "#"){
        card.find(".playlistImg").css({
            display:"none"
        });
    }
    card.find(".playlistDesc").text("").text(playlist.text);
    let songList = card.find(".songList");
    for (let i = 0; i < playlist.tracks.length; i++) { //create song card for each track in the playlist
        songList.append(createSongCard(playlist.name, playlist.tracks[i], i)); //append the each song card to corresponding playlist song list
    }
    let div = $(".playlist:eq(" + i + ")");
    div.attr("id", playlist.name2);
    div.append(card);
};


//creates songsCard for each track

var createSongCard = function (playlistName, track, i) {
    console.log("Creating song Card");
    let card = $("<li class=\"songCard\">\n" +
        "               <button class=\"btn play\"><i class=\"fas fa-play\"></i></button>\n" +
        "               <p class=\"title\">This is a song</p>\n" +
        "</li>");

    card.find(".title").text(track.name); //set the title of the card to track name

    let button = card.find("button");
    button.attr("id", track.name2);
    button.on("click", function (event) { //add event listener to play button
        event.stopImmediatePropagation();
        if ($(this).hasClass("play")) { //check if it is play button

            let buttons = $(".songCard button");
            buttons.removeClass("stop").addClass("play");
            buttons.each(function () {
                $(this).find("i").removeClass("fa-stop").addClass("fa-play");
            });
            $(this).removeClass("play"); //remove play class from the button
            $(this).addClass("stop"); //add stop class to the button
            $(".songCard").each(function () {
                $(this).removeClass("playing"); //from all songs card remove playing class
            });
            $(this).parent(".songCard").toggleClass("playing"); //add the playing class to song card for which the track was played
            $(this).find("i").removeClass("fa-play").addClass("fa-stop"); //change the button icon from play to stop
            $(".playerCont").find("#play").addClass("pause").removeClass("play").find("i").removeClass("fa-play").addClass("fa-pause");
            $("#mute").trigger("click", ["play"]);
            wave.load(track.path);
            setPlayer(track);

        }
        else if ($(this).hasClass("stop")) { //it it has stop class
            $(this).removeClass("stop").addClass("play"); //remove stop class and add play class to the button
            $(this).find("i").removeClass("fa-stop").addClass("fa-play");//change to icon from stop to play
            console.log("playling sds ");
            wave.stop();

        }

    });

    card.on("click",function () {
       $(this).find(".btn").trigger("click");
    });

    return card;
};




