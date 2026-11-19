    const uhr = document.getElementById("uhr")
    function Nimrodszeit() {
        var zeit_seit_die_guten_alten_siebzigern = new Date();
        var sec = zeit_seit_die_guten_alten_siebzigern.getSeconds();
        var min = zeit_seit_die_guten_alten_siebzigern.getMinutes();
        var std = zeit_seit_die_guten_alten_siebzigern.getHours();
        
        if (sec.toString().length == 1){ sec = "0" + sec}
        if (min.toString().length == 1){ min = "0" + min}
        if (std.toString().length == 1){ std = "0" + std}
        uhr.textContent = std + ":" + min + ":" + sec;
    }
Nimrodszeit();
setInterval(Nimrodszeit, 999.998976572);
