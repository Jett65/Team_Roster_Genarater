// Uses objects to creat html

function manager(obj) {
    // Uses the obj to creat a manager card in html
    const managerCard = `
<section>
    <div class="cardHead">
        <h2 id="name">${obj.name}</h2>
        <h2>Manager</h2>
    </div>
    <div class="cardFoot">
        <div>ID: ${obj.ID}</div>
        <div>
            <a href="mailto: ${obj.email}">Email: ${obj.email}</a>
        </div>
        <div>Office Number: ${obj.officeNumber}</div>
    </div>
    <style>
        .cardHead {
            background-color: blue;
            color: white;
            padding-left: 10px; 
            padding-bottom: 5px
        }

        .cardFoot div{
            margin-top: 5px;
            margin-bottom: 5px;
            margin-left: 20px;
            padding-top: 30px;
        }

        #name {
            margin-top: 0%;
        }


        section {
            max-width: 250px;
            margin: auto;
            border: solid black;
        }
    </style>
</section>
    `;
    return managerCard;
}

function engineer(obj) {
    // Uses the obj to creat an engineer card in html
    const engineerCard = `
<section>
    <div class="cardHead">
        <h2 id="name">${obj.name}</h2>
        <h2>Engineer</h2>
    </div>
    <div class="cardFoot">
        <div>ID: ${obj.ID}</div>
        <div>
            <a href="mailto: ${obj.email}">Email: ${obj.email}</a>
        </div>
        <div>
            <a href="https://github.com/${obj.github}">GitHub Username: ${obj.github}</a>
        </div>
    </div>
    <style>
        .cardHead {
            background-color: blue;
            color: white;
            padding-left: 10px; 
            padding-bottom: 5px
        }

        .cardFoot div{
            margin-top: 5px;
            margin-bottom: 5px;
            margin-left: 20px;
            padding-top: 30px;
        }

        #name {
            margin-top: 0%;
        }


        section {
            max-width: 250px;
            margin: auto;
            border: solid black;
        }
    </style>
</section>
    `;
    return engineerCard;
}

function intern(obj) {
    // Uses the obj to creat an intern card in html
    const internCard = `
<section>
    <div class="cardHead">
        <h2 id="name">${obj.name}</h2>
        <h2>Intern</h2>
    </div>
    <div class="cardFoot">
        <div>ID: ${obj.ID}</div>
        <div>
            <a href="mailto: ${obj.email}">Email: ${obj.email}</a>
        </div>
        <div>School: ${obj.school}</div>
    </div>
    <style>
        .cardHead {
            background-color: blue;
            color: white;
            padding-left: 10px; 
            padding-bottom: 5px
        }

        .cardFoot div{
            margin-top: 5px;
            margin-bottom: 5px;
            margin-left: 20px;
            padding-top: 30px;
        }

        #name {
            margin-top: 0%;
        }


        section {
            max-width: 250px;
            margin: auto;
            border: solid black;
        }
    </style>
</section>
    `;
    return internCard;
}

function generateHtml(genHtmlList) {
    // top of the html file

    let htmlTop = `
<!DOCTYPE html>
<html lang="en">
        
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

        
<body>

    <header>
            <h1>My Team</h1>

            <style>
                header {
                    width: 100%;
                    height: 100px;
                    margin-bottom: 70px;
                    background-color: #ee6565;
                    color: white;
                }

                h1 {
                    padding: 0%;
                    padding-top: 30px;
                    padding-left: 50%;
                }
            </style>

    </header>
`;

    // Bottom of the html file
    const htmlBottom = `

    <style>
        section {
            display: inline-block;
            min-width: 250px;
            min-height: 300px;
            max-width: 250px;
            max-height: 300px;
            margin: auto;
            margin-left: 10%;
            margin-top: 30px;
            border: solid black;
            border-radius: 2%;
    }
    </style>

</body>

    

</html>`;
    // Add content to the html
    for (let i = 0; i < genHtmlList.length; i++) {
        htmlTop += genHtmlList[i];
    };
    htmlTop += htmlBottom;

    return htmlTop;
}

module.exports = {
    manager,
    engineer,
    intern,
    generateHtml
};