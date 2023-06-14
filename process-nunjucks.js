const fs = require('fs');
const nunjucks= require('nunjucks')

fs.readFile('src/views/page-template.njk', 'utf8', function(err, data){
    nunjucks.configure( ["node_modules/govuk-frontend/","src/views/"]);
    const renderedPage = nunjucks.renderString(data, { foo: 'blim' });
    fs.writeFile('dist/index.html', renderedPage, (error)=>{console.log(error)});
});
