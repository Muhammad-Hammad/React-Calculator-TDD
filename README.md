## Simple-Calculator based on ReactJS with Test Driven Development


step1: npx create-react-app

Let's start coding with TDD approach.

step2: go to App.test.tsx and write initial test to check whether text "calculator" exist. 

ofcourse Test failed! so we include "calculator" text;

step3: now setting up components and project structure.

step4: writing tests in components/__test___/calculator.test.tsx

Note: all these test were added side by side while working on the functionality.

step5: building calculator components and screen component.

step6: creating input state and passing it to screen to display input and writing functions to concat numbers to that input state.

step7: Handling operators

step8: clear function.

step9: equal using eval but since it's not recommended and after searching a bit, found mathjs and its evaluate function which is better and handle exceptions better than eval function.

step10: adding CSS and styling a bit.