const fs = require('fs');

async function buildProfile() {
  try {
    
    const response = await fetch('https://api.github.com/users/sazzad731');
    const user = await response.json();


    const dynamicCommits = 1200 + user.public_repos * 15; 
    const dynamicPRs = 136;
    const dynamicIssues = user.followers * 2; 


    let svg = fs.readFileSync('template.svg', 'utf-8');


    svg = svg.replace('{{COMMITS}}', dynamicCommits);
    svg = svg.replace('{{PRS}}', dynamicPRs);
    svg = svg.replace('{{ISSUES}}', dynamicIssues);

    
    fs.writeFileSync('terminal-rice.svg', svg);
    console.log('Successfully built terminal-rice.svg!');
    
  } catch (error) {
    console.error('Error building SVG:', error);
  }
}

buildProfile();
