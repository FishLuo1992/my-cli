const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { listTable } = require(`${__dirname}/../utils`)
const { resolve } = require('path')
const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')

let tplList = require(`${__dirname}/../templates`)

const question = [
  {
    type: 'input',
    name: 'name',
    message: '需要clone的仓库内模板:',
    validate (val) {
      if (tplList[val]) {
        return true
      } else if (val === '') {
        return '必须填模板名称!'
      } else if (!tplList[val]) {
        return '仓库中没有此模板！'
      }
    }
  },
  {
    type: 'input',
    name: 'project',
    message: '新建项目名称:',
    validate (val) {
      if (val !== '') {
        return true
      }
      return '必须有项目名称!'
    }
  },
  {
    type: 'input',
    name: 'place',
    message: '创建文件相对路径:',
    default: './'
  }
]

module.exports = prompt(question).then(({ name, project, place }) => {
  const gitPlace = tplList[name]['owner/name']
  const gitBranch = tplList[name]['branch']
  const spinner = ora('Downloading template...')

  spinner.start()

  download(`${gitPlace}#${gitBranch}`, `${place}/${project}`, { clone:true },(err) => {
    if (err) {
      console.log(chalk.red(err))
      process.exit()
    }
    spinner.stop()
    console.log(chalk.green('新建模板成功!'))
  })
})
