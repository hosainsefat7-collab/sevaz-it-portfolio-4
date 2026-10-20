#!/usr/bin/env python3
"""Usage: python3 set-domain.py https://www.yourdomain.com
Replaces the YOUR-DOMAIN.com placeholder in index.html, sitemap.xml and robots.txt."""
import sys
if len(sys.argv)!=2 or not sys.argv[1].startswith('http'): sys.exit(__doc__)
d=sys.argv[1].rstrip('/')
for f in ('index.html','sitemap.xml','robots.txt'):
    t=open(f,encoding='utf-8').read().replace('https://YOUR-DOMAIN.com',d)
    open(f,'w',encoding='utf-8').write(t)
print('Domain set to',d)
