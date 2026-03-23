#!/bin/bash
# Generate QR code using Google Charts API
SHORTCUT_URL="https://gustavoibenc.github.io/intermezzos/IntermezzoFact.shortcut"
curl -s "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=$SHORTCUT_URL&color=6366f1&bgcolor=ffffff" > widget-qr.png
echo "✅ QR code downloaded: widget-qr.png"
echo "   Points to: $SHORTCUT_URL"
