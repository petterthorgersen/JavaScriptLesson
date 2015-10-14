# Intro - Hello world
This task will get you started learning the basics of JavaScript in the browser.

You will learn how to:
 1. Set up your development environment
 2. Create "Hello world"
 3. Make your code interact with the webpage

## 1. Dev environment

* Open `intro.html` both in your browser and your code editor. Make sure changes to the HTML file are reflected in the browser.

## 2. "Hello world"

To make our example webpage run JavaScript we need to add a `<script>` element. 
* Add the following `<script>` element just before the closing `</body>` element:

```html
<script>
  alert('Hello world!');
</script>
```

* Refresh your page (hit `F5` or `CTRL+R`/ `CMD+R`). 

The result should be a box popping up saying 'Hello world!'. How exciting!

## 3. Interacting with the DOM

All browsers supply an API called the DOM (Document Object Model). The DOM API gives developers access to manipule the webpage markup dynamically via a tree structure called the _DOM tree_. Each HTML element in the webpage is represented as a node in the tree.

We are going to use a DOM API method called `querySelector` to replace some text in the webpage. 

* Replace the contents of the `<script>` element we created in the last example with the following code:

```javascript
var paragraph = document.querySelector('p');
paragraph.innerHTML = 'Hello Nerdschool';
```

Make sure your `<script>` element is located below the `<p>` (paragraph) element.

* Refresh your page. The result should be the text 'Hello Nerdschool' displaying in the paragraph below the heading.

* Try replacing the text with something else, then refreshing the page.

### What happened here?

In the first line we query the DOM via the `document` object, passing in a _selector_ to find the first `<p>` element in the webpage. We then change the contents of the element by setting the `innerHTML` property.

## Optional task
* Try to insert a `<button>` element inside the `<p>` element.
