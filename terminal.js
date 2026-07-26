const asciiArt = `
██╗    ██╗██╗██╗     ██╗     ██╗  ██╗ ██████╗ ███╗   ███╗███╗   ███╗███████╗███╗   ██╗
██║    ██║██║██║     ██║     ██║ ██╔╝██╔═══██╗████╗ ████║████╗ ████║██╔════╝████╗  ██║
██║ █╗ ██║██║██║     ██║     █████╔╝ ██║   ██║██╔████╔██║██╔████╔██║█████╗  ██╔██╗ ██║
██║███╗██║██║██║     ██║     ██╔═██╗ ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║
╚███╔███╔╝██║███████╗███████╗██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║███████╗██║ ╚████║
 ╚══╝╚══╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝
`;

const flamingoPalette = {
    nc: "#1c1c1c",
    base: "#1c1c1c",
    surface: "#262626",
    overlay: "#303030",
    muted: "#5f5f87",
    subtle: "#8787af",
    text: "#d7d7ff",
    love: "#ff5f87",
    gold: "#ffaf87",
    rose: "#ffafaf",
    pine: "#5f8787",
    foam: "#afd7d7",
    iris: "#d7afd7",
    leaf: "#87afaf",
    highlightLow: "#262626",
    highlightMed: "#444444",
    highlightHigh: "#585858",
};

const helpMenu = `
[[;${flamingoPalette.pine};]Available Commands:]

[[;${flamingoPalette.gold};]help]        Show this help menu
[[;${flamingoPalette.gold};]about]       Learn more about me
[[;${flamingoPalette.gold};]projects]    View my projects
[[;${flamingoPalette.gold};]blogs]       Read my blog posts
[[;${flamingoPalette.gold};]contact]     Get my contact information
[[;${flamingoPalette.gold};]github]      Open my GitHub profile
[[;${flamingoPalette.gold};]clear]       Clear the terminal
[[;${flamingoPalette.gold};]pi]          Calculate something pointless
`;

$("#terminal").terminal(
    function(what) {
        what = what.trim();
        if (what === "home") {
            window.location.href = "index.html";
            return;
        }

        if (what === "blogs") {
            window.location.href = "blogs.html";
            return;
        }
        if (what === "pi") {
            this.echo("3.14159265358979323846264338327950288419716939937510\n");
            return;
        }
        if (what !== "") {
            this.echo(what + "\n");
        }
    },
    {
        greetings: `${asciiArt}\n${helpMenu}`,
        prompt:
            `[[;${flamingoPalette.pine};]user]` +
            `[[;${flamingoPalette.subtle};]@]` +
            `[[;${flamingoPalette.gold};]rb152080]` +
            `[[;${flamingoPalette.subtle};]:]` +
            `[[;${flamingoPalette.iris};]~]` +
            `[[;${flamingoPalette.muted};]$ ]`,
    },
);
