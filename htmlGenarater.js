// Uses objects to creat html

function manager(obj) {
    // Uses the obj to creat a manager card in html
    const managerCard = `
<section>
    <div class="cardHead">
        <h2>${obj.name}</h2>
        <h2>Manager</h2>
    </div>
    <div class="cardFoot">
        <div>ID: ${obj.ID}</div>
        <div>email: ${obj.email}</div>
        <div>${obj.officeNum}</div>
    </div>
    <style>
        .cardHead {
            background-color: blue;
            color: white;
            padding-left: 10px;

        }

        section {
            max-width: 250px;
            margin: auto;
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
        <h2>${obj.name}</h2>
        <h2>Manager</h2>
    </div>
    <div class="cardFoot">
        <div>ID: ${obj.ID}</div>
        <div>email: ${obj.email}</div>
        <div>${obj.github}</div>
    </div>
    <style>
        .cardHead {
            background-color: blue;
            color: white;
            padding-left: 10px;

        }

        section {
            max-width: 250px;
            margin: auto;
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
        <h2>${obj.name}</h2>
        <h2>Manager</h2>
    </div>
    <div class="cardFoot">
        <div>ID: ${obj.ID}</div>
        <div>email: ${obj.email}</div>
        <div>${obj.school}</div>
    </div>
    <style>
        .cardHead {
            background-color: blue;
            color: white;
            padding-left: 10px;

        }

        section {
            max-width: 250px;
            margin: auto;
        }
    </style>
</section>
    `;
    return internCard;
}

function genarateHtml(genhtmllist) { 
        // top of the html file
        const htmlTop = `
<!DOCTYPE html>
<html lang="en">
        
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

        
<body>`;

// Generated content of the html file

// Bottom of the html file
        const htmlBottom = `
</body>

</html>`;

    //return 
}

module.exports = {
    manager,
    engineer,
    intern,
    genarateHtml
};