document.getElementById("reset-counter").addEventListener("click", setToday());

function randomQuote() {
    var quotes = [
        {
            "text" : "There is more to sex appeal than just measurements. I don't need a bedroom to prove my womanliness. I can convey just as much sex appeal, picking apples off a tree or standing in the rain.",
            "author" : "Audrey Hepburn"
        },
        {
            "text" : "Sex without love is a meaningless experience, but as far as meaningless experiences go its pretty damn good.",
            "author" : "Woody Allen"
        },
        {
            "text" : "Sex is emotion in motion.",
            "author" : "Mae West"
        },
        {
            "text" : "I need more sex, OK? Before I die I wanna taste everyone in the world.",
            "author" : "Angelina Jolie"
        }
    ];
    
    var i = Math.floor((Math.random() * quotes.length));
    document.getElementById("quote-text").innerHTML = quotes[i].text;
    document.getElementById("quote-author").innerHTML = quotes[i].author;
}

function setTitleColor(days){
    var color;
        switch (days) {
                case 0:
                    color = "green";
                    break;
                case 1:
                    color = "#808000";
                    break;
                case 2:
                    color = "#ff8000";
                    break;
                case 3:
                    color = "#803c00";
                    break;
                case 4:
                    color = "#ff4000";
                    break;
                default:
                    color = "red";                    
        }
        document.getElementById("c-title").style.backgroundColor = color;
}

function showDays() {
    if (typeof (Storage) !== "undefined") {
        if (!window.localStorage.getItem("lasttime")) {
            // if lasttime key is empty then set to today
            window.localStorage.setItem("lasttime" , Date());
        }
        var lasttime = new Date(window.localStorage.getItem("lasttime"));
        var today = new Date();
        var _day = 24 * 3600 * 1000;
        var daysDiff = Math.floor(today / _day) - Math.floor(lasttime / _day);
        
        // show days in calendar
        document.getElementById("dayspassed").innerHTML = daysDiff;
        
        // change calendar-title color
        setTitleColor(daysDiff);
        
    } else {
        window.alert("Sorry, your browser does not support web storage...");
    }
}

function setToday() {
    window.alert("Your last time is set to Today!");
    if(typeof(Storage)!=="undefined") {
        window.localStorage.setItem("lasttime" , Date());
        showDays();
    }
}