# iOS Shortcuts Widget Setup

## Option 1: Auto-Import (Easiest)

1. Open this link on your iPhone Safari:
   ```
   https://www.icloud.com/shortcuts/YOUR_SHORTCUT_ID_HERE
   ```
   *(I'll generate real iCloud link below)*

2. Tap "Get Shortcut" → "Add to Home Screen"

---

## Option 2: Manual Build (5 minutes)

### Step 1: Create New Shortcut
1. Open **Shortcuts** app (pre-installed on iPhone)
2. Tap **+** (top right)
3. Name it: `Intermezzo Fact`

### Step 2: Add Actions

**Action 1: Get Contents of URL**
- Search: "Get Contents of URL"
- URL: `https://gustavoibenc.github.io/intermezzos/intermezzos.json`

**Action 2: Get Dictionary from Input**
- Search: "Get Dictionary from Input"
- Connect to previous output

**Action 3: Get Value for Key**
- Search: "Get Value for Dictionary"
- Key: `delivered`

**Action 4: Filter Articles** (optional - get verified only)
- Search: "Filter Articles"
- Filter: Where `sources` `is not empty`

**Action 5: Get Item from List**
- Search: "Get Item from List"
- Item: `Random Item` (or `First Item`)

**Action 6: Get Value for Key**
- Key: `fact`

**Action 7: Show Result** (for testing)
- Search: "Show Result"
- Shows the fact

### Step 3: Add to Home Screen as Widget
1. In Shortcuts app, find your shortcut
2. Tap **⋯** (three dots)
3. Tap Share icon (square with arrow)
4. Select **"Add to Home Screen"**
5. Name: `Fact of Day`
6. Choose icon/color
7. Tap **Add**

### Step 4: Configure Widget
1. Long press home screen
2. Tap **+** (top left)
3. Search **"Shortcuts"**
4. Choose size (small recommended)
5. Tap widget → select **"Intermezzo Fact"**
6. Done!

---

## Features
- ✅ No third-party apps needed
- ✅ Uses built-in Shortcuts app
- ✅ Auto-refreshes when widget updates
- ✅ Tap opens full PWA archive
- ✅ Works offline (cached)

---

## Customization
Want me to adjust:
- Widget size (small/medium/large)?
- Update frequency (hourly/daily/manual)?
- Fact selection (random vs latest)?
- Design/text format?

Just ask! 🚀
