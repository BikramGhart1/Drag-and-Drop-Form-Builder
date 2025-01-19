# Drag and Drop form builder- task c

# Features
1. Drag and Drop
2. Form Validation

# Technologies used
1. React
2. Dnd-kit/core
3. zod for form validation
4. Tailwind css

# Brief Discussion of What Logic I implemented
1. First of all I made a TextInput component where we can pass label, name, type of input element
(React memo is used here to avoid unnecessaty re rendering everytime, only re renders when props are changed)

2. In app component we keep track of various states like
   form data, dragged components and errors

3. we make components draggable and a div with form droppable with the dnd-kit

4. each draggable component will have its own id and with this id we will keep track of dropped components and render them in droppable div

5. for form validarion zod is used and errors are kept track in app which is passed as props to droppable and respectively conditional rendered as requirements with red text

# What else are left to scale?
1. I still havent make the site responsive to small devices
2. Yet to implement unit testing
3. Make the components rearranged even in form 
4. Add templates
5. Document the logics in detail

