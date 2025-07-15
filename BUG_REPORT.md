# Bug Report – Problem 295: Find Median from Data Stream

## ❌ Error:
Line 2 in solution.js

class PriorityQueue {

SyntaxError: Identifier 'PriorityQueue' has already been declared

vbnet
Copy
Edit

## 📌 Cause:
The `PriorityQueue` class is likely being declared multiple times — either due to repeated test executions or how the test environment handles class scopes. This results in a naming conflict.

## ✅ Suggested Fix:
Rename the `PriorityQueue` class to something more unique like `MyPriorityQueue`.

Just submitting this to report the issue. Let me know if you'd like me to submit a patch!
