// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let choose = "";
    if (license === "APACHE 2.0") {
        choose = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
        return choose
    }
    if (license === "MIT") {
        choose = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
        return choose
    }
    if (license === "NONE"){
        choose = ""
        return choose
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {//Choices in index.js, if a license is selected than the currect URL is chosen
    let choose = "";
    if (license === "APACHE 2.0"){
        choose = "(https://opensource.org/licenses/Apache-2.0)"
        return choose
    } if (license === "MIT"){
     choose = "(https://opensource.org/licenses/MIT)"
     return choose
 } if (license === "NONE"){
    //empty string
     choose = ""
     return choose
 }
 } 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const bLink = renderLicenseBadge(license) + renderLicenseLink(license);
    return `##License
    ${bLink}
    
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;