# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is the way we use javascript in HTML. One syntax difference bettween the two is jsx uses {} while HTML does not.

Researched answer: JSX, or JavaScript XML, is a syntax extension used in React for defining and rendering user interfaces. It allows developers to write HTML-like code within JavaScript, making it easier to create and manipulate UI elements. One key syntax difference between HTML and JSX is that in JSX, you must use className instead of class to define CSS classes for elements. This is because JSX is transpiled to JavaScript, and class is a reserved keyword in JavaScript, whereas className is used to avoid conflicts.

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package manager that is open soucre and developed to help facebook scale its app. It managers thousands of little reusable code snippets in order for the app to use them and have them organized properly. Files are added to the repository that you are currently working on.

Researched answer: Yarn is a popular package manager for JavaScript used to manage dependencies, improve package installation speed, and enhance consistency. When you run the yarn command in your terminal, it modifies the package.json and yarn.lock files in your project directory. package.json stores information about your project and its dependencies, while yarn.lock maintains a record of the exact versions of dependencies used in your project to ensure consistent installations across different environments. Additionally, running yarn may also create or modify the node_modules directory to manage installed packages.

3. What is the difference between state values and props in React?

Your answer: State values are stored in the state, while props are are things that are passed on between components and the app.

Researched answer:In React, both state and props are used to manage and pass data, but they serve distinct purposes. State is internal to a component and represents mutable data that the component can manage and change. It is typically used for data that can be modified within the component, often in response to user interactions or events. In contrast, props are external and immutable data passed to a component from its parent. They are used to configure and customize a component's behavior and appearance. While state allows a component to manage its own data, props facilitate data flow and communication between parent and child components in a React application.

4. What is the DOM?

Your answer: Dom is what the computer uses to display the ui/final end result to the user.

Researched answer: The DOM, or Document Object Model, is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree-like structure, where each element in the document is represented as a node. Developers can access and manipulate these nodes using programming languages like JavaScript. This allows dynamic interaction with web pages, enabling tasks such as adding, modifying, or deleting elements, as well as responding to user interactions like clicks and inputs. The DOM serves as a bridge between web content and scripts, facilitating the creation of interactive and dynamic web applications.

5. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: Div tags go across the whole page.

Researched answer: The <div> and <span> tags are both HTML elements used for styling and structuring content. The key difference is in their default behavior and purpose. <div> is a block-level element, typically used to group and style larger sections of content, creating distinct layout blocks. On the other hand, <span> is an inline element, designed to apply styles to smaller portions of text within a larger block, without causing line breaks. <div> affects the entire content block, while <span> targets specific inline elements or text snippets within a block.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects, which are instances of classes. It promotes the encapsulation of data and methods within objects, allowing for modular, reusable, and structured code. OOP principles include inheritance (where classes can inherit properties and methods from other classes), polymorphism (where objects can take on multiple forms), and encapsulation (data hiding to protect the internal state of objects). OOP aims to model real-world entities, making it easier to design, understand, and maintain complex systems, fostering code reusability and maintainability. Languages like Java, C++, and Python heavily use OOP concepts.

2. Ruby: Ruby is a high-level, dynamically typed programming language known for its simplicity and productivity. Created by Yukihiro Matsumoto in the mid-1990s, it focuses on human-readable syntax and aims to make programming enjoyable. Ruby is object-oriented and has a strong ecosystem of libraries and frameworks, particularly Ruby on Rails, a popular web application framework. It's versatile, used for web development, automation, and more, and is valued for its elegant code and community-driven development philosophy.

3. Ruby blocks: In Ruby, blocks are chunks of code that can be associated with method calls. They are often used for encapsulating behavior that can be passed as an argument to a method. Blocks are defined within do...end or {...} and can take parameters. They are commonly used for iterators like each, allowing concise and readable code. Blocks can capture and remember the surrounding context in which they were created, making them a powerful tool for creating flexible and reusable code. They are a fundamental feature of Ruby's expressive and elegant programming style.
