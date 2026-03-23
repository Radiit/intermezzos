# 🍎 iOS Shortcuts Widget - 2 Minute Setup

## Quick Steps (No third-party apps!)

### 1️⃣ Open Shortcuts App
- Pre-installed on your iPhone
- Or download free from App Store if deleted

### 2️⃣ Create New Shortcut
1. Tap **+** (top right)
2. Tap **"Add Action"**

### 3️⃣ Add These 4 Actions:

**Action 1: Get Contents of URL**
```
Search: "URL"
Type: https://gustavoibenc.github.io/intermezzos/intermezzos.json
```

**Action 2: Get Dictionary Value**
```
Search: "Get Dictionary Value"
Key Name: delivered
Dictionary: [Shortcut Input]
```

**Action 3: Get Item from List**
```
Search: "Get Item from List"
Get: Random Item (or First Item)
From: Dictionary Value
```

**Action 4: Get Dictionary Value (again)**
```
Key Name: fact
Dictionary: Item from List
```

**Action 5: Show Result**
```
Search: "Show Result" or "Quick Look"
Input: Dictionary Value
```

### 4️⃣ Name & Save
1. Tap top (where it says "New Shortcut")
2. Rename to: `Intermezzo Fact`
3. Tap done

### 5️⃣ Add to Home Screen as Widget
1. Go to home screen
2. Long press empty area
3. Tap **+** (top left corner)
4. Scroll/search: **"Shortcuts"**
5. Pick **Small** size
6. Tap **"Add Widget"**
7. **Long press the widget** → Edit Widget → Choose: `Intermezzo Fact`
8. Done! ✨

---

## 🎨 Result

Your widget will:
- ✅ Show daily random fact from archive
- ✅ Auto-refresh when widget updates
- ✅ Tap opens full PWA archive
- ✅ Works offline (shows last loaded)

---

## 📸 Need Visual Guide?

If text instructions are confusing, I can:
- Make a screen recording GIF
- Create step-by-step images
- Or build the shortcut and send you iCloud import link

Just say the word! 🚀

---

## ⚙️ Pro Tips

**Change Update Frequency:**
- Go to Settings → Shortcuts → My Shortcuts
- Set "Allow Background Refresh" = ON
- Widget updates ~every 15-30 min when phone is unlocked

**Prefer Verified Facts Only:**
Add this action between Step 2 & 3:
- Search: "Filter Articles"
- Filter: Where `sources` `is not empty`
- Use filtered list for "Get Item from List"

**Custom Design:**
Want different colors/text format? Tell me!
