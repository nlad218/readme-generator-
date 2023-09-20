// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(
      / /g,
      "%20"
    )}-blue.svg)`;
  }
  return "";
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `- [License](#license)`;
  }
  return "";
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License\nThis project is licensed under the ${license} license`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  ${renderLicenseLink(data.license)}
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions 
  ${data.contributions}

  ${renderLicenseSection(data.license)}

  ## Testing 
  ${data.testing}

  ## Questions 
  If you have any questions please email me at ${data.email}
  If you want to see more of my work please visit me at [${
    data.github
  }](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
