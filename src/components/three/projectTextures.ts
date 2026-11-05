"use client";

import * as THREE from "three";
import { ProjectItem } from "@/data/projects";

/**
 * Creates high-resolution procedural canvas textures representing realistic
 * browser interfaces for each project to be applied to the 3D browser planes.
 * Strictly adheres to unslop rules: zero emojis, quiet chrome, deliberate typography.
 */
export function createProjectTexture(project: ProjectItem): THREE.CanvasTexture {
  if (typeof document === "undefined") {
    return new THREE.Texture() as unknown as THREE.CanvasTexture;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  // Background
  ctx.fillStyle = project.preview.accentBg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top browser header bar
  ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
  ctx.fillRect(0, 0, canvas.width, 44);

  // Window control dots
  const dotY = 22;
  ctx.beginPath();
  ctx.arc(28, dotY, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#FF5F56";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(46, dotY, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#FFBD2E";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(64, dotY, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#27C93F";
  ctx.fill();

  // Browser URL bar
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.roundRect(120, 8, canvas.width - 240, 28, 6);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "12px 'SF Mono', monospace";
  ctx.fillText(`https://sameera.dev/${project.id}`, 140, 26);

  // Project-Specific UI Content
  if (project.id === "amazon-clone") {
    // Amazon Clone Interface
    ctx.fillStyle = "#232F3E";
    ctx.fillRect(0, 44, canvas.width, 42);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText("amazon", 28, 70);
    ctx.fillStyle = "#FF9900";
    ctx.fillText(".in", 85, 70);

    ctx.fillStyle = "rgba(255,255,255,0.75)";
    ctx.font = "13px sans-serif";
    ctx.fillText("Deliver to Narasaraopet 522601", 130, 70);
    ctx.fillText("All Categories", 430, 70);
    ctx.fillText("Deals", 550, 70);
    ctx.fillText("Cart (2)", 930, 70);

    // Hero banner
    const grad = ctx.createLinearGradient(0, 86, 0, 250);
    grad.addColorStop(0, "#19222D");
    grad.addColorStop(1, "#131921");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 86, canvas.width, 170);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("Curated Home & Tech Essentials", 44, 150);
    ctx.fillStyle = "#FF9900";
    ctx.font = "16px sans-serif";
    ctx.fillText("Explore deals across electronics, kitchen, and work desks", 44, 185);

    // Quad product cards
    const cardWidth = 220;
    const cardHeight = 280;
    const cardY = 275;

    for (let i = 0; i < 4; i++) {
      const cardX = 34 + i * (cardWidth + 24);
      ctx.fillStyle = "#FFFFFF";
      ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 6);
      ctx.fill();

      ctx.fillStyle = "#131921";
      ctx.font = "bold 14px sans-serif";
      const titles = ["Electronics", "Home & Studio", "Audio Gear", "Smart Displays"];
      ctx.fillText(titles[i], cardX + 16, cardY + 28);

      ctx.fillStyle = "#F5F3EE";
      ctx.roundRect(cardX + 16, cardY + 44, cardWidth - 32, 150, 4);
      ctx.fill();

      ctx.fillStyle = "#283C32";
      ctx.font = "12px sans-serif";
      ctx.fillText("Featured Category " + (i + 1), cardX + 26, cardY + 125);

      ctx.fillStyle = "#CC0C39";
      ctx.font = "bold 14px sans-serif";
      ctx.fillText("Featured Deal", cardX + 16, cardY + 225);

      ctx.fillStyle = "#565959";
      ctx.font = "12px sans-serif";
      ctx.fillText("View details →", cardX + 16, cardY + 252);
    }
  } else if (project.id === "restaurant-menu") {
    // Elegant Culinary Menu Interface
    ctx.fillStyle = "#FDFBF7";
    ctx.fillRect(0, 44, canvas.width, canvas.height - 44);

    ctx.fillStyle = "#2C221E";
    ctx.font = "normal 32px serif";
    ctx.fillText("L'Aura Bistro & Lounge", 360, 105);

    ctx.fillStyle = "#C96D48";
    ctx.font = "12px 'SF Mono', monospace";
    ctx.fillText("ESTABLISHED 2026 — DINING MENU", 400, 130);

    ctx.strokeStyle = "rgba(44, 34, 30, 0.12)";
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(canvas.width - 100, 150);
    ctx.stroke();

    const categories = ["STARTERS & TAPAS", "MAINS & SPECIALTIES"];
    for (let c = 0; c < 2; c++) {
      const colX = 70 + c * 470;
      ctx.fillStyle = "#C96D48";
      ctx.font = "bold 14px 'SF Mono', monospace";
      ctx.fillText(categories[c], colX, 195);

      const items = c === 0 ? [
        { name: "Crispy Truffle Croquettes", price: "₹340", desc: "Aged parmesan, smoked garlic aioli, fresh herbs" },
        { name: "Mediterranean Bruschetta", price: "₹280", desc: "Heirloom tomatoes, fresh basil, balsamic reduction" },
        { name: "Spiced Prawn Skewers", price: "₹460", desc: "Chili coriander infusion, lime remoulade" },
        { name: "Roasted Pumpkin Veloute", price: "₹260", desc: "Toasted pumpkin seeds, nutmeg crema" },
      ] : [
        { name: "Handcrafted Fettuccine Funghi", price: "₹520", desc: "Wild porcini, sage butter, pecorino romano" },
        { name: "Pan-Seared Herb Salmon", price: "₹680", desc: "Asparagus spears, saffron emulsion, fingerling potatoes" },
        { name: "Wood-Fired Garden Pizza", price: "₹490", desc: "Artisanal dough, sun-dried tomatoes, basil pesto" },
        { name: "Slow-Braised Lamb Shank", price: "₹740", desc: "Rosemary reduction, velvety potato mash" },
      ];

      items.forEach((item, idx) => {
        const itemY = 235 + idx * 88;
        ctx.fillStyle = "#2C221E";
        ctx.font = "500 17px serif";
        ctx.fillText(item.name, colX, itemY);

        ctx.fillStyle = "#C96D48";
        ctx.font = "500 15px serif";
        ctx.fillText(item.price, colX + 340, itemY);

        ctx.fillStyle = "#777B76";
        ctx.font = "13px sans-serif";
        ctx.fillText(item.desc, colX, itemY + 20);

        ctx.strokeStyle = "rgba(44, 34, 30, 0.05)";
        ctx.beginPath();
        ctx.moveTo(colX, itemY + 32);
        ctx.lineTo(colX + 390, itemY + 32);
        ctx.stroke();
      });
    }
  } else if (project.id === "game-hub") {
    // Game Hub Interface (Clean vector D-pads, zero emoji slop)
    ctx.fillStyle = "#121A16";
    ctx.fillRect(0, 44, canvas.width, canvas.height - 44);

    ctx.fillStyle = "#4E876E";
    ctx.font = "12px 'SF Mono', monospace";
    ctx.fillText("ARCADE CATALOG // BROWSER TITLES", 48, 85);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal 28px sans-serif";
    ctx.fillText("Browser Game Hub", 48, 122);

    const games = [
      { title: "Grid Hopper", genre: "Arcade Platformer", color: "#3D6E58" },
      { title: "Orbital Striker", genre: "Space Shooter", color: "#4A6B82" },
      { title: "Pixel Maze 2D", genre: "Puzzle Adventure", color: "#8B6B48" },
      { title: "Velocity Drift", genre: "Time Trial Racing", color: "#C96D48" },
    ];

    games.forEach((g, idx) => {
      const gx = 48 + idx * 230;
      const gy = 155;

      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.roundRect(gx, gy, 215, 360, 8);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.stroke();

      ctx.fillStyle = g.color;
      ctx.roundRect(gx + 12, gy + 12, 191, 185, 6);
      ctx.fill();

      // Clean vector controller D-Pad mark instead of emoji
      const cx = gx + 107;
      const cy = gy + 105;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.fillRect(cx - 16, cy - 5, 32, 10);
      ctx.fillRect(cx - 5, cy - 16, 10, 32);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(g.title, gx + 16, gy + 235);

      ctx.fillStyle = "#A9B7A0";
      ctx.font = "12px sans-serif";
      ctx.fillText(g.genre, gx + 16, gy + 260);

      ctx.fillStyle = "#4E876E";
      ctx.roundRect(gx + 16, gy + 300, 183, 38, 6);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "13px sans-serif";
      ctx.fillText("Launch Game", gx + 60, gy + 324);
    });
  } else if (project.id === "ai-tools-hub") {
    // AI Tools Hub Interface
    ctx.fillStyle = "#161D22";
    ctx.fillRect(0, 44, canvas.width, canvas.height - 44);

    ctx.fillStyle = "#587C96";
    ctx.font = "12px 'SF Mono', monospace";
    ctx.fillText("DIRECTORY // INTELLIGENCE", 48, 85);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal 28px sans-serif";
    ctx.fillText("AI Tools Directory", 48, 122);

    const pills = ["All tools", "Language models", "Vision & design", "Code assistants"];
    let pillX = 48;
    pills.forEach((p, i) => {
      ctx.fillStyle = i === 0 ? "#587C96" : "rgba(255, 255, 255, 0.06)";
      const pWidth = ctx.measureText(p).width + 26;
      ctx.roundRect(pillX, 145, pWidth, 30, 4);
      ctx.fill();

      ctx.fillStyle = i === 0 ? "#FFFFFF" : "#A9B7A0";
      ctx.font = "12px sans-serif";
      ctx.fillText(p, pillX + 13, 165);
      pillX += pWidth + 10;
    });

    const tools = [
      { name: "ChatGPT 4.0", cat: "Conversational Reasoning", desc: "Analysis, ideation, and technical drafting." },
      { name: "Claude 3.5 Sonnet", cat: "Code & Logic Synthesis", desc: "Contextual refactoring and algorithmic breakdown." },
      { name: "Midjourney v6", cat: "Generative Imagery", desc: "Visual exploration and design concepts." },
      { name: "GitHub Copilot", cat: "Developer Workflow", desc: "Inline contextual completion in editor." }
    ];

    tools.forEach((t, idx) => {
      const tx = 48 + (idx % 2) * 470;
      const ty = 205 + Math.floor(idx / 2) * 180;

      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      ctx.roundRect(tx, ty, 440, 150, 8);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.stroke();

      ctx.fillStyle = "#587C96";
      ctx.font = "11px 'SF Mono', monospace";
      ctx.fillText(t.cat, tx + 24, ty + 36);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 18px sans-serif";
      ctx.fillText(t.name, tx + 24, ty + 68);

      ctx.fillStyle = "#9BA3AF";
      ctx.font = "13px sans-serif";
      ctx.fillText(t.desc, tx + 24, ty + 100);

      ctx.fillStyle = "#587C96";
      ctx.font = "12px sans-serif";
      ctx.fillText("View tool →", tx + 350, ty + 130);
    });
  } else {
    // Rock Paper Scissors Game Interface (Clean geometric marks, zero emoji slop)
    ctx.fillStyle = "#1E1A16";
    ctx.fillRect(0, 44, canvas.width, canvas.height - 44);

    ctx.fillStyle = "#9C7952";
    ctx.font = "12px 'SF Mono', monospace";
    ctx.fillText("JAVASCRIPT ENGINE // REAL-TIME LOGIC", 48, 85);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal 28px sans-serif";
    ctx.fillText("Rock • Paper • Scissors", 360, 122);

    // Scoreboard
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.roundRect(280, 155, 464, 100, 8);
    ctx.fill();

    ctx.fillStyle = "#E4DCD3";
    ctx.font = "14px sans-serif";
    ctx.fillText("PLAYER", 350, 190);
    ctx.fillText("COMPUTER", 600, 190);

    ctx.fillStyle = "#9C7952";
    ctx.font = "bold 38px sans-serif";
    ctx.fillText("4", 370, 235);
    ctx.fillText("2", 635, 235);

    ctx.fillStyle = "#777B76";
    ctx.font = "18px sans-serif";
    ctx.fillText("VS", 502, 222);

    // Choices with clean geometric marks
    const choices = [
      { glyph: "circle", name: "ROCK", sub: "Crushes scissors" },
      { glyph: "square", name: "PAPER", sub: "Covers rock" },
      { glyph: "triangle", name: "SCISSORS", sub: "Cuts paper" }
    ];

    choices.forEach((c, idx) => {
      const cx = 160 + idx * 240;
      const cy = 290;

      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.roundRect(cx, cy, 210, 220, 8);
      ctx.fill();
      ctx.strokeStyle = idx === 1 ? "#9C7952" : "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Clean vector symbol drawing
      const sx = cx + 105;
      const sy = cy + 65;
      ctx.strokeStyle = "#9C7952";
      ctx.lineWidth = 3;

      if (c.glyph === "circle") {
        ctx.beginPath();
        ctx.arc(sx, sy, 24, 0, Math.PI * 2);
        ctx.stroke();
      } else if (c.glyph === "square") {
        ctx.strokeRect(sx - 20, sy - 20, 40, 40);
      } else {
        ctx.beginPath();
        ctx.moveTo(sx - 20, sy + 18);
        ctx.lineTo(sx + 20, sy - 18);
        ctx.moveTo(sx + 20, sy + 18);
        ctx.lineTo(sx - 20, sy - 18);
        ctx.stroke();
      }

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(c.name, cx + 80, cy + 135);

      ctx.fillStyle = "#9BA3AF";
      ctx.font = "12px sans-serif";
      ctx.fillText(c.sub, cx + 55, cy + 168);
    });

    ctx.fillStyle = "#9C7952";
    ctx.font = "13px serif";
    ctx.fillText("Status: Player's turn — Choose an option to trigger game engine evaluation", 260, 560);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}
