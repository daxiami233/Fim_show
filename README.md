# Fim 展示包

这是一个独立的静态展示包，只包含前端展示页和展示数据，不包含审核页、审核接口或主项目后端依赖。

## 运行

```bash
cd show
python server.py
```

默认访问：

```text
http://127.0.0.1:8788/
```

也可以指定端口：

```bash
python server.py 9000
```

## 内容

- `index.html`：展示页入口
- `static/`：页面脚本和样式
- `data/`：展示数据
- `assets/`：缺陷截图资源
- `server.py`：独立静态服务器，使用 Python 标准库
