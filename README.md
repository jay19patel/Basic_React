# React Js 

- Single PAge
- part of multi pages
- UI library to make components
- componenets is a combination of HTML CSS JS 


### Create Create App
```js
npx create-react-app testapp
```
### Run React app
```js
npxm start  || yarn start
// yarn install
// Yarn is a package manager for JavaScript that helps manage project dependencies
//  Yarn provides a more efficient and reliable way to install, update, and manage dependencies in a project.
// run yarn init to create a package.json file if you don't already have one, and use commands like yarn add to install dependencies or yarn remove to uninstall them.
```

## All Steps 

### 1. Run App
- after creating react app delete unnecessary files 
- Manage all file and error solve and create custome page

### 2. Components.
- Components are reusable and self-contained building blocks in software development, often used in the context of user interface (UI) development. Components encapsulate a set of related functionality and visual elements, allowing them to be reused across different parts of an application.

- if we use any components  then first import them .
- if we create multi function in one components then need to custome export using => {} 
```js
import {test1,test2} from '/components/maintest'
```
- pass any values in function
```js
const HomePage = ({name}) => {
     return (
    <div>My Name Is {name}</div>
    
  )
}
//  Here name get from another components like name = " Jay"  => <HomePage name="jay"/>
```


- if we need repeat components then use map function and pass data in map peramiters
```js

data = ["Jay","Salman","Babita"]

{data.map((name,index) => (
          <HomePage name={name} key={index}/>
        ))}
```
- Refrence => HomePage.jsx


### 3. Events
- In React, events are a way to handle user interactions, such as clicking a button, typing in an input field, or hovering over an element. React provides a synthetic event system that normalizes the handling of events across different browsers.
- if we need any event when we click some button then print somthing then use onclick function 

```js
// Not Use
<button onClick={ console.log(" Im Clicked")}> Im BTN </button>

// bBut this is alredy print without clicking so use anonemuse function 
//  Use
<button onClick={()=> console.log(" Im Clicked")}> Im BTN </button>
```
- use function and pass only not call
- create seprate function and pass in onclick event ,so when we click btn then they call function using refrance name
- Refrence => EvenetPage.jsx

### 4. State, Hooks
##### State :
- In React, state is a JavaScript object that holds data that can change over time and influences the rendering of components. State allows you to manage and update data within a component, enabling dynamic and interactive user interfaces.

```js
const [number,setNumber]= useState(0);
//  Here number is a output value  => State Variable
//  setNumber is a set value where effect to number value => function thet chnage state
// usestate => default value
```

- chnage data seprately with all components copy,and chnage value dynamicly
- Where use Usestate => Where we need chnagiding data time ly then use usestate

### 5. Managing State
- if we need pasing data from another components to another components use pasing function systme
- in FormPage.jsx exmple
     - create Form
     - get onchnage function and get value of input fild 
     - cretae usestate and add new data in state varivale uisng setUser
     - need main root dataset where all data are store then, we pass main function into components and recive at other      
       components

```js
// main app
  function adduser(userdata){

    setuser([...user,userdata]);
  }
   <FormPage dataget={adduser}/>
//    form componentt
   const FormPage = ({dataget}) => {}
//  and use dataget to send new form data
```


### 6. UseEffect

- The useEffect hook in React is used to perform side effects in functional components. Side effects refer to any code that interacts with the outside world, such as fetching data, subscribing to events, or manipulating the DOM.

```js
useEffect(() => {},[edit])
// anty time edit are chnages then useeffect function are call
// jyare jyare edit chnage thase tyare ryare effect function run thase
```



### 7. Context API, useContect
- The Context API is a feature provided by React that allows you to manage global state and share data between components without the need for prop drilling (passing data through multiple levels of components).

- why use => bija ma su thatu ke koy data pass karva dar vakh te ek ma thi bija and bija mathi tija component ma pass karava pade je bo complex they jay so we use context api use kare to direct access kari sakay

```js
// Creating a context
const ContextAPI = createContext("Data is jay falanu dheknu")
// Consuming a context
const Contextnew = useContext(ContextAPI)
//  Use anywhere in any componenet while uisng this 


``
