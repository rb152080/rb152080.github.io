const gruvbox_palette = {
    bg: "#282828",
    red: "#cc241d",
    green: "#98971a",
    yellow: "#d79921",
    blue: "#458588",
    purple: "#b16286",
    aqua: "#689d6a",
    gray: "#a89984",

    light_gray: "#928374",
    light_red: "#fb4934",
    light_green: "#b8bb26",
    light_yellow: "#fabd2f",
    light_blue: "#83a598",
    light_purple: "#d3869b",
    light_aqua: "#8ec07c",
    fg: "#ebdbb2",

    bg0_h: "#1d2021",
    bg0: "#282828",
    bg0_s: "#32302f",
    bg1: "#3c3836",
    bg2: "#504945",
    bg3: "#665c54",
    bg4: "#7c6f64",

    fg0: "#fbf1c7",
    fg1: "#ebdbb2",
    fg2: "#d5c4a1",
    fg3: "#bdae93",
    fg4: "#a89984",

    orange: "#d65d0e",
    light_orange: "#fe8019",
};

const ascii_art = `
██╗    ██╗██╗██╗     ██╗     ██╗  ██╗ ██████╗ ███╗   ███╗███╗   ███╗███████╗███╗   ██╗
██║    ██║██║██║     ██║     ██║ ██╔╝██╔═══██╗████╗ ████║████╗ ████║██╔════╝████╗  ██║
██║ █╗ ██║██║██║     ██║     █████╔╝ ██║   ██║██╔████╔██║██╔████╔██║█████╗  ██╔██╗ ██║
██║███╗██║██║██║     ██║     ██╔═██╗ ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║
╚███╔███╔╝██║███████╗███████╗██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║███████╗██║ ╚████║
 ╚══╝╚══╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝
`;

const help_menu = `[[;${gruvbox_palette.green};]Available Commands:]

[[;${gruvbox_palette.orange};]help]          Show this help menu
[[;${gruvbox_palette.orange};]cd home]       Go to home page
[[;${gruvbox_palette.orange};]cd blogs]      Go to blogs page
[[;${gruvbox_palette.orange};]ls blogs]      List blogs
[[;${gruvbox_palette.orange};]open github]   Open my GitHub
[[;${gruvbox_palette.orange};]clear]         Clear the terminal
[[;${gruvbox_palette.orange};]pi]            Print pi up to 50 decimal places

Feel free to try out some other commands :)
`;

$("#terminal").terminal(
    function(what) {
        what = what.trim().toLowerCase();
        if (what === "help") {
            this.echo(help_menu);
            return;
        }
        if (what === "cd home") {
            window.location.href = "index.html";
            return;
        }
        if (what === "cd blogs") {
            window.location.href = "blogs.html";
            return;
        }
        if (what === "cd") {
            this.echo("Usage: cd <home|blogs>\n");
            return;
        }
        if (what === "ls blogs") {
            this.echo('<a href="blogs/arena-allocators.html">Arena Allocators</a>', {
                raw: true,
            });
            this.echo("\n");
            return;
        }
        if (what === "ls hobbies") {
            this.echo("- computers\n- cars\n- watches\n- art\n");
            return;
        }
        if (what === "ls") {
            this.echo("Usage: ls <blogs|hobbies>\n");
            return;
        }
        if (what === "open github") {
            this.echo("Opening Github...\n");
            window.open(
                "https://github.com/rb152080",
                "_blank",
                "noopener,noreferrer",
            );
            return;
        }
        if (what === "open") {
            this.echo("Usage: open <github>\n");
            return;
        }
        if (what === "which theme") {
            this.echo(
                '<a href="https://github.com/morhetz/gruvbox">Gruvbox Dark</a>',
                {
                    raw: true,
                },
            );
            this.echo("\n");
            return;
        }
        if (what === "which") {
            this.echo("Usage: which <theme>\n");
            return;
        }
        if (what === "pi") {
            this.echo("3.14159265358979323846264338327950288419716939937510\n");
            return;
        }
        if (what !== "") {
            this.echo(
                `[[;${gruvbox_palette.red};]Command not found: ${what}. Type 'help' for available commands.]\n`,
            );
        }
    },
    {
        greetings: `${ascii_art}\n${help_menu}`,
        prompt:
            `[[;${gruvbox_palette.green};]user]` +
            `[[;${gruvbox_palette.gray};]@]` +
            `[[;${gruvbox_palette.orange};]rb152080]` +
            `[[;${gruvbox_palette.gray};]:]` +
            `[[;${gruvbox_palette.blue};]~]` +
            `[[;${gruvbox_palette.purple};]$ ]`,
    },
);
