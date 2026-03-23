// INTERMEZZO iOS WIDGET - Scriptable App
// Install: https://apps.apple.com/us/app/scriptable/id1405459188

const API_URL = 'https://gustavoibenc.github.io/intermezzos/intermezzos.json';

async function fetchFact() {
  try {
    const req = new Request(API_URL);
    const json = await req.loadJSON();
    const facts = json.delivered || [];
    
    // Get verified facts first, then random
    const verified = facts.filter(f => f.sources && f.sources.length > 0);
    const unverified = facts.filter(f => !f.sources || f.sources.length === 0);
    
    // Pick random fact (prefer verified)
    const pool = verified.length > 0 ? verified : unverified;
    const fact = pool[Math.floor(Math.random() * pool.length)];
    
    return {
      fact: fact.fact,
      topic: fact.topic,
      date: new Date(fact.deliveredAt[0]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  } catch (e) {
    return {
      fact: "Failed to load fact. Check internet connection.",
      topic: "Error",
      date: ""
    };
  }
}

async function createWidget() {
  const data = await fetchFact();
  
  const widget = new ListWidget();
  widget.backgroundGradient = new LinearGradient();
  widget.backgroundGradient.colors = [new Color("#ff6b9d"), new Color("#ff8fa3")];
  widget.backgroundGradient.locations = [0, 1];
  widget.cornerRadius = 16;
  widget.setPadding(16, 16, 16, 16);
  
  // Header
  const header = widget.addText("✨ Fact of the Day");
  header.textColor = Color.white();
  header.font = Font.boldSystemFont(12);
  header.textOpacity = 0.9;
  widget.addSpacer(8);
  
  // Topic badge
  const topicStack = widget.addStack();
  topicStack.backgroundColor = new Color("rgba(255,255,255,0.2)");
  topicStack.cornerRadius = 8;
  topicStack.setPadding(6, 10, 6, 10);
  const topicText = topicStack.addText(data.topic);
  topicText.textColor = Color.white();
  topicText.font = Font.mediumSystemFont(10);
  widget.addSpacer(12);
  
  // Main fact text
  const factText = widget.addText(data.fact);
  factText.textColor = Color.white();
  factText.font = Font.regularSystemFont(14);
  factText.lineLimit = 0;
  widget.addSpacer(12);
  
  // Footer date
  const footer = widget.addText(`📅 ${data.date}`);
  footer.textColor = Color.white();
  footer.font = Font.mediumSystemFont(11);
  footer.textOpacity = 0.85;
  
  // Tap to open app
  widget.url = "https://gustavoibenc.github.io/intermezzos/";
  
  return widget;
}

// For home screen widget
if (config.runsInWidget) {
  const widget = await createWidget();
  Script.setWidget(widget);
  Script.complete();
} else {
  // Preview in app
  const widget = await createWidget();
  widget.presentMedium();
}
