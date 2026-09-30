from pathlib import Path
import math
out=Path('/tmp/aurelia/assets'); out.mkdir(exist_ok=True)

def svg(name, inner, bg1='#f5eee7', bg2='#ead8c8'):
    s=f'''<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1200" viewBox="0 0 1000 1200">
<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="{bg1}"/><stop offset="1" stop-color="{bg2}"/></linearGradient><radialGradient id="glow"><stop stop-color="#fff" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
<rect width="1000" height="1200" fill="url(#bg)"/><circle cx="790" cy="180" r="250" fill="url(#glow)"/>
{inner}</svg>'''
    (out/name).write_text(s)

def ring(cx,cy,r,stone='#fffaf2',gold='#b98a52'):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{gold}" stroke-width="34"/><circle cx="{cx}" cy="{cy-r-10}" r="54" fill="{stone}" stroke="{gold}" stroke-width="18"/><circle cx="{cx}" cy="{cy-r-10}" r="22" fill="#fff" opacity=".9"/>'
def necklace(gold='#b98a52', pearl='#fffaf2'):
    pts=[]
    for i in range(31):
        x=500+220*math.cos(math.pi+i*math.pi/30); y=380+300*math.sin(math.pi+i*math.pi/30)
        pts.append(f'{x:.0f},{y:.0f}')
    return f'<polyline points="{" ".join(pts)}" fill="none" stroke="{gold}" stroke-width="12"/><path d="M500 680 L500 820" stroke="{gold}" stroke-width="10"/><circle cx="500" cy="850" r="78" fill="{pearl}" stroke="{gold}" stroke-width="16"/><circle cx="480" cy="828" r="18" fill="#fff"/>'
def earrings(gold='#b98a52', stone='#fffaf2'):
    return f'<g stroke="{gold}" fill="{stone}" stroke-width="14"><path d="M390 360v100c0 100 70 100 70 0V360"/><path d="M610 360v100c0 100 70 100 70 0V360"/><circle cx="425" cy="600" r="75"/><circle cx="645" cy="600" r="75"/></g>'
def bracelet(gold='#b98a52'):
    return f'<ellipse cx="500" cy="620" rx="270" ry="180" fill="none" stroke="{gold}" stroke-width="50"/><ellipse cx="500" cy="620" rx="205" ry="130" fill="none" stroke="#fffaf2" stroke-width="18" opacity=".9"/>'

items=[('ring-1.svg',ring(500,650,170)),('necklace-1.svg',necklace()),('earrings-1.svg',earrings()),('bracelet-1.svg',bracelet()),
('ring-2.svg',ring(500,650,170,'#f8d8d2','#a87949')),('necklace-2.svg',necklace('#9b7449','#f6eadf')),('earrings-2.svg',earrings('#a87848','#f7ddd8')),('ring-3.svg',ring(500,650,170,'#dfe7df','#9c7045')),('bracelet-2.svg',bracelet('#9c7045')),('earrings-3.svg',earrings('#8e6845','#fff')),('necklace-3.svg',necklace('#b18455','#fff6ed')),('bracelet-3.svg',bracelet('#b47f4d'))]
for n,art in items: svg(n,art)
# category images can reuse richer compositions
svg('category-rings.svg', ring(500,670,190), '#f6efe8','#dfcbb9')
svg('category-necklaces.svg', necklace(), '#f3e9df','#d8c0ab')
svg('category-earrings.svg', earrings(), '#f7eee7','#dfc8b6')
svg('category-bracelets.svg', bracelet(), '#f4e9df','#d6bea9')
svg('hero.svg', '<ellipse cx="760" cy="650" rx="330" ry="420" fill="#ead7c5" opacity=".7"/><path d="M610 930 C610 600 650 340 800 290 C940 350 965 610 920 930Z" fill="#d9bda5"/><circle cx="800" cy="300" r="125" fill="#f0c8b4"/><path d="M680 300 Q760 170 875 260 Q925 330 900 410 Q850 320 690 370Z" fill="#4b362c"/><path d="M745 360 L760 540" stroke="#b98a52" stroke-width="10"/><circle cx="760" cy="545" r="32" fill="#fffaf2" stroke="#b98a52" stroke-width="9"/><circle cx="735" cy="450" r="18" fill="#fffaf2" stroke="#b98a52" stroke-width="7"/>', '#f7f0e9','#e3cdbb')
svg('story.svg', '<rect x="120" y="170" width="760" height="860" rx="30" fill="#e1c5ae"/><circle cx="500" cy="480" r="150" fill="#f2d0ba"/><path d="M260 930 Q330 610 500 600 Q680 620 760 930Z" fill="#b9987f"/><path d="M340 460 Q500 250 680 430 Q650 570 520 620 Q380 560 340 460Z" fill="#4b382f"/><circle cx="540" cy="610" r="48" fill="#fffaf2" stroke="#b98a52" stroke-width="12"/>', '#2c241f','#57463a')
svg('page-hero.svg', necklace('#a97749','#fff8f0'), '#f4e8dc','#cdb29d')
svg('about.svg', '<rect x="120" y="130" width="760" height="940" rx="34" fill="#dfc5b0"/><path d="M270 930 Q320 570 500 520 Q700 570 740 930Z" fill="#9d7b68"/><circle cx="500" cy="420" r="150" fill="#efc4ae"/><path d="M340 420 Q430 230 650 300 Q690 410 620 520 Q500 450 360 520Z" fill="#46352e"/><path d="M430 540 Q500 700 570 540" fill="none" stroke="#b98a52" stroke-width="13"/><circle cx="500" cy="700" r="42" fill="#fffaf2" stroke="#b98a52" stroke-width="11"/>', '#f1e4da','#d3b6a0')
