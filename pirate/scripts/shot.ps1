param(
  [Parameter(Mandatory = $true)][string]$Url,
  [Parameter(Mandatory = $true)][string]$Out,
  [int]$Budget = 9000,
  [int]$Width = 1600,
  [int]$Height = 900
)

$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$profile = Join-Path $env:TEMP ("dsh-pirate-qa-" + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Force -Path $profile | Out-Null
$chromeArgs = @(
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu-sandbox',
  '--disable-dev-shm-usage',
  '--enable-unsafe-swiftshader',
  '--use-angle=swiftshader',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--force-color-profile=srgb',
  '--disable-application-cache',
  '--disk-cache-size=1',
  '--media-cache-size=1',
  "--user-data-dir=$profile",
  "--window-size=$Width,$Height",
  "--virtual-time-budget=$Budget",
  "--screenshot=$Out",
  $Url
)

function Stop-QaChrome {
  Get-CimInstance Win32_Process -Filter "Name = 'chrome.exe'" -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandLine -match 'headless|chrome-qa|remote-debugging' } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
}

$ok = $false
for ($attempt = 1; $attempt -le 3; $attempt++) {
  Stop-QaChrome
  Start-Sleep -Seconds 2
  if (Test-Path $Out) { Remove-Item $Out -Force }
  & $chrome @chromeArgs 2>&1 | Select-Object -Last 2 | Out-String | Write-Host
  Start-Sleep -Seconds 1
  if ((Test-Path $Out) -and ((Get-Item $Out).Length -gt 1000)) {
    Write-Host "OK $Out ($((Get-Item $Out).Length) bytes)"
    $ok = $true
    break
  }
  Write-Host "Attempt $attempt failed; retrying..."
  Start-Sleep -Seconds 2
}

Stop-QaChrome
Remove-Item -Recurse -Force $profile -ErrorAction SilentlyContinue
if (-not $ok) { throw "Chrome did not capture $Out after 3 attempts" }
