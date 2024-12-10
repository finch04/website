# Mac用户生存指南

## 软件安装报错，显示文件已损坏

### Solution：
`sudo xattr -r -d com.apple.quarantine /Application/<app_name>`


## 包管理器homebrew
国外官网`https://brew.sh`
国内镜像脚本`https://gitee.com/cunkai/HomebrewCN`

## 下载一些常用开发工具
```
brew install pkg-config telnet openssl wget proxychains-ng cmake 
```

## oh-my-zsh

```
wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
sh install.sh
```

