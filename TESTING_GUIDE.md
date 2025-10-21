# 📱 Testing Guide - Responsive Website

## Cara Test Website di Berbagai Perangkat

### 1️⃣ **TESTING DI CHROME (RECOMMENDED)**

#### Desktop Browser:
1. Buka `index.html` di Chrome
2. Tekan `F12` untuk membuka DevTools
3. Tekan `Ctrl + Shift + M` (atau klik icon mobile 📱)
4. Pilih device dari dropdown:
   - iPhone SE
   - iPhone 12 Pro
   - Pixel 5
   - Samsung Galaxy S20
   - iPad Air
   - iPad Mini

#### Test Berbagai Ukuran:
- **Desktop**: Resize window > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: 375px - 768px
- **Small Mobile**: < 375px

### 2️⃣ **TESTING ORIENTASI**

Di Chrome DevTools:
1. Klik icon rotate (↻) untuk switch portrait/landscape
2. Test di kedua orientasi

### 3️⃣ **TESTING FITUR**

#### ✅ Navigation:
- [ ] Menu terlihat di semua ukuran
- [ ] Search box berfungsi
- [ ] Links clickable/tappable

#### ✅ Homepage:
- [ ] Hero section terlihat bagus
- [ ] History section readable
- [ ] Vision & Mission layout baik
- [ ] Team images resize

#### ✅ Formation Page:
- [ ] Formation display terlihat
- [ ] Player positions jelas
- [ ] Lineup info accessible

#### ✅ Players Page:
- [ ] Carousel dapat di-swipe
- [ ] Player cards terlihat
- [ ] Detail pemain muncul saat diklik

#### ✅ Gallery Page:
- [ ] Category buttons works
- [ ] Images load properly
- [ ] Lightbox berfungsi

#### ✅ Inventory Page:
- [ ] Form dapat diisi
- [ ] Table scrollable di mobile
- [ ] Filters berfungsi
- [ ] Add/Edit/Delete works

#### ✅ Register Page:
- [ ] User form accessible
- [ ] Player form accessible
- [ ] File upload works
- [ ] Validation berfungsi

### 4️⃣ **TESTING DI REAL DEVICE**

#### Smartphone:
1. Connect ke same network
2. Find IP address: `ipconfig` (Windows) atau `ifconfig` (Mac/Linux)
3. Di phone browser: `http://[YOUR-IP]/path/to/rtd/index.html`
4. Atau gunakan live server di VS Code

#### Recommended Testing:
- Test di Android phone
- Test di iPhone
- Test di tablet
- Test berbagai browsers (Chrome, Safari, Firefox)

### 5️⃣ **COMMON ISSUES & FIXES**

#### Issue: Layout tidak berubah
**Fix**: Clear cache (`Ctrl + F5`)

#### Issue: Images tidak muncul
**Fix**: Check file paths, gunakan relative paths

#### Issue: Horizontal scroll
**Fix**: Check max-width settings

#### Issue: Touch tidak responsif
**Fix**: Ensure touch events enabled

### 6️⃣ **PERFORMANCE CHECK**

#### Chrome Lighthouse:
1. Buka DevTools (F12)
2. Tab "Lighthouse"
3. Select "Mobile"
4. Click "Generate report"

**Target Scores:**
- Performance: > 80
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 7️⃣ **BROWSER COMPATIBILITY**

Test di:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

---

## 🎯 QUICK TEST COMMAND

### Using Live Server (VS Code Extension):
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Test on `http://localhost:5500`

### Using Python:
```bash
# Python 3
cd path/to/rtd
python -m http.server 8000

# Access: http://localhost:8000
```

### Using Node.js:
```bash
# Install http-server
npm install -g http-server

# Run server
cd path/to/rtd
http-server -p 8000

# Access: http://localhost:8000
```

---

## 📸 SCREENSHOT CHECKLIST

Ambil screenshot di:
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Landscape mode

---

## ✅ FINAL CHECKLIST

- [ ] All pages load correctly
- [ ] No console errors
- [ ] Images load and resize
- [ ] Forms functional
- [ ] Navigation works
- [ ] Responsive at all breakpoints
- [ ] Touch interactions smooth
- [ ] No horizontal scrolling
- [ ] Text readable without zoom
- [ ] Buttons easily tappable
- [ ] Carousel/swiper works
- [ ] Tables scrollable
- [ ] Footer displays correctly

---

**Happy Testing! 🚀**
