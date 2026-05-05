# IT23327108 – IT3040 Assignment 1

## Project Title

Automated Testing for Singlish to Sinhala Transliteration System

---

## Repository

https://github.com/IT23507/IT23327108.git

---

## Project Structure

IT3040_Assignment_1/

* test_automation.py → Playwright automation script
* Assignment 1 - Test cases.xlsx → Excel file with test cases and results
* requirements.txt → Python dependencies
* README.md → Project documentation

---

## Technologies Used

* Python
* Playwright (UI Automation)
* OpenPyXL (Excel handling)

---

## How to Run the Project

1. Open terminal inside the project folder

2. (Optional) Activate virtual environment

   ```
   venv\Scripts\activate
   ```

3. Install dependencies

   ```
   pip install -r requirements.txt
   ```

4. Install Playwright browsers

   ```
   python -m playwright install
   ```

5. Run the automation script

   ```
   python test_automation.py --excel "Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator"
   ```

---

## Output

* Results are automatically written to the Excel file
* The following columns are updated:

  * Actual output
  * Status (PASS / FAIL)

---

## Test Case Details

* Total Test Cases: 50
* Test Type: Negative Testing (failure-focused)

### Covered Input Types:

* Question forms and commands
* Greetings and requests
* Slang and casual conversational inputs
* Mixed Sinhala + English language usage
* Romanized spelling variations (Singlish forms)
* URLs, emails, and mentions (@tags)
* Emojis and symbols
* Dates, time expressions, currency, and numbers
* Personal names and locations
* Technical and system-related inputs

All test cases are designed to identify incorrect transliteration outputs and system limitations.

---

## Important Notes

* The system uses strict comparison between expected and actual outputs
* Even small differences (spacing, punctuation, or spelling) result in FAIL
* Failures are expected due to:

  * Transliteration inconsistencies
  * Mixed language complexity
  * Ambiguous Singlish inputs

---

## Student Information

* Student ID: IT23327108
* Module: IT3040
* Assignment: Assignment 1 (Option 1)

---

## Final Status

✔ Automation script successfully executes test cases
✔ Excel file automatically updated with results
✔ 50 negative test cases evaluated
✔ System limitations and failures identified

---

## Submission Notes

* Virtual environment (venv) is excluded from submission
* All required files are included
* Project is fully runnable using requirements.txt
