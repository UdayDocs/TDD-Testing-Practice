# 🧪 JavaScript Testing with Jest 🚀

Welcome to this project where we practice **Test-Driven Development (TDD)** using **Jest**! 
🧑‍💻 This repository contains functions and their corresponding tests to ensure everything works as expected. 🛠️

---

## 📦 **Project Setup**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

---

## 🧩 **Functions & Tests**

### 1. **`capitalize(string)`**
- **What it does**: Capitalizes the first letter of a string.  
  Example: `hello` → `Hello`  
- **Test file**: `capitalize.test.js`

---

### 2. **`reverseString(string)`**
- **What it does**: Reverses a string.  
  Example: `hello` → `olleh`  
- **Test file**: `reverseString.test.js`

---

### 3. **`calculator` Object**
- **What it does**: Performs basic math operations (`add`, `subtract`, `multiply`, `divide`).  
  Example: `calculator.add(2, 3)` → `5`  
- **Test file**: `calculator.test.js`

---

### 4. **`caesarCipher(string, shift)`**
- **What it does**: Shifts each letter in a string by a specified number (Caesar cipher).  
  Example: `abc` (shift 3) → `def`  
- **Test file**: `caesarCipher.test.js`

---

### 5. **`analyzeArray(array)`**
- **What it does**: Analyzes an array of numbers and returns an object with `average`, `min`, `max`, and `length`.  
  Example: `[1, 8, 3, 4, 2, 6]` → `{ average: 4, min: 1, max: 8, length: 6 }`  
- **Test file**: `analyzeArray.test.js`

---

## 🛠️ **Technologies Used**
- **JavaScript (ES6)** 🟨
- **Jest** (Testing framework) 🧪
- **Babel** (For ES6 module support) 🛠️

---

## 🧪 **Running Tests**
To run all tests, use:
```bash
npm test
```

---

## 📂 **Project Structure**
```
project-root/
├── src/                  # Source files
│   ├── capitalize.js
│   ├── reverseString.js
│   ├── calculator.js
│   ├── caesarCipher.js
│   └── analyzeArray.js
├── tests/                # Test files
│   ├── capitalize.test.js
│   ├── reverseString.test.js
│   ├── calculator.test.js
│   ├── caesarCipher.test.js
│   └── analyzeArray.test.js
├── babel.config.js       # Babel configuration
├── package.json          # Project dependencies
└── README.md             # You're here! 😄
```

---
