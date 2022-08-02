---
sidebar_position: 1
---

Props są zmiennymi które możemy przekazywać z komponentów nadrzędnych do podrzędnych.
Nie możemy ich modyfikować w komponentach podrzędnych. 


```jsx
export function App(props) {
  return (
    <div className='App'>
        <Book name="W pustyni i w puszczy" author="nieznany" ></Book>
    </div>
  );
}
```
Przykład przykazywania kiedy komponentem jest funkcja: 

```jsx
function Book({...props}) {
  return (
    <div>
      <h1>{props.author}</h1>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Book;
```

Oraz kiedy jest klasa. Tutaj należy zauważyć, że mimo iż to jest klasa która dziedziczy po Component nie musimy przekazywać props przez super(). Zostało to obsłużone domyślnie, przez co kod wygląda bardziej przejrzyście. Dodatkowo można użyć dekonstruktora: const {name, test} = this.props

```jsx
export default class Book extends Component {
  render(){
  return (
    <div>
      <h1>{this.props.author}</h1>
      <h1>{this.props.name}</h1>
    </div>
  );
}
}
``` 


