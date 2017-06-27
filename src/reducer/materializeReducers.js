export default function reducer(state={
  Navbar:{
    component: null,
  },
  Button:{
    component: null,
  },
  Breadcrumbs:{
    component: null,
  },
  Badges:{
    component: null,
  },
  Card:{
    component: null,
  },
  Chips:{
    component: null,
  },
  Collections:{
    component: null,
  },
  Footer:{
    component: null,
  },
  Form:{
    component: null,
  },
  Icon:{
    component: null,
  },
  Pagination:{
    component: null,
  },
  Preloader:{
    component: null,
  }
},action){

  switch(action.type){
    case "ADD_MATERIALIZE_NAVBAR" : {
      return {
        ...state,
        Navbar:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_NAVBAR" : {
      return {
        ...state,
        Navbar:action.data,
      }
    }
    case "ADD_MATERIALIZE_BUTTON" : {
      return {
        ...state,
        Button:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_BUTTON" : {
      return {
        ...state,
        Button:action.data,
      }
    }
    case "ADD_MATERIALIZE_BADGES" : {
      return {
        ...state,
        Badge:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_BADGES" : {
      return {
        ...state,
        Badge:action.data,
      }
    }
    case "ADD_MATERIALIZE_BREADCRUMBS" : {
      return {
        ...state,
        Breadcrumbs:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_BREADCRUMBS" : {
      return {
        ...state,
        Breadcrumbs:action.data,
      }
    }
    case "ADD_MATERIALIZE_CARD" : {
      return {
        ...state,
        Card:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_CARD" : {
      return {
        ...state,
        Card:action.data,
      }
    }
    case "ADD_MATERIALIZE_CHIPS" : {
      return {
        ...state,
        Chips:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_CHIPS" : {
      return {
        ...state,
        Chips:action.data,
      }
    } 
    case "ADD_MATERIALIZE_COLLECTIONS" : {
      return {
        ...state,
        Collections:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_COLLECTIONS" : {
      return {
        ...state,
        Collections:action.data,
      }
    }
    case "ADD_MATERIALIZE_FOOTER" : {
      return {
        ...state,
        Footer:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_FOOTER" : {
      return {
        ...state,
        Footer:action.data,
      }
    }
    case "ADD_MATERIALIZE_FORM" : {
      return {
        ...state,
        Form:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_FORM" : {
      return {
        ...state,
        Form:action.data,
      }
    }
    case "ADD_MATERIALIZE_ICON" : {
      return {
        ...state,
        Icon:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_ICON" : {
      return {
        ...state,
        Icon:action.data,
      }
    }
    case "ADD_MATERIALIZE_PAGINATION" : {
      return {
        ...state,
        Pagination:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_PAGINATION" : {
      return {
        ...state,
        Pagination:action.data,
      }
    }
    case "ADD_MATERIALIZE_PRELOADER" : {
      return {
        ...state,
        Preloader:action.data,
      }
    }
    case "REMOVE_MATERIALIZE_PRELOADER" : {
      return {
        ...state,
        Preloader:action.data,
      }
    }
  }
  return state;
}
