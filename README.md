

# 下载(推荐使用淘宝镜像或yarn)
```
npm install lion-cli -g
```
or
```
yarn golbal add lion-cli


# 使用
输入 `fish` or `fish -h`查看脚手架命令, 可以看到:
```
  Usage: fish <command>


  Commands:

    list|l     List all the templates
    init|i     Generate a new project

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

# Commands

### add
添加模板
```
$ fish add

### delete
删除模板
```
$ fish delete

### list
仓库中所有的模板
```
$ fish list
Owner/Name --> git 项目仓库的 name/templateName

```

### init
clone模板生成自己的项目
```
$ fish init

? 需要clone的仓库内模板: my-first-template
? 新建项目名称: my-project
? 创建文件的相对路径? ../
⠹ Downloading template...

新建模板成功!
```










