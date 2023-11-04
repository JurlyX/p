let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Please allow popups and redirects.")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "My Drive - Google Drive";
        const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
        iframe.src = location.href 
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        location.replace("https://www.nasa.gov/")
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    if(window.localStorage.getItem("v4Particles") == "true") {
      const scr = document.createElement("script");
      scr.src="./js/particles.js";
      document.body.appendChild(scr);
    }
    if(localStorage.getItem('customcolor') == "true") {
        document.body.style.background = localStorage.getItem("backdrop-color");
    }
    async function randombgs() {
    if(localStorage.getItem('RandomBG') == "true") {
        var bg = await fetch("/static/js/json/bg.json");
        var bga = await say.json();
        var randombg = says[Math.floor(Math.random() *  says.length)];
        document.body.style.background = `url(${randombg})`;
    }
    }
    randombgs();
  });
