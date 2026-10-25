# 保存到 GitHub 并发布

这个文件夹已经是整理好的 GitHub 上传目录，约 **61 MB**。

- 根目录：源码、独立项目、预览图、主园包；
- `docs/`：已经构建好的可直接运行的静态站，用于 GitHub Pages；
- `docs/app.bundle.js` 与 `docs/index.html` 使用相对路径，可以部署在
  `https://<用户名>.github.io/<仓库名>/` 这种子路径下；
- `docs/.nojekyll` 已存在，防止 GitHub Pages 的 Jekyll 处理目录。

## 方式一：GitHub Desktop（推荐）

1. 安装 **GitHub Desktop**：<https://desktop.github.com/>
2. 打开 GitHub Desktop，登录你的 GitHub 账号。
3. 菜单 **File → Add local repository**。
4. 选择这个文件夹：
   `C:\Users\LENOVO\Documents\deepseek-harness\default-workspace\github-export`
5. 如果提示 “not a Git repository”，选择 **create a repository**，仓库名可用
   `astralia-theme-park`，然后点 **Create repository**。
6. 在左下角填写提交信息，例如
   `Add ASTRALIA 3D theme park`，点击 **Commit to main**。
7. 点上方 **Publish repository**：
   - 取消勾选 **Keep this code private**（免费 GitHub Pages 需要公开仓库）；
   - 点击 **Publish repository**。
8. 打开 GitHub 网页仓库，进入 **Settings → Pages**：
   - **Source**：`Deploy from a branch`
   - **Branch**：`main`
   - **Folder**：`/docs`
   - 点击 **Save**
9. 等待 1–3 分钟，访问：
   `https://<你的用户名>.github.io/<仓库名>/`

主园就在这个地址；独立项目在：

- `/balloon/`
- `/teacup/`
- `/pirate/`
- `/rainbow/`

## 方式二：Git 命令行

当前电脑还没有安装 Git。先安装 Git for Windows：

```powershell
winget install --id Git.Git -e --source winget
```

安装后重新打开终端，设置一次用户名和邮箱：

```powershell
git config --global user.name "你的 GitHub 用户名"
git config --global user.email "你的 GitHub 邮箱"
```

然后：

```powershell
cd C:\Users\LENOVO\Documents\deepseek-harness\default-workspace\github-export

git init
git add .
git commit -m "Add ASTRALIA 3D theme park"
git branch -M main
```

在 GitHub 网页新建一个 **空仓库**（不要勾选 Add README、不要加 .gitignore），
名字例如 `astralia-theme-park`，然后：

```powershell
git remote add origin https://github.com/<你的用户名>/astralia-theme-park.git
git push -u origin main
```

第一次 push 会弹出浏览器登录，或要求输入凭据：

- 推荐让 Git Credential Manager 弹出浏览器登录；
- 如果要求密码，**不要输入 GitHub 登录密码**，要使用
  **Personal Access Token**（Fine-grained token，至少给目标仓库
  `Contents: Read and write` 权限）。

## 发布 GitHub Pages

1. GitHub 仓库 → **Settings → Pages**
2. Source：**Deploy from a branch**
3. Branch：**main**，Folder：**/docs**
4. Save
5. 访问 `https://<用户名>.github.io/<仓库名>/`

## 之后如何更新

```powershell
cd C:\Users\LENOVO\Documents\deepseek-harness\default-workspace\github-export
git add .
git commit -m "Update park"
git push
```

如果修改了 `src/`，还需要重新生成 `docs/` 的静态包，否则 GitHub Pages 仍是旧版。

## 注意

- 仓库约 61 MB，其中 `preview/` 占约 33 MB，`dist/packages/` 约 2.3 MB；
  所有单文件都远小于 GitHub 的 100 MB 限制。
- 不要提交 `.tools/`、`.backups/`、`artifacts/`、`node_modules/` 或本地日志；
  已写入 `.gitignore`。
- `docs/` 是**发布副本**，根目录是**源码**。要更新线上页面时务必更新 `docs/`。
- 如果没有 Pages 选项，先确认仓库是 **Public**。
- 仓库名如果取 `<用户名>.github.io`，访问地址会变成
  `https://<用户名>.github.io/`，此时也可以把 `docs/` 内容放到仓库根目录；
  本项目建议保持当前的 `/docs` 方式，最简单。
