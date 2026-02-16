# Check your A records are pointing to your VPS
dig kitthekat.xyz +short
dig www.kitthekat.xyz +short
# Both should return your VPS IP

# Also useful
ping kitthekat.xyz


# This shared network lets NPM talk to all your other containers
docker network create proxy


mkdir -p ~/docker/nginx-proxy && cd ~/docker/nginx-proxy
nano docker-compose.yml

# Put in file
services:
  npm:
    image: jc21/nginx-proxy-manager:latest
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - "80:80"       # HTTP
      - "443:443"     # HTTPS
      - "81:81"       # Admin Panel
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    networks:
      - proxy

networks:
  proxy:
    name: proxy
    external: true

# Run
docker compose up -d

# Verify it's running
docker ps

http://YOUR_VPS_IP:81
Email:    admin@example.com
Password: changeme





# 🐱 kitthekat.xyz — Complete VPS Setup Guide

## 1. DNS — Point Domain to VPS

Add these DNS records at your domain registrar:

```
Type  | Name  | Value          | TTL
------|-------|----------------|-----
A     | @     | 209.74.82.72   | 300
A     | www   | 209.74.82.72   | 300
A     | *     | 209.74.82.72   | 300   ← wildcard for subdomains
```

Verify:

```bash
dig kitthekat.xyz +short
dig www.kitthekat.xyz +short
ping kitthekat.xyz
# All should return 209.74.82.72
```

---

## 2. Docker Network

```bash
docker network create proxy
```

---

## 3. Nginx Proxy Manager

```bash
mkdir -p ~/docker/nginx-proxy && cd ~/docker/nginx-proxy
nano docker-compose.yml
```

```yaml
services:
  npm:
    image: jc21/nginx-proxy-manager:latest
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "81:81"        # remove later after securing with subdomain
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    networks:
      - proxy

networks:
  proxy:
    name: proxy
    external: true
```

```bash
docker compose up -d
docker ps
```

Login at **http://209.74.82.72:81**

```
Default email:    admin@example.com
Default password: changeme
→ Change both immediately on first login
```

---

## 4. Landing Page

```bash
mkdir -p ~/docker/landing && cd ~/docker/landing
nano docker-compose.yml
```

```yaml
services:
  landing:
    image: nginx:alpine
    container_name: landing
    restart: unless-stopped
    volumes:
      - ./html:/usr/share/nginx/html:ro
    networks:
      - proxy

networks:
  proxy:
    external: true
```

```bash
mkdir html
nano html/index.html
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kitthekat.xyz</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #0a0a0a;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container { text-align: center; }
        h1 { font-size: 3rem; margin-bottom: 0.5rem; }
        .cat { font-size: 5rem; margin-bottom: 1rem; }
        p { color: #888; font-size: 1.2rem; }
    </style>
</head>
<body>
    <div class="container">
        <div class="cat">🐱</div>
        <h1>kitthekat.xyz</h1>
        <p>self-hosted everything</p>
    </div>
</body>
</html>
```

```bash
docker compose up -d
```

---

## 5. Add Proxy Host + HTTPS in NPM

Go to **http://209.74.82.72:81** → **Proxy Hosts** → **Add Proxy Host**

```
DETAILS TAB:
├── Domain Names:        kitthekat.xyz
│                        www.kitthekat.xyz
│                        (press Enter after each one)
├── Scheme:              http
├── Forward Hostname/IP: landing        ← must match container name exactly!
├── Forward Port:        80
├── Block Common Exploits: ✅
└── Websockets Support:    ✅

SSL TAB:
├── SSL Certificate:     Request a new SSL Certificate
├── Force SSL:           ✅
├── HTTP/2 Support:      ✅
├── HSTS Enabled:        ✅
├── Email:               your-real-email@gmail.com
└── Agree to TOS:        ✅
```

Click **Save** → wait 15-30 seconds.

Test:

```
https://kitthekat.xyz       ← 🔒 padlock + landing page
https://www.kitthekat.xyz   ← same
http://kitthekat.xyz        ← auto redirects to https
```

---

## 6. Secure NPM Behind Subdomain

Add another proxy host in NPM:

```
DETAILS TAB:
├── Domain Names:        npm.kitthekat.xyz
├── Scheme:              http
├── Forward Hostname/IP: nginx-proxy-manager
├── Forward Port:        81
├── Block Common Exploits: ✅
└── Websockets Support:    ✅

SSL TAB:
├── Request a new SSL Certificate
├── Force SSL:           ✅
├── HTTP/2 Support:      ✅
├── HSTS Enabled:        ✅
├── Email:               your-real-email@gmail.com
└── Agree to TOS:        ✅
```

Verify **https://npm.kitthekat.xyz** works, then remove port 81:

```bash
cd ~/docker/nginx-proxy
nano docker-compose.yml
```

```yaml
services:
  npm:
    image: jc21/nginx-proxy-manager:latest
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      # - "81:81"    ← removed, now only accessible via npm.kitthekat.xyz
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    networks:
      - proxy

networks:
  proxy:
    name: proxy
    external: true
```

```bash
docker compose up -d
```

---

## 7. Adding Any New Service (Repeatable Pattern)

```bash
mkdir -p ~/docker/SERVICENAME && cd ~/docker/SERVICENAME
nano docker-compose.yml
```

```yaml
services:
  SERVICENAME:
    image: whatever/image:latest
    container_name: SERVICENAME
    restart: unless-stopped
    volumes:
      - ./data:/some/path
    # NO ports needed! NPM handles routing
    networks:
      - proxy

networks:
  proxy:
    external: true
```

```bash
docker compose up -d
```

Then in NPM → Proxy Hosts → Add:

```
Domain:              SERVICENAME.kitthekat.xyz
Scheme:              http
Forward Hostname/IP: SERVICENAME     ← container name, spell it right!
Forward Port:        XXXX            ← container's internal port
SSL → Request cert → Force SSL ✅
```

---

---

## Subdomain Plan

```
kitthekat.xyz              → landing page
npm.kitthekat.xyz          → Nginx Proxy Manager
status.kitthekat.xyz       → Uptime Kuma
portainer.kitthekat.xyz    → Portainer
vault.kitthekat.xyz        → Vaultwarden
cloud.kitthekat.xyz        → Nextcloud
photos.kitthekat.xyz       → Immich
git.kitthekat.xyz          → Forgejo
pdf.kitthekat.xyz          → Stirling PDF
tools.kitthekat.xyz        → IT-Tools
dash.kitthekat.xyz         → Homepage dashboard
media.kitthekat.xyz        → Jellyfin
```
