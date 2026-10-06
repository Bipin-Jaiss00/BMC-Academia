# BMC Academia - Modern Interactive Learning Platform
### Tribhuvan University — Butwal Multiple Campus (BUMC)

**BMC Academia** is an engaging, state-of-the-art web platform engineered to assist and maximize the academic efficiency of students at **Butwal Multiple Campus (BMC)** across all faculties:
- **B.Sc. CSIT** (Computer Science & Information Technology - 8 Semesters)
- **BBA** (Bachelor of Business Administration - 8 Semesters)
- **BICTE** (Bachelor of Information Communication Technology Education - 8 Semesters)
- **LLB** (Bachelor of Laws - 5 Semesters)

---

## 🚀 Running on Localhost (Any Computer)

This project is built to run effortlessly on **any computer (Windows, macOS, Linux)** right after cloning from GitHub. **Zero build steps or third-party package installations are needed!**

### 📦 Quick Start with Node.js (Recommended)
If you have [Node.js](https://nodejs.org/) installed:
```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd "BMC Academia Proto"

# 2. Start the local server (zero npm dependencies required!)
npm start
# or: node server.js
```
The server will start at **`http://localhost:3000`** and automatically open in your default browser!

---

### 🪟 Windows 1-Click Run
Just double-click **`start.bat`** in the project folder. It will detect your environment, launch the localhost server, and open your browser automatically.

---

### 🍎 macOS & 🐧 Linux 1-Click Run
Run the included shell script in your terminal:
```bash
chmod +x start.sh
./start.sh
```

---

### 🐍 Alternative: Using Python
If you have Python installed:
```bash
# Python 3 (Windows, macOS, Linux)
python -m http.server 3000

# On some macOS/Linux systems:
python3 -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your web browser.

---

### 💻 Alternative: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and click **"Open with Live Server"**.

---

### 🌐 Direct File Opening
You can also double-click `index.html` to open it directly in Chrome, Edge, Safari, Firefox, or Brave without running any server.

---

## 🌟 Key Features & Architecture

### 1. 🗂️ Intuitive Top "Go-To" Navigation Bar
- **Campus Logo & Branding**: Official BMC crest and Tribhuvan University constituent badge.
- **Home**: Quick metrics, curriculum explorer, and academic pillar overview.
- **Faculties Dropdown**: Instant jump to **CSIT**, **BBA**, **BICTE**, or **LLB**.
- **Self Upload Studio**: Dedicated AI study engine placed **right between Faculties and About** in the main navigation bar.
- **About Campus**: Authentic campus stature, history, QAA accreditation, and Chief's address from `bumc.tu.edu.np`.
- **Contact Us**: Official campus address (Butwal, Rupandehi), telephone (`071-530134`), email (`info@bumc.tu.edu.np`), and Information Officer details (`Vijay Sapkota - 9857030648`).
- **Quick Search (`Ctrl + K`)**: Instant search across 100+ courses and syllabus units.
- **Light & Dark Mode**: Seamless toggle with persistent `localStorage` preference.

---

### 2. 📚 Seamless Academic Hierarchy Flow
The platform follows a clear progression tailored for Tribhuvan University students:
1. **Choose Faculty** (`CSIT`, `BBA`, `BICTE`, `LLB`)
2. **Choose Semester** (Semesters 1–8 or Semesters 1–5 for LLB)
3. **Choose Subject** (With official course codes: e.g. `CSC110`, `MGT201`, `ICT Ed. 415`, `LAW101`)
4. **Choose Chapter/Unit**
5. **Launch Chapter Study Hub** equipped with **4 Rich Learning Modes**:
   - 📝 **Outliner Notes**: Hierarchical bullet points, collapsible parent/child chevrons (`▾ / ▸`), exam-alert callouts, and active recall cloze deletions (`[...]` blurred pills that reveal on click).
   - 🗂️ **Spaced Repetition 3D Flashcards**: 3D animated flip cards with spaced repetition ratings:
     - `Again (<10m)` — Re-inserts card into review queue
     - `Hard (1d)`
     - `Good (4d)`
     - `Easy (7d)`
     - Real-time study streak counter and progress bar.
   - 📜 **TU Past Questions & Step-by-Step Solutions**: Real TU board examination questions (TU 2078, 2079, 2080, 2081) with 5-mark and 10-mark breakdowns, code blocks, diagrams, and model answers.
   - 🤖 **AI Academic Tutor**: Interactive doubt solver contextualized to that specific subject and chapter. Includes preset prompt chips (*"Explain with an analogy"*, *"Quiz me"*, *"10-mark TU exam tips"*) and custom question input.

---

### 3. ✨ Self Upload Studio (AI Ingestion Engine)
Located right in the Go-To navbar between **Faculties** and **About**:
- **Multi-Modal Input Options**:
  - Drag-and-drop lecture PDFs, Word documents, text notes, or scanned images.
  - Paste YouTube video links or online lecture streams.
  - Paste raw lecture notes or transcripts.
- **Simulated AI Processing Pipeline**:
  - Live animated 4-stage pipeline (OCR & transcription → Concept extraction → Hierarchical bullet synthesis → Spaced-repetition card & question generation).
- **Personal Study Vault**:
  - Saved custom notebooks persist in browser `localStorage` under "My Personal Study Vault", allowing students to open or delete custom study decks anytime.

---

## 🏛️ Official Campus References Integrated
- **Institution**: Butwal Multiple Campus (BUMC / BMC), Tribhuvan University
- **Campus Chief**: Dr. Arun Kumar Kshetree
- **Information Officer**: Mr. Vijay Sapkota (9857030648 / vijay.sapkota@bumc.tu.edu.np)
- **Official Campus Website**: [bumc.tu.edu.np](https://bumc.tu.edu.np/)
- **Campus Phone**: 071-530134
- **Campus Email**: info@bumc.tu.edu.np
