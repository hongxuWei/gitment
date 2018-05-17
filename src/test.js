var Gitment = Gitment || require('./gitment')

if (!config) {
  throw new Error('You need your own config to run this test.')
}

const gitment = new Gitment(config)

gitment.render('container')

window.gitment = gitment

try {
  window.http = require('./utils').http
} catch (e) {}
