from pathlib import Path
import shutil

root = Path('.')
out = root / 'deploy-netlify'
if out.exists():
    shutil.rmtree(out)
out.mkdir()
shutil.copy2(root / 'index.html', out / 'index.html')
for name in ['src', 'vendor', 'teacup', 'pirate', 'balloon', 'rainbow']:
    shutil.copytree(root / name, out / name)
files = [p for p in out.rglob('*') if p.is_file()]
print('files', len(files), 'bytes', sum(p.stat().st_size for p in files))
