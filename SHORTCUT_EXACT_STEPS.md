# 🍎 iOS Shortcuts Widget - Exact Steps

## ⏱️ Time: 3 minutes

---

## Step 1: Open Shortcuts App
- Find **Shortcuts** app on your iPhone (pre-installed by Apple)
- If deleted, redownload free from App Store

---

## Step 2: Create New Shortcut
1. Tap **+** icon (top right corner)
2. You'll see blank shortcut screen
3. Tap **"Add Action"** button (big blue button)

---

## Step 3: Add Action 1 - Get URL Contents

**Search & Select:**
```
Type in search: "URL"
Tap: "Get Contents of URL"
```

**Configure:**
```
URL field: paste this exactly:
https://gustavoibenc.github.io/intermezzos/intermezzos.json

Method: Should say "GET" automatically
```

---

## Step 4: Add Action 2 - Parse JSON

**Search & Select:**
```
Type: "JSON"
Tap: "Get Dictionary Value"
```

**Configure:**
```
Key Name: type → delivered
Dictionary: tap "Shortcut Input" or previous result
```

---

## Step 5: Add Action 3 - Pick Random Fact

**Search & Select:**
```
Type: "Item from List"
Tap: "Get Item from List"
```

**Configure:**
```
Get: Random Item (tap to change from "First Item")
From: Dictionary Value (should auto-connect)
```

---

## Step 6: Add Action 4 - Extract Fact Text

**Search & Select:**
```
Type: "Dictionary" again
Tap: "Get Dictionary Value"
```

**Configure:**
```
Key Name: type → fact
Dictionary: Item from List (previous step)
```

---

## Step 7: Add Action 5 - Show Result

**Search & Select:**
```
Type: "Show"
Tap: "Show Result" or "Quick Look"
```

**Configure:**
```
Input: Dictionary Value (from previous step)
```

---

## Step 8: Name & Save

1. Tap top where it says **"New Shortcut #123"**
2. Type name: **`Intermezzo Fact`**
3. Tap keyboard **Return/Enter** key
4. Tap **Done** (top right)

---

## Step 9: Test It!

1. In Shortcuts app, find your new `Intermezzo Fact` shortcut
2. **Tap it once** to run
3. Should show popup with a fact!
4. If works → proceed to widget setup

---

## Step 10: Add to Home Screen as Widget

### A. Go to Home Screen
1. Press home button or swipe up to exit apps
2. Go to any home screen page

### B. Enter Jiggle Mode
1. **Long press** empty area of screen
2. Apps start jiggling

### C. Add Widget
1. Tap **+** button (top left corner)
2. In search bar, type: **"Shortcuts"**
3. Tap **"Shortcuts"** in results
4. Scroll to **MEDIUM** size
5. Tap **"Add Widget"** (bottom)
6. Widget appears on home screen

### D. Configure Widget
1. **Tap the widget once** (while still in jiggle mode)
2. Or **long press** → "Edit Shortcut"
3. Choose: **`Intermezzo Fact`** (the one you made)
4. Tap outside to exit edit mode

### E. Done!
1. Tap **Done** (top right) to exit jiggle mode
2. Widget now shows daily facts! ✨

---

## 🎨 Customization Options

### Change Refresh Rate:
Widgets auto-refresh when:
- You unlock phone
- iOS decides to update (~every 15-30 min)
- Can't force specific intervals (iOS limitation)

### Change Which Fact Shows:
In Step 5, change:
- **Random Item** → shows different fact each time
- **First Item** → shows latest fact
- **Last Item** → shows oldest fact

### Make It Pretty:
1. Long press widget
2. Tap "Edit Shortcut"
3. Tap gear icon ⚙️ (top right)
4. Choose different icon/color

---

## ❓ Troubleshooting

**Widget says "No Content":**
- Run shortcut manually once first (Step 8)
- Check internet connection
- Wait 1 minute, refresh home screen

**Wrong fact showing:**
- Widget caches content
- Pull down home screen to refresh
- Or restart Shortcuts app

**Want to modify later:**
- Open Shortcuts app
- Tap `⋯` on your shortcut
- Edit actions
- Changes apply to widget automatically

---

## 🧊 About Clear Glass Effect

**Bad news:** iOS Shortcuts widgets **don't support transparency**
- Will have solid background (white in light mode, dark in dark mode)
- Automatically matches iOS theme

**Good news:** It still looks clean and minimal!

For TRUE glass blur, need Scriptable app (but that's third-party).

---

## ✅ What You Built

- ✅ Native iOS widget (no extra apps)
- ✅ Pulls from your Intermezzo Archive
- ✅ Auto-updates throughout day
- ✅ Tap opens full PWA (optional - add "Open URLs" action if wanted)
- ✅ Works offline (shows last loaded fact)

Enjoy! 🎉

Questions? Ask me! 👇
