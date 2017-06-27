import React, { Component } from 'react';
import MaterializeNavBar from '../components/materialize/materializeNavBar';
import MaterializeButton from '../components/materialize/materializeButton';
import MaterializeBadges from '../components/materialize/materializeBadges';
import MaterializeBreadcrumbs from '../components/materialize/materializeBreadcrumbs';
import MaterializeCard from '../components/materialize/materializeCard';
import MaterializeChips from '../components/materialize/materializeChips';
import MaterializeCollections from '../components/materialize/materializeCollections';
import MaterializeFooter from '../components/materialize/materializeFooter';
import MaterializeForm from '../components/materialize/materializeForm';
import MaterializeIcon from '../components/materialize/materializeIcon';
import MaterializePagination from '../components/materialize/materializePagination';
import MaterializePreloader from '../components/materialize/materializePreloader';

export function addMaterializeNavBar(){
  return{
    type: "ADD_MATERIALIZE_NAVBAR",
    data:{
      component: <MaterializeNavBar />,
    }
  }
}
export function removeMaterializeNavBar(){
  return {
    type: "REMOVE_MATERIALIZE_NAVBAR",
    data:{
      component: null,
    }
  }
}
export function addMaterializeButton(){
  return{
    type: "ADD_MATERIALIZE_BUTTON",
    data:{
      component: <MaterializeButton />,
    }
  }
}
export function removeMaterializeButton(){
  return{
    type: "REMOVE_MATERIALIZE_BUTTON",
    data:{
      component: null,
    }
  }
}
export function addMaterializeBadges(){
  return{
    type: "ADD_MATERIALIZE_BADGES",
    data:{
      component: <MaterializeBadges />,
    }
  }
}
export function removeMaterializeBadges(){
  return{
    type: "REMOVE_MATERIALIZE_BADGES",
    data:{
      component: null,
    }
  }
}
export function addMaterializeBreadcrumbs(){
  return{
    type: "ADD_MATERIALIZE_BREADCRUMBS",
    data:{
      component: <MaterializeBreadcrumbs />,
    }
  }
}

export function removeMaterializeBreadcrumbs(){
  return{
    type: "REMOVE_MATERIALIZE_BREADCRUMBS",
    data:{
      component: null,
    }
  }
}
export function addMaterializeCard(){
  return{
    type: "ADD_MATERIALIZE_CARD",
    data:{
      component: <MaterializeCard />,
    }
  }
}
export function removeMaterializeCard(){
  return{
    type: "REMOVE_MATERIALIZE_CARD",
    data:{
      component: null,
    }
  }
}
export function addMaterializeChips(){
  return{
    type: "ADD_MATERIALIZE_CHIPS",
    data:{
      component: <MaterializeChips />,
    }
  }
}
export function removeMaterializeChips(){
  return{
    type: "REMOVE_MATERIALIZE_CHIPS",
    data:{
      component: null,
    }
  }
}
export function addMaterializeCollections(){
  return{
    type: "ADD_MATERIALIZE_COLLECTIONS",
    data:{
      component: <MaterializeCollections />,
    }
  }
}
export function removeMaterializeCollections(){
  return{
    type: "REMOVE_MATERIALIZE_COLLECTIONS",
    data:{
      component: null,
    }
  }
}
export function addMaterializeFooter(){
  return{
    type: "ADD_MATERIALIZE_FOOTER",
    data:{
      component: <MaterializeFooter />,
    }
  }
}
export function removeMaterializeFooter(){
  return{
    type: "REMOVE_MATERIALIZE_FOOTER",
    data:{
      component: null,
    }
  }
}
export function addMaterializeForm(){
  return{
    type: "ADD_MATERIALIZE_FORM",
    data:{
      component: <MaterializeForm />,
    }
  }
}
export function removeMaterializeForm(){
  return{
    type: "REMOVE_MATERIALIZE_FORM",
    data:{
      component: null,
    }
  }
}
export function addMaterializeIcon(){
  return{
    type: "ADD_MATERIALIZE_ICON",
    data:{
      component: <MaterializeIcon />,
    }
  }
}
export function removeMaterializeIcon(){
  return{
    type: "REMOVE_MATERIALIZE_ICON",
    data:{
      component: null,
    }
  }
}
export function addMaterializePagination(){
  return{
    type: "ADD_MATERIALIZE_PAGINATION",
    data:{
      component: <MaterializePagination />,
    }
  }
}
export function removeMaterializePagination(){
  return{
    type: "REMOVE_MATERIALIZE_PAGINATION",
    data:{
      component: null,
    }
  }
}
export function addMaterializePreloader(){
  return{
    type: "ADD_MATERIALIZE_PRELOADER",
    data:{
      component: <MaterializePreloader />,
    }
  }
}
export function removeMaterializePreloader(){
  return{
    type: "REMOVE_MATERIALIZE_PRELOADER",
    data:{
      component: null,
    }
  }
}