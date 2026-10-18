# 数据结构课件

本项目使用 Quarto 编写数据结构课程课件，并通过 GitHub Pages 发布为网页。课件源文件（`.qmd`）和所需图片、样式保存在仓库中；GitHub Actions 会在推送到 `main` 分支时自动生成并部署网站。

## 本地预览

安装 [Quarto](https://quarto.org/) 和 Python/Jupyter 后，在项目根目录运行：

```sh
quarto preview
```

生成静态网站：

```sh
quarto render
```

生成文件位于 `_site/`。

## 发布到 GitHub Pages

1. 将本项目推送到 GitHub 仓库的 `main` 分支。
2. 在仓库的 **Settings → Pages → Build and deployment** 中，将 **Source** 设为 **GitHub Actions**。
3. 等待 **Actions** 中的 `Publish Quarto site to GitHub Pages` 工作流完成。之后可在 Pages 设置页查看网站链接；后续推送到 `main` 会自动更新网站。

项目主页和课件目录由根目录的 `index.qmd` 与 `_quarto.yml` 管理。
