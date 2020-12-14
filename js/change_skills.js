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
            document.getElementById("skills_holder").innerHTML = '<h1>XD lol</h1>'
            break;
        case "others":
            document.getElementById("skills_holder").innerHTML = `<h1>Otheeers</h1>`;
            break;
    }
}