# 📝 Intro Component with Sign-Up Form

A responsive sign-up form with real-time validation built with vanilla JavaScript.

## 🚀 [Live Demo](#)

![Form Validation Screenshot](screenshot-url)

## 🎯 Project Purpose

**What**: A sign-up form with client-side validation that provides instant feedback to users. The form validates all input fields for empty values and checks email format using HTML5's built-in validation API.

**Why**: Throughout my frontend development journey, I realized I had never built a proper form validation project. This was the perfect opportunity to fill that gap and gain hands-on experience with form handling and validation in JavaScript.

**Learning Goals**:
- Master form validation techniques in vanilla JavaScript
- Understand the HTML5 Constraint Validation API
- Practice real-time user feedback with event listeners
- Work with DOM manipulation for dynamic error messages
- Explore modern CSS selectors like `:has()`
- Build accessible forms with proper labeling

## 🛠️ Built With

- HTML5 (Semantic markup, Form validation attributes)
- CSS3 (Custom properties, Flexbox, Media queries)
- Vanilla JavaScript (ES6+)
- HTML5 Constraint Validation API

## ✨ Features

- ✅ Real-time form validation
- ✅ Empty field detection for all inputs
- ✅ Email format validation using `checkValidity()`
- ✅ Dynamic error message insertion and removal
- ✅ Error messages disappear as users type
- ✅ Visual error indicators (red borders, error icons)
- ✅ Accessible form with hidden labels for screen readers
- ✅ Fully responsive design (mobile to desktop)
- ✅ Clean, modern UI with smooth interactions
- ✅ Hover states for interactive elements

## 💭 Development Journey

### Wins

This project was a walk in the park! Everything came together smoothly because I had already done the groundwork - I'd read about form validation on MDN docs before attempting this project, so I knew exactly what I needed to do.

The biggest win? **I completed this entire project on my own without any outside help.** That's a moment worth celebrating! I'm patting myself on the back because this is when I truly started feeling like a real programmer. When you can read documentation, understand concepts, and implement them independently, that's when you know you're making real progress.

Using the `:has()` CSS selector was also a pleasant surprise. I had read about it earlier and never imagined I'd use it so soon. Seeing it work perfectly for styling inputs with errors felt like discovering a superpower.

### Challenges & Solutions

**"Challenge"**: There weren't really any challenges with this project.

**Why**: I had already read the MDN documentation on form validation and the `checkValidity()` method before starting. When you prepare by reading documentation first, implementation becomes straightforward. This project reinforced an important lesson: **documentation is your friend, and reading ahead pays off.**

### Key Learnings

1. **Form Validation with JavaScript**: I learned how to validate forms using JavaScript's built-in methods rather than writing complex regex patterns from scratch. The `checkValidity()` method makes email validation incredibly simple and reliable.

2. **HTML5 Constraint Validation API**: Understanding that browsers have built-in validation capabilities was eye-opening. The `novalidate` attribute lets me disable browser defaults so I can create custom validation feedback.

3. **Event Listeners - `submit` vs `input`**: I learned the difference between form submission validation and real-time validation. The `submit` event checks everything when the user tries to submit, while `input` events provide instant feedback as users type.

4. **Dynamic DOM Manipulation**: Creating error elements with `createElement()`, inserting them with `.after()`, and removing them with `.remove()` gave me more confidence in manipulating the DOM programmatically.

5. **The `:has()` CSS Selector**: This was my first time using this powerful modern CSS feature! The selector `input:has(+ .error)` allows me to style an input based on whether it has an error message sibling. This eliminates the need for adding/removing classes on the input itself.

6. **Accessibility Best Practices**: I learned about hiding labels visually while keeping them accessible for screen readers. This maintains good UX design while not compromising accessibility.

7. **Event Delegation and Setup Functions**: Creating a `setupInputListeners()` function to attach event listeners to all inputs taught me about organizing code for scalability and reusability.

### Code I'm Proud Of

```javascript
function setupInputListeners() {
  const input = document.querySelectorAll("input");

  input.forEach((input) => {
    input.addEventListener("input", () => {
      const existingError = input.nextElementSibling;

      if (existingError && existingError.classList.contains("error")) {
        existingError.remove();
      }
    });
  });
}
```

**Why this matters**: This function sets up real-time feedback for all form inputs. As soon as users start typing after seeing an error, the error message disappears. This creates a smooth, forgiving user experience. The function is reusable and automatically works with any number of inputs.

```javascript
function isEmailValid(email){
    const isValid = email.checkValidity();

    if(!isValid){
        setError(email, "Looks like this is not an email");
        return false;
    }
    return true;
}
```

**Why this matters**: Instead of writing complex regex patterns for email validation, I'm using the browser's built-in `checkValidity()` method. This is more reliable because it follows the HTML5 email validation standards. It's a perfect example of leveraging what's already available rather than reinventing the wheel.

```css
input:has(+ .error) {
  border: 1.5px solid var(--color--red--400);
  background-image: url('./images/icon-error.svg');
  background-repeat: no-repeat;
  background-position: 15px center;
  background-size: 20px 20px;
  padding-left: 40px;
}
```

**Why this matters**: The `:has()` selector is a game-changer! This single CSS rule automatically styles any input that has an error message next to it - no JavaScript class manipulation needed. I had read about this selector earlier and was excited to finally use it in a real project.

## 📄 What's Next

- [ ] **Recreate this project using React** - Apply these validation concepts with React hooks and state management
- [ ] Add password strength indicator with visual feedback
- [ ] Implement more advanced validation rules (minimum length, special characters)
- [ ] Add success states and messages after successful submission
- [ ] Create custom regex patterns for phone number validation
- [ ] Add "show/hide password" toggle functionality
- [ ] Implement multi-step form validation

## 🚦 Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/form-validation.git

# Navigate to folder
cd form-validation

# Open in browser
# Just double-click index.html or use Live Server in VS Code
```

## 📂 File Structure

```
form-validation/
├── images/              # Icons and background images
│   ├── bg-intro-desktop.png
│   ├── bg-intro-mobile.png
│   ├── icon-error.svg
│   └── favicon-32x32.png
├── index.html           # Form structure with semantic HTML  ──
├── style.css            # Responsive styling with CSS variables ├
├── script.js            # Validation logic and event handlers
└── README.md
```

## 📚 Resources That Helped Me

- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Read this before starting the project
- [MDN - checkValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/checkValidity) - Understanding browser validation
- [MDN - :has() Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) - Learning about this powerful CSS selector
- [Frontend Mentor](https://www.frontendmentor.io) - For the design challenge and specifications
- [MDN - Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation) - Deep dive into HTML5 validation

## 🤔 Reflections

**Compared to My Other Projects**: This was a fairly easy project compared to others I've built. The concepts weren't new - I've worked with event listeners, DOM manipulation, and CSS styling many times before. What was new was applying these skills specifically to form validation.

**What Got Easier**: Reading documentation and implementing concepts independently has become second nature. I didn't need help from AI or tutorials during this build. I just read the MDN docs, understood the concepts, and built it. That's real progress.

**The Power of Preparation**: This project taught me that **reading documentation before coding is a superpower**. Because I had studied form validation concepts beforehand, implementation was straightforward. There's no substitute for understanding the fundamentals.

**Confidence Boost**: Completing this project entirely on my own felt amazing. It's one thing to build projects with help; it's another to do it independently. This is when I started feeling like a real programmer - not because the project was complex, but because I handled it confidently from start to finish.

**What's Still Challenging**: Nothing specific with this project, but I'm excited to see how form validation works in React. Managing form state and validation in a component-based architecture will be an interesting challenge.

**Next Steps**: I'm planning to recreate this form using React to understand how validation works with hooks like `useState` and how to handle form state in a more complex application. The goal is to take what I've learned here and apply it in a modern framework context.

## 💡 Key Takeaway

**This project proved that consistent learning pays off.** Reading documentation, even when you're not actively building something, prepares you for when you need that knowledge. The time I spent on MDN docs learning about `checkValidity()`, form validation, and the `:has()` selector made this project smooth and enjoyable.

More importantly, **building projects without external help is a milestone.** It's when you truly know you're growing as a developer. This project might have been relatively simple, but completing it independently was a significant confidence boost.

---

**Frontend Practice Project** | Frontend Mentor Challenge | 2026

*Built independently with 💪 and 📚 by Akinzomedia*

---

## 🙏 Acknowledgments

- **Frontend Mentor** for providing well-designed challenges that help developers practice real-world skills
- **MDN Web Docs** for comprehensive, reliable documentation that every developer should read
- **Myself** - for putting in the work, reading the docs, and building this independently! 🎉

*Note: This readme was rewritten using Ai.*