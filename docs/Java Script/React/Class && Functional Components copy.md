---
sidebar_position: 1
---

# Function component example:
```jsx 
import React from 'react';

// const App =() => możemy użyć arrow function or 'function'
function App(props) {
  return (
    <div className='App'>
    <h1>Hello World </h1>
    </div>
  );

export default App
```

W powyższym przykładzie mamy do czynienia z komponentem funkcyjnym. Jest on funkcją która przyjmuje zmienne (props)  i zwraca jsx.



# Class component example:
```jsx 
import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Map;

```

W tym przypadku tworzona jest class która dziedziczy Component. W celu zwrócenia jsx należy wykonać metodę render.

Na korzyść używania class przemawiały STATE które znacznie ułatwiają pracę. 
Funkcyjne komponenty także posiadają możliwość używania state dzięki hooks. Są to metody funkcyjne umożliwiające odczytać i zapisać wartość do zmiennej.

# Class state

```jsx
 class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      "imie":"test"
    }
  }

  render() {
    const {name} = this.state;
    return (
      <div>
        {name}
        {this.props.street}
      </div>
    );
  }
}
```
Poprzez konstruktor przekazywane są props do klasy z której dziedziczy (Components). Dalej do zmiennych przekazanych przez props możemy się odwołać używają kropki.

# Functional state
```jsx 
import React from 'react';

// const App =() => możemy użyć arrow function or 'function'
function App(props) {
    const [name, setName] = useSate("");
  return (
    <div className='App'>
    <h1>Hello World {name}</h1>
    <h1>Hello World {props.street}</h1>
    </div>
  );

export default App
```

Zamiast używania App(props) można użyć ({street}), można także dodać kolejne zmienne które przychodzą wraz z props lub użyć ...props które zrobi dekonstrukcję zmiennych.