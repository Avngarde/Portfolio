function change_skill(section) {
    switch (section) {
        case "frontend":
                document.getElementById("skills_holder").innerHTML = `
                <div class="skill" style="background-color: rgb(97, 218, 251)">
                    <img id="react_image" src="images/react.svg">
                    <p>React</p>
                </div>
                <div class="skill" style="background-color:rgb(187, 237, 247); color: #000;">
                    <img id="tailwind_image" src="images/tailwind.svg">
                    <p>TailwindCSS</p>
                </div>
                <div class="skill" style="background-color:rgb(240, 219, 79);">
                    <img id="javascript_image" src="images/javascript.svg">
                    <p>JavaScript</p>
                </div>
                <div class="skill" style="background-color:rgb(13, 46, 87); color: white;">
                    <img id="typescript_image" src="images/typescript.svg">
                    <p>TypeScript</p>
                </div>
                <div class="skill" style="background-color: rgb(237, 118, 71)">
                    <img id="html_image" src="images/html.svg">
                    <p>HTML</p>
                </div>
                <div class="skill" style="background-color: rgb(54, 141, 198)">
                    <img id="css_image" src="images/css.svg">
                    <p>CSS</p>
                </div>
            `;
            break;
        case "backend":
            document.getElementById("skills_holder").innerHTML = `
                <div class="skill" style="background-color: #7fd5ea">
                    <img id="go_image" src="images/Goblack.svg">
                    <p>Golang</p>
                </div>
                <div class="skill" style="background-color: rgb(104, 160, 99);">
                    <img id="node_image" src="images/node.svg">
                    <p>NodeJS</p>
                </div>
                <div class="skill" style="background-color: rgb(238, 238, 238);">
                    <img id="express_image" src="images/expressjs.svg">
                    <p>ExpressJS</p>
                </div>
                <div class="skill" style="background-color: rgb(36, 67, 97); color: #fff;">
                    <img id="python_image" src="images/python.svg">
                    <p>Python</p>
                </div>
            `
            break;
        case "others":
            document.getElementById("skills_holder").innerHTML = `
                <div class="skill" style="background-color: rgb(43, 46, 58); color: white;">
                    <img id="electron_image" src="images/electron.svg">
                    <p>ElectronJS</p>
                </div>
                <div class="skill" style="background-color:rgb(102, 160, 55); color: #000;">
                    <img id="mongo_image" src="images/mongodb.svg">
                    <p>MongoDB</p>
                </div>
                <div class="skill" style="background-color: rgb(97, 218, 251)">
                    <img id="react_image" src="images/react.svg">
                    <p>React Native</p>
                </div>
                <div class="skill" style="background-color:rgb(209, 54, 70); color: #000;">
                    <img id="git_image" src="images/git.svg">
                    <p>Git</p>
                </div>
            `;
            break;
    }
}