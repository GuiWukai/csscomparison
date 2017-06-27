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
  Glyphicons:{
    component: null,
  },
  Image:{
    component: null,
  },
  Jumbotron:{
    component: null,
  },
  Labels:{
    component: null,
  },
  ListGroup:{
    component: null,
  },
  PageHeader:{
    component: null,
  },
  Pager:{
    component: null,
  },
  Pagination:{
    component: null,
  },
  Panel:{
    component: null,
  },
  Tables:{
    component: null,
  },
  Thumbnail:{
    component: null,
  }
},action){

  switch(action.type){
    case "ADD_BOOTSTRAP_NAVBAR" : {
      return {
        ...state,
        Navbar:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_NAVBAR" : {
      return {
        ...state,
        Navbar:action.data,
      }
    }
    case "ADD_BOOTSTRAP_BUTTON" : {
      return {
        ...state,
        Button:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_BUTTON" : {
      return {
        ...state,
        Button:action.data,
      }
    }
    case "ADD_BOOTSTRAP_BREADCRUMBS" : {
      return {
        ...state,
        Breadcrumbs:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_BREADCRUMBS" : {
      return {
        ...state,
        Breadcrumbs:action.data,
      }
    }
    case "ADD_BOOTSTRAP_GLYPHICONS" : {
      return {
        ...state,
        Glyphicons:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_GLYPHICONS" : {
      return {
        ...state,
        Glyphicons:action.data,
      }
    }
    case "ADD_BOOTSTRAP_IMAGE" : {
      return {
        ...state,
        Image:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_IMAGE" : {
      return {
        ...state,
        Image:action.data,
      }
    }
    case "ADD_BOOTSTRAP_JUMBOTRON" : {
      return {
        ...state,
        Jumbotron:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_JUMBOTRON" : {
      return {
        ...state,
        Jumbotron:action.data,
      }
    }
    case "ADD_BOOTSTRAP_LABELS" : {
      return {
        ...state,
        Labels:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_LABELS" : {
      return {
        ...state,
        Labels:action.data,
      }
    }
    case "ADD_BOOTSTRAP_LISTGROUP" : {
      return {
        ...state,
        ListGroup:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_LISTGROUP" : {
      return {
        ...state,
        ListGroup:action.data,
      }
    }
    case "ADD_BOOTSTRAP_PAGEHEADER" : {
      return {
        ...state,
        PageHeader:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_PAGEHEADER" : {
      return {
        ...state,
        PageHeader:action.data,
      }
    }
    case "ADD_BOOTSTRAP_PAGER" : {
      return {
        ...state,
        Pager:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_PAGER" : {
      return {
        ...state,
        Pager:action.data,
      }
    }
    case "ADD_BOOTSTRAP_PAGINATION" : {
      return {
        ...state,
        Pagination:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_PAGINATION" : {
      return {
        ...state,
        Pagination:action.data,
      }
    }
    case "ADD_BOOTSTRAP_PANEL" : {
      return {
        ...state,
        Panel:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_PANEL" : {
      return {
        ...state,
        Panel:action.data,
      }
    }
    case "ADD_BOOTSTRAP_TABLES" : {
      return {
        ...state,
        Tables:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_TABLES" : {
      return {
        ...state,
        Tables:action.data,
      }
    }
    case "ADD_BOOTSTRAP_THUMBNAIL" : {
      return {
        ...state,
        Thumbnail:action.data,
      }
    }
    case "REMOVE_BOOTSTRAP_THUMBNAIL" : {
      return {
        ...state,
        Thumbnail:action.data,
      }
    }
  }
  return state;
}